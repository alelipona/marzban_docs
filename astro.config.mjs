import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
	site: 'https://docs.marzban.dev',
	image: {
    	service: passthroughImageService()
  	},
  	integrations: [
		starlight({
			title: 'Marzban',
			  favicon: '/public/favicon.ico',
			customCss: [
        		'./src/styles/marzban.css',
        		'./src/styles/headings.css',
      		],
			defaultLocale: 'root',

			locales: {
		        root: {
		          label: 'Русский',
		          lang: 'ru', 
		        }
			},
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/Gozargah/Marzban',
				telegram: 'https://github.com/Gozargah/Marzban',
			},
			pagefind: true,
			sidebar: [
				{
					label: 'Первые шаги',
					autogenerate: { directory: 'start' },
				},
				{
					label: 'Расширенная настройка',
					autogenerate: { directory: 'advanced' },
				},
				{
					label: 'Руководства',
					autogenerate: { directory: 'tutorials' },
				},
			],
		}),
	],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
        },
      ],
    ],
  },
});
