import { Metadata } from 'next'
import { Package } from 'lucide-react'
import { services } from '~/data/services'

export const metadata: Metadata = {
  title: 'Warehouse & Logistics Security Services | Optimus',
  description: 'Security for storage and transportation hubs.',
}

export default function WarehouseLogisticsPage() {
  const relatedServices = ['security-guard', 'security-supervisor', 'surveillance-room']

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <div className="rounded-lg bg-muted p-3">
          <Package className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Warehouse & Logistics Security</h1>
      </div>

      {/* Description */}
      <div className="mb-12">
        <p className="mb-6 text-xl text-muted-foreground">Security for storage and transportation hubs.</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Our warehouse & logistics security services are designed to provide comprehensive protection tailored
            specifically for the warehouse & logistics sector. We understand the unique security challenges faced by
            warehouse & logistics establishments and offer specialized solutions to address them.
          </p>
          <ul>
            <li>24/7 security guard services</li>
            <li>Advanced surveillance systems</li>
            <li>Access control management</li>
            <li>Emergency response protocols</li>
            <li>Regular security audits and assessments</li>
          </ul>
        </div>
      </div>

      {/* Related Services */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Related Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((service) => relatedServices.includes(service.href.split('/').pop()!))
            .map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group rounded-lg border p-6 transition-colors hover:border-primary hover:bg-primary/5"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-lg bg-muted p-2">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </a>
            ))}
        </div>
      </section>
    </main>
  )
}
