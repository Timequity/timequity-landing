interface WaitlistData {
  email: string
  role: string
}

export async function submitToWaitlist(data: WaitlistData): Promise<boolean> {
  const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT
  
  if (!endpoint) {
    console.warn('VITE_WAITLIST_ENDPOINT not configured')
    return false
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'landing_page',
      }),
    })

    return response.ok
  } catch (error) {
    console.error('Failed to submit to waitlist:', error)
    return false
  }
}