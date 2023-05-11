import { yupResolver } from "@hookform/resolvers/yup";
import { batch, useSignal } from "@preact/signals";
import DayJS from "dayjs";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";

import CategoryButton from "src/components/category-button";

export default function ExpenseForm(props) {
  const category = useSignal("food");

  const expenseSchema = object({
    name: string().required("Name is required").min(2),
    amount: number().positive().typeError("Amount is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: yupResolver(expenseSchema) });

  const onSubmit = (data) => {
    addExpense(
      { name: data.name, amount: data.amount, category: category.value },
      props.expenses
    );
    setFocus("name", { shouldSelect: true });
    reset();
  };

  const addExpense = (expense, expenses) => {
    batch(() => {
      expenses.value = [
        ...expenses.value,
        { ...expense, id: crypto.randomUUID(), date: new DayJS() },
      ];
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} class={`${props.class} rounded `}>
      <div class='w-full'>
        <div className='form-control w-full '>
          <label className='label'>
            <span
              className={`label-text ${errors?.name?.type && "text-red-500"}`}
            >
              Name
            </span>
          </label>
          <input
            type='text'
            placeholder='Enter name'
            className={`input w-full input-bordered ${
              errors?.name?.type && "input-error"
            }`}
            {...register("name", { required: true, minLength: 2 })}
          />
          <label className='label py-0 my-1'>
            {errors?.name?.message && (
              <span className='first-letter:capitalize label-text-alt text-red-500'>
                {errors?.name?.message}
              </span>
            )}
          </label>
        </div>
        <div className='form-control mb-2'>
          <label className='label'>
            <span
              className={`label-text ${errors?.amount?.type && "text-red-500"}`}
            >
              Enter amount
            </span>
          </label>
          <label className='input-group'>
            <input
              type='number'
              placeholder='100'
              className={`input w-full input-bordered ${
                errors?.amount?.type === "required" && "input-error"
              }`}
              {...register("amount", { required: true, min: 1 })}
            />
            <span class='bg-base-200'>PHP</span>
          </label>
          {errors?.amount?.message && (
            <span className='first-letter:capitalize label-text-alt text-red-500 mt-1 ms-1'>
              {errors?.amount?.message}
            </span>
          )}
        </div>
        <section class='grid grid-cols-2 md:grid-cols-3 gap-5 place-items-center mb-2 grid-flow-dense'>
          <CategoryButton category={category} value='food' />
          <CategoryButton category={category} value='transportation' />
          <CategoryButton category={category} value='utilities' />
          <CategoryButton category={category} value='shopping' />
          <CategoryButton category={category} value='entertainment' />
          <CategoryButton category={category} value='health' />
          <CategoryButton category={category} value='self-care' />
          <CategoryButton category={category} value='others' />
        </section>
        <section class='flex justify-items-center'>
          <input
            type='submit'
            value='Submit'
            className='btn py-2 px-7 btn-wide btn-sm mx-auto btn-primary self-center font-bold'
          />
        </section>
      </div>
    </form>
  );
}
