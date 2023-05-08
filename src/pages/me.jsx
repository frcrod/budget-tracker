import { effect, useComputed, useSignal } from "@preact/signals";
import DayJS from "dayjs";

import ExpenseForm from "src/components/expense-form";
import ExpenseTable from "src/components/expense-table";
import TimeSpanButton from "src/components/time-span-button";

export default function Me() {
  const timeSpan = useSignal("today");
  const expenses = useSignal([
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
      amount: 300,
      date: new DayJS(),
      category: "transportation",
    },
  ]);

  const currentDate = DayJS();
  const startOfTheWeek = currentDate.startOf("week").add(1, "day");
  const endOfTheWeek = currentDate.endOf("week").add(1, "day");
  const weekDays = useComputed(
    () => `${startOfTheWeek.format("MMMM D")}-${endOfTheWeek.format("MMMM D")}`
  );

  return (
    <div class='drop-shadow-md'>
      <h1 class='text-center text-5xl my-6 drop-shadow-lg shadow-primary'>
        Budget Tracker
      </h1>
      <div class='card card-compact bg-base-100 shadow-md px-8 py-6 mx-6'>
        <section class='px-6'>
          <header class='flex justify-between pb-2'>
            <TimeSpanButton timeSpan={timeSpan} value='today' />
            <TimeSpanButton timeSpan={timeSpan} value='this-week' />
            <TimeSpanButton timeSpan={timeSpan} value='this-month' />
          </header>
          <div className='divider'></div>
          <div class='grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 justify-between gap-2 place-items-center'>
            <div className='stats shadow bg-rose-100 rounded-3xl w-34 place-self-center lg:place-self-start lg:self-center p-3'>
              <div className='stat text-center'>
                <div className='stat-title font-bold'>
                  {timeSpan.value === "today" && currentDate.format("MMMM")}
                  {timeSpan.value === "this-week" && currentDate.format("MMMM")}
                </div>
                <div className='stat-value text-secondary-focus'>
                  {timeSpan.value === "today" && currentDate.format("d")}
                  {timeSpan.value === "this-week" && `1`}
                  {timeSpan.value === "this-month" &&
                    currentDate.format("MMMM")}
                </div>
                <div className='stat-desc'>
                  {timeSpan.value === "today" && currentDate.format("dddd")}
                  {timeSpan.value === "this-week" && weekDays}
                  {timeSpan.value === "this-month" &&
                    currentDate.format("YYYY")}
                </div>
              </div>
            </div>
            <ExpenseForm expenses={expenses} class='' />
            <form class='self-start bg-base-100 w-10/12 lg:w-max py-3 px-4 rounded place-self-end'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold text-neutral text-left'>
                    Personal Budget
                  </span>
                </label>
                <label className='input-group'>
                  <input
                    type='text'
                    placeholder='0.01'
                    className='input input-sm input-bordered bg-transparent font-bold border-0 text-primary-content'
                  />
                  <span class='bg-transparent'>PHP</span>
                </label>
              </div>
            </form>
          </div>
          <div className='divider'></div>
        </section>
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
}
