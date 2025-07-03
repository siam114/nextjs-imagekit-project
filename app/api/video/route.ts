import { connectToDatabase } from "@/lib/db";
import Video from "@/models/Video";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectToDatabase();
        const videos = await Video.find().sort({ createdAt: -1 }).lean();

        if(!videos || videos.length === 0) {
            return NextResponse.json([], { status: 200 });
        }

    }catch (error) {
        console.error("Database connection failed:", error);
    }
}