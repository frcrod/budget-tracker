import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSignal } from "@preact/signals";
import DayJS from "dayjs";

export default function ExpenseTable(props) {
  const [divRef] = useAutoAnimate();
  const [tableRef] = useAutoAnimate();
  const currentDate = useSignal(DayJS());

  const removeExpense = (id, expenses) => {
    console.log(id, expenses.value);
    expenses.value = expenses.value.filter((expense) => expense.id !== id);
    console.log(id, expenses.value);
  };

  const editExpense = (id, newExpense, expenses) => {
    expenses.value.forEach((expense, index) => {
      if (expense.id === id) {
        expenses.value[index] = newExpense;
      }
    });
  };

  return (
    <div
      className='overflow-x-auto overflow-y-hidden rounded px-6'
      ref={divRef}
    >
      {props.expenses.value.length ? (
        <table className='table w-full table-fixed mb-3'>
          {/* head */}
          <thead>
            <tr>
              <th class='w-max px-5'></th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody ref={tableRef}>
            {props.expenses.value
              .filter((expense) => {
                switch (props.timeSpan.value) {
                  case "today":
                    // code block
                    return currentDate.value.isSame(expense.date, "day");
                    break;
                  case "this-week":
                    return currentDate.value.isSame(expense.date, "week");
                    // code block
                    break;
                  case "this-month":
                    // code block
                    return currentDate.value.isSame(expense.date, "month");
                    break;
                }
              })
              .map((expense, index) => (
                <tr key={expense.id}>
                  <th>{Number(index) + 1}</th>
                  <td>{expense.name}</td>
                  <td>₱ {expense.amount}</td>
                  <td>{expense.date.format("MMMM D YYYY")}</td>
                  <td class='capitalize'>{expense.category}</td>
                  <td class=''>
                    <button
                      class='btn btn-outline btn-error'
                      onClick={() => removeExpense(expense.id, props.expenses)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className='alert drop-shadow-sm mb-2'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='stroke-primary flex-shrink-0 text-black w-10 h-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <div>
              <h3 className='font-bold'>
                There are currently no recorded expenses
              </h3>
              <span class=''>
                As of now, there are no expenses that have been recorded or
                documented in the expense list. The list remains empty and
                devoid of any financial transactions or expenditures. It could
                indicate that there have been no expenses incurred during the
                specified period or that none have been added to the list yet.
                Regardless, the current state of the expense list is that it
                does not contain any entries related to expenses.
              </span>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
}
