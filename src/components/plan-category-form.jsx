import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { number, object, string } from "yup";

import { categories } from "src/helper/const";

export default function PlanCategoryForm(props) {
  const plannedExpenseSchema = object({
    name: string().required("Name is required").min(2),
    amount: number().positive().typeError("Amount is required"),
    category: string().oneOf(categories).required(),
  });
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(plannedExpenseSchema),
  });

  const addExpense = (newExpense, data) => {
    const temp = { ...props.plannedExpenses.value };

    if (props.plannedExpenses.value[data.category]) {
      temp[data.category] = [
        ...props.plannedExpenses.value[data.category],
        newExpense,
      ];
    } else temp[data.category] = [newExpense];

    return temp;
  };

  const onSubmit = (data) => {
    const newExpense = {
      id: uuidv4(),
      name: data.name,
      amount: data.amount,
    };

    props.plannedExpenses.value = addExpense(newExpense, data);
    setFocus("name", { shouldSelect: true });
    reset();
  };

  return (
    <form class='w-80' onSubmit={handleSubmit(onSubmit)}>
      <section class='flex flex-col gap-1 mb-2'>
        <input
          placeholder='Enter name'
          className={`input w-full input-bordered ${
            errors?.name?.type && "input-error"
          }`}
          {...register(`name`, { required: true })}
        />
        {errors?.name?.message && (
          <label className='label py-0 my-1'>
            <span className='first-letter:capitalize label-text-alt text-red-500'>
              {errors?.name?.message}
            </span>
          </label>
        )}
        <input
          placeholder='Enter amount'
          type='number'
          className={`input w-full input-bordered ${
            errors?.amount?.type && "input-error"
          }`}
          {...register(`amount`, { required: true })}
        />
        {errors?.amount?.message && (
          <label className='label py-0 my-1'>
            <span className='first-letter:capitalize label-text-alt text-red-500'>
              {errors?.amount?.message}
            </span>
          </label>
        )}
        <select
          className='select select-bordered w-full max-w-xs'
          {...register("category", { required: true })}
        >
          <option disabled selected>
            Select a category
          </option>
          {categories?.map((category) => {
            return (
              <option class='capitalize' value={category}>
                {category.replace("-", " ")}
              </option>
            );
          })}
        </select>
        {errors?.category?.message && (
          <label className='label py-0 my-1'>
            <span className='first-letter:capitalize label-text-alt text-red-500'>
              {errors?.category?.message}
            </span>
          </label>
        )}
        <button class='btn mt-1'>Submit</button>
      </section>
    </form>
  );
}
