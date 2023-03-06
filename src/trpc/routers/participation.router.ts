import {
  newParticipationSchema,
  participationSchema,
  updateParticipationSchema,
} from "@/schema/participation";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "..";

export const participationRouter = createTRPCRouter({
  //------
  // Get all participations by user =>
  allParticipations: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.participation.findMany({
      where: {
        createdBy: ctx.session?.user?.id,
      },
    });
  }),
  //------
  // Get participation by hackathon_id =>
  participationByHackathonId: publicProcedure
    .input(z.object({ hackathonUrl: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.participation.findMany({
        where: {
          hackathon_url: input.hackathonUrl,
        },
      });
    }),
  //------
  // Create participation =>
  createParticipation: publicProcedure
    .input(newParticipationSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.participation.create({
        data: {
          ...input,
          creatorId: ctx.session?.user?.id,
          creatorName: ctx.session?.user?.name,
        },
      });
    }),
  //------
  // Update participation =>
  updateParticipation: publicProcedure
    .input(updateParticipationSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.participation.update({
        where: {
          id: input.id,
        },
        data: {
          ...input,
        },
      });
    }),
  //------
});
