import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
      <div className="flex items-center justify-center min-h-screen px-4 py-6 fle-col">
        <div className="grid items-center w-full max-w-6xl gap-6 md:grid-cols-2">
          <div className="container">
            <LoginForm />
          </div>
          <div className="hidden md:flex max-md:mt-8">
            <img src="https://readymadeui.com/login-image.webp" className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
          </div>
        </div>
      </div>
  );
};
export default LoginPage;
