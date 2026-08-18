"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "./preloader-context";
import { siteConfig } from "@/lib/constants";

export function Preloader() {
  const { done } = usePreloader();

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <motion.img
            layoutId="avatar"
            src={siteConfig.avatarUrl}
            alt=""
            className="rounded-full!"
            animate={{ scale: [1, 1.08, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 80, height: 80, borderRadius: "50%" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
