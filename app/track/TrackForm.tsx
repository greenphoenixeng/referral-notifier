"use client";
import InputField from "@/components/ui/inputField";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import TestButton from "@/components/TestButton";
import Card from "@/components/Card";
import axios from "axios";
import toast from "react-hot-toast";
import { SearchCheck } from "lucide-react";

interface Options {
  id: number;
  name: string;
  value: number;
}

const TrackForm = () => {
  const [form, setForm] = useState({
    who: "",
    state: "",
    county: "",
    city: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agree: false,
  });
  const [stateOptions, setStateOptions] = useState<Options[]>([]);
  const [countyOptions, setCountyOptions] = useState<Options[]>([]);
  const [cityOptions, setCityOptions] = useState<Options[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isAllFieldsFilled =
    Object.values(form).every((val) => val !== "") && form.agree;

  const fetchOptions = async () => {
    try {
      const { data: states } = await axios.get("/api/states");
      const { data: counties } = await axios.get("/api/counties");
      const { data: cities } = await axios.get("/api/cities");
      setStateOptions(states.data);
      setCityOptions(cities.data);
      setCountyOptions(counties.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/track", form);
      if (data.success) {
        toast.success("Reference submitted successfully");
        setForm({
          who: "",
          state: "",
          county: "",
          city: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          agree: false,
        });
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-12">
        <Card>
          <InputField
            label="Who do you want to track?"
            name="who"
            value={form.who}
            onChange={handleChange}
            placeholder="Enter who do you want to track?"
            required
            icon="TrendingUp"
          />
        </Card>
      </div>
      <div className="col-span-1 md:col-span-6">
        <Card>
          <h1 className="text-base text-slate-800 font-semibold mb-1">
            Where are they looking?
          </h1>
          <Select
            value={form.state}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, state: value }))
            }
          >
            <SelectTrigger label="State">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>States</SelectLabel>
                {stateOptions.map((state) => (
                  <SelectItem key={state.value} value={state.value.toString()}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={form.county}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, county: value }))
            }
          >
            <SelectTrigger label="County">
              <SelectValue placeholder="Select a county" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Counties</SelectLabel>
                {countyOptions.map((county) => (
                  <SelectItem
                    key={county.value}
                    value={county.value.toString()}
                  >
                    {county.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={form.city}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, city: value }))
            }
          >
            <SelectTrigger label="Cities/Parishes">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Cities</SelectLabel>
                {cityOptions.map((city) => (
                  <SelectItem key={city.value} value={city.value.toString()}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-6">
        <Card>
          <div className="flex gap-3">
            <InputField
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              type="text"
              icon="User"
              label="Your Name"
              placeholder="Name"
            />
            <InputField
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              type="text"
              icon="User"
              label="Last Name"
              placeholder="Last name"
            />
          </div>
          <InputField
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            icon="Mail"
            label="Your Email"
            placeholder="what is your email address?"
          />
          <InputField
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            icon="Phone"
            label="Your Phone"
            required
            maxLength={10}
            placeholder="what is your phone number?"
          />
        </Card>
      </div>
      <div className="col-span-1 md:col-span-6">
        <div className="flex items-center space-x-2 select-none mb-3">
          <Checkbox
            checked={form.agree}
            onCheckedChange={(value) =>
              setForm({ ...form, agree: Boolean(value) })
            }
            name="agree"
            id="terms"
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to terms
          </label>
        </div>
        <button
          className="mt-1 w-full text-base bg-primary-blue rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-slate-400"
          onClick={handleSubmit}
          disabled={loading || !isAllFieldsFilled}
        >
          {loading ? "Submit..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default TrackForm;
