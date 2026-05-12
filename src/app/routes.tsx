import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Services },
      { path: "blog", Component: Blog },
      { path: "contacto", Component: Contact },
      { path: "politica-de-privacidad", Component: PrivacyPolicy },
      { path: "terminos-de-uso", Component: TermsOfUse },
    ],
  },
], { basename: "/Citec" });