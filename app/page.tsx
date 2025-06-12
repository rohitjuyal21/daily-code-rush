"use client";
import { Button } from "@/components/ui";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      {session?.user?.name}
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          alt="User"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
      )}
      <Button onClick={() => signOut({ redirectTo: "/login" })}>
        Sign out
      </Button>
    </main>
  );
}
