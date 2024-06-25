import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";
import useAuth from "../../app/hooks/useAuth";

export default function UserMenu() {
  const { signout } = useAuth();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-teal-0 rounded-full w-12 h-12 flex items-center justify-center border border-teal-100">
          <span className="text-sm tracking-[-0.5] text-teal-900 font-medium">
            EU
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item
          onSelect={signout}
          className="flex items-center justify-between"
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
