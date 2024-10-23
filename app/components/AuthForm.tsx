"use client";
import React, { useState } from "react";
import { SignupForm } from "./Signup";
import { SigninForm } from "./Signin";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(true); // Manage which form is active

  return (
    <div>
      {isSignup ? (
        <SignupForm onSwitchToSignIn={() => setIsSignup(false)} />
      ) : (
        <SigninForm onSwitchToSignup={() => setIsSignup(true)} />
      )}
    </div>
  );
}
