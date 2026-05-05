export interface ImagesProps {
    url: string;
    alt: string;
    caption: string;
}

export const GALLERYIMAGES: ImagesProps[] = [
    {
        url: 'images/calistung-1.webp',
        alt: 'calistung',
        caption: 'TK - Calistung'
    },
    {
        url: 'images/calistung-2.webp',
        alt: 'calistung',
        caption: 'TK - Calistung'
    },
    {
        url: 'images/calistung-4.webp',
        alt: 'calistung',
        caption: 'TK - Calistung'
    },
    {
        url: 'images/sd-1.webp',
        alt: 'sd',
        caption: 'SD - Les Matematika'
    },
    {
        url: 'images/mengaji-1.webp',
        alt: 'tk',
        caption: 'TK - Mengaji'
    },
    {
        url: 'images/sd-3.webp',
        alt: 'sd',
        caption: 'SD - Les Mapel'
    },
    {
        url: 'images/sd-4.webp',
        alt: 'sd',
        caption: 'SD - Les Mapel'
    },
    {
        url: 'images/sd-5.webp',
        alt: 'sd',
        caption: 'SD - Les Matematika'
    },
    {
        url: 'images/sd-6.webp',
        alt: 'sd',
        caption: 'SD - Les Matematika'
    },
    {
        url: 'images/sd-7.webp',
        alt: 'sd',
        caption: 'SMP - Les Mapel'
    },
    {
        url: 'images/smp-1.webp',
        alt: 'smp',
        caption: 'SMP - Les Matematika'
    },
    {
        url: 'images/sma-1.webp',
        alt: 'sma',
        caption: 'SMA - Les Kimia'
    },
]

export interface GalleryImagesProps {
    images: ImagesProps[];
  }