import { useState } from "react";
import useWindowWidth from "../../../../../app/hooks/useWindowWidth";
import useDashboard from "../DashboardContext/useDashboard";

export default function useAccountsController() {
  const windowWidth = useWindowWidth();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const { areValuesVisible, toggleValueVisibility } = useDashboard();

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading: false,
    accounts: [],
  };
}
