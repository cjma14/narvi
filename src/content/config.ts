// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const productsCollection = defineCollection({
  type: 'content',
    schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    shortDescription: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
    starCount: z.number(),
    btnTitle: z.string(),
    btnURL: z.string(),
    btnSaleTitle: z.string(),
    btnSaleURL: z.string(),
    gallery: z.array(z.string()),
    tableData: z.array(
      z.object({
        title: z.string(),
        specifications: z.array( z.string()),
      })
    ).optional()
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  'products': productsCollection,
};