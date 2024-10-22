import { routePath } from "@/constants/routhPath";
import { redirect } from "next/navigation";

const CheckModalPage = () => {
  return redirect(routePath["check-modal"]);
};

export default CheckModalPage;
