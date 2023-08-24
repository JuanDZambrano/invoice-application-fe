import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useLoginUser } from "../../adapters/auth";
import { cn } from "../../lib/utils";
import "../../styles/components/login/userAuthForm.scss";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

interface IUserAuthFormProps {
  // ... other props
  onSuccess?: () => void;
}
interface FormSchemaType {
  email: string;
  password: string;
}

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8),
}) as z.ZodObject<FormSchemaType>;

type UserAuthFormValues = z.infer<typeof formSchema>;

export function UserAuthForm({ onSuccess, ...props }: IUserAuthFormProps) {
  const form = useForm<UserAuthFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Note: We are initializing the mutation with the username and password as arguments now.
  const mutation = useLoginUser(
    form.getValues("email"),
    form.getValues("password")
  );

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await mutation.mutateAsync();

      // After successful login, call the provided onSuccess callback.
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  return (
    <div className={cn("grid gap-6")} {...props}>
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            (async () => {
              try {
                await onSubmit(form.getValues());
              } catch (error) {
                console.error("Error in form submission:", error);
              }
            })().catch((error) =>
              console.error("Error in form submission:", error)
            );
          }}
          className="space-y-8"
        >
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input placeholder="usuario@ejemplo.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
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
    </div>
  );
}
