import { Metadata } from "next";
import { ThreeDBox } from "@/components/3dBox";

export const metadata: Metadata = {
  title: "3D Boxes Background",
};

export default function Home() {
  return <ThreeDBox />;
}
