import Link from "next/link";
import { Container } from "@/components/container";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-white/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-white"
            aria-hidden="true"
          >
            TP
          </span>
          <span>Tax Payers Portal Verify</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <span className="cursor-not-allowed opacity-50">Verify</span>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
