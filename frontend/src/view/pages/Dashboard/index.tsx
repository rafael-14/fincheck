import Logo from "../../components/Logo";
import UserMenu from "../../components/UserMenu";
import Accounts from "./components/Accounts";
import { DashboardProvider } from "./components/DashboardContext";
import Fab from "./components/Fab";
import Transactions from "./components/Transactions";

export default function Dashboard() {
  return (
    <DashboardProvider>
      <div className="p-4 md:p-8 md:pt-6 h-full w-full flex flex-col gap-4">
        <header className="flex justify-between h-12 item-center">
          <Logo className="h-6 text-teal-900" />
          <UserMenu />
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="w-full md:w-1/2">
            <Accounts />
          </div>
          <div className="w-full md:w-1/2">
            <Transactions />
          </div>
        </main>

        <Fab />
      </div>
    </DashboardProvider>
  );
}
