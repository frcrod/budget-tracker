import { useComputed } from "@preact/signals";

export default function TimeSpanButton(props) {
  const timeSpanButtonOnClick = (event) => {
    props.timeSpan.value = event.target.value;
  };

  const valueNormalized = useComputed(() => props.value.replace(/-/g, " "));

  return (
    <button
      class={`btn font-bold ${
        props.timeSpan.value === props.value ? "btn-primary" : "btn-ghost"
      }`}
      onClick={timeSpanButtonOnClick}
      value={props.value}
    >
      {valueNormalized}
    </button>
  );
}
