"use client";

import { profileFormSchema } from "@/utils/schema";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PageHeader from "@/components/PageHeader";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Skeleton,
  Textarea,
} from "@/components/ui";
import Image from "next/image";
import axios from "@/lib/axios";
import { Session } from "next-auth";
import { cn } from "@/lib/utils";
import { socialsInput } from "@/app/utils/settings";

type ProfileFormData = z.infer<typeof profileFormSchema>;

export default function Settings({ session }: { session: Session | null }) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      bio: "",
      profilePicture: session?.user?.image || "",
      website: "",
      github: "",
      twitter: "",
      linkedin: "",
      peerlist: "",
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        form.setValue("profilePicture", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    console.log(data);
    try {
      const response = await axios.put("/me", {
        name: data.name,
        email: data.email,
        profilePicture: data.profilePicture,
        website: data.website,
        bio: data.bio,
        github: data.github,
        twitter: data.twitter,
        linkedin: data.linkedin,
        peerlist: data.peerlist,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
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
                name="profilePicture"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">
                        Profile Picture
                      </FormLabel>
                      <div className="relative flex-1">
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <div className="h-[80px] w-[80px] overflow-hidden rounded-full">
                              {field.value || session?.user?.image ? (
                                <Image
                                  src={
                                    field.value || session?.user?.image || ""
                                  }
                                  alt={session?.user?.name || ""}
                                  width={80}
                                  height={80}
                                />
                              ) : (
                                <Skeleton className="h-[80px] w-[80px] rounded-full" />
                              )}
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => imageInputRef.current?.click()}
                            >
                              Change
                            </Button>
                            <Input
                              ref={imageInputRef}
                              type="file"
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
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
