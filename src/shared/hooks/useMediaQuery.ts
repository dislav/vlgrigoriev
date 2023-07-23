import { useEffect, useState } from 'react';

export interface MediaQueryOptions {
    minWidth?: number;
    maxWidth?: number;
}

function getQuery(options: MediaQueryOptions): string {
    let query = '';

    if (options.minWidth) {
        query = `(min-width: ${options.minWidth}px)`;
    } else if (options.maxWidth) {
        query = `(max-width: ${options.maxWidth}px)`;
    }

    return query;
}

function useMatches(query: string): boolean {
    const [matches, setMatches] = useState(
        typeof matchMedia !== 'undefined' ? matchMedia(query).matches : true
    );

    useEffect(() => {
        const media = matchMedia(query);

        const onChangeMedia = () => {
            setMatches(media!.matches);
        };

        media.addEventListener('change', onChangeMedia);

        return () => media.removeEventListener('change', onChangeMedia);
    }, [query]);

    return matches;
}

export function useMediaQuery(options: MediaQueryOptions) {
    const query = getQuery(options);

    if (!query) {
        throw new Error('Invalid or missing MediaQuery');
    }

    return useMatches(query);
}
