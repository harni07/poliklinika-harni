const REASONS = [
  {
    title: "Iskustvo i preciznost",
    description: "25 godina rada u ginekologiji i perinatologiji",
  },
  {
    title: "Bez čekanja",
    description: "Pregled u najkraćem mogućem roku",
  },
  {
    title: "Suvremena dijagnostika",
    description: "Ultrazvuk, kolposkopija, laserski tretmani",
  },
  {
    title: "Diskrecija i podrška",
    description: "Ugodan ambijent i osobni pristup",
  },
  {
    title: "Brza komunikacija",
    description: "WhatsApp, e-mail ili poziv u jednom dodiru",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Naslov */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Zašto odabrati Polikliniku Harni
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Lista razloga */}
          <div className="grid gap-8 md:grid-cols-2">
            {REASONS.map((reason, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

