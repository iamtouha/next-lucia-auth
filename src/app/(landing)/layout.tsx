import { APP_TITLE } from "@/lib/constants";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import Header from "./header";
import { Footer } from "./footer";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "A Next.js starter with T3 stack and Lucia auth.",
};

function LandingPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <div className="h-10"></div>
      <Footer />
    </>
  );
}

export default LandingPageLayout;
