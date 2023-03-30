'use client';

import { MotionConfig, MotionConfigProps } from 'framer-motion';

export default function MotionProvider({
    children,
    ...props
}: MotionConfigProps) {
    return <MotionConfig {...props}>{children}</MotionConfig>;
}
