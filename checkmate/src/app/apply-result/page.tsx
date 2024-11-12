"use client";
import FoodMenuItem from "@/components/FoodMenu";
import { foodInfo } from "@/constants/foodInfo";
import styled from "@emotion/styled";

const ApplyResult = () => {
  return (
    <main style={{ position: "relative", height: "97vh" }}>
      <FoodDetailContainer>
        <FoodMainInfo>
          <StoreName>피코크</StoreName>
          <FoodName>피코크 통살 닭다리구이 간장맛</FoodName>
        </FoodMainInfo>
        <ResultBox>
          <div style={{ display: "flex", gap: "2px" }}>
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
  color: "#009D6E";
  font-size: 35x;
  font-weight: 800;
`;

const SmallTitle = styled.div`
  color: gray;
  font-size: 12x;
`;

const SmallByte = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const ResultBox = styled.div`
  background-color: #ffd4d3;
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
