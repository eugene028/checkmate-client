"use client";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { HTMLAttributes, ReactNode } from "react";

interface AlertBoxProps extends HTMLAttributes<HTMLDivElement> {
  leftElement: ReactNode;
  mainMessage: string;
  subMessage: string;
  rightElement?: ReactNode;
}

const AlertBox = ({
  rightElement,
  mainMessage,
  subMessage,
  leftElement,
  ...rest
}: AlertBoxProps) => {
  return (
    <AlertBoxContainer {...rest}>
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {leftElement}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span style={{ fontWeight: "800", fontSize: "15px" }}>
            {mainMessage}
          </span>
          <span style={{ fontSize: "12px" }}>{subMessage}</span>
        </div>
        {rightElement}
      </div>
    </AlertBoxContainer>
  );
};

const AlertBoxContainer = styled.div`
  width: 100%;
  border-radius: 1.25rem;
  padding: 0.625rem 0.75rem;
  display: flex;
  background-color: #ffd4d3;
  border: 1px solid #fc6678;
  align-items: center;
  justify-content: space-between;
`;

export default AlertBox;
