import { auth } from "@/auth";
import prisma from "./prisma";

export async function getUser() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { socials: true },
  });
  return user;
}
