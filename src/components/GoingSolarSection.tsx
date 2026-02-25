import goingSolarImg from "@/assets/going-solar.jpg";

const GoingSolarSection = () => (
  <section className="section-padding section-alt-bg py-8 bg-[#F6F6F6]">
    <div className="container mx-auto">
      <h2 className="section-heading mb-8 text-[#A18989] text-center text-3xl font-bold">
        Going Solar Has Never Been Easier
      </h2>

      <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
        <div className="md:col-span-2 space-y-3">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Experience the Power of the Sun with Arkshakti Power Solutions PVT.
            LTD. Solar Installation
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            At Arkshakti Power Solutions PVT. LTD., we're passionate about
            helping our customers embrace clean, renewable energy sources.
            Whether you're looking to reduce your carbon footprint, save money
            on your energy bills, or both, our team of expert installers can
            help. We offer a wide range of solar panel systems to suit your
            needs, from small residential installations to large commercial
            projects. With Arkshakti Power Solutions PVT. LTD., you can trust
            that you're getting the best solar solution for your unique
            situation.
          </p>
        </div>
        <div>
          <img
            src={goingSolarImg}
            alt="Going solar saves money"
            className="w-full rounded shadow"
          />
        </div>
      </div>
    </div>
  </section>
);

export default GoingSolarSection;
