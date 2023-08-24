import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useLoginUser } from "../../adapters/auth";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import "../../styles/components/login/authForm.scss";

const authFormSchema = z.object({
  email: z
    .string({
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case "invalid_string":
            return { message: "" };
          default:
            return { message: "El email ingresado no es valido." };
        }
      },
    })
    .email(),
  password: z
    .string({
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case "too_small":
            return { message: "" };
          default:
            return { message: "La contraseña ingresada no es valida." };
        }
      },
    })
    .min(8),
});

type AuthFormValues = z.infer<typeof authFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AuthFormValues> = {
  email: "",
  password: "",
};

interface IAuthFormProps {
  onSuccess: () => void;
  onError: () => void;
}

export function AuthForm({ onSuccess, onError }: IAuthFormProps) {
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // Note: We are initializing the mutation with the username and password as arguments now.
  const mutation = useLoginUser(
    form.getValues("email"),
    form.getValues("password"),
    onSuccess,
    onError
  );

  async function onSubmit(data: AuthFormValues) {
    await mutation.mutateAsync();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email@ejemplo.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="buttonContainer">
          <Button type="submit" disabled={mutation.isLoading}>
            Ingresar
          </Button>
        </div>
      </form>
    </Form>
  );
}
