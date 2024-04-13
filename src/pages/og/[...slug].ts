import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const entries = await getCollection('docs')


const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({

  pages,

  param: 'slug',

  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      title: page.data.title,
      description: page.data.description,
      bgGradient: [[24, 24, 27]],
      border: { color: [63, 63, 70], width: 20 },
      padding: 120,
      font: {
      title: {
        size: 78,
        families: [
          'Work Sans',
          'Noto Sans Black',
          'Noto Sans Arabic',
          'Noto Sans SC Black',
          'Noto Sans TC Black',
          'Noto Sans JP Black',
        ],
        weight: 'ExtraBold',
      },
      description: {
        size: 45,
        lineHeight: 1.25,
        families: [
          'Work Sans',
          'Noto Sans',
          'Noto Sans Arabic',
          'Noto Sans SC',
          'Noto Sans TC',
          'Noto Sans JP',
        ],
        weight: 'Normal',
      },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/work-sans/latin-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/work-sans/latin-800-normal.ttf',

      'https://api.fontsource.org/v1/fonts/noto-sans/cyrillic-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/noto-sans/cyrillic-900-normal.ttf',

      'https://api.fontsource.org/v1/fonts/noto-sans-sc/chinese-simplified-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/noto-sans-sc/chinese-simplified-900-normal.ttf',

      'https://api.fontsource.org/v1/fonts/noto-sans-tc/chinese-traditional-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/noto-sans-tc/chinese-traditional-900-normal.ttf',

      'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-900-normal.ttf',

      'https://api.fontsource.org/v1/fonts/noto-sans-arabic/arabic-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/noto-sans-arabic/arabic-800-normal.ttf',
    ],
    }
  },
})