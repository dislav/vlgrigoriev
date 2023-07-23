import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';

import { Container, SectionContent } from './Mdx.styled';
import { Section } from '../Section';
import { TwoImages } from '../TwoImages';

const components: MDXComponents = {
    // @ts-ignore
    Image,
    SectionContent,
    Section,
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
