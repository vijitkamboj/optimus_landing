import { Flame } from 'lucide-react'
import { Metadata } from 'next'
import { clients } from '~/data/clients'

export const metadata: Metadata = {
  title: 'Fire Safety Expert | Optimus',
  description: 'Experts to ensure fire safety compliance.',
}

export default function FireSafetyExpertPage() {
  const relatedClients = ['residential', 'retail', 'banking-and-finance', 'educational-institutions']

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <div className="rounded-lg bg-muted p-3">
          <Flame className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Fire Safety Expert</h1>
      </div>

      {/* Description */}
      <div className="mb-12">
        <p className="mb-6 text-xl text-muted-foreground">Experts to ensure fire safety compliance.</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Our fire safety experts specialize in assessing risks, implementing safety measures, and ensuring compliance
            with fire regulations. They are dedicated to preventing fire hazards and safeguarding lives and property.
          </p>
          <h3>Our Fire Safety Expert Services Include:</h3>
          <ul>
            <li>Access control and visitor management</li>
            <li>Regular patrols and surveillance</li>
            <li>Emergency response and incident reporting</li>
            <li>Traffic management and parking control</li>
            <li>Asset and personnel protection</li>
          </ul>
        </div>
      </div>

      {/* Related Clients */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Industries We Serve</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients
            .filter((client) => relatedClients.includes(client.href.split('/').pop()!))
            .map((client) => (
              <a
                key={client.href}
                href={client.href}
                className="group rounded-lg border p-6 transition-colors hover:border-primary hover:bg-primary/5"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-lg bg-muted p-2">
                    <client.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{client.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </a>
            ))}
        </div>
      </section>
    </main>
  )
}
