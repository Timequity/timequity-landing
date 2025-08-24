import { Palette, Code, BarChart3, Rocket } from 'lucide-react'

export function Roles() {
  const roles = [
    {
      title: 'Creators',
      icon: Palette,
      description: 'Designers, writers, and content creators can monetize their time directly',
      benefits: ['Direct time-to-value conversion', 'No middleman fees', 'Portfolio-based pricing'],
    },
    {
      title: 'Developers',
      icon: Code, 
      description: 'Software engineers and developers can trade coding hours for tokens',
      benefits: ['Skill-based time valuation', 'Project equity building', 'Peer-to-peer hiring'],
    },
    {
      title: 'Consultants',
      icon: BarChart3,
      description: 'Business consultants and advisors can tokenize their expertise',
      benefits: ['Expertise premium tokens', 'Long-term client relationships', 'Knowledge equity'],
    },
    {
      title: 'Freelancers',
      icon: Rocket,
      description: 'Independent workers across all industries can build sustainable income',
      benefits: ['Stable time currency', 'Cross-industry exchange', 'Equity accumulation'],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Built for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're starting out or scaling up, Timequity works for all types of professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <div key={index} className="p-6 rounded-2xl border border-border bg-surface hover:bg-surface-hover transition-colors">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <IconComponent size={48} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold">
                    {role.title}
                  </h3>
                
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {role.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {role.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}