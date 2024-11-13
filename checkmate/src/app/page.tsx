import StickyHeader from "../components/StickyHeader";
import AlertBox from "@/components/AlertBox";
import FoodBox from "@/components/FoodBox";
import { Divider } from "@mui/material";
import Chip from "@/components/Chip";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import MainPageDatePicker from "@/components/DatePicker";
import RoundChart from "@/components/Chart/RoundChart";
import { checkUserAgent } from "@/utils/checkUserAgent";

export default function Home() {
  const isDesktop = checkUserAgent() === "desktop";
  return (
    <main style={{ paddingTop: "10px" }}>
      {/* <StickyHeader /> */}
      <MainPageDatePicker />
      <div
        style={{
          padding: "0px 1rem",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            width: "100%",
            height: "50%",
            overflow: "scroll",
          }}
        >
          <FoodBox
            imgSrc="/img/croisant.png"
            brandName="빠리바게트"
            foodName="크루아상"
            glucose={20}
            sugars={5}
            calorie={114}
            eatTime="12:00"
          />
          <FoodBox
            imgSrc="/img/ice_cream.png"
            brandName="롯데제과"
            foodName="부라보콘"
            glucose={36}
            sugars={23}
            calorie={270}
            eatTime="15:00"
          />
        </div>
        <AlertBox
          leftElement={
            <Image src="/img/Run.png" width={40} height={43} alt="run" />
          }
          mainMessage="혈당 스파이크 예방하기"
          subMessage="급격한 혈당이 오르는 것을 방지해요!"
        />
      </div>
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        style={{ margin: "1.25rem 0px" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 2rem 0px 2rem",
            gap: "1rem",
            minWidth: "200px",
            marginBottom: "1rem",
          }}
        >
          <div>
            <div style={{ fontSize: "18px", fontWeight: 700 }}>
              목표 당 설정기준보다
            </div>
            <div>
              <span
                style={{ fontSize: "18px", fontWeight: 700, color: "#FC6678" }}
              >
                3g{" "}
              </span>
              <span style={{ fontSize: "18px", fontWeight: 700 }}>
                더 섭취했어요. 🫠
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            <Chip variant="outline" label="스파이크 1회  발생 🗯️" />
            <Chip variant="outline" label="총 384kcal 섭취" />
            <Chip variant="outline" label="2회의 운동 🏃‍♀️" />
          </div>
          <RoundChart />
        </div>
      </div>
      <div style={{ fontSize: "15px", fontWeight: 600, padding: "0px 2rem" }}>
        하루 권장 칼로리의{" "}
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#FC6678" }}>
          20%를
        </span>{" "}
        간식으로 소비했어요.
      </div>
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        style={{ margin: "1.25rem 0px" }}
      />
      {isDesktop ? <Navigation /> : <></>}
    </main>
  );
}
