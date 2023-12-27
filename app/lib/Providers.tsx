"use client";
import { Provider } from "react-redux";
import { Store } from "./Store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={Store}>{children}</Provider>;
};
