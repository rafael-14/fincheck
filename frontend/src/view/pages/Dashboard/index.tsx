import useAuth from "../../../app/hooks/useAuth";
import Button from "../../components/Button";

export default function Dashboard() {
  const { signout } = useAuth();
  return (
    <div>
      <Button onClick={signout}>sair</Button>
    </div>
  );
}
