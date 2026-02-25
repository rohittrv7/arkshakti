import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

import image1 from "@/assets/img18.webp";
import image2 from "@/assets/img12.webp";

const founders = [
  {
    name: "Mr. Satish Gupta",
    role: "Director – Arkshakti Power Solutions Pvt. Ltd.",
    initials: "SG",
    image: image1,
    bio: "Mr. Satish Gupta is the Director of Arkshakti Power Solutions Pvt. Ltd., bringing strong leadership, strategic vision, and a commitment to sustainable energy solutions. With a focus on innovation and operational excellence, he plays a key role in driving the company's growth and long-term success.",
  },
  {
    name: "Nand Lal Sharma",
    role: "Director – Arkshakti Power Solutions Pvt. Ltd.",
    initials: "NS",
    image: image2,
    bio: "Mr. Nand Lal Sharma is a respected Director at Arkshakti Power Solutions Pvt. Ltd., where he plays an instrumental role in shaping the company's strategic direction and operational effectiveness. With deep industry insight and a commitment to excellence, he contributes significantly to the company's mission.",
  },
];

const TeamSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="section-padding section-alt-bg mt-8 py-10 bg-[#F6F6F6]"
    >
      <div className="container mx-auto">
        <h2 className="section-heading my-12 text-3xl font-bold text-center text-[#A18989]">
          Our Founders & Directors
        </h2>

        <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {founders.map((f, i) => (
            <div key={f.name} className="text-center">
              <Avatar className="w-52 h-52 mx-auto mb-4">
                <AvatarImage src={f.image} className="bg-cover" />
                <AvatarFallback className="text-3xl font-heading bg-primary text-primary-foreground">
                  {f.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {f.name}
              </h3>
              <p className="text-sm font-medium text-heading-green mt-1 mb-3">
                {f.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {expanded === i ? f.bio : f.bio.slice(0, 150) + "..."}
              </p>
              <button
                className="text-sm text-heading-green font-medium mt-2 hover:underline"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {expanded === i ? "- Show Less" : "+ Show More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
