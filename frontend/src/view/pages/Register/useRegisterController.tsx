import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import { SignupParams } from "../../../app/services/authService/signup";
import toast from "react-hot-toast";
import { isElement } from "react-dom/test-utils";
import useAuth from "../../../app/hooks/useAuth";

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório."),
  email: z
    .string()
    .email("Informe um e-mail válido.")
    .min(1, "E-mail é obrigatório."),
  password: z
    .string()
    .min(1, "Senha é obrigatória.")
    .min(8, "Senha deve conter pelo menos 8 dígitos."),
});

type FormData = z.infer<typeof schema>;

export default function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch (error) {
      toast.error("Ocorreu um erro ao criar a sua conta!");
    }
  });

  return { register, errors, handleSubmit, isPending };
}
