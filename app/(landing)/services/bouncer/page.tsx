import { Metadata } from 'next'
import { Users } from 'lucide-react'
import { clients } from '~/data/clients'

export const metadata: Metadata = {
  title: 'Bouncer | Optimus',
  description: 'Bouncers for event security and management.',
}

export default function BouncerPage() {
  const relatedClients = ['residential', 'retail', 'banking-and-finance', 'educational-institutions']

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Bouncer</h1>
      </div>

      {/* Description */}
      <div className="mb-12">
        <p className="mb-6 text-xl text-muted-foreground">Bouncers for event security and management.</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Our professional bouncers provide security and crowd management for events of all sizes. Trained in handling
            difficult situations, they ensure smooth operations and maintain order.
          </p>
          <h3>Our Bouncer Services Include:</h3>
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
                  <div className="rounded-lg bg-primary/10 p-2">
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
