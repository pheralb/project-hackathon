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
  allHackathons: publicProcedure.query(({ ctx }) => {
    const hackathon = ctx.prisma.hackathon.findMany({
      where: {
        creatorId: ctx.session?.user?.id,
      },
    });
    const participants = ctx.prisma.participation.findMany({
      where: {
        creatorId: ctx.session?.user?.id,
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
  // Get a single hackathon by URL without creatorid & check if user is a participant =>
  singleHackathon: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(({ ctx, input }) => {
      const hackathon = ctx.prisma.hackathon.findUnique({
        where: {
          url: input.url,
        },
      });
      const participants = ctx.prisma.participation.findMany({
        where: {
          hackathon_url: input.url,
          creatorId: ctx.session?.user?.id,
        },
      });
      return Promise.all([hackathon, participants]).then((values) => {
        return {
          hackathon: JSON.parse(JSON.stringify(values[0])),
          participants: JSON.parse(JSON.stringify(values[1])),
        };
      });
    }),
  //------
  // Finish hackathon =>
  finishHackathon: publicProcedure
    .input(z.object({ url: z.string() }))
    .mutation(({ ctx, input }) => {
      const finishHackathon = ctx.prisma.hackathon.update({
        where: {
          url_creatorId: {
            url: input.url,
            creatorId: ctx.session?.user?.id,
          },
        },
        data: {
          is_finished: true,
        },
      });
      return finishHackathon;
    }
    ),
});
