import { auth } from "@/auth";
import prisma from "./prisma";

export async function getFullUser() {
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

export async function getBasicUser() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      profileImage: true,
    },
  });
  return user;
}
