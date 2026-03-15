import Link from "next/link";
import { HeroHighlightDemo } from "@/components/ui/hero-highlight-demo";
import { ArrowLeft } from "lucide-react";

export default function DemoPage() {
  return (
    <main>
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
      </div>
      <HeroHighlightDemo />
    </main>
  );
}
