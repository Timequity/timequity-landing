import { Button } from '../ui'
import { Gem } from 'lucide-react'

export function DailyDrop() {
  const facts = [
    { label: 'Scarcity', value: '1 NFT/day' },
    { label: 'Mechanics', value: 'Buy only (no mining/farming)' },
    { label: 'Economics', value: '100% proceeds to fund treasury' },
    { label: 'Binding', value: 'NFT stores your fund units' },
  ]

  const scrollToFinalCall = () => {
    document.getElementById('final-call')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section id="daily-drop" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="aspect-square glass-card rounded-3xl p-8 transform hover:rotate-y-12 transition-all duration-500 hover:scale-105 glow-primary">
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="flex justify-center animate-float">
                  <Gem size={96} className="text-primary animate-glow" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold">Today's Drop</h3>
                  <p className="text-muted-foreground">#{new Date().toISOString().slice(0, 10)}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Daily exclusive NFT
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Daily drop: <span className="gradient-text">one day — one NFT</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each day — one chance. Buy daily NFT to increase your fund share 
              and get voting rights in next project selection. NFT freely trades 
              on secondary market.
            </p>

            <div className="space-y-4">
              {facts.map((fact, index) => (
                <div key={index} className="glass-card p-4 rounded-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{fact.label}</h4>
                      <p className="text-sm text-muted-foreground">{fact.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button onClick={scrollToFinalCall}>
                Buy today's NFT
              </Button>
              <Button variant="outline">
                Drop rules
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}