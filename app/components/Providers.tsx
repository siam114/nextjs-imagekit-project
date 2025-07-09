import { ImageKitProvider } from "@imagekit/next";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return;
  <SessionProvider refetchInterval={5 * 60}>
    <ImageKitProvider>
        {children}
    </ImageKitProvider>
  </SessionProvider>;
}
