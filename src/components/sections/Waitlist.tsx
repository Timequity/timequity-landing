import { useState } from 'react'
import { Button, Input, Label, Select } from '../ui'
import { submitToWaitlist } from '../../lib/waitlist'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const success = await submitToWaitlist({ email, role })
    
    if (success) {
      setIsSubmitted(true)
    } else {
      setError('Failed to join waitlist. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <div className="text-6xl">🎉</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Welcome to the Future!
            </h2>
            <p className="text-lg text-muted-foreground">
              You're on the waitlist. We'll notify you as soon as Timequity launches.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20 px-4">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Join the Waitlist
          </h2>
          <p className="text-lg text-muted-foreground">
            Be among the first to experience time as currency. Get early access and exclusive updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">What best describes you?</Label>
            <Select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select your role</option>
              <option value="freelancer">Freelancer</option>
              <option value="consultant">Consultant</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="creator">Content Creator</option>
              <option value="other">Other</option>
            </Select>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By joining, you agree to receive updates about Timequity. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  )
}