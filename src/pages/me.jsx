import { useSignal } from "@preact/signals";

import ExpenseForm from "src/components/expense-form";
import TimeSpanButton from "src/components/time-span-button";

export default function Me() {
  const timeSpan = useSignal("today");

  return (
    <div class='drop-shadow-md'>
      <h1 class='text-center text-5xl my-6 drop-shadow-md'>Budget Tracker</h1>
      <div class='card card-compact bg-base-100 shadow-md px-8 py-6 mx-6'>
        <section class='px-6'>
          <header class='flex justify-between pb-2'>
            <TimeSpanButton timeSpan={timeSpan} value='today' />
            <TimeSpanButton timeSpan={timeSpan} value='this-week' />
            <TimeSpanButton timeSpan={timeSpan} value='this-month' />
          </header>
          <div className='divider'></div>
          <div class='flex flex-wrap-reverse justify-between'>
            <ExpenseForm />
            <form class='self-start bg-base-100 py-3 px-4 rounded'>
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
        <div className='overflow-x-auto rounded px-6 py-6'>
          <table className='table w-full'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
