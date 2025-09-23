"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/state/app-store";

export default function ThemeWatcher() {
  const { state } = useAppStore();

  useEffect(() => {
    const root = document.documentElement;
   const body = document.body;

   const setMode = (mode: "system" | "light" | "dark") => {
     const isDark =
       mode === "dark" ||
       (mode === "system" &&
         window.matchMedia("(prefers-color-scheme: dark)").matches);

     // Toggle on BOTH html and body so dark variants always pick up
     root.classList.toggle("dark", isDark);
     body.classList.toggle("dark", isDark);
     // Optional: easy debugging / theming hooks
     root.setAttribute("data-theme", isDark ? "dark" : "light");
   };
   // Apply immediately on mount / change
   setMode(state.profile.theme);

   // Keep in sync with the OS only when "system"
   if (state.profile.theme === "system") {
     const mm = window.matchMedia("(prefers-color-scheme: dark)");
     const onChange = () => setMode("system");
     mm.addEventListener("change", onChange);
     return () => mm.removeEventListener("change", onChange);
   }}, [state.profile.theme]);
  return null;
}
