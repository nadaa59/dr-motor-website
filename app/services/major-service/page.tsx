"use client"

import { ArrowLeft, CheckCircle, Clock, Star, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MajorServicePage() {
  const serviceIncludes = [
    "Complete Engine Diagnostics",
    "Brake System Inspection & Service",
    "Transmission Service & Fluid Change",
    "Suspension System Check",
    "Electrical System Diagnostics",
    "Air Conditioning Service",
    "Cooling System Maintenance",
    "Exhaust System Inspection",
    "Tire Rotation & Alignment Check",
    "Battery & Charging System Test",
    "Belts & Hoses Inspection",
    "Comprehensive Safety Check",
  ]

  const benefits = [
    {
      title: "Extended Vehicle Life",
      description: "Regular major service extends your vehicle's lifespan significantly",
    },
    {
      title: "Improved Performance",
      description: "Maintains optimal engine performance and fuel efficiency",
    },
    {
      title: "Safety Assurance",
      description: "Comprehensive safety checks ensure your vehicle is road-worthy",
    },
    {
      title: "Warranty Protection",
      description: "Maintains manufacturer warranty and prevents costly repairs",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-gray-800"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Major Service</h1>
              <p className="text-gray-300">Comprehensive Vehicle Maintenance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-gray-900">⭐ Most Popular Service</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Major Service Package</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive major service covers all essential systems of your vehicle. Performed by certified
                technicians using genuine parts and advanced diagnostic equipment.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">2-4 Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">6 Month Warranty</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
                  onClick={() =>
                    window.open(
                      "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20would%20like%20to%20book%20a%20Major%20Service%20appointment",
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
              <img src="/placeholder.svg?height=400&width=600" alt="Major Service" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Includes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h3>
            <p className="text-lg text-gray-600">Comprehensive inspection and maintenance of all major systems</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceIncludes.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Major Service?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Service Your Vehicle?</h3>
          <p className="text-xl text-gray-300 mb-8">Book your major service appointment today</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20would%20like%20to%20book%20a%20Major%20Service%20appointment",
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
    </div>
  )
}
