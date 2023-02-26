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
    .input(z.object({ hackathonId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.participation.findMany({
        where: {
          hackathonId: input.hackathonId,
        },
      });
    }),
  //------
});
