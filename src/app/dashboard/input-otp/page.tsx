"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
const Page = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col justify-center items-center h-[250px]">
      {" "}
      <InputOTP
        maxLength={4}
        value={value}
        onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <div className="mt-4">{value}</div>
    </div>
  );
};

export default Page;
