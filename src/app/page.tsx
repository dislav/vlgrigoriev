import { Transition } from 'framer-motion';

import MotionConfig from '@/app/motion-config';

import { Main } from './page.styled';
import { Header, Intro, Projects, Experience } from './ui';

export default function Home() {
    const transition: Transition = {
        duration: 1.3,
        ease: [0.2, 0.85, 0.25, 1],
    };

    return (
        <MotionConfig transition={transition}>
            <Header />
            <Main>
                <Intro />
                <Projects />
                <Experience />
            </Main>
        </MotionConfig>
    );
}
