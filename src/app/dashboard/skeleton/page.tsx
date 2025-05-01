import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <Card>
        <CardHeader>
          <Image
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            width={40}
            height={40}
            className="rounded-full mr-2 w-10 h-10"
          />
          <div>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button>More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
