import { Document, model, models, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  provider: string;
  providerAccountId: string;
  profilePicture: string;
  bio: string;
  website: string;
  socialLinks: {
    github: string;
    twitter: string;
    linkedin: string;
    peerlist: string;
  };
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    provider: {
      type: String,
      required: true,
    },
    providerAccountId: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    bio: {
      type: String,
    },
    website: {
      type: String,
    },
    socialLinks: {
      github: {
        type: String,
      },
      twitter: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      peerlist: {
        type: String,
      },
    },
  },
  { timestamps: true },
);

export const User = models?.User || model<IUser>("User", userSchema);
