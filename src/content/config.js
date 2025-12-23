import { defineCollection, z } from "astro:content";

const homepage = defineCollection({ type: "data", schema: z.any() });
const vision = defineCollection({ type: "data", schema: z.any() });
const achievement = defineCollection({ type: "data", schema: z.any() });
const sustainable = defineCollection({ type: "data", schema: z.any() });
const oneStopSolution = defineCollection({ type: "data", schema: z.any() });
const emsLogos = defineCollection({ type: "data", schema: z.any() });
const evsLogos = defineCollection({ type: "data", schema: z.any() });
const certification = defineCollection({ type: "data", schema: z.any() });
const company = defineCollection({ type: "data", schema: z.any() });
const carousel = defineCollection({ type: "data", schema: z.any() });
const navigation = defineCollection({ type: "data", schema: z.any() });
const ysm = defineCollection({ type: "data", schema: z.any() });
const ycme = defineCollection({ type: "data", schema: z.any() });
const yev = defineCollection({ type: "data", schema: z.any() });
const yam = defineCollection({ type: "data", schema: z.any() });
const career = defineCollection({ type: "data", schema: z.any() });
const jobs = defineCollection({ type: "data", schema: z.any() });
const yifangAcademy = defineCollection({ type: "data", schema: z.any() });
const blogsPage = defineCollection({ type: "data", schema: z.any() });
const contact = defineCollection({ type: "data", schema: z.any() });
const footer = defineCollection({ type: "data", schema: z.any() });

const blog = defineCollection({
  type: "content", // Penting: Gunakan 'content' untuk file .md
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    author: z.string().default("Yifang Admin"),
    tags: z.array(z.string()).default(["General"]),
  }),
});

// 3. DAFTARKAN SEMUA DI SINI
export const collections = {
  homepage: homepage,
  vision: vision,
  achievement: achievement,
  sustainable: sustainable,
  certification: certification,
  company: company,
  carousel: carousel,
  navigation: navigation,
  "one-stop-solution": oneStopSolution,
  "ems-logos": emsLogos,
  "evs-logos": evsLogos,
  "yifang-academy": yifangAcademy,
  ysm: ysm,
  ycme: ycme,
  yev: yev,
  yam: yam,
  career: career,
  jobs: jobs,
  "blogs-page": blogsPage,
  contact: contact,
  footer: footer,
  blog: blog,
};
