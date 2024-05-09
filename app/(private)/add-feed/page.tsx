import React from "react";
import FeedForm from "./FeedForm";

export const metadata = {
  title: "Add Feed",
  description: "Add Feed",
};

const page = () => {
  return (
    <main className="w-full">
      <FeedForm />
    </main>
  );
};

export default page;
