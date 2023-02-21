import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const result = await prisma.hackathon.findMany({
      select: {
        id: true,
        name: true,
        url: true,
        description: true,
      },
      where: {
        creatorId: session?.user?.id,
      },
    });
    res.json(result);
  } else {
    res.status(401).json({ error: "Not signed in" });
  }

  res.end();
};
