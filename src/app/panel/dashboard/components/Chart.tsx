"use client";
import Highcharts from "highcharts";
import Highcharts3D from "highcharts/highcharts-3d";
import HighchartsReact from "highcharts-react-official";

Highcharts3D(Highcharts);

type HighchartsDataItem = {
  name: string;
  y: number;
};

const Chart: React.FC<{ data: Record<string, number> }> = ({ data }) => {
  const formattedData: HighchartsDataItem[] = Object.entries(data).map(
    ([name, y]) => ({
      name,
      y,
    })
  );

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
      },
      renderTo: "container",
    },
    title: {
      text: "میزان اطلاعات سایت",
      align: "center",
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
      },
    },
    series: [
      {
        type: "pie",
        name: "Medals",
        data: formattedData,
      },
    ],
  };

  return (
    <div
      id="container"
      className="width-[100%] height-[400px] mt-[50px] mb-[20px] rounded-xl"
    >
      <HighchartsReact
        key={JSON.stringify(data)}
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default Chart;
