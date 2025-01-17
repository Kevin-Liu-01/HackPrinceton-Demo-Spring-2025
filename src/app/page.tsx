// "use client";
import Navbar from "./components/navbar/navbar";
import LandingPage from "./components/landing_page";
import About from "./components/about";
import Tracks from "./components/tracks";
import FAQ from "./components/faq";
import Contributors from "./components/contributors";
import Resources from "./components/resources";
import SignUpPage from "./components/signup";
import Carousel from "./components/carousel/carousel";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="cursor-default font-[family-name:var(--font-young-serif)]">
      <Navbar />
      <LandingPage />
      <About />
      {/* <SignUpPage /> */}
      {/* <Tracks />
      <FAQ />
      <Contributors />
      <Resources /> */}
      <Carousel />

      <Footer />
    </div>
  );
}
