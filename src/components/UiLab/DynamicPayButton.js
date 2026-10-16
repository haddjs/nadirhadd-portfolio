"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const CARDS = [
  {
    id: "visa",
    name: "Visa Business",
    number: "•••• 4242",
    expiry: "09/28",
    color: "from-blue-700 to-indigo-900",
    badge: "VISA",
  },
  {
    id: "mc",
    name: "Mastercard World",
    number: "•••• 8819",
    expiry: "12/29",
    color: "from-emerald-700 to-teal-950",
    badge: "MC",
  },
  {
    id: "apple",
    name: "Apple Cash Card",
    number: "•••• 1004",
    expiry: "01/30",
    color: "from-zinc-700 to-zinc-950",
    badge: "PAY",
  },
];

export default function DynamicPayButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCard, setSelectedCard] = useState(CARDS[0]);
  const [paymentStatus, setPaymentStatus] = useState("idle"); // idle | processing | complete

  const handlePay = () => {
    setPaymentStatus("processing");
    setTimeout(() => {
      setPaymentStatus("complete");
      setTimeout(() => {
        setPaymentStatus("idle");
        setIsExpanded(false);
      }, 1500);
    }, 1200);
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 min-h-[360px] select-none overflow-hidden">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          /* Closed Pill Button */
          <motion.button
            key="pill-btn"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsExpanded(true)}
            className="group relative flex items-center gap-4 rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3.5 text-xs font-display uppercase tracking-wider shadow-xl transition-all duration-300"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Quick Pay $49.00</span>
            <span className="h-4 w-px bg-white/20 dark:bg-black/20" />
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">
              Expand Wallet ↗
            </span>
          </motion.button>
        ) : (
          /* Expanded Wallet Module */
          <motion.div
            key="wallet-card"
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-sm rounded-2xl border border-black/15 dark:border-white/20 bg-background p-6 shadow-2xl"
          >
            {/* Wallet Header */}
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
              <span className="text-[11px] font-display uppercase tracking-wider text-ink-muted">
                Choose Payment Method
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-xs font-display text-ink-muted hover:text-foreground"
              >
                [ESC]
              </button>
            </div>

            {/* Draggable / Selectable Card Deck */}
            <div className="mt-5 space-y-2.5">
              {CARDS.map((card) => {
                const isActive = selectedCard.id === card.id;
                return (
                  <motion.div
                    key={card.id}
                    layout
                    onClick={() => setSelectedCard(card)}
                    whileHover={{ scale: 1.02 }}
                    className={`cursor-pointer rounded-xl p-3.5 transition-all text-white bg-gradient-to-r ${
                      card.color
                    } ${
                      isActive
                        ? "ring-2 ring-emerald-500 shadow-md scale-[1.02]"
                        : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-display">
                      <span>{card.name}</span>
                      <span className="font-bold">{card.badge}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between font-display text-sm tracking-wider">
                      <span>{card.number}</span>
                      <span className="text-[10px] opacity-75">
                        {card.expiry}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Total and Confirmation */}
            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-display text-ink-muted uppercase">
                  Total
                </p>
                <p className="font-display text-lg font-medium">$49.00 USD</p>
              </div>

              <button
                onClick={handlePay}
                disabled={paymentStatus !== "idle"}
                className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-xs font-display uppercase tracking-wider transition-all disabled:opacity-50"
              >
                {paymentStatus === "idle" && "Confirm & Pay"}
                {paymentStatus === "processing" && "Authorizing..."}
                {paymentStatus === "complete" && "✓ Done!"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
