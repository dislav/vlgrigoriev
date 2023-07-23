import { useEffect, useState } from 'react';
import {
    animate,
    AnimationPlaybackControls,
    ValueAnimationTransition,
} from 'framer-motion';

interface UseScrollToProps {
    offset?: (() => number) | number;
    transition?: ValueAnimationTransition;
}

export function useScrollTo(options?: UseScrollToProps) {
    const [animation, setAnimation] = useState<AnimationPlaybackControls>();

    useEffect(() => {
        const stopAnimation = () => {
            animation?.stop();
            setAnimation(undefined);
        };

        if (animation) {
            window.addEventListener('wheel', stopAnimation);
            window.addEventListener('touchmove', stopAnimation);
        }

        return () => {
            window.removeEventListener('wheel', stopAnimation);
            window.removeEventListener('touchmove', stopAnimation);
        };
    }, [animation]);

    const onScrollTo =
        (id: string) => (e?: React.MouseEvent<HTMLAnchorElement>) => {
            e?.stopPropagation();
            e?.preventDefault();

            const target = document.getElementById(id);

            if (target) {
                const top = target.getBoundingClientRect().top;
                const scrollY = window.scrollY;

                const offset = options?.offset
                    ? typeof options.offset === 'function'
                        ? options.offset()
                        : options.offset
                    : 0;

                const offsetTop = top + scrollY + offset;

                setAnimation(
                    animate(scrollY, offsetTop, {
                        ...(options?.transition ?? {}),
                        onComplete: () => {
                            setAnimation(undefined);
                            options?.transition?.onComplete?.();
                        },
                        onUpdate: (latest) => {
                            window.scrollTo(0, latest);
                            options?.transition?.onUpdate?.(latest);
                        },
                    })
                );
            }
        };

    const registerAnchor = (
        id: string
    ): React.ComponentPropsWithoutRef<'a'> => {
        return {
            href: `/#${id}`,
            onClick: onScrollTo(id),
        };
    };

    return {
        onScrollTo,
        registerAnchor,
    };
}
