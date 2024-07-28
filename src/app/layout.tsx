import { ReactNode } from "react";
import "@/styles/index.scss";
import { Provider } from "react-redux";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <html>
        <head>
          <title>My Little Tic Tac Tou</title>
        </head>

        <body>{children}</body>
      </html>
    </Provider>
  );
}
