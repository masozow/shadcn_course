import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const data = "123456789".split("");

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Skeleton className="w-10 h-10 rounded-full mr-2" />
            <div className="flex-col flex-grow">
              <Skeleton className="w-1/2 h-4 mb-2 flexgrow" />
              <Skeleton className="w-full h-3" />
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Skeleton className="w-20 h-8" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Loading;
