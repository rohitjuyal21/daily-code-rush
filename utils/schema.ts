import { z } from "zod";

export const profileFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  bio: z.string(),
  profileImage: z.string().optional(),
  website: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .or(z.literal("")),
  github: z.string().optional(),
  twitter: z.string().optional(),
  linkedin: z.string().optional(),
  peerlist: z.string().optional(),
});
