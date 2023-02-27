import { allProjects, allJobs } from 'contentlayer/generated';

import { Main } from './page.styled';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';

export default function Home() {
    return (
        <Main>
            <Intro />
            <Projects projects={allProjects} />
            <Experience jobs={allJobs} />
        </Main>
    );
}
