"use client";
import styled from "@emotion/styled";
import { AlertIcon } from "@/assets/Icon/AlertIcon";
import { CheckMateLogo } from "@/assets/Icon/Checkmate";
const StickyHeader = () => {
  return (
    <StickyHeaderContainer>
      <StickyHeaderWrapper>
        <HeaderLogoWrapper>
          <CheckMateLogo />
          CheckMate
        </HeaderLogoWrapper>
        <AlertIcon />
      </StickyHeaderWrapper>
    </StickyHeaderContainer>
  );
};

export default StickyHeader;

const StickyHeaderContainer = styled.div`
  position: relative;
  max-width: var(--view-max-width);
  width: 100%;
  height: 6rem;
`;

const StickyHeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  padding: 0.625rem 1.125rem;
  align-items: center;
  justify-content: space-between;
  font-family: "pretendard";
  max-width: var(--view-max-width);
  width: 100%;
  height: 4rem;
  font-size: 22px;
  background-color: white;
  color: #fc6678;
  font-weight: 700;
  z-index: 99;
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
