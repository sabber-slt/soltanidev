import { z } from 'zod';

const DietType = z.object({
  Text: z.string(),
  Value: z.string(),
});

const BreakfastType = z.object({
  type: z.string(),
  desc: z.string(),
  cal: z.number(),
});

export type DietTypeProps = z.infer<typeof DietType>;
export type BreakfastType = z.infer<typeof BreakfastType>;
