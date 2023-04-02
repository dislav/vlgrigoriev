import { allProjects, allJobs } from 'contentlayer/generated';

import { Main } from './page.styled';
import MotionProvider from '@/app/motion-provider';
import Header from '@/components/Header/Header';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';

export default function Home() {
    return (
        <MotionProvider
            transition={{
                duration: 1.3,
                ease: [0.2, 0.85, 0.25, 1],
            }}
        >
            <Header />
            <Main>
                <Intro />
                <Projects projects={allProjects} />
                <Experience jobs={allJobs} />
            </Main>
        </MotionProvider>
    );
}
