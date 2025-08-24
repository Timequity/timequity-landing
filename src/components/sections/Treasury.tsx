import { Button } from '../ui'

export function Treasury() {
  const metrics = [
    { label: 'Fund NAV', value: '$2,847,392', dynamic: true },
    { label: 'Unit Price', value: '$1.23', dynamic: true },
    { label: 'Total Units', value: '2,314,567', dynamic: true },
    { label: 'Holder Payouts (YTD)', value: '$184,293', dynamic: true },
  ]

  return (
    <section id="treasury" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Fund treasury and your units
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent metrics and clear rules
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-surface rounded-2xl p-6 text-center space-y-2">
              <div className="text-2xl font-display font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
              {metric.dynamic && (
                <div className="text-xs text-accent">Live</div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-surface/50 rounded-2xl p-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            UnitPrice calculated as NAV / TotalUnits. When fund receives profits from 
            portfolio projects, portion distributed to holders proportionally by units, 
            portion reinvested — NAV and unit price grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              Distribution history
            </Button>
            <Button variant="outline">
              Calculation methodology
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}