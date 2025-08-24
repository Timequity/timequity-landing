import { Bot } from 'lucide-react'

export function WhyTimequity() {
  const benefits = [
    {
      title: 'Access to idea pipeline',
      description: 'AI scouts find promising opportunities; you choose the best ones.',
    },
    {
      title: 'Building faster',
      description: 'Parallel AI agents write code, docs, tests and analytics.',
    },
    {
      title: 'Equity not promises',
      description: 'Fund gets real equity shares and distributes profits to holders.',
    },
    {
      title: 'Transparent & simple',
      description: 'One NFT per day, clear units, weekly votes, open fund stats.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Why <span className="gradient-text">Timequity</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Traditional venture capital is slow, exclusive, and human-limited. 
              Our AI-powered fund moves faster, builds products autonomously, 
              and shares real returns with all holders.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-card p-4 rounded-xl space-y-2 transition-all duration-300 hover:scale-105">
                  <h3 className="font-display font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square glass-card rounded-2xl flex items-center justify-center glow-primary transition-all duration-500 hover:scale-105">
              <div className="text-center space-y-4">
                <div className="flex justify-center animate-float">
                  <Bot size={96} className="text-primary animate-glow" />
                </div>
                <div className="text-xl font-display font-semibold gradient-text">
                  AI Builds = Real Equity
                </div>
                <div className="text-muted-foreground">
                  Automated. Fast. Profitable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}