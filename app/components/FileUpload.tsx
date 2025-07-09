"use client" // This component must be a client component

import {
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitServerError,
    ImageKitUploadNetworkError,
    upload,
} from "@imagekit/next";
import { useRef, useState } from "react";

const FileUpload = () => {
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const abortController = new AbortController();

    return (
        <>
            <input type="file" ref={fileInputRef} />
            <button type="button" onClick={handleUpload}>
                Upload file
            </button>
            <br />
            Upload progress: <progress value={progress} max={100}></progress>
        </>
    );
};

export default FileUpload;