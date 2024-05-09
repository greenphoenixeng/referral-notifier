"use client";
import CSVUploader from "@/components/CSVUploader";
import Card from "@/components/Card";
import Loader from "@/components/loader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { SearchCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Options {
  id: number;
  name: string;
  value: number;
}
const FeedForm = () => {
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedCountyId, setSelectedCountyId] = useState("");
  const [result, setResult] = useState<any>(null);

  const [csvData, setCSVData] = useState<any[] | null>(null);
  const [countyOptions, setCountyOptions] = useState<Options[]>([]);

  const fetchCountyOptions = async () => {
    try {
      const { data: counties } = await axios.get("/api/counties");
      setCountyOptions(counties.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleUpload = (data: any[] | null) => {
    setCSVData(data);
  };

  const handleSubmit = async () => {
    const { data } = await axios.post("/api/feed/upload", {
      county_id: selectedCountyId,
      transactions: csvData,
    });

    setLoading(false);

    if (data?.data?.uploaded !== undefined) {
      setResult(data.data);
    } else {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (loading) {
      handleSubmit();
    }
  }, [loading]);

  useEffect(() => {
    fetchCountyOptions();
  }, []);

  if (result?.uploaded !== undefined) {
    return (
      <main className="w-full h-[70vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[300px] md:w-[450px] text-center">
          <div className="mb-4" data-aos="zoom-in-up">
            <SearchCheck size={60} className="text-primary-blue" />
          </div>
          <h1
            className="text-primary-blue font-semibold text-lg mb-4"
            data-aos="zoom-in-up"
          >
            {countyOptions.find((c) => +selectedCountyId === c.id)?.name} County
            Feed Updated
          </h1>
          <div className="flex flex-col gap-1 text-slate-600">
            <p data-aos="zoom-in-up">
              <span className="font-semibold text-primary-blue">
                {result.uploaded}
              </span>{" "}
              Records uploaded
            </p>
            <p data-aos="zoom-in-up">
              <span className="font-semibold text-primary-blue">
                {result.updated}
              </span>{" "}
              Records updated
            </p>
            <p data-aos="zoom-in-up">
              <span className="font-semibold text-primary-blue">
                {result.matched}
              </span>{" "}
              Matches Found
            </p>
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="px-4 py-2 mt-10 text-white bg-primary-blue transition-all rounded-md"
            onClick={() => {
              setResult(null);
              setSelectedCountyId("");
              setCSVData([]);
            }}
          >
            Upload More
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <Card>
          <h1 className="text-base text-slate-800 font-semibold -mb-1.5">
            Add data feed
          </h1>
          <Select onValueChange={setSelectedCountyId}>
            <SelectTrigger className="mb-2">
              <SelectValue placeholder="Which feed do you want to update?" />
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
          <CSVUploader onUpload={handleUpload} />
        </Card>
      </div>
      <div className="col-span-12">
        <button
          className="mt-1 w-full text-base bg-primary-blue rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-slate-400"
          onClick={() => setLoading(true)}
          disabled={
            loading || !csvData?.length || !selectedCountyId?.toString()?.length
          }
        >
          {loading ? "Submit..." : "Submit"}
        </button>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default FeedForm;
