import serviceSolar from "@/assets/img20.webp";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceBattery from "@/assets/service-battery.jpg";
import serviceFinancing from "@/assets/service-financing.jpg";
import serviceCaseStudies from "@/assets/service-casestudies.jpg";
import serviceFaq from "@/assets/service-faq.jpg";

const services = [
  {
    title: "Customized Solar Solutions",
    image: serviceSolar,
    description:
      "Our team of experts will design and install a solar panel system that fits your business's energy needs. We work with you to create a custom solution that maximizes your energy savings.",
  },
  {
    title: "Solar Panel Maintenance",
    image: serviceMaintenance,
    description:
      "Our team provides regular checkups to ensure your solar panel system is running at maximum efficiency. We also offer repairs if needed.",
  },
  {
    title: "Battery Backup Systems",
    image: serviceBattery,
    description:
      "In the event of a power outage, our battery backup systems will keep your business running. Never be left in the dark again.",
  },
  {
    title: "Solar System Financing",
    image: serviceFinancing,
    description:
      "We offer flexible financing options to make solar energy more accessible to businesses. Contact us to learn about our financing plans.",
  },
  {
    title: "Case Studies",
    image: serviceCaseStudies,
    description:
      "See how other businesses have saved money and reduced their carbon footprint with our solar panel installations. Read our case studies to learn more.",
  },
  {
    title: "Frequently Asked Questions",
    image: serviceFaq,
    description:
      "Have questions about solar panel installations for your business? Check out our Customer Query Form page for answers to common questions.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding mt-8 py-10 bg-background">
    <div className="container mx-auto">
      <h2 className="section-heading mb-10 font-bold text-3xl  text-center">
        SolarPanels for Your Reduce Electricity Bill And Safe Future
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="text-center">
            <h3 className="font-heading text-base md:text-lg font-semibold text-foreground mb-3 underline decoration-muted-foreground/30 underline-offset-4">
              {s.title}
            </h3>
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-40 md:h-48 object-cover rounded mb-3"
            />
            <p className="text-sm text-muted-foreground leading-relaxed px-2">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
