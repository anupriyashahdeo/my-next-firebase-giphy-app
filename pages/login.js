// pages/login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to home page after successful login
      router.push("/giphy");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-gray-500 text-2xl font-bold mb-10">Login</h1>
        <form className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              className="mt-1 p-2 border rounded-md w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              className="mt-1 p-2 border rounded-md w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account? <Link href="/register">Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
