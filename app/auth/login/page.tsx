"use client";

import { CustomButton, CustomInput, Layout } from "@/components";
import ButtonSignin from "@/components/buttons/ButtonSignin";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <Layout>
      <div className="flex flex-wrap flex-col lg:flex-row justify-between items-center lg:w-[60%] md:w-[80%] w-full mx-auto py-10 px-4 bg-transparent space-y-8">
        <div className="lg:w-[40%] w-full h-full space-y-8">
          <h2 className="text-[30px] font-bold">Log in</h2>
          <button onClick={() => router.push("/auth/signup")}>
            Are you a new user? <span className="text-[#4ABFE0]">Sign up</span>
          </button>
          <form action="">
            <CustomInput
              label="Email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              width="w-full"
              required
            />
            <CustomInput
              label="Create Password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              width="w-full"
              required
            />
          </form>
          <div className="md:w-[50%] w-full flex flex-col gap-4 justify-center mx-auto">
            <ButtonSignin text="Login with Google" extraStyle="rounded-[5px]" />
            <CustomButton
              onClick={() => router.push("/dashboard")}
              title="login button"
              text="Login"
              width="100%"
              className="rounded-[5px]"
            />
          </div>
        </div>
        <div className="lg:w-[40%] w-full bg-[#D4DFEE] rounded-md h-[500px]"></div>
      </div>
    </Layout>
  );
};

export default Login;
