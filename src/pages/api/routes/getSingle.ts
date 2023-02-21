import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const { url } = req.query;

  if (session) {
    const hackathon = await prisma.hackathon.findMany({
      where: {
        url: url as string,
        creatorId: session?.user?.id,
      },
    });
    const participations = await prisma.participation.findMany({
      where: {
        creatorId: session?.user?.id,
      },
    });
    res.json({
      hackathon: hackathon[0],
      participations: participations,
    });
  } else {
    res.status(401).json({ error: "Not signed in" });
  }

  res.end();
};
