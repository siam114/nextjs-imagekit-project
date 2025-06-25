import mongoose, {Schema, model, models} from "mongoose";

export const VIDEO_DIMENSTIONS = {
    width: 1280,
    height: 1920,
} as const;

export interface IVideo {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    controls?: boolean;
    transformation?: {
        height: number;
        width: number;
        quality?: number;
    }
}