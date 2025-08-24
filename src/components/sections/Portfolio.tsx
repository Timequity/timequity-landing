import { Button } from '../ui'
import { Briefcase, TrendingUp } from 'lucide-react'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            What's already in progress
          </h2>
          <p className="text-lg text-muted-foreground">
            Live portfolio projects built by AI agents
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-12 text-center space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center">
                  <Briefcase size={40} className="text-muted-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 glass-card rounded-full flex items-center justify-center">
                  <TrendingUp size={16} className="text-primary" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold">
                No projects in progress yet
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Our AI agent fleet is ready to launch. First projects will begin 
                once we have initial fund holders and community voting is active.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-2xl font-display font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Active projects</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-2xl font-display font-bold text-primary">Soon</div>
                <div className="text-sm text-muted-foreground">First launch</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" disabled>
              View full portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}