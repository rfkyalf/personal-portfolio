'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type MotionElementProps<T extends keyof JSX.IntrinsicElements> =
  HTMLMotionProps<T> & {
    as?: T;
  };

const MotionElement = React.forwardRef<
  HTMLElement,
  MotionElementProps<keyof JSX.IntrinsicElements>
>(function MotionElement({ as: Component = 'div', children, ...props }, ref) {
  const MotionComponent = motion(Component);
  return (
    <MotionComponent ref={ref} {...props}>
      {children}
    </MotionComponent>
  );
});

export { MotionElement };
