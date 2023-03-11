import NextImage, { ImageProps } from 'next/image';

export default function Image({ quality = 85, ...props }: ImageProps) {
    return <NextImage {...props} quality={quality} />;
}
