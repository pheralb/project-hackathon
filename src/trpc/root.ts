import { createTRPCRouter } from "@/trpc";

// Hackathon router:
import { hackathonRouter } from "./routers/hackathon.router";

export const appRouter = createTRPCRouter({
  hackathon: hackathonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
