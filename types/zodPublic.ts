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

const Articles = z.object({
  attributes: z.object({
    title: z.string(),
    desc: z.string(),
    media: z.string(),
    content1: z.string(),
    media1: z.string(),
    content2: z.string(),
    media2: z.string(),
    content3: z.string(),
    media3: z.string(),
  }),
  id: z.number(),
});
const EduProp = z.object({
  attributes: z.object({
    title: z.string(),
    desc: z.string(),
    media: z.string(),
    content1: z.string(),
    code1: z.string(),
    content2: z.string(),
    code2: z.string(),
    content3: z.string(),
    code3: z.string(),
    content4: z.string(),
    code4: z.string(),
    content5: z.string(),
    code5: z.string(),
  }),
  id: z.number(),
});

const About = z.object({
  attributes: z.object({
    title: z.string(),
    media: z.string(),

    content1: z.string(),
    media1: z.string(),
    content2: z.string(),
    media2: z.string(),
    content3: z.string(),
    media3: z.string(),
  }),
  id: z.number(),
});

export type ProjectProps = z.infer<typeof Project>;

export type AboutProps = z.infer<typeof About>;
export type ArticlesProps = z.infer<typeof Articles>;
export type EduProps = z.infer<typeof EduProp>;
