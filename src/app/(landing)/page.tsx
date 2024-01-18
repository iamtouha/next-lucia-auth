import Link from "next/link";
import { type Metadata } from "next";
import { PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from "./copy-to-clipboard";
import {
  Drizzle,
  LuciaAuth,
  NextJs,
  ReactJs,
  ShadcnUi,
  TRPC,
} from "./feature-icons";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "NextJs Lucia Auth Starter Template",
  description:
    "A Next.js starter with Nextjs and Lucia auth. Includes drizzle, trpc, react-email, tailwindcss and shadcn-ui",
};

const githubUrl = "https://github.com/iamtouha/t3-lucia_auth-example";

const features = [
  {
    name: "NextJs",
    description: "The React Framework for Production",
    logo: NextJs,
  },
  {
    name: "ReactJs",
    description: "Server and client components.",
    logo: ReactJs,
  },
  {
    name: "TypeSafe Backend",
    description: "Preserve type safety from backend to frontend with tRPC",
    logo: TRPC,
  },
  {
    name: "Authentication",
    description:
      "Credential authentication with password reset and email validation",
    logo: LuciaAuth,
  },
  {
    name: "Database",
    description: "Drizzle with planetscale mysql database",
    logo: Drizzle,
  },
  {
    name: "Shadcn UI",
    description: "Simple and elegant UI components built with Tailwind CSS",
    logo: ShadcnUi,
  },
];

const HomePage = () => {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-80px)] items-center">
        <div className="p-4">
          <div className="mb-10 flex items-center justify-center gap-3">
            <NextJs className="h-12 w-12" />
            <PlusIcon className="h-8 w-8" />
            <LuciaAuth className="h-14 w-14" />
          </div>
          <h1 className="text-balance text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            NextJs Lucia Auth Starter Template
          </h1>
          <p className="text-balance mb-10 mt-4 text-center text-muted-foreground md:text-lg lg:text-xl">
            A Next.js starter template with Authentication (with password reset
            and email validation). Includes Lucia auth, Drizzle, tRPC,
            tailwindcss, shadcn-ui and react-email.
          </p>
          <div className="mb-10">
            <div className="mx-auto max-w-sm">
              <CopyToClipboard text={"git clone " + githubUrl} />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href={githubUrl}>
                <GitHubLogoIcon className="mr-1 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto lg:max-w-screen-lg">
          <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            <a id="features"></a> Features
          </h1>
          <p className="text-balance mb-10 text-center text-muted-foreground md:text-lg lg:text-xl">
            This starter template is a guide to help you get started with
            Next.js for large scale applications. Feel free to add or remove
            features to suit your needs.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.name}>
                <div className="pl-6 pt-6">
                  <feature.logo className="h-12 w-12" />
                </div>
                <CardHeader className="pb-6">
                  <CardTitle>{feature.name}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
 
export default HomePage;
