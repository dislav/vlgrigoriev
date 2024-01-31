import { useCallback, useEffect } from 'react';
import { ValueAnimationTransition, useAnimate } from 'framer-motion';

interface UsePointProps {
    transitionMove?: ValueAnimationTransition;
    transitionLeave?: ValueAnimationTransition;
}

export function useHoverAnimate<T extends HTMLElement>(
    elementRef: React.RefObject<any>,
    options?: UsePointProps
): ReturnType<typeof useAnimate<T>> {
    const [scope, animate] = useAnimate<T>();

    const onMouseMove = useCallback(
        (e: MouseEvent) => {
            const clientRect = scope.current.getBoundingClientRect();
            const x = e.clientX - clientRect.left - clientRect.width / 2;
            const y = e.clientY - clientRect.top - clientRect.height / 2;

            animate(
                elementRef.current,
                { x: x / 10, y: y / 10 },
                options?.transitionMove
            );
        },
        [elementRef, animate, options?.transitionMove]
    );

    const onMouseLeave = useCallback(() => {
        animate(elementRef.current, { x: 0, y: 0 }, options?.transitionLeave);
    }, [elementRef, animate, options?.transitionLeave]);

    useEffect(() => {
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
