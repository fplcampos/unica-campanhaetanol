import BannerHome from "@/components/Banner";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowToFuel from "@/components/HowToFuel";
import MythsTruths from "@/components/MythsTruths";
import Quiz from "@/components/Quiz";
import VideoGallery from "@/components/VideoGallery";

export default function Home() {

  return (
    <>
      <Header />
      <BannerHome />
      <HowToFuel />
      <MythsTruths />
      <VideoGallery />
      <Quiz />
      <Calculator />
      <Footer />
    </>
  )
}