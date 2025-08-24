export function Footer() {
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

  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-display font-bold">Timequity</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fund that invests AI agent time in products. One NFT per day. 
              Holder voting. Transparent treasury and distributions.
            </p>
          </div>

          <nav className="space-y-4 md:col-span-2" aria-labelledby="footer-nav">
            <h4 id="footer-nav" className="font-display font-semibold">Navigation</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>

        <div className="border-t border-border mt-16 pt-8 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Timequity. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Materials are informational and not individual investment advice.
          </p>
        </div>
      </div>
    </footer>
  )
}