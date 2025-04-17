'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type AnimationType = "fade-in" | "fade-in-up" | "scale-in";

interface ScrollAnimationWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}


// Map animation type to actual class - as backup
const animationClasses = {
  "fade-in": "animate-fade-in",
  "fade-in-up": "animate-fade-in-up",
  "scale-in": "animate-scale-in"
};

export function ScrollAnimationWrapper({
  children,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  className,
  once = true,
  ...props
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: once,
  });

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `transform 0.5s ease-out ${delay}ms, opacity 0.5s ease-out ${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case "fade-in-up":
          return {
            ...baseStyles,
            transform: 'translateY(30px)',
          };
        case "scale-in":
          return {
            ...baseStyles,
            transform: 'scale(0.9)',
          };
        case "fade-in":
        default:
          return baseStyles;
      }
    }

    return {
      ...baseStyles,
      transform: 'translateY(0) scale(1)',
    };
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible && animationClasses[animation],
        className
      )}
      style={{
        ...getAnimationStyles(),
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
} 