import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Page = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Page;
