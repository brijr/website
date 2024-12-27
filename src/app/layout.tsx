import "./globals.css";
import "@/components/craft/craft.css";

import { site } from "../../site.config";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import { Inter as Font } from "next/font/google";
import { Section, Container } from "@/components/craft";

export const metadata: Metadata = {
  title: site.title,
  description: site.desc,
  metadataBase: new URL(site.url),
};

const font = Font({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${font.className} no-scrollbar`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-light bg-accent selection:bg-indigo-100 dark:selection:bg-indigo-900">
        <main className="flex flex-col min-h-[100vh]">
          <Section className="py-0">
            <Container className="space-y-12">
              <Nav />
              {children}
            </Container>
          </Section>
        </main>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = () => {
  return (
    <div className="fade-in-up flex gap-4 justify-between items-start">
      <Link className="reset-link" href="/">
        <Image
          className="invert dark:invert-0 mb-8"
          src={Logo}
          alt="Bridger Tower Logo"
          width={36}
          height={29.31}
        />
      </Link>{" "}
      <div className="flex gap-2 text-muted-foreground text-sm">
        <a
          className="reset-link hover:text-foreground"
          href="https://github.com/brijr"
        >
          GitHub
        </a>
        <a
          className="reset-link hover:text-foreground"
          href="https://x.com/bridgertower"
        >
          X.com
        </a>
      </div>
    </div>
  );
};
