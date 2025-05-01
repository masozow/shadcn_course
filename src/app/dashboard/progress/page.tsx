"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const Page = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Progress value={progress} className="w-full" />
    </div>
  );
};

export default Page;
