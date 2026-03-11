import Header from "./Header";
import Footer from "./Footer";
import FloatingCallButton from "./FloatingCallButton";
import CallNowPopup from "./CallNowPopup";
import FloatingElements from "./FloatingElements";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <FloatingElements />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <FloatingCallButton />
      <CallNowPopup />
    </div>
  );
};

export default Layout;
