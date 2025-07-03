import { connectToDatabase } from "@/lib/db";
import Video from "@/models/Video";

export async function GET(){
    try {
        await connectToDatabase();
        const videos = Video.find().sort({ createdAt: -1 }).lean();
    }catch (error) {
        console.error("Database connection failed:", error);
    }
}