import { Seo } from "./seo";
import { HomeHero } from "../sections/HomeHero";
import { TrustSection } from "../sections/TrustSection";
import { SearchTeaser } from "../sections/SearchTeaser";
import { PackagesSection } from "../sections/PackagesSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { CtaSection } from "../sections/CtaSection";
import { SuccessGallerySection } from "../sections/SuccessGallerySection";
import { SuccessStoriesSection } from "../sections/SuccessStoriesSection";
import { PostStorySection } from "../sections/PostStorySection";

export function HomePage() {
  return (
    <>
      <Seo title="Alif Marriage Media — Home" description="Production-grade Marriage Media frontend skeleton" />
      <HomeHero />
      <TrustSection />
      <SearchTeaser />
      <SuccessGallerySection />
      <PackagesSection />
      <SuccessStoriesSection />
      <PostStorySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
