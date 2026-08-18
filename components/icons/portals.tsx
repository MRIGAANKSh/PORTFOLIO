import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function PortalsIcon({ className }: IconProps) {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center rounded-md border grayscale group-hover:grayscale-0",
        className,
      )}
    >
      <svg
        className="size-7 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="3.187 1.284 34.857 31.566"
      >
        <path
          d="M14.627 20.412c.731-1.315 2.621-1.317 3.355-.003l1.833 3.282c.424.76.425 1.686.003 2.446l-2.655 4.783a3.66 3.66 0 1 1-6.399-3.553l3.863-6.955Z"
          fill="url(#portals-0)"
        ></path>
        <path
          d="M3.19 16.248a3.658 3.658 0 0 1 3.82-3.504l4.995.226a3.36 3.36 0 0 1 2.784 1.72 3.358 3.358 0 0 1 .003 3.271 4.43 4.43 0 0 1-4.073 2.275l-4.039-.183a3.658 3.658 0 0 1-3.49-3.805Z"
          fill="url(#portals-1)"
        ></path>
        <path
          d="M26.507 20.375c-1.503.067-2.496-1.541-1.762-2.854l1.833-3.283a2.514 2.514 0 0 1 2.08-1.285l5.465-.248a3.66 3.66 0 1 1 .332 7.31l-7.948.36Z"
          fill="url(#portals-2)"
        ></path>
        <path
          d="M28.961 32.298a3.658 3.658 0 0 1-4.987-1.414l-2.428-4.37a3.36 3.36 0 0 1 .006-3.274 3.358 3.358 0 0 1 2.782-1.718 4.43 4.43 0 0 1 4.073 2.274l1.963 3.535a3.658 3.658 0 0 1-1.409 4.967Z"
          fill="url(#portals-3)"
        ></path>
        <path
          d="M20.606 9.861c.792 1.28-.128 2.93-1.633 2.93h-3.76c-.87 0-1.678-.45-2.135-1.19l-2.882-4.65a3.66 3.66 0 1 1 6.221-3.853l4.189 6.763Z"
          fill="url(#portals-4)"
        ></path>
        <path
          d="M29.819 1.906a3.659 3.659 0 0 1 1.196 5.044l-2.632 4.25a3.36 3.36 0 0 1-2.86 1.592c-1.163 0-2.245-.601-2.857-1.592a4.43 4.43 0 0 1 0-4.665l2.128-3.437a3.659 3.659 0 0 1 5.024-1.192Z"
          fill="url(#portals-5)"
        ></path>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="portals-0"
            x1="8.585"
            x2="19.753"
            y1="29.818"
            y2="23.581"
          >
            <stop stopColor="#7FE89C"></stop>
            <stop offset="1" stopColor="#31B158"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="portals-1"
            x1="4.569"
            x2="15.569"
            y1="16.5"
            y2="18"
          >
            <stop stopColor="#5E53F5"></stop>
            <stop offset="1" stopColor="#786FE8"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="portals-2"
            x1="36.069"
            x2="23.569"
            y1="21"
            y2="15.5"
          >
            <stop offset="0.383" stopColor="#43CF6A"></stop>
            <stop offset="1" stopColor="#268F46"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="portals-3"
            x1="31.958"
            x2="20.79"
            y1="30.841"
            y2="24.604"
          >
            <stop stopColor="#5E53F5"></stop>
            <stop offset="1" stopColor="#7970F7"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="portals-4"
            x1="15.34"
            x2="15.34"
            y1="0"
            y2="12.792"
          >
            <stop stopColor="#7FE89C"></stop>
            <stop offset="1" stopColor="#36BB5B"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="portals-5"
            x1="26.569"
            x2="21.069"
            y1="3.5"
            y2="18"
          >
            <stop stopColor="#5E53F5"></stop>
            <stop offset="1" stopColor="#7970F7"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
