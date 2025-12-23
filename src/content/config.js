import { defineCollection, z } from "astro:content";

// 1. Definisikan Koleksi Homepage
// const homepage = defineCollection({
//   type: "data",
//   schema: z.object({
//     hero: z.object({
//       title: z.string(),
//       subtitle: z.string(),
//       button: z.string(),
//     }),
//     company: z.object({
//       group: z.string(),
//       profile: z.string(),
//     }),
//     trusted: z.object({
//       title: z.string(),
//     }),
//   }),
// });
// jika menambahkan comment apakah bisa di push  lagi kah?
// 2. Definisikan Koleksi Lainnya (Wajib ada agar tidak error)
// Jika Anda belum punya skema spesifik, gunakan z.any() sementara agar tidak error
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
const blogs = defineCollection({ type: "data", schema: z.any() });
const contact = defineCollection({ type: "data", schema: z.any() });
const footer = defineCollection({ type: "data", schema: z.any() });

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
  blogs: blogs,
  contact: contact,
  footer: footer,
};
