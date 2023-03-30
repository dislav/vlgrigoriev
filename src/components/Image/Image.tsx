import NextImage, { ImageProps } from 'next/image';

export default function Image({ quality = 90, ...props }: ImageProps) {
    return <NextImage {...props} quality={quality} />;
}
