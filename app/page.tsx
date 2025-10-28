import { 
  HeroSection,
  AboutSection,
  ServicesGrid,
  WhyChooseUs,
  TeamPreview,
  ContactCTA
} from "@/components/sections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <TeamPreview />
      <ContactCTA />
    </div>
  );
}
