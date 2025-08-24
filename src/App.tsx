import { Navigation } from './components/Navigation'
import { 
  Hero, 
  HowItWorks, 
  WhyTimequity, 
  DailyDrop,
  Voting,
  Treasury,
  AIAgents,
  Portfolio, 
  Roadmap,
  MuseumDay,
  FAQ, 
  FinalCall, 
  Footer 
} from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <WhyTimequity />
        <DailyDrop />
        <Voting />
        <Treasury />
        <AIAgents />
        <Portfolio />
        <Roadmap />
        <MuseumDay />
        <FAQ />
        <FinalCall />
      </main>
      <Footer />
    </div>
  )
}

export default App
