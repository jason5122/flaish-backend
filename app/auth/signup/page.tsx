"use client";

import CustomInput from "@/components/CustomInput";
import Layout from "@/components/Layout";
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
      <div className="flex flex-wrap flex-col lg:flex-row justify-between items-start w-[60%] mx-auto py-10 bg-transparent">
        <div className="lg:w-[40%] w-full">
          <h2>Create new account</h2>
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
        </div>
        <div className="lg:w-[40%] w-full bg-[#D4DFEE] rounded-md h-[500px]"></div>
      </div>
    </Layout>
  );
};

export default SignUp;
