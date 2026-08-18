import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";

export function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="underline underline-offset-3 text-foreground/80">
      {children}
    </span>
  );
}

export function HoverText({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span className="underline cursor-help underline-offset-3 text-foreground/80">
          {text}
        </span>
      </TooltipTrigger>
      <TooltipContent>{children}</TooltipContent>
    </Tooltip>
  );
}
