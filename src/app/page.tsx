import { allProjects } from 'contentlayer/generated';

import { Main } from './page.styled';
import Intro from '@/components/Intro/Intro';
import ProjectList from '@/components/ProjectList/ProjectList';
import Experience from '@/components/Experience/Experience';

export default function Home() {
    return (
        <Main>
            <Intro />
            <ProjectList projects={allProjects} />
            <Experience />
        </Main>
    );
}
