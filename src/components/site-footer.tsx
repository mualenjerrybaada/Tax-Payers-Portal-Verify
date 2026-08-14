import { Container } from "@/components/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>&copy; {year} Tax Payers Portal Verify. All rights reserved.</p>
        <p>Document verification platform — setup phase</p>
      </Container>
    </footer>
  );
}
