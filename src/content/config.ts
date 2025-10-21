import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().default('Armaan Agrawal'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    topic: z.string().optional(),
    published: z.boolean().default(true),
    moreEssays: z.object({
      heading: z.string().optional(),
      links: z.array(z.object({
        title: z.string(),
        url: z.string()
      })).optional()
    }).optional(),
  }),
});

export const collections = { blog };
