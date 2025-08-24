import { Building2 } from 'lucide-react'

export function MuseumDay() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            What if <span className="gradient-text">daily NFT isn't sold?</span>
          </h2>
          
          <div className="glass-card rounded-2xl p-8 space-y-4 glow-accent transition-all duration-500 hover:scale-105">
            <div className="flex justify-center mb-4 animate-float">
              <Building2 size={96} className="text-primary animate-glow" />
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Such day gets archived: NFT fixed in treasury as non-transferable artifact 
              (no units or rights), while "daily capsule" remains viewable. 
              The "1 NFT per day" scarcity preserved, NAV and units unchanged.
            </p>
            
            <div className="pt-4 text-sm text-muted-foreground">
              <span className="px-4 py-2 gradient-accent text-white rounded-full font-medium animate-glow">
                Museum Day Protocol
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}