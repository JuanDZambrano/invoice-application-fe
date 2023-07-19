import { ResponsiveContainer, Tooltip, Treemap } from "recharts";
import { CustomTooltip } from "./CustomTooltip";

const data = [
  {
    name: "Matricula ",
    children: [{ name: "Matricula", size: 1302 }],
  },
  {
    name: "Comidas",
    children: [
      { name: "Almuerzos", size: 2138 },
      { name: "Desayunos", size: 3824 },
    ],
  },
  {
    name: "Uniformes",
    children: [
      { name: "Sudadera", size: 20544 },
      { name: "Camiseta", size: 19788 },
      { name: "Pantalon", size: 10349 },
      { name: "Pantalonetas", size: 3301 },
    ],
  },
];

export const BestSellingTreemap = (): JSX.Element => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        width={400}
        height={400}
        aspectRatio={4 / 3}
        data={data}
        dataKey="size"
        stroke="#fff"
        fill="#035AA6"
      >
        <Tooltip content={<CustomTooltip />} />
      </Treemap>
    </ResponsiveContainer>
  );
};
