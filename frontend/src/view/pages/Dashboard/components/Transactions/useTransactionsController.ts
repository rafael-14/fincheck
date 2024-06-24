import useDashboard from "../DashboardContext/useDashboard";

export default function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  return {
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: false,
  };
}
