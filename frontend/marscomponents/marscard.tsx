import { Card, CardContent } from "@/components/ui/card";

type MarsCardProps = {
  imgSrc: string;
  date: string;
};

export function MarsCard({ imgSrc, date }: MarsCardProps) {
  return (
    <Card className="w-[220px] h-[300px] p-4 flex items-center justify-center bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardContent className="flex flex-col items-center">
        <a href={imgSrc} target="_blank" rel="noopener noreferrer">
          <img
            src={imgSrc}
            alt={`Mars Rover on ${date}`}
            className="w-20 h-20 object-cover rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-400 transition duration-200"
          />
        </a>
        <div className="mt-4 flex gap-2 items-center">
          <p className="text-sm font-medium text-white">Captured on:</p>
          <p className="text-sm font-semibold text-white">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
}
