"use client";

import { CustomButton, CustomInput, Layout } from "@/components";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
        <div className="lg:w-[40%] w-full space-y-4">
          <h2 className="text-[30px] font-bold">Create new account</h2>
          <button onClick={() => router.push("/auth/login")}>
            Already a user? <span className="text-[#4ABFE0]">Login</span>
          </button>

          <form action="">
            <div className="w-full flex items-center justify-between flex-wrap space-x-1">
              <CustomInput
                label="First Name"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                width="lg:w-[48%] w-full"
                required
              />
              <CustomInput
                label="Last Name"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                width="lg:w-[48%] w-full"
                required
              />
            </div>
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
            <CustomInput
              label="Confirm Password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              width="w-full"
              required
            />
          </form>
          <div className="md:w-[50%] w-full flex justify-center mx-auto">
            <CustomButton
              onClick={() => router.push("/auth/sgnup")}
              title="signup button"
              text="Create Account"
              width="100%"
              className="rounded-[7px]"
            />
          </div>
        </div>
        <div className="lg:w-[40%] w-full bg-[#D4DFEE] rounded-md h-[500px]"></div>
      </div>
    </Layout>
  );
};

export default SignUp;
