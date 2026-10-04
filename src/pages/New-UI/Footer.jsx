import { ArrowRight } from "lucide-react";
import insta from "../../assets/instagram.png";
import gmail from "../../assets/gmail.png";
import Whatsapp from "../../assets/whatsapp-icon.png";
function Footer() {
  const nav = [
    "Home",
    "About",
    "Practice Areas",
    "People",
    "Insights",
    "Contact",
  ];
  const anchor = (item) =>
    item === "Home" ? "#home" : `#${item.toLowerCase().replaceAll(" ", "-")}`;
  return (
    <footer
      id="contact"
      className="bg-[#031d3c] text-white border-t border-white/25"
    >
      <div className="mx-auto justify-between flex  max-w-[1360px] gap-6 py-10 px-6 sm:w-[89vw] md:grid-cols-[1fr_auto_1.3fr] md:items-center">
        <div>
        <div>

      
          <h2 className="font-serif text-lg">Discuss your matter with us.</h2>
          <p className="mt-2 text-[10px] text-slate-200">
            Astreus Legal　|　New Delhi, India
          </p>
            </div>
          <div className="mt-4">
              <h4 className="font-semibold ">Connect</h4>
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.instagram.com/astreuslegal?igsh=MXBtbHl4MG56Zmc5eQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={insta} alt="instagram" className="w-6 h-6" />
                </a>

                <a href="mailto:astreuslegal@gmail.com">
                  <img src={gmail} alt="gmail" className="w-10 h-10" />
                </a>

                <a
                  href="https://wa.me/916200879825"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Whatsapp} alt="Whatsapp" className="w-6 h-6" />
                </a>
              </div>
            </div>
        </div>

        <div className="md:text-right">
          <div className="md:ml-auto flex flex-col items-center font-serif text-[18px] leading-none tracking-[.3em] text-[#dbb36d] sm:text-[22px]">
            <span>ASTREUS</span>
            <small className="mt-1 font-sans text-[6px] tracking-[.35em]">
              — LEGAL —
            </small>
            
          </div>
        </div>
      </div>
      <div className="mx-auto text-center flex w-[calc(100%-40px)] flex-col gap-2 border-t border-white/25 py-3 text-[10px] text-slate-300 sm:w-[89vw] sm:flex-row sm:justify-between">
        <span>© 2026 Astreus Legal. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
