import { MessageCircle, Mail, Phone, ExternalLink, Instagram } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { icon: MessageCircle, name: "Telegram Channel", link: "https://t.me/+C1rweHQHR6IzOGNl", detail: "Grow Capitalist", color: "text-blue-400" },
    { icon: Instagram, name: "Instagram ID", link: "https://www.instagram.com/risewithmayankgupta?igsh=MTU0Nm02ZThrd2tlMA==", detail: "@risewithmayank_gupta", color: "text-pink-500" },
    { icon: ExternalLink, name: "Threads", link: "https://www.threads.com/@risewithmayankgupta", detail: "@risewithmayank_gupta", color: "text-gray-300" },
  ];

  const contactInfo = [
    { icon: Phone, detail: "+91 78701 25784", type: "tel" },
    { icon: Mail, detail: "growsurecapital25@gmail.com", type: "mailto" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        
        {/* === CONTACT INFO === */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            Connect with us on social media or reach out directly via email or phone.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a 
                  key={index} 
                  href={`${item.type}:${item.detail}`} 
                  className="flex items-center space-x-4 text-lg hover:text-yellow-500 transition duration-300"
                >
                  <Icon className="w-6 h-6 text-cyan-400" />
                  <span>{item.detail}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* === SOCIAL MEDIA LINKS === */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <div className="space-y-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 group"
                >
                  <Icon className={`w-8 h-8 ${social.color} transition-transform group-hover:scale-110`} />
                  <div>
                    <p className="font-semibold text-lg">{social.name}</p>
                    <p className="text-sm text-gray-400">{social.detail}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
