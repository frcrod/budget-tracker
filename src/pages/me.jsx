import { useComputed, useSignal } from "@preact/signals";
import DayJS from "dayjs";

import ExpenseForm from "src/components/expense-form";
import ExpensePieChart from "src/components/expense-pie-chart";
import ExpenseTable from "src/components/expense-table";
import PersonalBudgetForm from "src/components/personal-budget-form";
import TimeSpanButton from "src/components/time-span-button";

export default function Me(props) {
  const timeSpan = useSignal("today");

  const currentDate = DayJS();
  const startOfTheWeek = currentDate.startOf("week").add(1, "day");
  const endOfTheWeek = currentDate.endOf("week").add(1, "day");

  const weekDays = useComputed(
    () => `${startOfTheWeek.format("MMMM D")}-${endOfTheWeek.format("MMMM D")}`
  );

  return (
    <div class='drop-shadow-md flex flex-col justify-items-center'>
      <h1 class='text-center text-5xl my-6 drop-shadow-lg shadow-primary'>
        Budget Tracker
      </h1>
      <div class='md:card md:card-compact bg-base-100 shadow-md px-8 py-6 md:mx-6 items-center'>
        <section class='px-6 w-full'>
          <header class='flex justify-between pb-2'>
            <TimeSpanButton timeSpan={timeSpan} value='today' />
            <TimeSpanButton timeSpan={timeSpan} value='this-week' />
            <TimeSpanButton timeSpan={timeSpan} value='this-month' />
          </header>
          <div className='divider'></div>
          <div class='grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 justify-evenly h-min md:justify-between place-items-center'>
            <div className='stats drop-shadow-md bg-rose-100 w-min rounded-3xl h-min place-self-center lg:place-self-start lg:self-center p-3'>
              <div className='stat text-center'>
                <div className='stat-title text-4xl font-bold'>
                  {timeSpan.value === "today" && currentDate.format("MMMM")}
                  {timeSpan.value === "this-week" && currentDate.format("MMMM")}
                </div>
                <div className='stat-value text-6xl text-secondary-focus'>
                  {timeSpan.value === "today" && currentDate.format("d")}
                  {timeSpan.value === "this-week" && `1`}
                  {timeSpan.value === "this-month" &&
                    currentDate.format("MMMM")}
                </div>
                <div className='stat-desc text-2xl text-sm'>
                  {timeSpan.value === "today" && currentDate.format("dddd")}
                  {timeSpan.value === "this-week" && weekDays}
                  {timeSpan.value === "this-month" &&
                    currentDate.format("YYYY")}
                </div>
              </div>
            </div>
            <ExpenseForm expenses={props.expenses} class='' />
            <PersonalBudgetForm
              budget={props.budget}
              expenses={props.expenses}
              timeSpan={timeSpan}
            >
              <ExpensePieChart expenses={props.expenses} timeSpan={timeSpan} />
            </PersonalBudgetForm>
          </div>
          <div className='divider'></div>
        </section>
        <ExpenseTable expenses={props.expenses} timeSpan={timeSpan} />
      </div>
      {/* <Link href={`/me/summary/${timeSpan.value}`} class='mt-7 mx-auto'>
        <button class='btn btn-primary btn-wide rounded-full mx-auto'>
          Summary
        </button>
      </Link> */}
    </div>
  );
}
