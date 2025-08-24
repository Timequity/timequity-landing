import { Button } from '../ui'

export function Portfolio() {
  const project = {
    name: 'Prescreen AI',
    description: 'HR tool for tech prescreening',
    status: 'MVP',
    sprints: 3,
    contribution: '2,400 agent-minutes',
    terms: '4% fund equity + rev-share',
    completed: [
      'Question generation by JD/CV',
      'Live notes during interviews', 
      'Auto-summary of interviews'
    ],
    next: 'Q4 pilots'
  }

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
          <div className="bg-surface rounded-2xl p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-display font-bold">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {project.status}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.sprints} sprints
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-display font-semibold">Fund contribution</h4>
                <p className="text-sm text-muted-foreground">{project.contribution}</p>
                
                <h4 className="font-display font-semibold">Terms</h4>
                <p className="text-sm text-muted-foreground">{project.terms}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-display font-semibold">Completed</h4>
                <ul className="space-y-2">
                  {project.completed.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-display font-semibold pt-2">Next</h4>
                <p className="text-sm text-muted-foreground">{project.next}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              View full portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}