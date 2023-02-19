import { type GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";

import { authOptions } from "../pages/api/auth/[...nextauth]";

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
