"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const Page = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
      return () => {
        clearInterval(interval);
      };
    }, 100);
  }, []);
  return (
    <div>
      <Progress value={progress} className="w-full" />
    </div>
  );
};

export default Page;
