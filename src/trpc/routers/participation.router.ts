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
  // Create new participation =>
  // createParticipation: publicProcedure
  //   .input(newParticipationSchema)
  //   .mutation(({ ctx, input }) => {
  //     const newHackathon = ctx.prisma.participation.create({
  //       data: {
  //         ...input,
  //         createdBy: ctx.session?.user?.id,
  //       },
  //     });
  //     return newHackathon;
  //   }),
  //------
});
