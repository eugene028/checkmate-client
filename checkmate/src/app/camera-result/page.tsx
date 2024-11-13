"use client";
import FoodMenuItem from "@/components/FoodMenu";
import { foodInfo } from "@/constants/foodInfo";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const CameraResult = () => {
  const router = useRouter();
  return (
    <main style={{ position: "relative", height: "97vh" }}>
      <FoodDetailContainer>
        <FoodMainInfo>
          <StoreName>코카콜라</StoreName>
          <FoodName>코카콜라</FoodName>
        </FoodMainInfo>
        <ResultBox>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <NumberTitle>+30</NumberTitle>
            <SmallByte>mg/dL</SmallByte>
          </div>
          혈당 스파이크가 발생해요.
        </ResultBox>
        <SmallTitle>영양 성분</SmallTitle>
        <DetailInfoList>
          {foodInfo.map(({ name, value }) => (
            <FoodMenuItem label={name} subLabel={`${value}g`} />
          ))}
        </DetailInfoList>
        <div>
          <SmallTitle>음식 한마디</SmallTitle>
          <div style={{ padding: "10px", wordBreak: "break-word" }}>
            식사 후에 산책하면 혈당이 빠르게 낮아지고 소화도 잘돼서
            일석이조예요.
            <br />
            당류가 높은 간식 대신, 견과류와 같은 혈당에 긍정적인 영향을 끼치는
            <br />
            음식을 섭취하는 것을 권장드려요!
          </div>
        </div>
        <Button
          onClick={() => {
            router.push("/");
            if (window.ReactNativeWebView)
              window.ReactNativeWebView.postMessage("goHome");
          }}
          variant="contained"
          fullWidth
          size="large"
          sx={{
            color: "white",
            backgroundColor: "#FC6678",
            position: "absolute",
            bottom: "60px",
            left: "0px",
          }}
        >
          확인했어요
        </Button>
      </FoodDetailContainer>
    </main>
  );
};

export default CameraResult;

const FoodMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FoodDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StoreName = styled.div`
  font-size: 16px;
  color: gray;
`;

const FoodName = styled.div`
  font-size: 23px;
  color: black;
  font-weight: 700;
`;

const NumberTitle = styled.div`
  color: red;
  font-size: 35px;
  font-weight: 800;
`;

const SmallTitle = styled.div`
  color: gray;
`;
const SmallByte = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const ResultBox = styled.div`
  background-color: #ffd4d3;
  padding: 10px;
  opacity: 30;
  border: 1px solid #fbb1b0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  gap: 5px;
  flex-direction: column;
`;

const DetailInfoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
`;
