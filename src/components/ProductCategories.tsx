import { Flame, Zap, Shield, Wrench, CircuitBoard, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const categories = [
    {
      icon: Flame,
      title: "MIG/MAG Brenner",
      description: "Hochwertige Schweißbrenner für professionelle Anwendungen",
      products: ["AW-150", "AW-240", "AW-400", "AW-550"],
      color: "text-primary",
      link: "/products/migmag-brenner"
    },
    {
      icon: Zap,
      title: "WIG Brenner",
      description: "Präzise WIG-Brenner für anspruchsvolle Schweißarbeiten",
      products: ["SR-9", "SR-17", "SR-26", "SR-18"],
      color: "text-secondary",
      link: "/products/wig-brenner"
    },
    {
      icon: CircuitBoard,
      title: "Plasma Brenner",
      description: "Moderne Plasma-Technologie für saubere Schnitte",
      products: ["P-50", "P-70", "P-100", "P-130"],
      color: "text-primary",
      link: "/products/plasma-brenner"
    },
    {
      icon: Wrench,
      title: "Schweißmaschinen",
      description: "Zuverlässige Schweißanlagen für jeden Einsatzbereich",
      products: ["Elektrodeninverter", "WIG-Anlagen", "MIG/MAG", "Plasma"],
      color: "text-secondary",
      link: "/products/machines"
    },
    {
      icon: HardHat,
      title: "Arbeitsschutz",
      description: "Schutzausrüstung höchster Qualität",
      products: ["Black Star Pro", "Automatikhelme", "Handschuhe", "Schürzen"],
      color: "text-primary",
      link: "/products/arbeitsschutz"
    },
    {
      icon: Shield,
      title: "Wolframelektroden",
      description: "Präzisionselektroden für optimale Schweißergebnisse",
      products: ["WP grün", "WC20 grau", "WL15 gold", "WT20 rot"],
      color: "text-secondary",
      link: "/products/tungsten"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Produktkategorien
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unser umfassendes Sortiment an hochwertigen Schweißprodukten 
            und Schutzausrüstung für professionelle Anwendungen.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${
                      category.color === 'text-primary' 
                        ? 'from-primary/10 to-primary/20' 
                        : 'from-secondary/10 to-secondary/20'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.products.map((product, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                      <Button asChild variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary">
                        <Link to={category.link}>
                          Mehr erfahren
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Benötigen Sie eine individuelle Beratung?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Unser Expertenteam unterstützt Sie bei der Auswahl der optimalen 
              Schweißlösung für Ihre spezifischen Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Jetzt beraten lassen
              </Button>
              <Button variant="outline" size="lg">
                Katalog anfordern
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;