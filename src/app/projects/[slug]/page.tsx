import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AnimationProps, Transition } from 'framer-motion';
import dayjs from 'dayjs';

import MotionConfig from '@/app/motion-config';
import { allProjects } from 'contentlayer/generated';
import { ArrowBack, ArrowLink } from '@/shared/icons';
import {
    Container,
    Back,
    Header,
    Description,
    Title,
    Preview,
    PreviewWrapper,
    AspectRatio,
    ImageWrapper,
    Mdx,
} from './page.styled';

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

    const animation: AnimationProps = {
        initial: {
            opacity: 0,
            y: 30,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
    };

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

                <Back {...animation}>
                    <Link href="/">{ArrowBack}</Link>
                </Back>

                <Header {...animation}>
                    <Description>
                        {dayjs(project.publishAt).format('YYYY')} •{' '}
                        {project.description}
                    </Description>
                    <Title>{project.title}</Title>
                    {project.url && (
                        <Link href={project.url} target="_blank">
                            Открыть проект
                            {ArrowLink}
                        </Link>
                    )}
                </Header>

                <Preview {...animation}>
                    <PreviewWrapper $background={project.background}>
                        <ImageWrapper
                            {...animation}
                            transition={{
                                ...transition,
                                duration: 1,
                                delay: 0.3,
                            }}
                        >
                            <AspectRatio $width={1920} $height={900}>
                                <Image
                                    src={project.preview}
                                    alt={project.title}
                                    fill
                                />
                            </AspectRatio>
                        </ImageWrapper>
                    </PreviewWrapper>
                </Preview>

                <Mdx code={project.body.code} />
            </Container>
        </MotionConfig>
    );
}
