import { Button } from './ui'

export function Navigation() {
  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Daily drop', href: '#daily-drop' },
    { label: 'Voting', href: '#voting' },
    { label: 'Treasury', href: '#treasury' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ]

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const scrollToFinalCall = () => {
    document.getElementById('final-call')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-display font-bold gradient-text">Timequity</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button onClick={scrollToFinalCall} size="sm">
            Buy today's NFT
          </Button>
        </div>
      </div>
    </nav>
  )
}