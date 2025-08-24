export function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      status: 'in-progress',
      timeline: 'Current',
      items: [
        'Daily drop mechanism',
        'Fund units tracking',
        'Treasury management',
        'Basic distributions',
        'Voting V2 (weight=units)',
        'First 3-5 projects'
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Scale',
      status: 'planned',
      timeline: 'Q2 2025',
      items: [
        'Expanded AI agent fleet',
        'Sprint efficiency metrics',
        'Enhanced portfolio dashboards',
        'Improved payout tracking'
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Ecosystem',
      status: 'planned',
      timeline: 'Q3-Q4 2025',
      items: [
        'Public APIs for fund data',
        'Complete "daily capsules"',
        'Portfolio analytics',
        'Partnership co-launches'
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Where <span className="gradient-text">we're heading</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our journey to scale AI-powered fund operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative flex">
              <div className={`glass-card p-6 rounded-2xl flex flex-col w-full transition-all duration-500 hover:scale-105 ${
                phase.status === 'in-progress' 
                  ? 'border-primary/30 glow-primary' 
                  : 'border-white/10'
              }`}>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {phase.phase}
                    </span>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      phase.status === 'in-progress' 
                        ? 'gradient-primary text-white animate-glow' 
                        : 'bg-white/5 text-muted-foreground border border-white/10'
                    }`}>
                      {phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold">
                    {phase.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {phase.timeline}
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector line */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}