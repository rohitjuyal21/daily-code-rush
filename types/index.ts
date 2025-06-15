import { Socials, User } from "@/app/generated/prisma";

export type FullUser = User & { socials: Socials | null };

export type BasicUser = Pick<User, "id" | "name" | "email" | "profileImage">;
