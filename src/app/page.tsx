import { allProjects, allJobs } from 'contentlayer/generated';

import { Main } from './page.styled';
import Header from '@/components/Header/Header';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Intro />
                <Projects projects={allProjects} />
                <Experience jobs={allJobs} />
            </Main>
        </>
    );
}
