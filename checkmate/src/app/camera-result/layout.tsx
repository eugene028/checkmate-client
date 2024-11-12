import BackHeader from "@/components/BackHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "음식 상세 정보",
};

const CameraResultFoodLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main>
      <BackHeader />
      <div style={{ padding: "0px 16px" }}>{children}</div>
    </main>
  );
};

export default CameraResultFoodLayout;
