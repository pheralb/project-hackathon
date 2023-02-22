import { PrismaClient } from "@prisma/client";

import { env } from "@/env/index.mjs";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

(async () => {
  try {
    console.log(await prisma.widget.create({ data: {} }));
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    prisma.$disconnect();
  }
})();
