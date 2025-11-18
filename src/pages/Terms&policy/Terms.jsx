import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { ArrowLeft } from "lucide-react";
import Footer from "../../components/Footer";

export default function Terms() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state; // { title, desc, path }

  if (!data) {
    // fallback if someone opens the detail page directly
    return (
      <>
        <Navbar bgColor="bg-[#fdf9f3]" textclr="text-[#002346]" />
        <div className="bg-[#fdf9f3] min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-[#002346] mb-4">
            No data found.
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 underline"
          >
            Back
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar bgColor="bg-[#fdf9f3]" textclr="text-[#002346]" />
      <div className="bg-[#fdf9f3] min-h-screen px-6 lg:px-64 py-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#002346] mb-8 hover:text-blue-700"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <h1 className="text-4xl font-bold text-[#002346] mb-6">
          {data.title}
        </h1>
        <p className="text-gray-700 lg:pr-64 leading-relaxed text-[17px] md:text-lg">
          {data.desc}
        </p>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
