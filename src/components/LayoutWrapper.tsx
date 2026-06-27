"use client";
import React, { useState } from "react";
import { ThemeProvider } from "./ThemeProvider";
import SmoothScroll from "./SmoothScroll";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import CustomCursor from "./CustomCursor";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <Preloader onComplete={() => setLoading(false)} />
      {!loading && (
        <div className="relative min-h-screen flex flex-col justify-between">
          <SmoothScroll />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}
