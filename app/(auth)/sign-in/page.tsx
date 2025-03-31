"use client";
import { SignIn } from "@stackframe/stack";

export default function SignInPage() {
  // optionally redirect to some other page if the user is already signed in
  // const user = useUser();
  // if (user) { redirect to some other page }
  return (
    <SignIn
      fullPage={true}
      extraInfo={
        <>
          When signing in, you agree to our <a href="/terms">Terms</a>
        </>
      }
    />
  );
}
