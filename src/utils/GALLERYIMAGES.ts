export interface ImagesProps {
    url: string;
    alt: string;
    caption: string;
}

export const GALLERYIMAGES: ImagesProps[] = [
    {
        url: 'images/calistung-1.webp',
        alt: 'calistung',
        caption: 'TK - Calistung - Purwokerto Utara'
    },
    {
        url: 'images/calistung-2.webp',
        alt: 'calistung',
        caption: 'TK - Calistung - Kembaran'
    },
    {
        url: 'images/calistung-4.webp',
        alt: 'calistung',
        caption: 'TK - Calistung - Purwokerto Barat'
    },
    {
        url: 'images/sd-1.webp',
        alt: 'sd',
        caption: 'SD - Les Matematika - Purwokerto Utara'
    },
    {
        url: 'images/mengaji-1.webp',
        alt: 'tk',
        caption: 'TK - Mengaji - Purwokerto Selatan'
    },
    {
        url: 'images/sd-3.webp',
        alt: 'sd',
        caption: 'SD - Les Mapel - Purwokerto Selatan'
    },
    {
        url: 'images/sd-4.webp',
        alt: 'sd',
        caption: 'SD - Les Olimpiade - Purwokerto Timur'
    },
    {
        url: 'images/sd-5.webp',
        alt: 'sd',
        caption: 'SD - Les Matematika - Purwokerto Barat'
    },
    {
        url: 'images/sd-6.webp',
        alt: 'sd',
        caption: 'SD - Les Matematika - Sokaraja'
    },
    {
        url: 'images/sd-7.webp',
        alt: 'sd',
        caption: 'SMP - Les Persiapan PAS - Purwokerto Timur'
    },
    {
        url: 'images/smp-1.webp',
        alt: 'smp',
        caption: 'SMP - Les Matematika - Karanglewas'
    },
    {
        url: 'images/sma-1.webp',
        alt: 'sma',
        caption: 'SMA - Les Kimia - Purwokerto Barat'
    },
]

export interface GalleryImagesProps {
    images: ImagesProps[];
  }