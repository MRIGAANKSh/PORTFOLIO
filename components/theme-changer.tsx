import {
  ThemeTogglerButton,
  type ThemeTogglerButtonProps,
} from "@/components/animate-ui/components/buttons/theme-toggler";

interface ThemeTogglerProps {
  variant: ThemeTogglerButtonProps["variant"];
  size: ThemeTogglerButtonProps["size"];
  direction: ThemeTogglerButtonProps["direction"];
  system: boolean;
}

export default function ThemeToggler({
  variant,
  size,
  direction,
  system,
}: ThemeTogglerProps) {
  return (
    <ThemeTogglerButton
      variant={variant}
      size={size}
      direction={direction}
      modes={system ? ["light", "dark", "system"] : ["light", "dark"]}
    />
  );
}
