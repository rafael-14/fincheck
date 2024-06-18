import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import AccountCard from "./AccountCard";
import AccountsSliderNavigation from "./AccountsSliderNavigation";

export default function Accounts() {
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <div>
        <span className="text-white tracking-[-0.5px] block">Saldo Total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1.000,00
          </strong>
          <button className="h-8 w-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div>
          <Swiper spaceBetween={16} slidesPerView={2.2}>
            <div
              className="flex items-center justify-between mb-4"
              slot="container-start"
            >
              <strong className="text-white tracking-[-1px] text-lg">
                Minhas Contas
              </strong>

              <AccountsSliderNavigation />
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
      </div>
    </div>
  );
}
