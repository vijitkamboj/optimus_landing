import { Metadata } from 'next'
import { ShieldCheck } from 'lucide-react'
import { clients } from '~/data/clients'

export const metadata: Metadata = {
  title: 'Security Guard | Optimus',
  description: 'Trained guards for round-the-clock safety.',
}

export default function SecurityGuardPage() {
  const relatedClients = ['residential', 'retail', 'banking-and-finance', 'educational-institutions']

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Security Guard</h1>
      </div>

      {/* Description */}
      <div className="mb-12">
        <p className="mb-6 text-xl text-muted-foreground">Trained guards for round-the-clock safety.</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Our professional security guards are trained to provide 24/7 safety and vigilance. They are equipped to
            handle any situation with expertise, ensuring your property and personnel remain secure at all times.
          </p>
          <h3>Our Security Guard Services Include:</h3>
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
