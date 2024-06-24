import { useContext } from "react";
import { DashboardContext } from ".";

export default function useDashboard() {
  return useContext(DashboardContext);
}
