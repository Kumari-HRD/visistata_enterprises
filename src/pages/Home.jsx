//

import { lazy, Suspense } from "react";
import "../styles/home.css";

// ✅ Lazy load the heavy parts
const HeroSection = lazy(() => import("../components/HeroSection"));
const FeaturedCourses = lazy(() => import("../components/FeaturedCourses"));
const Footer = lazy(() => import("../components/Footer"));
const StyledColoredDiv = lazy(() =>
  import("../components/styled-components").then((module) => ({
    default: module.StyledColoredDiv,
  }))
);

// Simple fallback spinner
const Loader = () => (
  <div style={{ height: "50vh", display: "grid", placeItems: "center" }}>
    <div className="pi pi-spin pi-spinner" style={{ fontSize: "2rem" }}></div>
  </div>
);

function Home() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <StyledColoredDiv>
          <FeaturedCourses />
        </StyledColoredDiv>
      </Suspense>

      <Suspense fallback={null}>
        {" "}
        {/* Footer can load silently */}
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
