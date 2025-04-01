import React from "react";
import HeroSection from "./Hero";
import ProductsSection from "../sections/ProductsSection";
import DevelopersSection from "../sections/DevelopersSection";
import EcosystemSection from "../sections/EcosystemSection";
import CommunitySection from "../sections/CommunitySection";
import AboutSection from "../sections/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content with dynamic padding-top */}
      <main className={`transition-all duration-500 `}>
        <HeroSection />

        {/* Main Content */}
        <main>
          {/* Products Section */}
          <section id="products">
            <ProductsSection />
          </section>

          {/* Developers Section */}
          <section id="developers">
            <DevelopersSection />
          </section>

          {/* Ecosystem Section */}
          <section id="ecosystem">
            <EcosystemSection />
          </section>

          {/* Community Section */}
          <section id="community">
            <CommunitySection />
          </section>

          {/* About Section */}
          <section id="about">
            <AboutSection />
          </section>
        </main>
      </main>
    </div>
  );
}
