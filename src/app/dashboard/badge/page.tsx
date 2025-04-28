import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge variant="default">default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge capitalize variant="success">
        success
      </Badge>
      <Badge capitalize variant="info">
        info
      </Badge>
    </div>
  );
};

export default Page;
