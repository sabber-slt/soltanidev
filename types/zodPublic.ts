import { z } from 'zod';

const Article = z.object({
  cat: z.string(),
  title: z.string(),
  id: z.number(),
  content: z.string(),
  content2: z.string(),
  img1: z.string(),
  img2: z.string(),
});

const Calorie = z.object({
  cat: z.string().or(z.null()),
  amount: z.string().or(z.null()),
  id: z.number(),
  food: z.string(),
  calorie: z.string().or(z.null()),
});

export type ArticleProps = z.infer<typeof Article>;
export type CalorieeProps = z.infer<typeof Calorie>;
