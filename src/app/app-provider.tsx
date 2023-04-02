'use client';

import { createContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface AppContextProps {
    introVisible: boolean;
    setIntroVisible: (visible: boolean) => void;
}

interface AppProviderProps {
    children: React.ReactNode;
}

const defaultContext: AppContextProps = {
    introVisible: true,
    setIntroVisible: () => {},
};

export const AppContext = createContext<AppContextProps>(defaultContext);

export default function AppProvider({ children }: AppProviderProps) {
    const pathname = usePathname();

    const [introVisible, setIntroVisible] = useState(
        defaultContext.introVisible
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        setIntroVisible(pathname === '/');
    }, [pathname]);

    const value: AppContextProps = {
        ...defaultContext,
        introVisible,
        setIntroVisible,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
