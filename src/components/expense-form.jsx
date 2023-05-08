import { batch, useSignal } from "@preact/signals";
import DayJS from "dayjs";

import CategoryButton from "src/components/category-button";

export default function ExpenseForm(props) {
  const category = useSignal("food");
  const amount = useSignal();
  const name = useSignal();

  const onSubmit = (event) => {
    event.preventDefault();
    addExpense(
      { name: name.value, amount: amount.value, category: category.value },
      props.expenses
    );
  };

  const addExpense = (expense, expenses) => {
    batch(() => {
      expenses.value = [
        ...expenses.value,
        { ...expense, id: crypto.randomUUID(), date: new DayJS() },
      ];
      amount.value = "";
      name.value = "";
    });
  };

  const valueIsNumber = (value) => Number(value);
  return (
    <form onSubmit={onSubmit} class={`${props.class} rounded `}>
      <div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            value={name.value}
            onInput={(event) => (name.value = event.target.value)}
            required
          />
        </div>
        <div className='form-control mb-2'>
          <label className='label'>
            <span className='label-text'>Enter amount</span>
          </label>
          <label className='input-group'>
            <input
              type='number'
              placeholder='100'
              className='input input-bordered'
              value={amount.value}
              onInput={(event) => (amount.value = event.target.value)}
            />
            <span class='bg-base-200'>PHP</span>
          </label>
        </div>
        <section class='mb-2'>
          <CategoryButton category={category} value='food' />
          <CategoryButton category={category} value='transportation' />
          <CategoryButton category={category} value='utilities' />
          <CategoryButton category={category} value='shopping' />
        </section>
        <input
          type='submit'
          value='Submit'
          className='btn px-6 btn-sm btn-primary font-bold'
        />
      </div>
    </form>
  );
}
