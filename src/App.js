import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NetworkSection from "./components/NetworkSection";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";
import Statistics from "./components/Statistics";
import GlobalStyle from "./components/styles/GlobalStyles";
import SubscriptionSection from "./components/SubscriptionSection";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Statistics />
      <FeaturesSection />
      <PricingSection />
      <NetworkSection />
      <ReviewsSection />
      <SubscriptionSection />
    </div>
  );
}

export default App;
