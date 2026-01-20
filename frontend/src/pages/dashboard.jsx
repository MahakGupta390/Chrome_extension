import Header from "../components/Header";
import AnimateWord from "../components/AnimateWord";
import Background from "../components/Background";
import Overlay from "../components/Overlay";
import Focus from "../components/Focus";
import BrowserMock from "../components/BrowserMock";
import Accordion from "../components/Accordian";
import Footer from "../components/Footer";
import Features from "../components/Features";
import ReviewsList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
   const navigate = useNavigate();
    const token = localStorage.getItem("token");

  const handleClick = () => {
    if (!token) navigate("/login");
    else navigate("/install");
  };


  const accordionItems = [
    {
      title: "Personalised Themes",
      content:
        "Change your browser’s look to suit your mood or workflow, with dynamic backgrounds and styles.",
    },
    {
      title: "Daily Focus & Reminders",
      content:
        "See your to-do list on your homepage, set your daily focus, and get gentle reminders. Inspiring imagery and quotes keep you motivated.",
    },
    {
      title: "Beautiful & Calming Dashboards",
      content:
        "A peaceful touch in today’s hectic world.",
    },
  ];
const isLoggedIn = Boolean(localStorage.getItem("token"));

  return (
    <>
        <section className="relative h-screen w-screen overflow-hidden">

      {/* Background image */}
      <img
        src="/hero-bg.avif"
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Header */}
      <Header />

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-8 text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Turn your Browser space
          <AnimateWord words={["Productive", "Focused", "Fun", "Creative"]} />
        </h1>
        {/* <h3>Turn your browser into a workspace made for you</h3> */}
        <h3 className="text-2xl md:text-3xl font-semibold text-black-900 leading-snug tracking-tight">
  Your browser, shaped around your workflow
</h3>

<p className="mt-3 text-md md:text-base text-black-200 max-w-md">
  A personalized browser workspace designed for focus and productivity.
</p>


        {/* <button className="mt-4 px-6 py-3 bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Get Started
        </button> */}
          <button
      onClick={handleClick}
      className="mt-4 px-6 py-3 bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      {token ? "Try Now " : "Login to Get Started"}
    </button>
      </div>
    </section>

    {/* Two-Column Section */}
      {/* <section className="relative min-h-screen w-screen  flex flex-col md:flex-row"> */}
        <section className="flex justify-center px-4 py-16 bg-gray-100">
  <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Accordion Side */}
        
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-50">
          <h2 className="text-4xl font-bold mb-6">Shape your browsing experience</h2>
          <Accordion items={accordionItems} />
        </div>

        {/* Browser Mock Side */}
        <div className="md:w-1/2 relative h-[80vh] p-4 flex justify-center items-center">
          <div className="w-full h-full max-w-lg shadow-xl rounded-xl overflow-hidden">
            <BrowserMock>
              <Background />
              <Overlay />
              <div className="relative z-10 h-full flex items-center justify-center">
                <Focus />
              </div>
            </BrowserMock>
          </div>
        </div>
        </div>
      </section>
      <div>
        <Features/>
      </div>
      <section className="bg-white py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">
      What our users think
    </h2>
    <p className="text-gray-600 mb-10">
      Real feedback from people using our platform
    </p>

    {/* Show form only if logged in */}
    {isLoggedIn ? (
      <div className="max-w-xl mx-auto mb-16">
        <ReviewForm />
      </div>
    ) : (
      <p className="mb-16 text-gray-500">
        Login to share your feedback
      </p>
    )}

    {/* Testimonials */}
    <ReviewsList />
  </div>
</section>
      <Footer/>
      </>
  );
}
