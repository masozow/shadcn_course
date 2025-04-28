"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return (
    <div className="flex-col sm:flex sm:flex-wrap sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <div>
        <h1 className="text-3xl">Information</h1>
        <p>{smallDate}</p>
      </div>
    </div>
  );
};

export default Page;
