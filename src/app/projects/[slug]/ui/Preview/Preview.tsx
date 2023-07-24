import Image from 'next/image';

import { Container, Wrapper } from './Preview.styled';

import { WithClassName } from '@/shared/types';

interface PreviewProps {
    image: string;
    background: string;
}

export default function Preview({
    className,
    image,
    background,
}: WithClassName<PreviewProps>) {
    return (
        <Container
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Wrapper $background={background}>
                <Image src={image} alt="" width={1920} height={900} />
            </Wrapper>
        </Container>
    );
}
