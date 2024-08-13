import About from "../components/about/About";
import BookTickets from "../components/bookTickets/BookTicksets";
import Feedback from "../components/feedback/Feedback";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import HomeScreenHeader from "../components/home/HomeScreenHeader";
import Speciality from "../components/speciality/Speciality";
import Timings from "../components/timings/Timings";

export default function HomeScreen() {

  return (
    <>
      <HomeScreenHeader />
      <About />
      <Timings />
      <Speciality />
      <Gallery />
      <BookTickets />
      <Feedback />
      <Footer />
    </>
  );
}