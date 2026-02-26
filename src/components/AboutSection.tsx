import companyImg1 from "@/assets/img6.jpg";
import companyImg3 from "@/assets/img11.webp";
import companyImg2 from "@/assets/img13.webp";
import { MapPin, Star } from "lucide-react";

import image12 from "@/assets/image12.jpeg"; // <-- apna video yaha import karo

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="section-heading my-10 font-bold text-2xl text-center">
        Company Overview Arkshakti Power Solutions PVT. LTD.
      </h2>

      {/* Row 1: Image left, text right */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img
            src={companyImg1}
            alt="Family with solar panels"
            className="w-full h-64 md:h-80 object-cover rounded"
          />
        </div>
        <div className="flex items-center">
          <div>
            <p className="text-foreground leading-relaxed text-sm md:text-base">
              <span className="font-semibold text-heading-green">
                Arkshakti Power Solutions Pvt. Ltd.
              </span>{" "}
              is a dynamic and emerging solar energy solutions provider based in
              Jaipur, Rajasthan, India. Established with a vision to accelerate
              the adoption of clean and renewable energy, the company
              specializes in solar power systems, solar panel installations, and
              customized energy solutions for residential, commercial, and
              industrial clients.
            </p>
            <p className="text-foreground leading-relaxed text-sm md:text-base mt-3">
              Arkshakti Power Solutions focuses on delivering high-quality solar
              products, efficient installations, and outstanding after-sales
              support, aiming to help customers reduce electricity costs while
              contributing to a greener and more sustainable future. With a
              commitment to innovation and customer satisfaction, the company is
              steadily growing its presence in the solar energy market.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: Approved info left, card right */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div>
              <img
                src={image12}
                alt="Family with solar panels"
                className=" h-20 w-20 rounded"
              />
            </div>
            <div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">
                APPROVED BY ( नवीन एवं नवीकरणीय ऊर्जा मंत्रालय )
              </h3>
              <p className="font-bold text-foreground text-sm mb-4">
                MINISTRY OF NEW AND RENEWABLE ENERGY
              </p>
            </div>
            
          </div>
          <div className="space-y-3 text-sm text-foreground">
            <div className="flex items-start gap-2">
              <Star className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <span>
                Corporate Identification Number (CIN): U43222RJ2025PTC103654
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <span>
                G-07 Pushp Enclave Pratap Nagar Main Tonk Road, Jaipur,
                Rajasthan, India, 302033
              </span>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-lg\">
          <img
            src={companyImg2}
            alt="Family with solar panels"
            className="w-full h-64 md:h-80 object-cover rounded"
          />
        </div>
      </div>

      {/* Row 3: Image left, text right */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={companyImg3}
            alt="Power lines and solar panels at sunset"
            className="w-full h-64 md:h-72 object-cover rounded"
          />
        </div>
        <div className="flex items-center">
          <p className="text-foreground leading-relaxed text-sm md:text-base">
            Arkshakti Power Solutions embodies a commitment to quality,
            reliability, and sustainable technology, helping individuals and
            businesses harness solar energy efficiently and responsibly. The
            company's strategic leadership and customer-centric approach make it
            a trusted partner in India's transition toward renewable energy.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
