import { Metadata } from 'next'
import { UserCheck } from 'lucide-react'
import { clients } from '~/data/clients'

export const metadata: Metadata = {
  title: 'Security Supervisor | Optimus',
  description: 'Experienced supervisors for security oversight.',
}

export default function SecuritySupervisorPage() {
  const relatedClients = ['residential', 'retail', 'banking-and-finance', 'educational-institutions']

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <UserCheck className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Security Supervisor</h1>
      </div>

      {/* Description */}
      <div className="mb-12">
        <p className="mb-6 text-xl text-muted-foreground">Experienced supervisors for security oversight.</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Our security supervisors are skilled in managing and overseeing security teams. They ensure the proper
            execution of security protocols and respond promptly to emergencies, providing leadership and effective
            coordination.
          </p>
          <h3>Our Security Supervisor Services Include:</h3>
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
