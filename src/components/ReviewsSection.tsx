import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import reviewsBg from "@/assets/img6.jpg";
import reviwer1 from "@/assets/img8.webp";
import reviwer2 from "@/assets/img9.webp";
import reviwer3 from "@/assets/img10.webp";

const reviews = [
  {
    name: "Aryan",
    fullName: "Aryan Mishra",
    date: "20/10/2025",
    rating: 4,
    image: reviwer1,
    text: "Excellent service from start to finish! Arkshakti Power provided outstanding support and professional installation.",
  },
  {
    name: "Manoj Varma",
    fullName: "Manoj Varma",
    date: "18/11/2025",
    rating: 4,
    image: reviwer2,
    text: "Superb service and quality installation. The technician explained everything clearly and completed work on time.",
  },
  {
    name: "Vikash",
    fullName: "Vikash Sharma",
    date: "19/11/2025",
    rating: 5,
    image: reviwer3,
    text: "I'm very happy with the quality and performance of my solar system. The team was professional, polite, and answered all my questions. Great experience!",
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="relative py-20">
    <img
      src={reviewsBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
        Customers Review
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.fullName}
            className="group relative h-[380px] rounded-xl overflow-hidden"
          >
            {/* Base Card */}
            <Card className="h-full bg-white shadow-xl">
              <CardContent className="p-6 text-center space-y-4 flex flex-col items-center justify-center h-full">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={r.image} className="bg-cover" />

                  <AvatarFallback className="text-lg font-semibold">
                    {r.name[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < r.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <h4 className="text-lg font-semibold">{r.name}</h4>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  "{r.text}"
                </p>

                <p className="text-xs text-muted-foreground">
                  {r.fullName} - {r.date}
                </p>
              </CardContent>
            </Card>

            <div
              className="absolute inset-0 bg-white p-6 flex flex-col justify-center text-center
                            translate-y-full group-hover:translate-y-0
                            transition-transform duration-500 ease-in-out"
            >
              <div className="flex justify-center mb-4 gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < r.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm italic leading-relaxed mb-4">"{r.text}"</p>

              <h4 className="font-semibold">{r.fullName}</h4>
              <p className="text-xs text-muted-foreground">{r.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
