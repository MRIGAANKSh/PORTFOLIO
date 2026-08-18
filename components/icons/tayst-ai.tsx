import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function TaystAIIcon({ className }: IconProps) {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center rounded-md border grayscale group-hover:grayscale-0",
        className,
      )}
    >
      <svg
        className="size-7 shrink-0"
        viewBox="0 0 224 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83.1922 159.553V224H139.982V154.235L152.692 148.529C162.226 144.25 170.666 138.082 177.376 130.514C182.174 125.102 186.045 119.01 188.81 112.502C193.392 101.715 194.866 90.017 193.086 78.5486L189.006 52.2458L184.637 19.7095L155.514 24.7151L150.66 88.5363L130.76 96.0447L135.128 0L106.005 5.00559L90.4729 108.246L68.6307 96.0447V74.771L82.7068 13.7654L55.04 8.75978L37.9447 57.5563C33.5048 70.2297 30.7352 83.4312 29.7065 96.8251C29.1275 104.363 30.1874 111.932 32.824 119.087L34.8249 124.517C36.9398 130.257 40.6342 135.392 45.547 139.422C47.6624 141.158 49.9815 142.67 52.4613 143.93L83.1922 159.553Z"
          fill="url(#tayst-ai-gradient)"
        />
        <defs>
          <linearGradient
            id="tayst-ai-gradient"
            x1="193.819"
            y1="17.7333"
            x2="7.06161"
            y2="180.453"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#209C64" />
            <stop offset="1" stopColor="#12603D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
