import { useEffect } from 'react';
import { ValueAnimationTransition, useAnimate } from 'framer-motion';

interface UsePointProps {
    container?: React.RefObject<any>;
    transitionMove?: ValueAnimationTransition;
    transitionLeave?: ValueAnimationTransition;
}

export function useHoverAnimate<T extends HTMLElement>(
    options?: UsePointProps
): ReturnType<typeof useAnimate<T>> {
    const [scope, animate] = useAnimate<T>();

    useEffect(() => {
        const animateContainer = options?.container?.current ?? scope.current;

        const onMouseMove = (e: MouseEvent) => {
            const clientRect = scope.current.getBoundingClientRect();
            const x = e.clientX - clientRect.left - clientRect.width / 2;
            const y = e.clientY - clientRect.top - clientRect.height / 2;

            animate(
                animateContainer,
                { x: x / 8, y: y / 8 },
                options?.transitionMove
            );
        };

        const onMouseLeave = () => {
            animate(animateContainer, { x: 0, y: 0 }, options?.transitionLeave);
        };

        if (scope.current) {
            scope.current.addEventListener('mousemove', onMouseMove);
            scope.current.addEventListener('mouseleave', onMouseLeave);
        }

        return () => {
            if (scope.current) {
                scope.current.removeEventListener('mousemove', onMouseMove);
                scope.current.removeEventListener('mouseleave', onMouseLeave);
            }
        };
    }, [scope]);

    return [scope, animate];
}
