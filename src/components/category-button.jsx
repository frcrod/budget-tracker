export default function CategoryButton(props) {
  const categoryButtonClick = (event) => {
    props.category.value = event.target.value;
  };

  return (
    <>
      <button
        class={`btn btn-sm text-xs w-fit font-bold ${
          props.category.value === props.value ? "btn-secondary" : "btn-ghost"
        }`}
        onClick={categoryButtonClick}
        type='button'
        value={props.value}
      >
        {props.value}
      </button>
    </>
  );
}
