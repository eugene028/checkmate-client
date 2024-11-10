/** @jsxImportSource @emotion/react */

"use client";
import { ReactNode } from "react";
import { css } from "@emotion/react";

const FoodMenuItem = ({
  label,
  subLabel,
  rightElement,
}: {
  label: string;
  subLabel?: string;
  rightElement?: ReactNode;
}) => {
  return (
    <main>
      <div css={FoodMenuItemContainerStyle}>
        <div css={LabelContainer}>
          <div
            style={{
              fontSize: "14px",
              color: "black",
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "gray",
            }}
          >
            {subLabel}
          </div>
        </div>
        {rightElement}
      </div>
    </main>
  );
};

export default FoodMenuItem;

const FoodMenuItemContainerStyle = css`
  &:hover {
    background-color: rgba(251, 177, 176, 0.3);
  }
  cursor: pointer;
  height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid lightgray;
  align-items: center;
`;

const LabelContainer = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
