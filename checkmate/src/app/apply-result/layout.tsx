import BackHeader from "@/components/BackHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "음식 등록하기",
};

const ApplyResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <BackHeader />
      <div style={{ padding: "0px 16px" }}>{children}</div>
    </main>
  );
};

export default ApplyResultLayout;