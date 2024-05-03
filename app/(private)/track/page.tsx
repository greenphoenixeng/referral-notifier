import InputField from "@/components/ui/inputField"
import Container from "@/layouts/Container"
import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import TestButton from "@/components/TestButton"

export const metadata = {
  title: "Track Your Referrals",
  description: "Track Your Referrals",
}

const page = () => {
  return (
    <main className="w-full">
      <Container>
        <div className="w-full h-screen grid grid-cols-12 overflow-hidden p-10 divide-x">
          <div className="col-span-6 px-20 flex flex-col gap-3 h-full overflow-scroll">
            <InputField
              label="What do you want to track?"
              placeholder="Enter what do you want to track?"
              icon="TrendingUp"
            />

            <h1 className="text-base text-slate-800 font-semibold mb-1">
              Where are they looking?
            </h1>
            <Select>
              <SelectTrigger label="State">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>States</SelectLabel>
                  <SelectItem value="test">test</SelectItem>
                  <SelectItem value="test">test</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger label="County">
                <SelectValue placeholder="Select a county" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Counties</SelectLabel>
                  <SelectItem value="test">test</SelectItem>
                  <SelectItem value="test">test</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger label="Cities/Parishes">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cities</SelectLabel>
                  <SelectItem value="test">test</SelectItem>
                  <SelectItem value="test">test</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <InputField
              type="text"
              icon="User"
              label="Your Name"
              placeholder="What is your name?"
            />
            <InputField
              type="email"
              icon="Mail"
              label="Your Email"
              placeholder="what is your email address?"
            />
            <InputField
              type="tel"
              icon="Phone"
              label="Your Phone"
              placeholder="what is your phone number?"
            />

            <div className="flex items-center space-x-2 select-none">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to terms
              </label>
            </div>
            {/* <button className="mt-1 w-full text-base bg-primary-blue rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90 ">
              Submit
            </button> */}
            <TestButton redirect="/add-feed" />
          </div>
          <div className="col-span-6 px-10">
            <h1 className="text-2xl font-semibold text-primary-blue mb-3">
              Track Your Referrals for free
            </h1>

            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <p>Marketing info..</p>
              <p>Track the status fo your referral</p>
              <p>Details</p>
              <p>Upcoming functionality</p>
              <p>Beta details</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default page
