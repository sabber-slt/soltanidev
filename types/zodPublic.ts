import { z } from 'zod';

const Project = z.object({
  code1: z.string().or(z.null()),
  code2: z.string().or(z.null()),
  content1: z.string().or(z.null()),
  content2: z.string().or(z.null()),
  content3: z.string().or(z.null()),
  desc: z.string(),
  id: z.number(),
  img: z.string(),
  img1: z.string(),
  img2: z.string(),
  img3: z.string(),
  title: z.string(),
});

const Calorie = z.object({
  cat: z.string().or(z.null()),
  amount: z.string().or(z.null()),
  id: z.number(),
  food: z.string(),
  calorie: z.string().or(z.null()),
});

export type ProjectProps = z.infer<typeof Project>;
export type CalorieeProps = z.infer<typeof Calorie>;
