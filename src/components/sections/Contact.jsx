import { siteContent } from "../../data/portfolioData";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title={siteContent.contact.title} 
          subtitle="Have a project in mind or want to collaborate? Let's talk."
        />
        
        <GlassCard className="p-8 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>
            
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};
