import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import starlightBlog from 'starlight-blog'

export default defineConfig({
	site: 'https://new.marzban.dev',
	image: {
    	service: passthroughImageService()
  	},
  	integrations: [
		starlight({
			title: 'Marzban',
			editLink: {
        baseUrl: 'https://github.com/iambabyninja/marzban_docs/edit/main/',
      },
			components: {
        Sidebar: './src/components/Sidebar.astro',
      },
      plugins: [
      	starlightBlog({
      		title: 'Блог',
      	},
      		)
      	],
			favicon: '/public/favicon.ico',
			customCss: [
        		'./src/styles/marzban.css',
        		'./src/styles/headings.css',
        		'./src/fonts/font-face.css',
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
					label: 'Компоненты',
					autogenerate: { directory: 'components' },
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
