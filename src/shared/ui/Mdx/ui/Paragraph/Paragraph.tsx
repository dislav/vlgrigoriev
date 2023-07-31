import { WithClassName } from '@/shared/types';
import { Container } from './Paragraph.styled';

interface ParagraphProps {
    children: React.ReactNode;
}

export default function Paragraph({
    className,
    children,
}: WithClassName<ParagraphProps>) {
    return <Container className={className}>{children}</Container>;
}
