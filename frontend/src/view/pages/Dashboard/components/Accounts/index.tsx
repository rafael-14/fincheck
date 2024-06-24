import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "../../../../../app/utils/cn";
import formatCurrency from "../../../../../app/utils/formatCurrency";
import Spinner from "../../../../components/Spinner";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import AccountCard from "./Card";
import AccountsSliderNavigation from "./SliderNavigation";
import useAccountsController from "./useAccountsController";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading,
    accounts,
  } = useAccountsController();
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className="text-white tracking-[-0.5px] block">
              Saldo Total
            </span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-[-1px] text-white",
                  !areValuesVisible && "blur-md"
                )}
              >
                {formatCurrency(1000)}
              </strong>
              <button
                onClick={toggleValueVisibility}
                className="h-8 w-8 flex items-center justify-center"
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            {!accounts.length && (
              <>
                <div className="mb-4">
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas Contas
                  </strong>
                </div>
                <div
                  className="h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center
                  gap-4 text-white"
                >
                  <div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center">
                    <PlusIcon className="w-6 h-6" />
                  </div>
                  <span className="font-medium tracking-[-0.5px] block w-32 text-center">
                    Cadastre uma nova conta
                  </span>
                </div>
              </>
            )}

            {!!accounts.length && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}
                >
                  <div
                    className="flex items-center justify-between mb-4"
                    slot="container-start"
                  >
                    <strong className="text-white tracking-[-1px] text-lg">
                      Minhas Contas
                    </strong>

                    <AccountsSliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>
                  <SwiperSlide>
                    <AccountCard
                      name="nubank"
                      color="#7950F2"
                      balance={1000.01}
                      type="CASH"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <AccountCard
                      name="XP"
                      color="#000"
                      balance={100.0}
                      type="INVESTMENT"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <AccountCard
                      name="Carteira"
                      color="#0F0"
                      balance={10.0}
                      type="CASH"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
