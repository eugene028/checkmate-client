import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "./Pretendard.woff2",
      weight: "400",
    },
    {
      path: "./Pretendard.woff2",
      weight: "500",
    },
    {
      path: "./Pretendard.woff2",
      weight: "600",
    },
    {
      path: "./Pretendard.woff2",
      weight: "700",
    },
    {
      path: "./Pretendard.woff2",
      weight: "800",
    },
  ],
  variable: "--font-pretendard",
});

export const suit = localFont({
  src: [
    {
      path: "./SUIT.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SUIT.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./SUIT.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./SUIT.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./SUIT.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-suit",
});
