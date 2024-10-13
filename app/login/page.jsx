import { LoginForm } from "@/components/login/login-form";

export default function Login({ searchParams }) {
  const wantsMagicLink = searchParams.magicLink === "yes";

  return <LoginForm isPasswordLogin={!wantsMagicLink} />;
}
