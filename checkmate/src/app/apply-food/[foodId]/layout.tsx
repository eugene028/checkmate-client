import BackHeader from "@/components/BackHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "음식 상세 정보",
};

const ApplyFoodLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div style={{ padding: "10px 16px 0px" }}>{children}</div>
    </main>
  );
};

export default ApplyFoodLayout;
