import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden select-none",
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-white",
          "hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary-rgb)/0.5)]",
          "active:scale-[0.97] active:shadow-inner",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
          "before:absolute before:inset-0 before:opacity-0 before:bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,_transparent_60%)] hover:before:opacity-100 before:transition-opacity before:duration-500 before:h-[150%] before:w-[150%] before:top-[-25%] before:left-[-25%]",
        ],
        destructive: [
          "bg-destructive text-destructive-foreground",
          "hover:bg-destructive/90 hover:shadow-[0_0_20px_rgba(var(--destructive-rgb)/0.5)]",
          "active:scale-[0.97] active:shadow-inner",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
          "before:absolute before:inset-0 before:opacity-0 before:bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,_transparent_60%)] hover:before:opacity-100 before:transition-opacity before:duration-500 before:h-[150%] before:w-[150%] before:top-[-25%] before:left-[-25%]",
        ],
        outline: [
          "border border-input bg-background text-foreground",
          "hover:bg-accent hover:text-white hover:border-accent/50 hover:shadow-[0_0_15px_rgba(var(--accent-rgb)/0.25)]",
          "active:scale-[0.97] active:shadow-inner",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-accent/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
        ],
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80 hover:shadow-[0_0_20px_rgba(var(--secondary-rgb)/0.5)]",
          "active:scale-[0.97] active:shadow-inner",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
          "before:absolute before:inset-0 before:opacity-0 before:bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,_transparent_60%)] hover:before:opacity-100 before:transition-opacity before:duration-500 before:h-[150%] before:w-[150%] before:top-[-25%] before:left-[-25%]",
        ],
        ghost: [
          "text-foreground",
          "hover:bg-accent/50 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(var(--accent-rgb)/0.15)]",
          "active:scale-[0.97] active:shadow-inner",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-accent/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
        ],
        link: [
          "text-primary underline-offset-4",
          "hover:underline hover:text-primary/80",
          "active:text-primary/70",
          "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300",
        ],
        // New premium variants
        premium: [
          "bg-gradient-to-r from-violet-600 to-indigo-600 text-white",
          "hover:from-violet-700 hover:to-indigo-700 hover:shadow-[0_8px_25px_-5px_rgba(99,102,241,0.5)]",
          "hover:translate-y-[-2px]",
          "active:translate-y-[0px] active:shadow-[0_5px_15px_-3px_rgba(99,102,241,0.4)]",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
          "before:absolute before:inset-0 before:opacity-0 before:bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,_transparent_60%)] hover:before:opacity-100 before:transition-opacity before:duration-500 before:h-[150%] before:w-[150%] before:top-[-25%] before:left-[-25%]",
          "transition-all duration-500",
        ],
        neon: [
          "bg-black text-[#00ff99] border-2 border-[#00ff99]",
          "hover:bg-[#00ff99]/10 hover:shadow-[0_0_20px_rgba(0,255,153,0.5),inset_0_0_20px_rgba(0,255,153,0.3)]",
          "active:scale-[0.97] active:shadow-[0_0_10px_rgba(0,255,153,0.5),inset_0_0_10px_rgba(0,255,153,0.3)]",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-[#00ff99]/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
          "transition-all duration-300",
        ],
        glass: [
          "bg-white/10 backdrop-blur-md text-white border border-white/20",
          "hover:bg-white/20 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)]",
          "active:scale-[0.97] active:shadow-inner",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
          "transition-all duration-300",
        ],
        neomorphic: [
          "bg-[#e0e5ec] text-gray-700",
          "shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]",
          "hover:shadow-[6px_6px_10px_rgba(163,177,198,0.6),-6px_-6px_10px_rgba(255,255,255,0.5)]",
          "active:shadow-[inset_6px_6px_10px_rgba(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)]",
          "transition-all duration-300",
        ],
        sport: [
          "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
          "hover:from-emerald-600 hover:to-teal-600 hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)]",
          "hover:translate-y-[-2px]",
          "active:translate-y-[0px] active:shadow-[0_5px_15px_-3px_rgba(16,185,129,0.3)]",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-500 after:ease-in-out",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 before:translate-x-[-100%] hover:before:translate-x-[200%] hover:before:opacity-100 before:transition-all before:duration-700 before:delay-100 before:ease-in-out",
          "transition-all duration-500",
        ],
        threed: [
          "bg-blue-500 text-white",
          "transform-style-preserve-3d",
          "hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.5)]",
          "hover:translate-y-[-4px] hover:rotate-x-[-10deg]",
          "active:translate-y-[-2px] active:rotate-x-[-5deg] active:shadow-[0_5px_15px_-3px_rgba(59,130,246,0.4)]",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 after:translate-x-[-100%] hover:after:translate-x-[200%] hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out",
          "transition-all duration-300",
        ],
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
