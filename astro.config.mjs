import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.marzban.dev',
	image: {
    	service: passthroughImageService()
  	},
  	integrations: [
		starlight({
			title: 'Marzban',

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
			lastUpdated: true,
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
});
