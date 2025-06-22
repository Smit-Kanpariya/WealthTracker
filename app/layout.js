import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WealthTracker",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="robotic-footer">
            <div className="robotic-floating-elements">
              <div className="robotic-circuit-node"></div>
              <div className="robotic-circuit-node"></div>
              <div className="robotic-circuit-node"></div>
              <div className="robotic-circuit-node"></div>
            </div>

            <div className="robotic-data-streams">
              <div className="data-stream"></div>
              <div className="data-stream"></div>
              <div className="data-stream"></div>
              <div className="data-stream"></div>
            </div>

            <div className="robotic-footer-container">
              <div className="robotic-footer-content">
                <div className="robotic-logo-section">
                  <div className="robotic-logo">SK</div>
                  <div className="robotic-brand-text">Smit Kanpariya</div>
                </div>
                <div className="robotic-made-with-love">
                  <div className="robotic-love-text">
                    Made with <span className="robotic-heart">💗</span> by Smit
                    Kanpariya
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
