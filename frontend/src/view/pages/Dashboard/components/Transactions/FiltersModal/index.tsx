import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import cn from "../../../../../../app/utils/cn";
import Button from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";
import useFiltersModal from "./useFiltersModal";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
}

const mockedAccounts = [
  { id: "1", name: "Nubank" },
  { id: "2", name: "XP" },
  { id: "3", name: "Dinheiro" },
];

export default function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
  } = useFiltersModal();

  return (
    <Modal open={open} onClose={onClose} title="Titulo">
      <div>
        <span className="text-lg tracking-[-1px] font-bold text-gray-800">
          Conta
        </span>
        <div className="space-y-2 mt-2">
          {mockedAccounts.map((account) => (
            <button
              key={account.id}
              onClick={() => handleSelectBankAccount(account.id)}
              className={cn(
                "p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50 transition-colors",
                account.id === selectedBankAccountId && "!bg-gray-200"
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>
      <div className="my-10 text-gray-800">
        <span className="text-lg tracking-[-1px] font-bold">Ano</span>
        <div className="mt-2 w-52 flex items-center justify-between">
          <button
            onClick={() => handleChangeYear(-1)}
            className="w-12 h-12 flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <span className="tracking-[-0.5px] text-sm font-medium">
              {selectedYear}
            </span>
          </div>
          <button
            onClick={() => handleChangeYear(1)}
            className="w-12 h-12 flex items-center justify-center"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Button className="w-full">Aplicar Filtros</Button>
    </Modal>
  );
}
