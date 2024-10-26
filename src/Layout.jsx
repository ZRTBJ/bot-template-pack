import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <Outlet />
    </div>
  );
}
