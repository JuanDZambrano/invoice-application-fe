interface TreemapPayload {
  payload: {
    root: {
      name: string;
    };
    name: string;
  };
  value: number;
}

export interface ICustomTooltip {
  active?: boolean;
  payload?: TreemapPayload[];
}

export const CustomTooltip = ({ active, payload }: ICustomTooltip) => {
  if (active && payload && payload.length) {
    return (
      <div className="treemap-custom-tooltip">
        <p>{`${payload[0].payload.root.name}`}</p>
        <p>{`${payload[0].payload.name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
