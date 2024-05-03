import { Metadata } from "next";
import { CountDown } from "@/components/countDown";

export const metadata: Metadata = {
  title: "Animated Countdown",
};

export default function Home() {
  return <CountDown />;
}
