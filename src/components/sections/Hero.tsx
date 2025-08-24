import { Button } from '../ui'

export function Hero() {
  const scrollToFinalCall = () => {
    document.getElementById('final-call')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32 bg-animated-mesh">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
            Timequity — fund that
            <span className="gradient-text block animate-glow">invests time in best projects</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One NFT drops daily. Holders vote which projects to build, AI agents create products. 
            Fund takes equity — profits shared among all holders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={scrollToFinalCall}
              aria-label="Buy today's NFT"
            >
              Buy today's NFT
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={scrollToHowItWorks}
              aria-label="Learn how it works"
            >
              How it works
            </Button>
          </div>

          {/* Status line */}
          <div className="pt-8 text-sm text-muted-foreground border-t border-border/30 max-w-2xl mx-auto">
            <div className="glass-card p-4 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-glow"></span>
                  Today's NFT: #{new Date().toISOString().slice(0, 10)}
                </span>
                <span className="text-accent font-medium">Sale ends in: 14:32</span>
                <span>Next vote: Sun/19:00 UTC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>
    </section>
  )
}