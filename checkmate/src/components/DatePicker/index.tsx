"use client";
import React from "react";
import dayjs from "dayjs";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  datePicker: {
    "& .MuiOutlinedInput-root": {
      height: "40px",

      "& .MuiInputAdornment-root": {
        marginRight: "4px",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "20px",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FC6678", // 포커스된 아웃라인 색상
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#FC6678", // 포커스된 라벨 색상
    },
    "& .MuiPickersDay-daySelected": {
      backgroundColor: "#FC6678", // 선택된 날짜 배경 색상
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FBB1B0", // 아웃라인 색상 변경
    },
  },
});

const MainPageDatePicker = () => {
  const classes = useStyles();
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
          className={classes.datePicker}
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
