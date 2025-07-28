"use client"

import { CheckCircle, Clock, Star, Phone, PhoneIcon as WhatsApp, Battery, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ElectricalRepairsPage() {
  const serviceIncludes = [
    "Battery Testing & Replacement",
    "Alternator Repair & Replacement",
    "Starter Motor Service",
    "Wiring Harness Repair",
    "Fuse Box Diagnostics",
    "Electronic Control Unit (ECU) Service",
    "Sensor Replacement",
    "Lighting System Repair",
    "Air Conditioning Electrical",
    "Power Window Repair",
    "Central Locking System",
    "Advanced Diagnostics",
  ]

  const electricalServices = [
    {
      title: "Battery Service",
      description: "Complete battery testing, maintenance, and replacement",
      icon: <Battery className="w-6 h-6" />,
    },
    {
      title: "Alternator Repair",
      description: "Charging system diagnostics and alternator service",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Wiring Solutions",
      description: "Professional wiring repair and harness replacement",
      icon: <Battery className="w-6 h-6" />,
    },
    {
      title: "Electronic Diagnostics",
      description: "Advanced computer diagnostics for modern vehicles",
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-500 text-white">⚡ Advanced Technology</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Electrical Repairs</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Advanced electrical system diagnostics and repairs using state-of-the-art equipment. Our technicians are
                trained to handle all modern vehicle electrical systems and components.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Quick Diagnosis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">6 Month Warranty</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-400 text-white font-semibold"
                  onClick={() =>
                    window.open(
                      "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20need%20electrical%20repair%20service",
                      "_blank",
                    )
                  }
                >
                  <WhatsApp className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open("tel:+971557809925")}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Electrical Repairs"
                alt="Electrical Repairs"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Electrical Services</h2>
            <p className="text-lg text-gray-600">Comprehensive electrical system solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {electricalServices.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-purple-600">{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Includes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Service</h3>
            <p className="text-lg text-gray-600">Complete electrical system repair and maintenance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceIncludes.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Need Electrical Repairs?</h3>
          <p className="text-xl text-gray-300 mb-8">Get professional electrical diagnostics and repair today</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-400 text-white font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20need%20electrical%20repair%20service",
                  "_blank",
                )
              }
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              onClick={() => window.open("tel:+971557809925")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +971 55 780 9925
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
