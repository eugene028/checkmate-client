"use client";
import React from "react";
import dayjs from "dayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const MainPageDatePicker = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        marginBottom: "1.25rem",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        gap: "10px",
      }}
    >
      <CalendarTodayIcon sx={{ color: "#FBB1B0", marginTop: "7px" }} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          sx={{
            "& .MuiOutlinedInput-root": { height: 40, borderColor: "#FBB1B0" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FBB1B0", // 아웃라인 색상 변경
            },
          }}
          label="날짜 선택"
          defaultValue={dayjs(new Date())}
          format="YY년 MM월 DD일"
          maxDate={dayjs(new Date())}
        />
      </LocalizationProvider>
    </div>
  );
};

export default MainPageDatePicker;
