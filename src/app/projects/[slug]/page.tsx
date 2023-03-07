import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AnimationProps } from 'framer-motion';

import { allProjects } from 'contentlayer/generated';

import { Container, Header, Title, Preview, Mdx } from './page.styled';

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
            delay: 0.15,
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
                <Title>{project.title}</Title>
            </Header>
            <Preview {...fadeIn} background={project.previewBackground}>
                <Image
                    src={project.preview}
                    alt={project.title}
                    width={1240}
                    height={600}
                />
            </Preview>
            <Mdx code={project.body.code} />
        </Container>
    );
}
