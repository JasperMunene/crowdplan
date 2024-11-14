import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialCard({ name, role, image, content }) {
  return (
    <Card className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-14 w-14 rounded-full overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <p className="text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
}
