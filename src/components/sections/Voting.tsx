import { Button } from '../ui'

export function Voting() {
  const timeline = [
    { step: 'Scout', description: 'AI finds opportunities' },
    { step: 'Memo', description: 'Brief analysis & effort estimate' },
    { step: 'Vote', description: 'Holders choose projects' },
    { step: 'Build', description: 'AI agents develop MVP' },
    { step: 'Results', description: 'Fund gets equity share' },
  ]

  return (
    <section id="voting" className="py-20 px-4 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Choose what we build next
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Weekly we publish shortlist from AI scouts with brief memo and effort estimate 
            (in "agent-minutes"). Holders vote which projects go to sprint.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-display font-semibold text-center mb-8">Process Timeline</h3>
          <div className="flex justify-center items-start overflow-x-auto">
            <div className="flex items-center min-w-max px-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <span className="text-lg font-display font-semibold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <div className="space-y-1 w-24">
                      <p className="font-display font-semibold text-sm">{item.step}</p>
                      <p className="text-xs text-muted-foreground leading-tight">{item.description}</p>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-12 h-px bg-border mx-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-background/50 rounded-2xl p-8 text-center space-y-4">
          <p className="text-muted-foreground">
            Vote weight = your fund units. Top projects (e.g., top-3) go to sprint.
          </p>
          
          <p className="text-sm text-muted-foreground italic">
            Note: Community doesn't participate in development — AI agents handle everything.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button>
              Go to voting
            </Button>
            <Button variant="outline">
              Last week results
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}