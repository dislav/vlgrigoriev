import { useEffect, useState } from 'react';

import { useToggleable } from '@/hooks/useToggleable';

export function usePoint(container: React.RefObject<HTMLElement> | undefined) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const {
        isOpen: isHover,
        onOpen: onHover,
        onClose: onUnHover,
    } = useToggleable();

    useEffect(() => {
        if (!container?.current) return;

        const onMouseMove = (e: MouseEvent) => {
            onHover();

            const rect = (
                e.target as HTMLAnchorElement
            ).getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            setX(x);
            setY(y);
        };

        const onMouseLeave = () => {
            onUnHover();
            setX(0);
            setY(0);
        };

        container.current.addEventListener('mousemove', onMouseMove);
        container.current.addEventListener('mouseleave', onMouseLeave);

        return () => {
            container?.current?.removeEventListener('mousemove', onMouseMove);
            container?.current?.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return { x, y, isHover };
}
