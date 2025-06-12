"use client";

import { profileFormSchema } from "@/utils/schema";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PageHeader from "@/components/PageHeader";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/components/ui";
import axios from "@/lib/axios";
import { Session } from "next-auth";
import { cn } from "@/lib/utils";
import { socialsInput } from "@/app/utils/settings";
import { Socials, User } from "@/app/generated/prisma";
import { toast } from "sonner";
import { ApiResponse } from "@/types/api";
import { useRouter } from "next/navigation";

type ProfileFormData = z.infer<typeof profileFormSchema>;

interface SettingsProps {
  session: Session | null;
  user: (User & { socials: Socials | null }) | null;
}

export default function Settings({ session, user }: SettingsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user?.name || session?.user?.name || "",
      email: user?.email || session?.user?.email || "",
      bio: user?.bio || "",
      profileImage: user?.profileImage || session?.user?.image || "",
      website: user?.socials?.website || "",
      github: user?.socials?.github || "",
      twitter: user?.socials?.twitter || "",
      linkedin: user?.socials?.linkedin || "",
      peerlist: user?.socials?.peerlist || "",
    },
  });

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post("/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      form.setValue("profileImage", response.data.url);
      toast.success("Image uploaded!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };
  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      const response = await axios.put<ApiResponse<User>>("/me", {
        name: data.name,
        email: data.email,
        profileImage: data.profileImage,
        website: data.website,
        bio: data.bio,
        github: data.github,
        twitter: data.twitter,
        linkedin: data.linkedin,
        peerlist: data.peerlist,
      });

      if (response.data.status === "success") {
        toast.success("Profile updated successfully");
        router.refresh();
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <PageHeader title="Edit Profile" />
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-6">
              <h2 className="mb-1 font-semibold">Profile</h2>
              <p className="text-muted-foreground text-sm">
                This data will be displayed publicly so be careful what you
                share.
              </p>
            </div>
            <div className="space-y-6 border-b pb-6">
              <FormField
                control={form.control}
                name="profileImage"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">
                        Profile Picture
                      </FormLabel>
                      <div className="relative flex-1">
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <div className="relative h-20 w-20 overflow-hidden rounded-full">
                              <Avatar className="h-20 w-20">
                                <AvatarImage
                                  src={field.value || ""}
                                  className="object-cover"
                                />
                                <AvatarFallback className="text-3xl font-bold">
                                  {session?.user?.name?.[0]}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              isLoading={isUploading}
                              onClick={() => imageInputRef.current?.click()}
                            >
                              Change
                            </Button>
                            <Input
                              ref={imageInputRef}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageChange}
                            />
                          </div>
                        </FormControl>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">Username</FormLabel>
                      <div className="relative flex-1">
                        <FormControl className="w-full">
                          <Input placeholder="Username" {...field} />
                        </FormControl>
                        <FormMessage className="mt-0.5 text-xs" />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">Email</FormLabel>
                      <FormControl className="w-full">
                        <Input placeholder="Email" disabled {...field} />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">Website</FormLabel>
                      <div className="relative flex-1">
                        <FormControl className="w-full">
                          <Input
                            placeholder="https://yourwebsite.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-0.5 text-xs" />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">Bio</FormLabel>
                      <div className="relative flex-1">
                        <FormControl className="w-full">
                          <Textarea
                            className="h-24 resize-none"
                            placeholder="Tell us about yourself"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-0.5 text-xs" />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-6 border-b pb-6">
              <div className="mb-6">
                <h2 className="mb-1 font-semibold">Socials</h2>
                <p className="text-muted-foreground text-sm">
                  Enter your social media usernames to add social links to your
                  profile.
                </p>
              </div>

              {socialsInput.map(({ name, label, prefix }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as keyof ProfileFormData}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormLabel className="min-w-[300px]">{label}</FormLabel>
                        <FormControl className="w-full">
                          <label
                            htmlFor={name}
                            className={cn(
                              "flex h-9 items-center rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow]",
                              "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
                              "aria-invalid:focus-within:ring-destructive/20 dark:aria-invalid:focus-within:ring-destructive/40 aria-invalid:border-destructive",
                            )}
                          >
                            <span className="text-muted-foreground md:text-sm">
                              {prefix}
                            </span>
                            <input
                              id={name}
                              autoComplete="off"
                              {...field}
                              className="flex-1 border-none bg-transparent outline-none md:text-sm"
                            />
                          </label>
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <div className="flex justify-between">
              <Button variant="destructive" type="button">
                Delete Account
              </Button>
              <Button
                type="submit"
                isLoading={isLoading}
                loadingText="Saving changes..."
              >
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
