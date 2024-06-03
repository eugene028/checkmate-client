"use client";
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "emphasis" | "outline";
  label: string;
}

const Chip = ({ variant = "default", label, ...rest }: ChipProps) => {
  return (
    <ChipContainer variant={variant} {...rest}>
      {label}
    </ChipContainer>
  );
};

export default Chip;

const ChipContainer = styled.div<{
  variant: "default" | "emphasis" | "outline";
}>`
  background-color: ${({ variant }) =>
    variant === "default"
      ? "#FFD4D3"
      : variant === "emphasis"
      ? "#FBB1B0"
      : "#ffffff"};
  border: 1px solid
    ${({ variant }) => (variant === "outline" ? "#FBB1B0" : "none")};
  min-width: 3.75rem;
  width: fit-content;
  border-radius: 1.5rem;
  font-size: 13px;
  font-weight: 600;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
`;
