import { z } from "zod";

// -----------------------------------------------

// Participation schema:

export const participationSchema = z.object({
  id: z.string(),
  is_reviewed: z.boolean(),
  is_winner: z.boolean(),
  title: z.string(),
  description: z.string(),
  url: z.string(),
  team: z.string(),
});

export type participation = z.TypeOf<typeof participationSchema>;

// -----------------------------------------------

// Create new participation:

export const newParticipationSchema = z.object({
  hackathonId: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string(),
  team: z.string(),
});

export type newParticipation = z.TypeOf<typeof newParticipationSchema>;

// -----------------------------------------------
