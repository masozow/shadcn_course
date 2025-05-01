"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

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
      <Progress
        value={progress}
        className="w-full"
        indicatorColor={cn({
          "bg-red-500": progress < 50,
          "bg-yellow-500": progress >= 50 && progress < 80,
          "bg-green-500": progress >= 80,
        })}
      />
    </div>
  );
};

export default Page;
