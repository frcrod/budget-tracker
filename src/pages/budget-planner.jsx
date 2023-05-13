import { Link } from "preact-router";
import { useFieldArray, useForm } from "react-hook-form";

import { categories } from "src/helper/const";

import PlanCategoryForm from "src/components/plan-category-form";

export default function BudgetPlanner(props) {
  const generateCategoryKey = (category) =>
    `${category.at(0)}${category.at(1)}${category.at(
      category.length - 2
    )}${category.at(category.length - 1)}`;

  const deleteExpense = (id, category) => {
    const temp = { ...props.plannedExpenses.value };
    temp[category] = temp[category]?.filter((expense) => expense.id !== id);

    return temp;
  };

  const onDelete = (id, category) => {
    console.log(id, category);
    props.plannedExpenses.value = deleteExpense(id, category);
  };

  return (
    <div class='drop-shadow-md flex flex-col justify-items-center'>
      <h1 class='text-center text-5xl my-6 drop-shadow-lg shadow-primary'>
        Budget Planner
      </h1>
      <div class='md:card md:card-compact bg-base-100 shadow-md px-8 py-6 md:mx-6 items-center'>
        <div class='drop-shadow-sm flex justify-evenly flex-wrap gap-2 w-full'>
          <div class='flex flex-col p-4'>
            <span class='font-bold text-2xl py-2 text-center'>
              Monthly Budget
            </span>
            <span class='text-xl text-center'>{props.budget.value}</span>
          </div>
          <PlanCategoryForm plannedExpenses={props.plannedExpenses} />
        </div>
        <div class='flex flex-wrap px-6 w-full mt-4'>
          {categories?.map((category) => {
            return (
              <div
                key={generateCategoryKey(category)}
                className='flex flex-col w-6/12 my-2'
              >
                <span class='capitalize font-bold text-lg'>{category}</span>
                <ul>
                  {props.plannedExpenses.value[category]?.map((expense) => {
                    return (
                      <li class='flex gap-2 items-center my-2' key={expense.id}>
                        <span class='text-md'>{expense.name}</span>
                        <p class='badge badge-secondary badge-md'>
                          ₱{expense.amount}
                        </p>
                        <button
                          className='btn btn-circle btn-xs'
                          onClick={() => onDelete(expense.id, category)}
                        >
                          x
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <Link href={`/me`} class='mt-7 mx-auto'>
        <button class='btn btn-primary btn-wide rounded-full mx-auto'>
          Budget Tracker
        </button>
      </Link>
    </div>
  );
}
