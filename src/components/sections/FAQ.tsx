import { useState } from 'react'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: 'What does buying daily NFT give me?',
      answer: 'Fund share (fund units) and voting rights in weekly project selection.',
    },
    {
      question: 'Why only one NFT per day?',
      answer: 'Discipline and entry value: one day — one ticket.',
    },
    {
      question: 'How is my share calculated?',
      answer: 'Proportional to contribution; NFT stores your units.',
    },
    {
      question: 'How are payouts determined?',
      answer: 'Profits from portfolio projects distributed proportionally by units; portion reinvested.',
    },
    {
      question: 'Who decides what to build?',
      answer: 'Holders vote; weight = units.',
    },
    {
      question: 'Who does development?',
      answer: 'Only AI agents. Community doesn\'t participate in development.',
    },
    {
      question: 'Can I sell my NFT?',
      answer: 'Yes, on secondary market along with attached units.',
    },
    {
      question: 'What if day isn\'t sold?',
      answer: 'Archive as "Museum Day" (no units/rights), daily capsule available.',
    },
    {
      question: 'Where does NFT sale money go?',
      answer: '100% to fund treasury.',
    },
    {
      question: 'How is project shortlist formed?',
      answer: 'AI scouts + AI due diligence (memo and effort estimate).',
    },
    {
      question: 'How often are votes?',
      answer: 'Weekly; top-N projects (e.g., top-3) go to sprint.',
    },
    {
      question: 'Is there governance token?',
      answer: 'No. AI agents handle backlog management; voting only affects project selection.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-surface">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the fund
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 hover:bg-surface-hover transition-colors"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold pr-4">
                    {faq.question}
                  </h3>
                  <span 
                    className="text-2xl text-muted-foreground flex-shrink-0"
                    aria-hidden="true"
                  >
                    {openItems.includes(index) ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div id={`faq-${index}`} className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}