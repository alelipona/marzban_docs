import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import swup from '@swup/astro';


export default defineConfig({
  site: "https://docs.marzban.dev",
//  image: {
//     service: passthroughImageService()
//  },
  integrations: [
    swup(),
    starlight({
      title: "Marzban",
      editLink: {
        baseUrl: "https://github.com/iambabyninja/marzban_docs/edit/master",
      },
      components: {
        Sidebar: "./src/components/Sidebar.astro",
        Head: "./src/components/Head.astro",
      },
      favicon: "/public/favicon.ico",
      customCss: [
        "./src/styles/marzban.css",
        "./src/styles/headings.css",
        "./src/fonts/font-face.css",
      ],
      defaultLocale: "root",

      locales: {
        root: {
          label: "Русский",
          lang: "ru",
        },
      },
      logo: {
        light: "/src/assets/logo-light.svg",
        dark: "/src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/Gozargah/Marzban",
        telegram: "https://t.me/gozargah_marzban",
      },
      pagefind: true,
      sidebar: [
        {
          label: "Первые шаги",
          autogenerate: { directory: "start" },
        },
        {
          label: "Интерфейс",
          autogenerate: { directory: "ui" },
        },
        {
          label: "Расширенная настройка",
          autogenerate: { directory: "advanced" },
        },
        {
          label: "Компоненты",
          autogenerate: { directory: "components" },
        },
        {
          label: "Руководства",
          autogenerate: { directory: "tutorials" },
        },
      ],
    }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeExternalLinks,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " ↗" },
        },
      ],
    ],
  },
});
