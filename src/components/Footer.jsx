import { useNavigate } from "react-router-dom";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import Whatsapp from "../assets/whatsapp-icon.png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const expertise = [
    {
      title: "Privacy Policy",
      desc: `At Astreus Legal Associates LLP, we are committed to protecting the privacy and confidentiality of everyone who interacts with our firm, whether clients, visitors to our website, or individuals engaging with our services. We collect only the information that is necessary to provide legal services, improve user experience, and ensure effective communication. All personal data shared with us is handled with strict professional confidentiality, used solely for lawful purposes, and safeguarded through appropriate technical and organizational measures. We do not sell, trade, or disclose personal information to third parties except where required by law or with explicit client consent. By accessing our website or engaging our services, you agree to the practices outlined in this Privacy Policy, designed to ensure transparency, trust, and the security of your information.`,
      path: "/info",
    },
    {
      title: "Terms of Use",
      desc: `By accessing and using the website of Astreus Legal Associates LLP (“the Firm”), you agree to comply with and be bound by the following Terms of Use. The content on this website is intended for general information purposes only and does not constitute legal advice, legal opinion, or solicitation of clients. No attorney–client relationship is created merely by accessing the website or communicating with the Firm through online forms, emails, or contact information provided herein. Any information submitted to the Firm through this website is not confidential unless and until a formal engagement is executed. While we strive to ensure that the information on our website is accurate and up to date, the Firm makes no warranties or representations regarding accuracy, completeness, or suitability of the materials and shall not be liable for any loss, damage, or consequences arising from reliance on the same. Users are advised to seek professional legal counsel before acting upon any information provided. This website may contain links to external websites for convenience; however, the Firm does not endorse, control, or assume responsibility for the content of third-party sites. All intellectual property on this website including text, logos, designs, and graphics remains the exclusive property of Astreus Legal Associates LLP and may not be copied, reproduced, or distributed without prior written permission. Your continued use of the website constitutes acceptance of these Terms. The Firm reserves the right to modify or update the Terms at any time without prior notice.`,
      path: "/info",
    },
  ];

  return (
    <footer className="bg-[#f5f1e9] text-[#003366] py-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Left */}
        <div className="flex flex-col items-start">
          <p className="font-semibold flex items-center gap-2 cursor-pointer">
            Stay in the loop <span className="text-xl">→</span>
          </p>
        </div>

        {/* Middle */}
        <div className="flex flex-col space-y-2 text-sm">
          {expertise.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path, { state: item })}
              className="cursor-pointer hover:underline"
            >
              {item.title}
            </div>
          ))}

          {/* Updated Contact Section */}
          <div>
            Contact:{" "}
            <a
              href="tel:+916200879825"
              className="hover:underline cursor-pointer text-blue-700"
            >
              (+91) 6200879825
            </a>
          </div>
        </div>

        {/* Right Social */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex gap-4 items-center">
            <a href="https://www.instagram.com/astreuslegal?igsh=MXBtbHl4MG56Zmc5eQ==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="w-6 h-6" />
            </a>

            <a href="mailto:astreuslegal@gmail.com">
              <img src={gmail} alt="gmail" className="w-10 h-10" />
            </a>

            <a href="https://wa.me/916200879825" target="_blank" rel="noopener noreferrer">
              <img src={Whatsapp} alt="Whatsapp" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 top-6 md:static animate-bounce border rounded-full text-2xl border-[#004b87] font-bold p-3 hover:bg-[#004b87] hover:text-white transition"
        >
          ↑
        </button>
      </div>

      <div className="text-center mt-8 text-sm text-[#003366]">
        © 2025, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
