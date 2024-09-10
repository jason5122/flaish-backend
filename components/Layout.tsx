import React from "react";
import Header from "./Header";
// import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <header className="w-full">
        <Header />
      </header>
      <main>{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default Layout;
