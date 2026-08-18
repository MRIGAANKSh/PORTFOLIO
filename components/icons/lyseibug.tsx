import Image from "next/image";
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function LyseibugIcon({ className }: IconProps) {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center rounded-md border bg-white grayscale group-hover:grayscale-0",
        className,
      )}
    >
      <Image
        src="/lyseibug.webp"
        alt="Lyseibug"
        width={28}
        height={28}
        className="size-7 object-contain"
      />
    </div>
  );
}