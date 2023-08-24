import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../components/login/authForm";
import { buttonVariants } from "../../components/ui/button";
import { ToastAction } from "../../components/ui/toast";
import { useToast } from "../../components/ui/use-toast";
import { cn } from "../../lib/utils";
import "../../styles/globals.css";
import "../../styles/pages/login/login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSuccess = () => {
    navigate("/"); // or wherever you want to redirect the user after a successful login
  };

  const handleError = () => {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  return (
    <>
      <div className="md:hidden">
        <img
          src="https://source.unsplash.com/random?wallpaper"
          width={1280}
          height={843}
          alt="Authentication"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Registrarse
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Cuentas Claras
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Esta aplicacion ha ahorrado incontables horas de trabajo
                a mi equipo y me ha permitido enterder mi negocio como nunca
                antes.&rdquo;
              </p>
              <footer className="text-sm">Santiago Rojas</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Ingrese a la aplicacion
              </h1>
              <p className="text-sm text-muted-foreground">
                Ingrese su correo y contraseña para acceder a la aplicacion
              </p>
            </div>
            <AuthForm onSuccess={handleSuccess} onError={handleError} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Al continuar, accede a nuestros{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terminos y Condiciones
              </Link>{" "}
              y a nuestra{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Politica de Privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
