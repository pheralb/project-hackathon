export const nextSeoConfig = {
  title: "Home",
  titleTemplate: "%s - Project Hackathon",
  description:
    "An open-source hackathon management built with Next.js & Supabase",
  defaultTitle: "project hackathon",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/images/phck.svg",
    },
    {
      rel: "apple-touch-icon",
      href: "/images/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      href: "/images/apple-touch-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      href: "/images/apple-touch-icon-114x114.png",
      sizes: "114x114",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
  openGraph: {
    site_name: "Project Hackathon",
    url: "https://phck.vercel.app",
    type: "website",
    locale: "en_IE",
    // images: [
    //   {
    //     url: "/img/banner.jpg",
    //     width: 1920,
    //     height: 1080,
    //     type: "image/jpg",
    //   },
    // ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
