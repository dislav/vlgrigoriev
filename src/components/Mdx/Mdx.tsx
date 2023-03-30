import { useMDXComponent } from 'next-contentlayer/hooks';

import { Container, Image, SectionContent } from './Mdx.styled';
import Section from '@/components/Mdx/Section/Section';
import TwoImages from '@/components/Mdx/TwoImages/TwoImages';

const components = {
    Image,
    Section,
    SectionContent,
    TwoImages,
};

interface MdxProps {
    className?: string;
    code: string;
}

export default function Mdx({ className, code }: MdxProps) {
    const MDXContent = useMDXComponent(code);

    return (
        <Container className={className}>
            <MDXContent components={components} />
        </Container>
    );
}
