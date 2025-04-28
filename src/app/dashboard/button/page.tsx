"use client";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("Hola mundo!")}>Click Me</Button>
    </div>
  );
};

export default Page;
