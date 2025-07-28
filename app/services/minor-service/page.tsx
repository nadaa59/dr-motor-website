"use client"

import { ArrowLeft, CheckCircle, Clock, Star, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MinorServicePage() {
  const serviceIncludes = [
    "Engine Oil Change (Premium Oil)",
    "Oil Filter Replacement",
    "Air Filter Inspection & Replacement",
    "Brake Fluid Level Check",
    "Power Steering Fluid Check",
    "Coolant Level Inspection",
    "Battery Terminal Cleaning",
    "Tire Pressure Check",
    "Lights & Indicators Test",
    "Windshield Washer Fluid Top-up",
    "Basic Safety Inspection",
    "Service Report & Recommendations",
  ]

  const benefits = [
    {
      title: "Quick & Convenient",
      description: "Fast service completed in 30-60 minutes",
    },
    {
      title: "Cost Effective",
      description: "Affordable maintenance to prevent major issues",
    },
    {
      title: "Regular Maintenance",
      description: "Keeps your vehicle running smoothly between major services",
    },
    {
      title: "Expert Care",
      description: "Professional technicians ensure quality service",
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
              <h1 className="text-2xl font-bold">Minor Service</h1>
              <p className="text-gray-300">Essential Vehicle Maintenance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500 text-white">⚡ Quick Service</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Fast Minor Service Package</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Essential maintenance services to keep your vehicle running smoothly. Perfect for regular upkeep between
                major services with quick turnaround time.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">30-60 Minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">3 Month Warranty</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-semibold"
                  onClick={() =>
                    window.open(
                      "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20would%20like%20to%20book%20a%20Minor%20Service%20appointment",
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
              <img src="/placeholder.svg?height=400&width=600" alt="Minor Service" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Includes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h3>
            <p className="text-lg text-gray-600">Essential maintenance checks and fluid services</p>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Minor Service?</h3>
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
          <h3 className="text-3xl font-bold mb-4">Need Quick Service?</h3>
          <p className="text-xl text-gray-300 mb-8">Book your minor service appointment today</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20would%20like%20to%20book%20a%20Minor%20Service%20appointment",
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
