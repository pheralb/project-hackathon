import { z } from "zod";

// -----------------------------------------------

// Participation schema:

export const participationSchema = z.object({
  id: z.string(),
  is_reviewed: z.boolean(),
  is_winner: z.boolean(),
  title: z.string(),
  description: z.string(),
  hackathon_url: z.string(),
  project_url: z.string(),
  creatorName: z.string(),
});

export type participation = z.TypeOf<typeof participationSchema>;

// -----------------------------------------------

// Create new participation:

export const newParticipationSchema = z.object({
  title: z.string(),
  description: z.string(),
  hackathon_url: z.string(),
  hackathon_name: z.string(),
  project_url: z.string(),
});

export type newParticipation = z.TypeOf<typeof newParticipationSchema>;

// -----------------------------------------------

// Update participation:

export const updateParticipationSchema = z.object({
  id: z.string(),
  is_reviewed: z.boolean(),
  is_winner: z.boolean(),
});

export type updateParticipation = z.TypeOf<typeof updateParticipationSchema>;

// -----------------------------------------------
