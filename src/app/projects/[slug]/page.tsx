import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AnimationProps } from 'framer-motion';

import { allProjects } from 'contentlayer/generated';

import {
    Container,
    Header,
    Description,
    Title,
    Preview,
    PreviewWrapper,
    ImageWrapper,
    Mdx,
} from './page.styled';
import Image from '@/components/Image/Image';

interface ParamsProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
    params,
}: ParamsProps): Promise<Metadata> {
    const project = allProjects.find((project) => project.slug === params.slug);
    if (!project) return notFound();

    return {
        title: project.title,
        openGraph: {
            title: project.title,
        },
        twitter: {
            title: project.title,
        },
    };
}

export default function Page({ params }: ParamsProps) {
    const project = allProjects.find((project) => project.slug === params.slug);
    if (!project) return notFound();

    const fadeIn: AnimationProps = {
        initial: {
            opacity: 0,
            y: 30,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
        transition: {
            duration: 1.3,
            ease: [0.2, 0.85, 0.25, 1],
        },
    };

    return (
        <Container>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(project.structuredData),
                }}
            />

            <Header {...fadeIn}>
                <Description>{project.description}</Description>
                <Title>{project.title}</Title>
            </Header>
            <Preview {...fadeIn} background={project.background}>
                <PreviewWrapper>
                    <ImageWrapper
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.5 }}
                    >
                        <Image src={project.preview} alt={project.title} fill />
                    </ImageWrapper>
                </PreviewWrapper>
            </Preview>
            <Mdx code={project.body.code} />
        </Container>
    );
}
