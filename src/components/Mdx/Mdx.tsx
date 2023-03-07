import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Container, Content } from './Mdx.styled';
import Section from '@/components/Mdx/Section/Section';

const components = {
    Image,
    Section,
    Content,
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
