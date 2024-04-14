import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        banner: z.object({ content: z.string() }).default({
          content:
            'Crypto payment Cloud Provider <a href="https://bitcoinvps.cloud">BitcoinVPS.cloud</a> 🌟',
        }),
      }),
    }),
  }),
};