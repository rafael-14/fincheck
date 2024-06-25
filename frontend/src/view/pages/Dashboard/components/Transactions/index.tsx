import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import cn from "../../../../../app/utils/cn";
import formatCurrency from "../../../../../app/utils/formatCurrency";
import emptyStateImage from "../../../../../assets/empty-state.svg";
import Spinner from "../../../../components/Spinner";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import FiltersModal from "./FiltersModal";
import SliderNavigation from "./SliderNavigation";
import SliderOption from "./SliderOption";
import TransactionTypeDropdown from "./TransactionTypeDropdown";
import useTransactionsController from "./useTransactionsController";

export default function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    transactions,
    isLoading,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  } = useTransactionsController();
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isInitialLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner className="w-10 h-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <FiltersModal
            open={isFiltersModalOpen}
            onClose={handleCloseFiltersModal}
          />

          <header className="mb-4">
            <div className="flex justify-between items-center">
              <TransactionTypeDropdown />

              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>
            <div className="mt-6 relative">
              <Swiper slidesPerView={3} centeredSlides>
                <SliderNavigation />
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption
                        isActive={isActive}
                        month={month}
                        index={index}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <main className="space-y-2 flex-1">
            {isLoading && (
              <div className="flex flex-col items-center h-full justify-center">
                <Spinner className="h-10 w-10" />
              </div>
            )}

            {!isLoading && !transactions.length && (
              <div className="flex flex-col items-center h-full justify-center">
                <img src={emptyStateImage} alt="Empty State" />
                <p className="text-gray-700">
                  Não Encontramos Nenhuma Transação!
                </p>
              </div>
            )}

            {!!transactions.length && !isLoading && (
              <>
                <div className="bg-white p-4 rounded-2xl flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <CategoryIcon type="income" />
                    <div>
                      <strong className="font-bold tracking-[-0.5px] block">
                        almoço
                      </strong>
                      <span className="text-sm text-gray-600">data</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-red-800 tracking-[-0.5px] font-medium",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    {formatCurrency(1000)}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-2xl flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <CategoryIcon type="expense" />
                    <div>
                      <strong className="font-bold tracking-[-0.5px] block">
                        almoço
                      </strong>
                      <span className="text-sm text-gray-600">data</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-green-800 tracking-[-0.5px] font-medium",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    {formatCurrency(1000)}
                  </span>
                </div>
              </>
            )}
          </main>
        </>
      )}
    </div>
  );
}
