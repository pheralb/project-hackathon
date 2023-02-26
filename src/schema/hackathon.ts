import { z } from "zod";
import { participationSchema } from "./participation";

// Get hackathon:
export const hackathonSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  url: z.string(),
  description: z.string(),
  is_finished: z.boolean(),
  owner: z.string().min(3),
  creation_date: z.date(),
  participants: z.array(participationSchema),
});

export type allHackathons = z.TypeOf<typeof hackathonSchema>;

// -----------------------------------------------

// Create new hackathon:
export const newHackathonSchema = z.object({
  name: z.string().min(3),
  url: z.string(),
  description: z.string(),
  is_finished: z.boolean(),
});

export type newHackathon = z.TypeOf<typeof newHackathonSchema>;

// -----------------------------------------------

// Update hackathon:
export const updateHackathonSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  description: z.string(),
  is_finished: z.boolean(),
});

export type updateHackathon = z.TypeOf<typeof updateHackathonSchema>;
// -----------------------------------------------

// Filter hackathon:

export const filterHackathonSchema = z.object({
  filter: z.string(),
});

export type filterHackathon = z.TypeOf<typeof filterHackathonSchema>;
