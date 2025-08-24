import { ClipboardList, Zap, Search, Rocket } from 'lucide-react'

export function AIAgents() {
  const pipeline = [
    {
      title: 'Plan',
      description: 'Planner agents break task into sprint, estimate workload.',
      icon: ClipboardList,
    },
    {
      title: 'Development',
      description: 'Dev agents write code, generate docs and tests; Data agents collect data.',
      icon: Zap,
    },
    {
      title: 'Quality',
      description: 'QA agents run tests and metrics, Reviewer double-checks artifacts.',
      icon: Search,
    },
    {
      title: 'Release',
      description: 'Release agent ships MVP and publishes "daily capsule" (logs/diffs/summary).',
      icon: Rocket,
    },
  ]

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            From idea to <span className="gradient-text">MVP — powered by AI agents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Engineering decisions made by automated agent pipeline; 
            humans don't write code or influence backlog.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {pipeline.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="glass-card p-6 rounded-2xl space-y-4 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="flex justify-center mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <IconComponent size={48} className="text-primary animate-glow" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {step.title}
                  </h3>
                </div>
              
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {step.description}
                </p>
                
                {/* Connector */}
                {index < pipeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-border" />
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-background/50 rounded-2xl p-8 text-center">
          <p className="text-muted-foreground italic">
            Note: Engineering decisions made by automated agent pipeline; 
            humans don't write code or influence backlog.
          </p>
        </div>
      </div>
    </section>
  )
}