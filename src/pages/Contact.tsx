import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    street: "",
    houseNumber: "",
    country: "",
    email: "",
    zip: "",
    city: "",
    message: "",
    type: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei Ihnen.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      street: "",
      houseNumber: "",
      country: "",
      email: "",
      zip: "",
      city: "",
      message: "",
      type: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
              <p className="text-xl text-white/90">
                Haben Sie Fragen? Wir sind für Sie da!
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Kontaktformular</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Contact Type */}
                    <div>
                      <Label htmlFor="type">Art der Anfrage *</Label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Bitte wählen Sie..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="anfrage">Allgemeine Anfrage</SelectItem>
                          <SelectItem value="support">Technischer Support</SelectItem>
                          <SelectItem value="vertrieb">Vertrieb</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Vorname *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nachname *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <Label htmlFor="company">Firma</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>

                    {/* Address */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-3">
                        <Label htmlFor="street">Straße</Label>
                        <Input
                          id="street"
                          value={formData.street}
                          onChange={(e) => handleInputChange("street", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="houseNumber">Hausnr.</Label>
                        <Input
                          id="houseNumber"
                          value={formData.houseNumber}
                          onChange={(e) => handleInputChange("houseNumber", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="country">Land</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    {/* ZIP and City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zip">PLZ</Label>
                        <Input
                          id="zip"
                          value={formData.zip}
                          onChange={(e) => handleInputChange("zip", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">Ort</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={6}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button type="submit" className="w-full">
                        Senden
                      </Button>
                      <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                          Spamschutz: Pflichtfelder sind mit * markiert
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Address Card */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Postanschrift
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Alphaweld GmbH</p>
                    <p>Geisweider Str. 130</p>
                    <p>D-57078 Siegen</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Kontaktdaten
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <a href="tel:+4927131789770" className="text-primary hover:underline">
                        +49 (0)271 317897-0
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Printer className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Fax</p>
                      <p>+49 (0)271 317897-29</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">E-Mail</p>
                      <a href="mailto:welding@alphaweld.de" className="text-primary hover:underline">
                        welding@alphaweld.de
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Öffnungszeiten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Montag - Freitag:</span>
                      <span className="font-semibold">8:00 - 17:00 Uhr</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Hotline */}
              <Card className="shadow-elegant bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-primary mb-2">Service Hotline</h3>
                  <p className="text-2xl font-bold mb-1">+49 (0)271 317897-0</p>
                  <p className="text-sm text-muted-foreground">Mo-Fr: 8:00 - 17:00 Uhr</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;