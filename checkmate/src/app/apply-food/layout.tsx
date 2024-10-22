import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "음식 등록하기",
};

const ApplyFoodLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ApplyFoodLayout;
