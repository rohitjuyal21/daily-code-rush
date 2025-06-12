import { getAuth } from "@/lib/getAuth";

export async function GET() {
  const user = await getAuth();
  return Response.json({ message: "session", user });
}
