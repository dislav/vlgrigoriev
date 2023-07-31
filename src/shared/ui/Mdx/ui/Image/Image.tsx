import ImageNext, { ImageProps } from 'next/image';

import { Section } from '../Section';

export default function Image({ className, ...props }: ImageProps) {
    return (
        <Section className={className}>
            <ImageNext {...props} />
        </Section>
    );
}
