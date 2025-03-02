"use client";

import * as React from "react";
import Divider from "@mui/material/Divider";
import Hero from "@/app/components/Hero";
import LogoCollection from "@/app/components/LogoCollection";
import Highlights from "@/app/components/Highlights";
import Pricing from "@/app/components/Pricing";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";
import AppTheme from "@/components/shared-theme/AppTheme";

export default function LandingPage() {
  return (
    <AppTheme>
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
