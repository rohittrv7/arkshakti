import video from "@/assets/video.mp4";
const VideoSection = () => (
  <section id="video" className="section-padding bg-background py-8">
    <div className="container mx-auto text-center">
      <h2 className="section-heading font-bold text-[#AD8C8C] mb-2 text-center text-3xl">
        Solar panel System Installation Video
      </h2>
      <div className="w-12 h-0.5 bg-muted-foreground/30 mx-auto m" />
      <p className="text-muted-foreground mb-8">Check out this great video</p>

      <div className="max-w-lg mx-auto aspect-[9/16] bg-foreground/10 rounded overflow-hidden">
        <video
          src={video}
          controls
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          title="Solar Panel Installation Video"
        />
      </div>
    </div>
  </section>
);

export default VideoSection;
