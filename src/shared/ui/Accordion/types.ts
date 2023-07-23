export interface AccordionProps {
    className?: string;
    header: React.ReactNode;
    children: React.ReactNode;
    expanded: boolean;
    onClick: (isExpended: boolean) => void;
}
