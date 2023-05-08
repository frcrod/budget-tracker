import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function ExpenseTable(props) {
  const [divRef] = useAutoAnimate();
  const [tableRef] = useAutoAnimate();

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
            {props.expenses.value.map((expense, index) => (
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
              className='stroke-info flex-shrink-0 w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span>Currently empty...</span>
          </div>
        </div>
      )}{" "}
    </div>
  );
}
