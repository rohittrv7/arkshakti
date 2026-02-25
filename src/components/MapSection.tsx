const MapSection = () => {
  const address =
    "Pushp Enclave, Jaipur - Kota Rd, Sanganer, Sector 5, Pratap Nagar, Jaipur, Rajasthan 302033";

  return (
    <section className="w-full">
      <div className="container mx-auto">
        {/* Map */}
        <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden shadow-lg">
          <iframe
            title="Arkshakti Power Solutions Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              address,
            )}&output=embed`}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
