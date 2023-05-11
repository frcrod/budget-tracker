import { effect, useSignal } from "@preact/signals";
import DayJS from "dayjs";
import { Router } from "preact-router";
import { v4 as uuidv4 } from "uuid";

import Home from "src/pages/home";
import Me from "src/pages/me";
import Summary from "src/pages/summary";

import getLocalStorage from "src/helper/getLocalStorage";

import Footer from "src/components/footer";
import Navbar from "src/components/navbar";

export function App() {
  const budget = useSignal(JSON.parse(localStorage.getItem("budget")) || 10000);
  const expenses = useSignal(
    getLocalStorage() || [
      {
        id: uuidv4(),
        name: "Lorem",
        amount: 300,
        date: new DayJS(),
        category: "food",
      },
      {
        id: uuidv4(),
        name: "Ipsum",
        amount: 6000,
        date: new DayJS(),
        category: "shopping",
      },
      {
        id: uuidv4(),
        name: "Ipsum",
        amount: 300,
        date: new DayJS().day(0),
        category: "transportation",
      },
      {
        id: uuidv4(),
        name: "Ipsum",
        amount: 400,
        date: new DayJS().endOf("month"),
        category: "transportation",
      },
      {
        id: uuidv4(),
        name: "Ipsum",
        amount: 1000,
        date: new DayJS().startOf("month"),
        category: "transportation",
      },
    ]
  );

  effect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [expenses, budget]);

  return (
    <main class='flex flex-col gap-24 h-screen justify-between'>
      <section class=''>
        <Navbar />
        <Router>
          <Home path='/' />
          <Me path='/me' expenses={expenses} budget={budget} />
          <Summary path='/me/summary/:timeSpan' expenses={expenses} />
        </Router>
      </section>
      <Footer />
    </main>
  );
}
