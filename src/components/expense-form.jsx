import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

import CategoryButton from "src/components/category-button";

export default function ExpenseForm() {
  const category = useSignal("food");
  const amount = useSignal();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit", amount.value, category.value);
  };

  const valueIsNumber = (value) => Number(value);
  return (
    <form onSubmit={onSubmit} class='rounded'>
      <div className='form-control mb-2'>
        <label className='input-group'>
          <span>Price</span>
          <input
            type='text'
            placeholder='10'
            className={`input input-bordered`}
            value={amount.value}
            onInput={(event) => (amount.value = event.target.value)}
          />
          <span>PHP</span>
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
        className='btn px-6 btn-sm btn-accent font-bold'
      />
    </form>
  );
}
