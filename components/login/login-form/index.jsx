"use client";
import Link from "next/link";
import { useRef } from "react";

export const LoginForm = ({ isPasswordLogin }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const submitForm = async (event) => {
    event.preventDefault();

    if (isPasswordLogin) {
      alert("password login");
    } else {
      alert("magic link login");
    }
  };
  return (
    <article style={{ maxWidth: "480px", margin: "auto" }}>
      <header>Login</header>

      <form onSubmit={submitForm}>
        <fieldset>
          <label htmlFor="email">
            Email{" "}
            <input
              ref={emailInputRef}
              type="email"
              id="email"
              name="email"
              required
            />
          </label>

          {isPasswordLogin && (
            <label htmlFor="password">
              Password{" "}
              <input
                ref={passwordInputRef}
                type="password"
                id="password"
                name="password"
              />
            </label>
          )}
        </fieldset>

        <p>
          {isPasswordLogin ? (
            <Link
              href={{
                pathname: "/login",
                query: { magicLink: "yes" },
              }}
            >
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/login",
                query: { magicLink: "no" },
              }}
            >
              Go to Password Login
            </Link>
          )}
        </p>

        <button type="submit">
          Sign in with
          {isPasswordLogin ? " Password" : " Magic Link"}
        </button>
      </form>
    </article>
  );
};
