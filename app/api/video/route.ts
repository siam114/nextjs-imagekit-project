import { connectToDatabase } from "@/lib/db";

export async function GET(){
    try {
        await connectToDatabase();
    }catch (error) {
        console.error("Database connection failed:", error);
    }
}