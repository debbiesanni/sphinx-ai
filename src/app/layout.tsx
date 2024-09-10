import Wrapper from "@/Component/Wrapper";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

import "./globals.css";
import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
