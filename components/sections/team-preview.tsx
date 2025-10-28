import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Naslov */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Naš tim
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tri iskusne ginekologinje. Jedan zajednički cilj — vaše zdravlje i povjerenje.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.slug} className="border">
              <CardContent className="p-6 text-center space-y-4">
                {/* Fotografija */}
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-muted mb-4">
                  <Image
                    src="/image.jpg"
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.specialization}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/o-nama">
              Upoznajte naš tim
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

