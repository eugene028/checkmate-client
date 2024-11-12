"use client";
import FoodMenuItem from "@/components/FoodMenu";
import { autoMenuList, detailMenu } from "@/constants/foodMenu";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { Dispatch, SetStateAction, useState } from "react";

const FoodList = ({
  foodValue,
  setSelectedFoodList,
}: {
  foodValue: string;
  setSelectedFoodList: Dispatch<SetStateAction<Set<string>>>;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <FoodListContainer>
      <CustomFoodContainer>
        <CustomFoodTitle>
          <span style={{ fontSize: "12px", color: "gray" }}>직접 등록하기</span>
          <div style={{ fontSize: "15px", color: "black" }}>{foodValue}</div>
        </CustomFoodTitle>
        <Button
          variant="outlined"
          sx={{ color: "#fc6678", borderColor: "#FC6678" }}
        >
          등록하기
        </Button>
      </CustomFoodContainer>
      {selectedCategory.length > 0 && foodValue.length > 0 && (
        <DetailMenuContainer>
          {detailMenu.map(({ id, name, sub }) => (
            <div
              key={id}
              onClick={() => {
                setSelectedFoodList((prev) => {
                  const newSet = new Set(prev);
                  if (newSet.has(name)) {
                    newSet.delete(name);
                  } else {
                    newSet.add(name);
                  }
                  return newSet; // Return the new Set instance
                });
              }}
            >
              <FoodMenuItem
                label={name}
                subLabel={sub}
                rightElement={
                  <ArrowLeftIcon
                    style={{ rotate: "180deg", color: "#fc6678" }}
                  />
                }
              />
            </div>
          ))}
        </DetailMenuContainer>
      )}
      {autoMenuList.map(({ id, name }) => (
        <div
          key={id}
          onClick={() => {
            setSelectedCategory(name);
          }}
        >
          <FoodMenuItem label={name} />
        </div>
      ))}
    </FoodListContainer>
  );
};

export default FoodList;

const FoodListContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 99;
  background-color: white;
  height: 100%;
`;

const CustomFoodContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 0px 8px;
`;

const CustomFoodTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DetailMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  width: 100%;
  background-color: white;
  z-index: 999;
`;
