// app/api/upload/image/route.ts
import cloudinary from "@/lib/cloudinary";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return Response.json(
        { status: "error", message: "No image provided" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "daily-code-rush/profile",
            transformation: [{ width: 400, height: 400, crop: "fill" }],
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    });

    return Response.json({
      status: "success",
      url: (result as unknown as { secure_url: string }).secure_url,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { status: "error", message: "Upload failed" },
      { status: 500 },
    );
  }
}
