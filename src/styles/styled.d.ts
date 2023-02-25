import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        variables: {
            maxWidth: number;
        };
        colors: {
            white: string;
            black: string;

            primary: string;
            background: string;

            gray: string;
            gray80: string;
        };
    }
}
