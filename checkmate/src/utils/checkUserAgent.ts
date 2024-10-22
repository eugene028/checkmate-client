import { cookies } from "next/headers";

export const checkUserAgent = () => {
  return cookies().get("device")?.value;
};
