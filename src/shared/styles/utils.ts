export enum Breakpoint {
    SM = 640,
    MD = 768,
    LG = 1024,
    XL = 1280,
    XXL = 1536,
}

export const up = (breakpoint: Breakpoint) => {
    return `@media (min-width: ${breakpoint}px)`;
};
