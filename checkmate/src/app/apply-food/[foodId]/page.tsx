"use client";
import { foodInfo } from "@/constants/foodInfo";
import styled from "@emotion/styled";
import { TextField, Button } from "@mui/material";
import LineChart from "@/components/Chart/LineChart";
import FoodMenuItem from "@/components/FoodMenu";
const FoodDetailPageInfo = () => {
  return (
    <main style={{ position: "relative", height: "97vh" }}>
      <FoodDetailContainer>
        <FoodMainInfo>
          <StoreName>피코크</StoreName>
          <FoodName>피코크 통살 닭다리구이 간장맛</FoodName>
        </FoodMainInfo>
        <TextField
          label="인분"
          placeholder="음식명을 입력해주세요."
          defaultValue={1}
          variant="filled"
          fullWidth
          sx={{ color: "pink", backgroundColor: "#FFD4D3" }}
        />
        <DetailInfoBox>
          <SmallTitle>영양 성분</SmallTitle>
          <DetailInfoList>
            {foodInfo.map(({ name, value }) => (
              <FoodMenuItem label={name} subLabel={`${value}g`} />
            ))}
          </DetailInfoList>
        </DetailInfoBox>
        <GraphBox>
          <SmallTitle>혈당 예측</SmallTitle>
          <LineChart />
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              color: "white",
              backgroundColor: "#FC6678",
              position: "absolute",
              bottom: "40px",
              left: "0px",
            }}
          >
            선택하기
          </Button>
        </GraphBox>
      </FoodDetailContainer>
    </main>
  );
};

export default FoodDetailPageInfo;

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

const SmallTitle = styled.div`
  color: gray;
  font-size: 12x;
`;

const FoodDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DetailInfoBox = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const DetailInfoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
`;

const GraphBox = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
