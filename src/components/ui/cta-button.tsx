import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "gradient-hero text-primary-foreground hover:shadow-elegant",
        accent: "gradient-accent text-accent-foreground hover:shadow-glow",
        premium: "gradient-premium text-accent-foreground shadow-glow hover:shadow-elegant border-2 border-accent/30",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground",
        muted: "bg-muted/50 text-muted-foreground border border-muted-foreground/30 hover:bg-muted hover:text-foreground opacity-60",
      },
      size: {
        default: "h-10 px-6 py-2 md:h-12 md:px-8 md:py-3",
        sm: "h-9 px-4 py-2 text-sm md:h-10 md:px-6 md:py-2.5 md:text-base",
        lg: "h-12 px-8 py-3 md:h-14 md:px-10 md:py-4 md:text-xl",
        xl: "h-14 px-10 py-4 text-lg md:h-16 md:px-12 md:py-5 md:text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean;
  pulse?: boolean;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, pulse, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          ctaButtonVariants({ variant, size, className }),
          pulse && "animate-pulse"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
CTAButton.displayName = "CTAButton";

export { CTAButton, ctaButtonVariants };