import BackHeader from "@/components/BackHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "음식 등록하기",
};

const ApplyFoodLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* <BackHeader label="음식 직접 등록하기" />   */}
      <div style={{ padding: "10px 16px 0px" }}>{children}</div>
    </main>
  );
};

export default ApplyFoodLayout;
