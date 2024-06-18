import { Transition } from "@headlessui/react";
import Spinner from "./Spinner";

interface PageLoaderProps {
  isLoading: boolean;
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed w-full h-full top-0 left-0 bg-gray-0 grid place-items-center">
        <Spinner />
      </div>
    </Transition>
  );
}
