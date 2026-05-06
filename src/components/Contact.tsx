import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message ready — opening your email client");
    window.location.href = `mailto:swetha0102062@gmail.com?subject=From ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message + "\n\n— " + form.email)}`;
  };

  return (
    <section id="contact" className="relative px-6 md:px-12 py-28 border-t border-soft">
      <div className="font-mono-label text-muted-foreground mb-16">Contact / 06</div>

      <h2 className="font-serif font-light text-cream leading-[0.95] tracking-tight text-[clamp(3rem,10vw,9rem)] mb-12">
        Let&rsquo;s <em className="italic">build</em> together.
      </h2>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            Have an internship, research collaboration, or a product idea that needs
            embedded + software expertise? I&rsquo;d love to hear about it.
          </p>

          <div className="space-y-4">
            <a href="mailto:swetha0102062@gmail.com" className="flex items-center gap-3 text-cream hover:opacity-70 transition">
              <Mail size={16} className="text-muted-foreground" />
              swetha0102062@gmail.com
            </a>
            <div className="flex items-center gap-3 text-cream">
              <Phone size={16} className="text-muted-foreground" />
              +91 88065 47710
            </div>
            <div className="flex items-center gap-3 text-cream">
              <MapPin size={16} className="text-muted-foreground" />
              Coimbatore, India
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/swethalatha-s"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-soft text-cream font-mono-label hover:bg-secondary transition"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/swetha4995"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-soft text-cream font-mono-label hover:bg-secondary transition"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 space-y-6 lg:pl-12 lg:border-l border-soft">
          <div className="font-mono-label text-cream">Send a message</div>

          {[
            { k: "name", label: "Name", type: "text" },
            { k: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.k}>
              <label className="font-mono-label text-muted-foreground block mb-2">{f.label}</label>
              <input
                type={f.type}
                value={(form as any)[f.k]}
                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                className="w-full bg-transparent border-b border-soft text-cream py-3 outline-none focus:border-cream transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="font-mono-label text-muted-foreground block mb-2">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-soft text-cream py-3 outline-none focus:border-cream transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-primary-foreground font-mono-label hover:opacity-80 transition"
          >
            Send Message <ArrowUpRight size={14} />
          </button>
        </form>
      </div>

      <footer className="mt-32 pt-8 border-t border-soft flex flex-wrap justify-between gap-4 font-mono-label text-muted-foreground">
        <div>© 2025 Swethalatha</div>
        <div>Designed & built with care.</div>
      </footer>
    </section>
  );
};

export default Contact;
