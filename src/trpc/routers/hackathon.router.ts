import { createTRPCRouter, protectedProcedure, publicProcedure } from "..";

// Schemas:
import {
  filterHackathonSchema,
  hackathonSchema,
  newHackathonSchema,
  updateHackathonSchema,
} from "@/schema";
import { z } from "zod";

export const hackathonRouter = createTRPCRouter({
  //------
  // Get all hackathons by user =>
  allHackathons: publicProcedure
    .input(filterHackathonSchema)
    .query(({ ctx }) => {
      return ctx.prisma.hackathon.findMany({
        where: {
          creatorId: ctx.session?.user?.id,
        },
      });
    }),
  //------
  // Create new hackathon =>
  createHackathon: publicProcedure
    .input(newHackathonSchema)
    .mutation(({ ctx, input }) => {
      const newHackathon = ctx.prisma.hackathon.create({
        data: {
          ...input,
          creatorId: ctx.session?.user?.id,
        },
      });
      return newHackathon;
    }),
  //------
  // Edit hackathon =>
  editHackathon: publicProcedure
    .input(updateHackathonSchema)
    .mutation(({ ctx, input }) => {
      const editHackathon = ctx.prisma.hackathon.update({
        where: {
          id: input.id,
        },
        data: {
          ...input,
          creatorId: ctx.session?.user?.id,
        },
      });
      return editHackathon;
    }),
  //------
  // Delete hackathon =>
  deleteHackathon: publicProcedure
    .input(updateHackathonSchema)
    .mutation(({ ctx, input }) => {
      const deleteHackathon = ctx.prisma.hackathon.delete({
        where: {
          id: input.id,
        },
      });
      return deleteHackathon;
    }),
  //------
  // Single hackathon =>
  singleHackathon: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(({ ctx, input }) => {
      const data = ctx.prisma.hackathon.findUnique({
        where: {
          url_creatorId: {
            url: input.url,
            creatorId: ctx.session?.user?.id,
          },
        },
      });
      return data;
    }),
  //------
});
