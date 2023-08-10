import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';

import { Container } from './Mdx.styled';
import { Image, Paragraph, Section } from './ui';

const components: MDXComponents = {
    Image,
    Paragraph,
    Section,
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
