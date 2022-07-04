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

const Edu = z.object({
  title: z.string(),
  img: z.string(),
  id: z.number(),
  des1: z.string(),
  cod1: z.string(),
  des2: z.string(),
  cod2: z.string(),
  des3: z.string(),
  cod3: z.string(),
  des4: z.string(),
  cod4: z.string(),
});

const About = z.object({
  title: z.string(),
  img: z.string(),
  img1: z.string(),
  img2: z.string(),
  content: z.string(),
});

export type ProjectProps = z.infer<typeof Project>;
export type EduProps = z.infer<typeof Edu>;
export type AboutProps = z.infer<typeof About>;
