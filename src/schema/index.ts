import { z } from "zod";

export const newHackathonSchema = z.object({
  name: z.string().min(3, "Name of the hackathon is required."),
  url: z.string(),
  description: z.string().email(),
  is_finished: z.boolean(),
  owner: z.string().min(3),
  creation_date: z.date(),
});
