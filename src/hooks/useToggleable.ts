import { useState } from 'react';

export const useToggleable = (state = false) => {
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
};
