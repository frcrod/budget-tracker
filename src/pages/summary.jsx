import { computed, useSignal } from "@preact/signals";

import ExpensePieChart from "src/components/expense-pie-chart";

export default function Summary(props) {
  const categories = [
    "food",
    "shopping",
    "transportation",
    "utilities",
    "shopping",
    "entertainment",
    "self-care",
    "other",
  ];

  const timeSpan = useSignal(props.timeSpan || "today");

  return (
    <>
      <ExpensePieChart expenses={props.expenses} timeSpan={timeSpan} />
    </>
  );
}
