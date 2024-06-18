import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import httpClient from "../../../app/services/httpClient";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../app/services/authService";
import { SigninParams } from "../../../app/services/authService/signin";
import toast from "react-hot-toast";
import useAuth from "../../../app/hooks/useAuth";

const schema = z.object({
  email: z
    .string()
    .email("Informe um e-mail válido.")
    .min(1, "E-mail é obrigatório."),
  password: z
    .string()
    .min(1, "Senha é obrigatória.")
    .min(8, "Senha deve conter pelo menos 8 dígitos."),
});

// type FormData = {
//   email: string;
//   password: string;
// };

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch (error) {
      toast.error("Credenciais inválidas.");
    }
  });

  return { handleSubmit, register, errors, isPending };
}
