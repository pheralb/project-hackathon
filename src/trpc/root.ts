import { createTRPCRouter } from "@/trpc";

// Hackathon router:
import { hackathonRouter } from "./routers/hackathon.router";
import { participationRouter } from "./routers/participation.router";

export const appRouter = createTRPCRouter({
  hackathon: hackathonRouter,
  participation: participationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
