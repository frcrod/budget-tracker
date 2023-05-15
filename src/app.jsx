import { effect, useSignal } from "@preact/signals";
import DayJS from "dayjs";
import AsyncRoute from "preact-async-route";
import { Router } from "preact-router";
import { v4 as uuidv4 } from "uuid";

import Home from "src/pages/home";

import getExpensesFromLocal from "src/helper/getExpensesFromLocal";

import Footer from "src/components/footer";
import Loading from "src/components/loading";
import Navbar from "src/components/navbar";

export function App() {
  const budget = useSignal(JSON.parse(localStorage.getItem("budget")) || 10000);
  const expenses = useSignal(
    getExpensesFromLocal() || [
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
  const plannedExpenses = useSignal(
    JSON.parse(localStorage.getItem("plannedExpenses")) || {
      food: [{ id: uuidv4(), name: "Lorem", amount: 300 }],
      shopping: [{ id: uuidv4(), name: "Ipsum", amount: 6000 }],
    }
  );

  effect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("budget", JSON.stringify(budget));
    localStorage.setItem("plannedExpenses", JSON.stringify(plannedExpenses));
  }, [expenses, budget]);

  return (
    <main class='flex flex-col gap-24 h-screen justify-between'>
      <section class=''>
        <Navbar />
        <Router>
          <Home path='/' />
          <AsyncRoute
            path='/me'
            expenses={expenses}
            budget={budget}
            getComponent={() =>
              import("src/pages/me").then((module) => module.default)
            }
            loading={() => <Loading />}
          />
          <AsyncRoute
            path='/me/summary/:timeSpan'
            expenses={expenses}
            getComponent={() =>
              import("src/pages/summary").then((module) => module.default)
            }
          />
          <AsyncRoute
            path='/me/budget-planner'
            expenses={expenses}
            plannedExpenses={plannedExpenses}
            budget={budget}
            getComponent={() =>
              import("src/pages/budget-planner").then(
                (module) => module.default
              )
            }
            loading={() => <Loading />}
          />
          <AsyncRoute
            path='/budget-tips'
            getComponent={() =>
              import("src/pages/budget-tips").then((module) => module.default)
            }
          />
          <AsyncRoute
            path='/about-us'
            getComponent={() =>
              import("src/pages/about-us").then((module) => module.default)
            }
          />
        </Router>
      </section>
      <Footer />
    </main>
  );
}
