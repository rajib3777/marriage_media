import { Seo } from "./seo";
import { Container } from "../components/Container";
import { PackagesSection } from "../sections/PackagesSection";

export function PackagesPage() {
  return (
    <>
      <Seo title="Packages — Alif Marriage Media" />
      <Container className="py-4">
        <PackagesSection />
      </Container>
    </>
  );
}
