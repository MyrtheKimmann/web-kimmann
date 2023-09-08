import { Outlet } from "react-router-dom";
// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Root = () => {
  return (
    <div className="root">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
