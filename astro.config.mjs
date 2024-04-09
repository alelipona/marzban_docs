import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
	site: 'https://new.marzban.dev',
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
				telegram: 'https://t.me/gozargah_marzban',
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
				{ 
					label: 'Обновления',
				 	link: '/news',
				 	badge: 'New',
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
          behavior: 'wrap',
        },
      ],
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: '↗' }
        },
      ],
    ],
  },
});
