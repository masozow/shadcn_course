"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Page = () => {
  const [sliderValue, setSliderValue] = useState(10);
  return (
    <div className="grid grid-cols1 gap-3">
      <span>Slider value: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
};

export default Page;
