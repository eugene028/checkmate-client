"use client";
import styled from "@emotion/styled";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AddIcon from "@mui/icons-material/Add";
import { MouseEventHandler, useState } from "react";
import { Fab } from "@mui/material";
const Navigation = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const menu = [
    {
      id: "home",
      icon: (
        <HomeRoundedIcon
          width={30}
          sx={{ color: selectedMenu === "home" ? "#D73846" : "#C7C7C7" }}
        />
      ),
      title: "홈",
    },

    {
      id: "predict",
      icon: (
        <QueryStatsRoundedIcon
          width={30}
          sx={{ color: selectedMenu === "predict" ? "#D73846" : "#C7C7C7" }}
        />
      ),
      title: "당뇨 예측하기",
    },
    {
      id: "floatingButton",
      icon: (
        <Fab
          sx={{
            backgroundColor: "#FC6678",
            color: "#ffffff",
            position: "absolute",
            top: 10,
            left: "43%",
            "&::hover": {
              background: "#D73846",
            },
          }}
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      ),
    },
    {
      id: "food-info",
      icon: (
        <FastfoodRoundedIcon
          width={30}
          sx={{ color: selectedMenu === "food-info" ? "#D73846" : "#C7C7C7" }}
        />
      ),
      title: "식품 정보 보기",
    },
    {
      id: "info",
      icon: (
        <PersonRoundedIcon
          width={30}
          sx={{ color: selectedMenu === "info" ? "#D73846" : "#C7C7C7" }}
        />
      ),
      title: "내 정보",
    },
  ];
  return (
    <NavigationContainer>
      <NavigationWrapper>
        {menu.map((item, index) => {
          if (item.id === "floatingButton") {
            return <FabWrapper>{item.icon}</FabWrapper>;
          } else {
            return (
              <NavigationItemWrapper
                key={`menuItem-${index}`}
                id={String(index)}
                onClick={(event) => {
                  const target = parseInt(event.currentTarget.id, 10);
                  if (target === 0) {
                    setSelectedMenu("home");
                  } else if (target === 1) {
                    setSelectedMenu("predict");
                  } else if (target === 3) {
                    setSelectedMenu("food-info");
                  } else if (target === 4) {
                    setSelectedMenu("info");
                  }
                }}
              >
                <div>{item.icon}</div>
                <div
                  style={{
                    color: selectedMenu === item.id ? "#D73846" : "#C7C7C7",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                >
                  {item.title}
                </div>
              </NavigationItemWrapper>
            );
          }
        })}
      </NavigationWrapper>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  max-width: var(--view-max-width);
  border-top: 1px solid "#D9d9d9";
  background-color: #ffffff;
`;

const NavigationWrapper = styled.div`
  position: fixed;
  display: flex;
  max-width: var(--view-max-width);
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  background-color: #ffffff;
  bottom: 0;
  z-index: 99;
  padding: 0px 0.625rem;
`;

const NavigationItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: "2px";
  justify-content: center;
  align-items: center;
`;

const FabWrapper = styled.div`
  display: relative;
  width: 20rem;
  height: 5rem;
`;

export default Navigation;
