import { effect, useSignal } from "@preact/signals";
import DayJS from "dayjs";
import { Router } from "preact-router";

import Home from "src/pages/home";
import Me from "src/pages/me";
import Summary from "src/pages/summary";

import getLocalStorage from "src/helper/getLocalStorage";

import Footer from "src/components/footer";
import Navbar from "src/components/navbar";

export function App() {
  console.log(getLocalStorage());
  const expenses = useSignal(
    getLocalStorage() || [
      {
        id: crypto.randomUUID(),
        name: "Lorem",
        amount: 300,
        date: new DayJS(),
        category: "food",
      },
      {
        id: crypto.randomUUID(),
        name: "Ipsum",
        amount: 6000,
        date: new DayJS(),
        category: "shopping",
      },
      {
        id: crypto.randomUUID(),
        name: "Ipsum",
        amount: 300,
        date: new DayJS().day(0),
        category: "transportation",
      },
      {
        id: crypto.randomUUID(),
        name: "Ipsum",
        amount: 400,
        date: new DayJS().endOf("month"),
        category: "transportation",
      },
      {
        id: crypto.randomUUID(),
        name: "Ipsum",
        amount: 1000,
        date: new DayJS().startOf("month"),
        category: "transportation",
      },
    ]
  );

  effect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  });

  return (
    <main class='flex flex-col gap-24 h-screen justify-between'>
      <section class=''>
        <Navbar />
        <Router>
          <Home path='/' />
          <Me path='/me' expenses={expenses} />
          <Summary path='/me/summary/:timeSpan' expenses={expenses} />
        </Router>
      </section>
      <Footer />
    </main>
  );
}
