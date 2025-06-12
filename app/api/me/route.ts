import { getAuth } from "@/lib/getAuth";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
  try {
    const user = await getAuth();
    const data = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      include: { socials: true },
      data: {
        name: data.name,
        email: data.email,
        profileImage: data.profileImage,
        bio: data.bio,
        socials: {
          upsert: {
            create: {
              website: data.website,
              twitter: data.twitter,
              linkedin: data.linkedin,
              github: data.github,
              peerlist: data.peerlist,
            },
            update: {
              website: data.website,
              twitter: data.twitter,
              linkedin: data.linkedin,
              github: data.github,
              peerlist: data.peerlist,
            },
          },
        },
      },
    });

    return Response.json(
      {
        status: "success",
        message: "User updated successfully",
        data: updatedUser,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        status: "error",
        error,
      },
      { status: 500 },
    );
  }
}
