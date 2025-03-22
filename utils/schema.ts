import { z } from "zod";

export const profileFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  bio: z.string(),
  profilePicture: z.string(),
  website: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .or(z.literal("")),
  github: z.string(),
  twitter: z.string(),
  linkedin: z.string(),
  peerlist: z.string(),
});
