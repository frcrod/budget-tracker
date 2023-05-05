import { Router } from "preact-router";

import Home from "src/pages/home";
import Me from "src/pages/me";

import Footer from "src/components/footer";
import Navbar from "src/components/navbar";

export function App() {
  return (
    <main class='flex flex-col h-screen justify-between'>
      <section>
        <Navbar />
        <Router>
          <Home path='/' />
          <Me path='/me' />
        </Router>
      </section>
      <Footer />
    </main>
  );
}
