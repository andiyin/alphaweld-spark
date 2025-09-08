import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Shield, Leaf, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Über uns</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                UNTERNEHMENSPOLITIK
              </h2>
              <p className="text-xl mb-8 text-white/90">
                QUALITÄT. VERANTWORTUNG. NACHHALTIGKEIT.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Willkommen bei der Alphaweld GmbH – Ihrem Großhandelspartner für hochwertige 
                schweißtechnische Produkte. Unsere Unternehmenspolitik ist Ausdruck unseres 
                Selbstverständnisses als verantwortungsvoller Akteur im internationalen Handel. 
                Sie vereint unser Qualitätsversprechen mit unserem Engagement für Umwelt, Ethik 
                und faire Lieferketten.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Quality */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Qualität und Kundenzufriedenheit</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Wir stehen für geprüfte Qualität, normgerechte Produkte und zuverlässigen Service. 
                      Unsere Kunden profitieren von:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Hochwertigen, langlebigen Produkten</li>
                      <li>Fachlicher Beratung durch erfahrene Spezialisten</li>
                      <li>Lückenloser Qualitätskontrolle und Konformitätssicherung</li>
                    </ul>
                    <blockquote className="mt-6 border-l-4 border-primary pl-4 text-sm italic">
                      "Unsere Kunden sollen sich nicht nur auf unsere Produkte verlassen können – sondern auch auf unser Wort."
                    </blockquote>
                  </CardContent>
                </Card>

                {/* Sustainability */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Leaf className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Nachhaltigkeit & Umweltschutz</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Wir übernehmen Verantwortung für Mensch und Umwelt – heute und in Zukunft.
                    </p>
                    <p className="font-semibold mb-3">Unsere Prinzipien:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Reduktion von Emissionen & Verpackungsmüll</li>
                      <li>Bevorzugung ressourcenschonender Materialien</li>
                      <li>Zusammenarbeit mit umweltzertifizierten Lieferanten (z.B. ISO 14001)</li>
                      <li>Förderung nachhaltiger Logistiklösungen</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Responsible Sourcing */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Einkauf mit Verantwortung</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <strong>Ethisch. Sorgfältig. Konfliktfrei.</strong>
                    </p>
                    <p className="text-sm mb-3">Unsere Einkaufsentscheidungen basieren auf strengen Kriterien:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Keine Kinder- oder Zwangsarbeit</li>
                      <li>Faire Arbeitsbedingungen & Gleichbehandlung</li>
                      <li>Ausschluss von Konfliktmaterialien</li>
                      <li>Lieferkettensorgfalt gemäß LkSG</li>
                      <li>Transparente & nachvollziehbare Herkunft</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Integrity */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Integrität & soziale Verantwortung</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Vertrauen ist unser Fundament. Wir fördern:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Eine offene, diskriminierungsfreie Unternehmenskultur</li>
                      <li>Arbeitssicherheit & Gesundheitsschutz</li>
                      <li>Vereinbarkeit von Beruf und Familie</li>
                      <li>Gesetzestreue und ethisches Verhalten</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Continuous Improvement */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Kontinuierliche Verbesserung</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Unsere Politik ist dynamisch – wie der Markt. Deshalb:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Überprüfen und aktualisieren wir regelmäßig unsere Prozesse</li>
                      <li>Schulen wir unsere Mitarbeitenden kontinuierlich</li>
                      <li>Führen wir interne Audits & Lieferantenbewertungen durch</li>
                      <li>Lernen wir aus Feedback – und setzen es um</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">Downloads</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-elegant hover:shadow-industrial transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Lieferkettenpolitik</h4>
                    <Button variant="outline" className="w-full">
                      PDF herunterladen
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-elegant hover:shadow-industrial transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Erklärung zur Rohstoffbeschaffung</h4>
                    <Button variant="outline" className="w-full">
                      PDF herunterladen
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-elegant hover:shadow-industrial transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Bericht Konfliktmineralien 2024</h4>
                    <Button variant="outline" className="w-full">
                      PDF herunterladen
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Fragen zur Alphaweld-Unternehmenspolitik? Kontaktieren Sie uns über unser 
                  Kontaktformular – wir stehen für Transparenz und einen offenen Dialog.
                </p>
                <Button asChild>
                  <a href="/contact">Kontakt aufnehmen</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;