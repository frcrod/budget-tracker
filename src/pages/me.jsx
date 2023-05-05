import { useSignal } from "@preact/signals";

import TimeSpanButton from "src/components/time-span-button";

export default function Me() {
  const timeSpan = useSignal("today");

  return (
    <section class='px-6'>
      <header class='flex justify-between'>
        <TimeSpanButton timeSpan={timeSpan} value='today' />
        <TimeSpanButton timeSpan={timeSpan} value='this-week' />
        <TimeSpanButton timeSpan={timeSpan} value='this-month' />
      </header>
    </section>
  );
}
