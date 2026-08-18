"use client";
import { createContext, useContext, useState, useEffect } from "react";

const PreloaderContext = createContext<{ done: boolean } | null>(null);
export const usePreloader = () => {
  const ctx = useContext(PreloaderContext);
  if (!ctx) throw new Error("usePreloader must be used within PreloaderProvider");
  return ctx;
};

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <PreloaderContext.Provider value={{ done }}>
      {children}
    </PreloaderContext.Provider>
  );
}
