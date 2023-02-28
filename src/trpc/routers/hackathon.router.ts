import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "..";

// Schemas:
import {
  filterHackathonSchema,
  newHackathonSchema,
  updateHackathonSchema,
} from "@/schema/hackathon";

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
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      const deleteHackathon = ctx.prisma.hackathon.delete({
        where: {
          id: input.id,
        },
      });
      return deleteHackathon;
    }),
  //------
  // Single hackathon with participants =>
  singleHackathonWithParticipants: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(({ ctx, input }) => {
      const hackathon = ctx.prisma.hackathon.findUnique({
        where: {
          url_creatorId: {
            url: input.url,
            creatorId: ctx.session?.user?.id,
          },
        },
      });
      const participants = ctx.prisma.participation.findMany({
        where: {
          hackathon_url: input.url,
        },
      });
      return Promise.all([hackathon, participants]).then((values) => {
        return {
          hackathon: values[0],
          participants: values[1],
        };
      });
    }),
  //------
  // Single hackathon with participants =>
  singleHackathon: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(({ ctx, input }) => {
      const hackathon = ctx.prisma.hackathon.findUnique({
        where: {
          url_creatorId: {
            url: input.url,
            creatorId: ctx.session?.user?.id,
          },
        },
      });
      return hackathon;
    }),
  //------
  // Check hackathon url =>
  checkHackathonUrl: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(({ ctx, input }) => {
      const data = ctx.prisma.hackathon.findMany({
        where: {
          url: input.url,
        },
      });
      return data;
    }),
  //------
});
