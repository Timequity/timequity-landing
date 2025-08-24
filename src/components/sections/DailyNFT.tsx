import { Button } from '../ui'
import { Trophy } from 'lucide-react'

export function DailyNFT() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-border">
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="flex justify-center">
                  <Trophy size={96} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold">Today's Achievement</h3>
                  <p className="text-muted-foreground">Daily productivity NFT</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  #0024 • 8.5 hours tracked
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Earn Daily NFTs
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every day you track time, you earn a unique Daily Productivity NFT. 
              These collectibles represent your work journey and can be traded, 
              showcased, or used to unlock platform benefits.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold">Unique Daily Designs</h4>
                  <p className="text-sm text-muted-foreground">Each day features algorithmically generated artwork</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold">Track Your Progress</h4>
                  <p className="text-sm text-muted-foreground">Visual representation of your productivity journey</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold">Tradeable Assets</h4>
                  <p className="text-sm text-muted-foreground">Exchange NFTs with other community members</p>
                </div>
              </div>
            </div>

            <Button variant="outline">
              View NFT Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}