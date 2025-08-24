import { Button } from '../ui'

export function FinalCall() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section id="final-call" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Join the fund today
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get today's exclusive NFT. Increase your share, vote for projects 
            and participate in profit distribution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Buy today's NFT
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={scrollToPortfolio}
            >
              View portfolio
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full sm:w-auto"
            >
              Subscribe to updates
            </Button>
          </div>

          {/* Status reminder */}
          <div className="pt-8 text-sm text-muted-foreground border-t border-border/30 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4">
              <span>Today: #{new Date().toISOString().slice(0, 10)}</span>
              <span>•</span>
              <span>Sale ends: 14:32</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}