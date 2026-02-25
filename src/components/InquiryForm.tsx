import { useState } from "react";
import { Send, X } from "lucide-react";
import { toast } from "sonner";

const kwOptions = Array.from({ length: 100 }, (_, i) => i + 1);

const InquiryModal = ({ isOpen, setIsOpen }: any) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    location: "",
    kw: "",
    solarType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.mobile ||
      !form.location ||
      !form.kw ||
      !form.solarType
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (!/^\d{10}$/.test(form.mobile)) {
      toast.error("Please enter valid 10 digit number");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("access_key", "06c17515-2262-47d4-aa31-a829fa141b0e");
      formData.append("name", form.name);
      formData.append("mobile", form.mobile);
      formData.append("location", form.location);
      formData.append("kw", form.kw);
      formData.append("solarType", form.solarType);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Inquiry submitted successfully!");
        setForm({
          name: "",
          mobile: "",
          location: "",
          kw: "",
          solarType: "",
        });
        setIsOpen(false);
      } else {
        toast.error("Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-[95%] max-w-lg rounded-2xl p-6 relative shadow-xl animate-fadeIn">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          Get Free Solar Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            maxLength={10}
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />

          <select
            name="kw"
            value={form.kw}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select KW</option>
            {kwOptions.map((kw) => (
              <option key={kw} value={kw}>
                {kw} KW
              </option>
            ))}
          </select>

          <select
            name="solarType"
            value={form.solarType}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select Solar Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
