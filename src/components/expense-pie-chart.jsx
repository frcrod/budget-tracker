import { useComputed } from "@preact/signals";
import DayJS from "dayjs";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function ExpensePieChart(props) {
  const currentDate = new DayJS();
  const COLORS = ["#a8a29e", "#f0abfc", "#fda4af", "#f9a8d4", "#fce7f3"];

  const totalExpenses = useComputed(() => {
    const total = {};

    props.expenses.value
      .filter((expense) => {
        switch (props.timeSpan.value) {
          case "today":
            // code block
            return currentDate.isSame(expense.date, "day");
            break;
          case "this-week":
            return currentDate.isSame(expense.date, "week");
            // code block
            break;
          case "this-month":
            // code block
            return currentDate.isSame(expense.date, "month");
            break;
        }
      })
      .forEach((expense) => {
        if (total[expense.category]) {
          total[expense.category] += expense.amount;
        } else {
          total[expense.category] = expense.amount;
        }
      });

    return Object.entries(total).map(([category, total]) => {
      return { category, total };
    });
  });

  const renderCustomizedLabel = ({ x, y, name }) => {
    return (
      <text
        x={x}
        y={y}
        className='text-xs capitalize font-bold text-gray-600'
        dominantBaseline='central'
        textAnchor='middle'
      >
        {name.replace("-", " ")}
      </text>
    );
  };

  return (
    <ResponsiveContainer height='75%'>
      <PieChart outerRadius={90} width={730} height={600}>
        <Pie
          data={totalExpenses.value}
          dataKey='total'
          nameKey='category'
          fill='#8884d8'
          fillOpacity={0.6}
          paddingAngle={5}
          outerRadius={80}
          labelLine={false}
          innerRadius={60}
          dot={true}
          label={renderCustomizedLabel}
        >
          {totalExpenses.value.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className={`stroke-base-200`}
              />
            );
          })}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
