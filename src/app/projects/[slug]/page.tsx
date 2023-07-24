import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Transition } from 'framer-motion';

import MotionConfig from '@/app/motion-config';
import { allProjects } from 'contentlayer/generated';
import { Container, Mdx } from './page.styled';
import { Header, Preview } from './ui';

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

    const transition: Transition = {
        duration: 1.3,
        ease: [0.2, 0.85, 0.25, 1],
    };

    return (
        <MotionConfig transition={transition}>
            <Container>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(project.structuredData),
                    }}
                />

                <Header
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    publishAt={project.publishAt}
                />

                <Preview
                    image={project.preview}
                    background={project.background}
                />

                <Mdx code={project.body.code} />
            </Container>
        </MotionConfig>
    );
}
