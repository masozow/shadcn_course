import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/home");
  // return (
  //   <div>
  //     <h1>Hello world!</h1>
  //   </div>
  // );
}
