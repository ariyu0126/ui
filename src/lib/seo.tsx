export const defaultOgImage = '';

export const buildPageMetadata = (title: string, desc: string) => ({
  title: {
    default: 'React UI',
    template: `%s | React UI`,
  },
  description: desc || 'React UI with Next.js',
  keywords: [title, 'React', 'UI', 'Next.js', 'Component'],
  openGraph: {
    title,
    description: desc,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${title} image`,
      },
    ],
  },
});
