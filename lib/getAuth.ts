import { auth } from "@/auth";

export const getAuth = async () => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }
  return session.user;
};
