import { notFound } from "next/navigation";
import type { Lang } from "@/data/profile";
import { PortfolioPage } from "@/components/PortfolioPage";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bg" }];
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "bg") {
    notFound();
  }

  return <PortfolioPage lang={lang as Lang} />;
}
