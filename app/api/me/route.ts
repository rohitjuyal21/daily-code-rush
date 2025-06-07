import { auth } from "@/auth";

export async function PUT() {
  try {
    const session = await auth();
    console.log("session", session);
    return Response.json({
      message: "User fetched successfully",
      data: session?.user?.id,
    });
  } catch (error) {
    return Response.json({
      message: "User not found",
      error,
    });
  }
}
