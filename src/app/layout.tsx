import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "DB Interview Prep - SQL & MongoDB Zero to Hero",
  description:
    "Complete SQL and MongoDB interview preparation guide in Hinglish. From zero knowledge to cracking top company interviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi-en">
      <body className="min-h-screen bg-slate-900 text-slate-100 font-sans">
        <Sidebar />
        <main className="lg:ml-72 min-h-screen">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16 lg:pt-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
