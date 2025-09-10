import ProductPage from "@/components/ProductPage";

const BlackStarPro = () => {
  const technicalSpecs = [
    { property: "Schutzstufe", value: "DIN 9-13 automatisch" },
    { property: "Sichtfeld", value: "100 x 65mm" },
    { property: "Reaktionszeit", value: "< 0,1ms (hell zu dunkel)" },
    { property: "Aufhellzeit", value: "0,1s - 2s einstellbar" },
    { property: "Betriebstemperatur", value: "-10°C bis +60°C" },
    { property: "Batterie", value: "Austauschbare Lithium" },
    { property: "Gewicht", value: "ca. 450g" }
  ];

  return (
    <ProductPage
      productName="Black Star Pro"
      category="ARBEITSSCHUTZ"
      productImage="/lovable-uploads/2890bddb-14c9-4356-9ef2-cdaad5887d85.png"
      technicalSpecs={technicalSpecs}
      description="Premium Automatikschutzhelm mit großem Sichtfeld und schneller Reaktionszeit für professionelle Schweißarbeiten."
    />
  );
};

export default BlackStarPro;