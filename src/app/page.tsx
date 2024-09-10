import HomePage from "@/Component/Homepage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sphinx AI student list ",
  description: "List of Sphinx AI student available for view"
};
export default function Home() {
  return <HomePage/>;
}
