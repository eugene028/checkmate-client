"use client";
import FoodMenuItem from "@/components/FoodMenu";
import { LikedFoodMenu } from "@/constants/foodMenu";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import StarIcon from "@/assets/Icon/StarIcon";
import { useState } from "react";
import styled from "@emotion/styled";
import FoodList from "./components/FoodList";
import Chip from "@/components/Chip";
import { routePath } from "@/constants/routhPath";

const ApplyFoodPage = () => {
  const [food, setFood] = useState("");
  const router = useRouter();
  const [selectedFoodList, setSelectedFoodList] = useState<Set<string>>(
    new Set()
  );
  return (
    <main style={{ position: "relative", height: "97vh" }}>
      <TextField
        label="음식명 입력"
        placeholder="음식명을 입력해주세요."
        variant="standard"
        sx={{
          backgroundColor: "white",
          marginBottom: "15px",
          color: "pink",
        }}
        color="error"
        fullWidth
        onChange={(e) => {
          setFood(e.target.value);
        }}
      />
      <FoodResultContainer>
        {food.length > 0 && (
          <FoodList
            foodValue={food}
            setSelectedFoodList={setSelectedFoodList}
          />
        )}
        <span style={{ fontSize: "14px", color: "gray" }}>즐겨찾기한 음식</span>
        <div>
          {LikedFoodMenu.map(({ id, name }) => {
            return (
              <FoodMenuItem key={id} label={name} rightElement={<StarIcon />} />
            );
          })}
        </div>
      </FoodResultContainer>
      <FoodSelectedList>
        <FoodSelectedContainer>
          <span style={{ fontSize: "12px", color: "gray" }}>섭취한 음식</span>
          <FoodNameList>
            {selectedFoodList?.size > 0 ? (
              Array.from(selectedFoodList).map((data) => <Chip label={data} />)
            ) : (
              <div>섭취한 음식을 선택해주세요</div>
            )}
          </FoodNameList>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => {
              router.push(routePath["apply-result"]);
            }}
            sx={{
              color: "white",
              backgroundColor: "#FC6678",
              position: "absolute",
              bottom: "40px",
              left: "0px",
            }}
          >
            등록하기
          </Button>
        </FoodSelectedContainer>
      </FoodSelectedList>
    </main>
  );
};

export default ApplyFoodPage;

const FoodResultContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FoodSelectedList = styled.div`
  position: absolute;
  bottom: 20px;
  border-top: 1px solid lightgray;
  height: 167px;
  width: 100%;
  background-color: white;
`;

const FoodSelectedContainer = styled.div`
  position: relative;
  padding: 11px 0px;
  height: 100%;
`;

const FoodNameList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 5px;
`;
