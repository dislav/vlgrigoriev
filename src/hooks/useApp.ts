import { useContext } from 'react';

import { AppContext } from '@/app/app-provider';

export function useApp() {
    return useContext(AppContext);
}
