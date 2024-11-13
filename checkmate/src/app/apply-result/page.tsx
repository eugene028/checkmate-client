"use client";
import FoodMenuItem from "@/components/FoodMenu";
import { foodInfo } from "@/constants/foodInfo";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ApplyResult = () => {
  const router = useRouter();
  return (
    <main style={{ position: "relative", height: "97vh" }}>
      <FoodDetailContainer>
        <FoodMainInfo>
          <StoreName>피코크</StoreName>
          <FoodName>피코크 통살 닭다리구이 간장맛</FoodName>
        </FoodMainInfo>
        <ResultBox>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <NumberTitle>+10</NumberTitle>
            <SmallByte>mg/dL</SmallByte>
          </div>
          혈당 스파이크가 발생하지 않아요.
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
            건강하고 균형 잡힌 식사를 하셨군요! 적절한 탄수화물과 단백질을 갖고
            있는 식사는 혈당을 천천히 오르게 해 스파이크를 발생시키지 않아요!
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
            bottom: "70px",
            left: "0px",
          }}
        >
          확인했어요
        </Button>
      </FoodDetailContainer>
    </main>
  );
};

export default ApplyResult;

const FoodDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FoodMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  color: #009d6e;
  font-size: 35px;
  font-weight: 800;
`;

const SmallTitle = styled.div`
  color: gray;
`;

const SmallByte = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: gray;
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
