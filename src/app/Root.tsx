import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Space Grotesk', system-ui, sans-serif",
        backgroundColor: "#FFFFFF",
        color: "#172B4D",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
