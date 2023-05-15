import DayJS from "dayjs";

export default function getExpensesFromLocal() {
  const expenses = JSON.parse(localStorage.getItem("expenses"));

  if (expenses == null) return null;

  return expenses.map((expense) => {
    const date = DayJS(expense.date);

    delete expense.date;
    return { ...expense, date };
  });
}
