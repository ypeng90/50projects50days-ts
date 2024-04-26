"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const PreviewCard = ({ index, title, href, imageSrc }) => {
  return (
    <Card isPressable onPress={() => window.open(href, "_blank", "noopener,noreferrer")} className="py-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase">{`Project ${index + 1}`}</p>
        <h4 className="font-bold text-medium">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image alt="Card background" className="object-cover rounded-xl" src={imageSrc} width={270} />
      </CardBody>
    </Card>
  );
};

export { PreviewCard };
