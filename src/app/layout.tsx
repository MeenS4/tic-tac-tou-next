import { ReactNode } from "react";
import "@/styles/index.scss";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>My Little Tic Tac Tou</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
