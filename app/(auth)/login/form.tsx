"use client";
import React from "react";
import InputField from "@/components/ui/inputField";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import axios from "axios";

const Form = () => {
  const { push } = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    email: "admin@admin.com",
    password: "admin",
  });
  const [error, setError] = React.useState<string>("");

  const userLogin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/login", formData);
      if (data.success) {
        push("/add-feed");
        return;
      }
      setError(data.message);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      setError("Email and Password are required");
      return;
    }
    userLogin();
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <InputField
        icon="Mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
        type="text"
      />
      <InputField
        icon="Lock"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
        type="password"
      />
      <button
        type="submit"
        className="mt-1 text-base text-center flex justify-center items-center bg-primary-yellow rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90"
      >
        {loading ? <Loader2 size={24} className="animate-spin" /> : "Login"}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};

export default Form;
