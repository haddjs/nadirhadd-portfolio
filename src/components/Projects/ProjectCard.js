import React from "react";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { Button } from "../ui/button";

const ProjectCard = ({ items }) => {
  return (
    <Card
      key={items.id}
      className="w-full max-w-[90%] md:max-w-full mx-auto shadow-2xl border-none dark:bg-[#0d1017] px-6 py-7"
    >
      <CardContent className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 flex flex-col justify-between gap-6">
          <CardTitle className="text-2xl">{items.title}</CardTitle>
          <div className="text-sm md:text-md">
            {items.url ? (
              <a href={items.url} target="_blank">
                <Button className="text-black font-semibold dark:text-white bg-[#eee] hover:bg-[#cfcfcf] dark:bg-[#4b4b4b] hover:dark:bg-[#1f1f1f] transition-all ease-in-out px-5 py-2 rounded-lg cursor-pointer">
                  Visit
                </Button>
              </a>
            ) : (
              <button
                className="text-black/30 dark:text-white/30 bg-[#eee] dark:bg-[#4b4b4b] transition-all ease-in-out px-5 py-2 rounded-lg"
                disabled
              >
                <p>Visit</p>
              </button>
            )}
          </div>
          <span className="text-sm/7">{items.description}</span>
          <div className="flex flex-wrap">
            <div className="grid grid-cols-3 gap-4 md:flex text-center px-2 text-sm md:text-md">
              {items.tech_stacks.map((projectTech, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="lg"
                  className="text-xs"
                >
                  {projectTech}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <Carousel className="flex-1 flex items-center w-full max-w-4xl mx-auto">
          <CarouselContent>
            {items.images &&
              items.images.map(
                (image, i) =>
                  image?.image_url && (
                    <CarouselItem key={i}>
                      <div className="p-1">
                        <Card>
                          <CardContent>
                            <Image
                              src={image?.image_url}
                              alt={image.image_url}
                              width={800}
                              height={400}
                              className="object-contained w-full h-auto"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ),
              )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex mx-8 items-center" />
          <CarouselNext className="hidden md:flex mx-8 items-center" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
