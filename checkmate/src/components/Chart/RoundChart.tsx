"use client";
import { PieChart } from "@mui/x-charts/PieChart";

const RoundChart = () => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        flex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "24%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontWeight: 400,
            fontSize: "13px",
          }}
        >
          오늘의 당류 섭취
        </span>
        <span
          style={{
            fontWeight: 700,
            fontSize: "21px",
          }}
        >
          28g
        </span>
      </div>

      <PieChart
        className=""
        width={250}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "50px",
          transform: "translate(50,50)",
          "& g": {
            marginLeft: "20px",
            textAlign: "center",
          },
        }}
        height={220}
        slotProps={{
          legend: {
            hidden: true,
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }}
        series={[
          {
            data: [
              { id: 1, value: 20, label: "크루아상", color: "#D73846" },
              { id: 2, value: 40, label: "부라보콘", color: "#FC6678" },
            ],
            innerRadius: 50,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
          },
        ]}
      />
    </div>
  );
};

export default RoundChart;
