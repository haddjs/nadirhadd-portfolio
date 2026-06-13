"use client";

import { Button } from "@mui/material";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import CardView from "./CardView";
import JsonEditor from "./JsonEditor";

const Hero = ({ name, role, bio, profile_picture }) => {
  const [editorToggle, setEditorToggle] = useState(false);
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("rezise", handleResize);
  }, []);
  return (
    <>
      <div className="flex gap-3">
        <h1 className="text-2xl md:text-5xl font-semibold text-center md:text-left">
          About
        </h1>
        <Button
          variant="contained"
          onClick={() => setEditorToggle(!editorToggle)}
        >
          <Terminal />
        </Button>
      </div>

      <div className="flex items-start justify-center my-5 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-10">
          <div className="flex justify-center md:justify-end">
            {editorToggle && <JsonEditor bio={bio} name={name} role={role} />}
            <CardView profile_picture={profile_picture} isMd={isMd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
