"use client";
import styled from "@emotion/styled";
import Chip from "../Chip";
import Image from "next/image";

interface FoodBoxProps {
  imgSrc: string;
  brandName: string;
  foodName: string;
  glucose: number;
  sugars: number;
  calorie: number;
  eatTime: string;
}

const FoodBox = ({
  imgSrc,
  brandName,
  foodName,
  glucose,
  sugars,
  calorie,
  eatTime,
}: FoodBoxProps) => {
  return (
    <FoodBoxContainer>
      <Image src={imgSrc} width={95} height={95} alt="food" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#808080",
          }}
        >
          <span>{brandName}</span>
          <span>{eatTime}</span>
        </div>
        <span style={{ fontSize: "20px", fontWeight: 700 }}>{foodName}</span>
        <ChipWrapper>
          <Chip variant="default" label={`탄수 ${glucose}g`} />
          <Chip variant="default" label={`당 ${sugars}g`} />
          <Chip variant="emphasis" label={`${calorie}kcal`} />
        </ChipWrapper>
      </div>
    </FoodBoxContainer>
  );
};

export default FoodBox;

const FoodBoxContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 1.25rem;
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
