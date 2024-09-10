import { Metadata } from "next";
import StudentDetailPage from "../../../Component/StudentDetailPage";

export const metadata: Metadata = {
  title: "View student detail ",
  description: "View student details"
};

export default function StudentDetails() {
  return <StudentDetailPage />;
}
