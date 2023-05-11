import { effect, useComputed } from "@preact/signals";
import DayJS from "dayjs";
import { useForm } from "react-hook-form";

export default function PersonalBudgetForm(props) {
  const { register, handleSubmit, setValue } = useForm();
  const currentDate = useComputed(() => new DayJS());

  const onSubmit = (data) => {
    switch (props.timeSpan.value) {
      case "today":
        // code block
        return (props.budget.value = data.budget * 30);
        break;
      case "this-week":
        return (props.budget.value = data.budget * 4.348214);
        // code block
        break;
      case "this-month":
        // code block
        return (props.budget.value = data.budget);
        break;
    }
  };

  const totalExpenses = useComputed(() =>
    props.expenses.value
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
      .reduce((acc, expense) => {
        return acc + expense.amount;
      }, 0)
  );

  const timeSpanBudget = {
    today: props.budget.value / 30,
    "this-week": props.budget.value / 7,
    "this-month": props.budget.value,
  };

  effect(
    () => setValue("budget", Math.floor(timeSpanBudget[props.timeSpan.value])),
    [props.budget.value]
  );

  return (
    <form
      class='self-start bg-base-100 w-10/12 lg:w-max py-3 px-4 rounded place-items-center h-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='form-control mx-auto'>
        <label className='label'>
          <span className='label-text font-bold text-neutral text-left'>
            Personal Budget
          </span>
        </label>
        <label className='input-group'>
          <input
            type='text'
            placeholder='0.01'
            className={`input input-sm input-bordered bg-transparent font-bold px-0 indent-1 border-0 ${
              totalExpenses.value > timeSpanBudget[props.timeSpan.value] &&
              "text-red-500"
            }`}
            {...register("budget", { required: true })}
          />
          <span class='bg-transparent'>PHP</span>
        </label>
        {totalExpenses.value > timeSpanBudget[props.timeSpan.value] && (
          <label className='label'>
            <span className='label-text-alt'>{`You're ${Math.floor(
              totalExpenses.value - timeSpanBudget[props.timeSpan.value]
            )} above ${props.timeSpan.value.replace("-", " ")}'s budget`}</span>
          </label>
        )}
      </div>
      {props.children}
    </form>
  );
}
