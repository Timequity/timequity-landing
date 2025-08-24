import { Button } from '../ui'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Daily NFT',
      subtitle: '1 per day, buy only',
      description: 'Each day we release exactly one NFT. Purchase fills fund treasury and grants voting access.',
    },
    {
      number: '02', 
      title: 'Fund Units',
      subtitle: 'Your share',
      description: 'Upon purchase you receive fund units proportional to contribution. NFT stores these units.',
    },
    {
      number: '03',
      title: 'Vote for Projects',
      subtitle: 'Weekly selection',
      description: 'Weekly holders vote which projects AI agents launch next sprint. Vote weight = your units.',
    },
    {
      number: '04',
      title: 'AI Builds & Profits',
      subtitle: 'Automated development',
      description: 'AI agents create MVP/infrastructure. Fund gets equity share. Profits distributed to holders proportionally.',
    },
  ]

  const scrollToFinalCall = () => {
    document.getElementById('final-call')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            How it Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From daily NFT to project profits in four transparent steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <article key={index} className="text-center space-y-4">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20"
                aria-label={`Step ${step.number}`}
              >
                <span className="text-2xl font-display font-bold text-primary">
                  {step.number}
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {step.subtitle}
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToFinalCall}>
            Buy today's NFT
          </Button>
          <Button variant="outline" onClick={scrollToPortfolio}>
            View portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}