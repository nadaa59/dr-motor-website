"use client"

import { CheckCircle, Clock, Star, Phone, PhoneIcon as WhatsApp, Car, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function MechanicalRepairsPage() {
  const serviceIncludes = [
    "Engine Repair & Rebuilding",
    "Transmission Service & Repair",
    "Clutch Replacement & Repair",
    "Suspension System Repair",
    "Brake System Overhaul",
    "Steering System Repair",
    "Exhaust System Replacement",
    "Cooling System Repair",
    "Fuel System Cleaning",
    "Timing Belt Replacement",
    "Water Pump Replacement",
    "Comprehensive Diagnostics",
  ]

  const repairTypes = [
    {
      title: "Engine Repairs",
      description: "Complete engine diagnostics, repair, and rebuilding services",
      icon: <Car className="w-6 h-6" />,
    },
    {
      title: "Transmission",
      description: "Automatic and manual transmission repair and maintenance",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Suspension",
      description: "Shock absorbers, struts, and suspension component replacement",
      icon: <Car className="w-6 h-6" />,
    },
    {
      title: "Brake System",
      description: "Complete brake system repair and component replacement",
      icon: <Wrench className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-500 text-white">🔧 Expert Repairs</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Mechanical Repairs</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Expert mechanical problem solving for all vehicle systems. Our certified technicians use advanced
                diagnostic tools to identify and fix mechanical issues efficiently and effectively.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Same Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">6 Month Warranty</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-400 text-white font-semibold"
                  onClick={() =>
                    window.open(
                      "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20need%20mechanical%20repair%20service",
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
                src="/placeholder.svg?height=400&width=600&text=Mechanical Repairs"
                alt="Mechanical Repairs"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Repair Services</h2>
            <p className="text-lg text-gray-600">Comprehensive mechanical repair solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairTypes.map((type, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-red-600">{type.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Fix</h3>
            <p className="text-lg text-gray-600">Complete mechanical repair services</p>
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
          <h3 className="text-3xl font-bold mb-4">Need Mechanical Repairs?</h3>
          <p className="text-xl text-gray-300 mb-8">Get expert diagnosis and repair service today</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-400 text-white font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20need%20mechanical%20repair%20service",
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
