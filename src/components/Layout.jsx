import NavBar from "./NavBar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className='mt-15 bg-white text-black dark:bg-black dark:text-white dark:border-white'>
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
