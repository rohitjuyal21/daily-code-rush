"use client";

import { profileFormSchema } from "@/utils/schema";
import React, { useEffect, useRef } from "react";
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
import { useSession } from "next-auth/react";
import Image from "next/image";

type ProfileFormData = z.infer<typeof profileFormSchema>;

export default function Page() {
  const { data: session } = useSession();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      profilePicture: "",
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

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  useEffect(() => {
    if (session) {
      form.setValue("email", session.user?.email || "");
    }
  }, [session, form]);

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
                name="username"
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
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">GitHub</FormLabel>
                      <FormControl className="w-full">
                        <div className="flex items-center">
                          <span className="text-muted-foreground bg-muted rounded-l-sm px-4 py-1 md:py-2 md:text-sm">
                            https://github.com/
                          </span>
                          <Input
                            {...field}
                            className="rounded-l-none rounded-r-sm"
                          />
                        </div>
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">LinkedIn</FormLabel>
                      <FormControl className="w-full">
                        <div className="flex items-center">
                          <span className="text-muted-foreground bg-muted rounded-l-sm px-4 py-1 md:py-2 md:text-sm">
                            https://linkedin.com/in/
                          </span>
                          <Input
                            {...field}
                            className="rounded-l-none rounded-r-sm"
                          />
                        </div>
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">Twitter</FormLabel>
                      <FormControl className="w-full">
                        <div className="flex items-center">
                          <span className="text-muted-foreground bg-muted rounded-l-sm px-4 py-1 md:py-2 md:text-sm">
                            https://x.com/
                          </span>
                          <Input
                            {...field}
                            className="rounded-l-none rounded-r-sm"
                          />
                        </div>
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="peerlist"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="min-w-[300px]">Peerlist</FormLabel>
                      <FormControl className="w-full">
                        <div className="flex items-center">
                          <span className="text-muted-foreground bg-muted rounded-l-sm px-4 py-1 md:py-2 md:text-sm">
                            https://peerlist.io/
                          </span>
                          <Input
                            {...field}
                            className="rounded-l-none rounded-r-sm"
                          />
                        </div>
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between">
              <Button type="submit">Save</Button>
              <Button variant="destructive" type="button">
                Delete Account
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
