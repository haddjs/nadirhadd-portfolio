"use client";

import { easeOut } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export const WORK_IRIS_STORAGE_KEY = "work-iris-transition";

const COVER_MS = 550;
const REVEAL_MS = 550;

const WorkTransitionContext = createContext(null);

function getIrisSize() {
  return Math.ceil(Math.hypot(window.innerWidth, window.innerHeight) * 2.2);
}

export function WorkTransitionProvider({ children }) {
  const router = useRouter();
  const timers = useRef([]);
  const busy = useRef(false);

  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [scale, setScale] = useState(0);
  const [initialScale, setInitialScale] = useState(0);
  const [color, setColor] = useState("#00081f");
  const [irisSize, setIrisSize] = useState(0);
  const [originPx, setOriginPx] = useState({ x: 0, y: 0 });

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const schedule = useCallback((fn, ms) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    setMounted(true);

    try {
      const raw = sessionStorage.getItem(WORK_IRIS_STORAGE_KEY);
      if (!raw) return;
      sessionStorage.removeItem(WORK_IRIS_STORAGE_KEY);

      const pending = JSON.parse(raw);
      const size = getIrisSize();

      busy.current = true;
      setColor(pending.color);
      setOriginPx(pending.originPx);
      setIrisSize(size);
      setInitialScale(1);
      setScale(1);
      setActive(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setScale(0);
          schedule(() => {
            setActive(false);
            busy.current = false;
          }, REVEAL_MS);
        });
      });
    } catch {
      // ignore bad storage
    }

    return clearTimers;
  }, [clearTimers, schedule]);

  const navigateToWork = useCallback(
    (href, event, nextColor = "#00081f") => {
      if (busy.current) return;

      event.preventDefault();
      event.stopPropagation();

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        router.push(href);
        return;
      }

      busy.current = true;
      clearTimers();

      const nextOrigin = { x: event.clientX, y: event.clientY };
      const size = getIrisSize();

      setColor(nextColor);
      setOriginPx(nextOrigin);
      setIrisSize(size);
      setInitialScale(0);
      setScale(0);
      setActive(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setScale(1));
      });

      sessionStorage.setItem(
        WORK_IRIS_STORAGE_KEY,
        JSON.stringify({ originPx: nextOrigin, color: nextColor }),
      );

      schedule(() => {
        router.push(href);

        schedule(() => {
          setInitialScale(1);
          setScale(0);
          schedule(() => {
            setActive(false);
            busy.current = false;
            sessionStorage.removeItem(WORK_IRIS_STORAGE_KEY);
          }, REVEAL_MS);
        }, 60);
      }, COVER_MS);
    },
    [clearTimers, router, schedule],
  );

  const overlay =
    mounted &&
    createPortal(
      <AnimatePresence>
        {active && (
          <div
            key="work-iris-overlay"
            aria-hidden
            className="pointer-events-auto fixed inset-0 z-[10000] overflow-hidden"
          >
            <motion.div
              className="absolute rounded-full"
              style={{
                backgroundColor: color,
                width: irisSize,
                height: irisSize,
                left: originPx.x - irisSize / 2,
                top: originPx.y - irisSize / 2,
                willChange: "transform",
              }}
              initial={{ scale: initialScale }}
              animate={{ scale }}
              transition={{
                duration: (scale > initialScale ? COVER_MS : REVEAL_MS) / 1000,
                ease: easeOut,
              }}
            />
          </div>
        )}
      </AnimatePresence>,
      document.body,
    );

  const value = useMemo(
    () => ({
      navigateToWork,
      isPending: active,
      isTransitioning: active,
    }),
    [navigateToWork, active],
  );

  return (
    <WorkTransitionContext.Provider value={value}>
      {children}
      {overlay}
    </WorkTransitionContext.Provider>
  );
}

export function useWorkTransition() {
  const context = useContext(WorkTransitionContext);
  if (!context) {
    throw new Error(
      "useWorkTransition must be used within WorkTransitionProvider",
    );
  }
  return context;
}
