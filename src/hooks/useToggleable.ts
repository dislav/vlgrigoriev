import { useState } from 'react';

export function useToggleable(state = false) {
    const [isOpen, setIsOpen] = useState(state);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const onToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    return { isOpen, setIsOpen, onOpen, onClose, onToggle };
}
