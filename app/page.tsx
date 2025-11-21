import React from "react";
import Hero from "./components/Hero";
import BookingTheAppointment from "./components/BookingTheAppointment";
import ClientSliderWrapper from './components/Cards/Card';
import Services from "./components/Cards/Services";
import Slider from "./components/Slider/slider";
import Utilities from "./components/Utilities";
import Team from "./components/Team";
import Marque from "./components/Marque";
import SliderNew from "./components/Slider/slider";
import Portfolio from "./components/Portfolio";

export default function RootApp() {
  return (
    <div className="bg-white">
      <Hero />
      <SliderNew />
      <BookingTheAppointment />
      <Services />
      <Portfolio />
      <Marque />
      <Utilities />
      <Team />
    </div>
  );
}
