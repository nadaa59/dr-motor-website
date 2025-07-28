"use client"

import { ArrowLeft, CheckCircle, Star, Phone, PhoneIcon as WhatsApp, Shield, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServiceContractPage() {
  const contractPlans = [
    {
      name: "Basic Plan",
      duration: "12 Months",
      services: "4 Minor Services",
      price: "AED 1,200",
      features: [
        "4 Minor Services per year",
        "Priority booking",
        "10% discount on repairs",
        "Free vehicle pickup & delivery",
        "24/7 roadside assistance",
      ],
    },
    {
      name: "Premium Plan",
      duration: "12 Months",
      services: "2 Major + 4 Minor Services",
      price: "AED 2,400",
      features: [
        "2 Major Services per year",
        "4 Minor Services per year",
        "Priority booking",
        "15% discount on repairs",
        "Free vehicle pickup & delivery",
        "24/7 roadside assistance",
        "Extended warranty coverage",
      ],
      popular: true,
    },
    {
      name: "Platinum Plan",
      duration: "24 Months",
      services: "4 Major + 8 Minor Services",
      price: "AED 4,200",
      features: [
        "4 Major Services over 2 years",
        "8 Minor Services over 2 years",
        "Priority booking",
        "20% discount on repairs",
        "Free vehicle pickup & delivery",
        "24/7 roadside assistance",
        "Extended warranty coverage",
        "Free car wash with each service",
      ],
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Savings",
      description: "Save up to 30% compared to individual service bookings",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Scheduled Maintenance",
      description: "Never miss a service with our automated scheduling system",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Extended Warranty",
      description: "Additional warranty coverage on all contracted services",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Priority Service",
      description: "Skip the queue with priority booking and faster service",
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
              <h1 className="text-2xl font-bold">Service Contract</h1>
              <p className="text-gray-300">Long-term Maintenance Solutions</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500 text-white">💰 Best Value</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Contract Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our flexible service contract plans designed to keep your vehicle in perfect condition while
              saving you money and time. All plans include priority service and extended warranty coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Contract Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contractPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-2 border-green-500 shadow-2xl" : "border shadow-lg"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {plan.duration} • {plan.services}
                    </p>
                    <div className="text-3xl font-bold text-green-600 mb-2">{plan.price}</div>
                    <p className="text-sm text-gray-500">Total contract value</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full font-semibold ${
                      plan.popular
                        ? "bg-green-500 hover:bg-green-400 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    onClick={() =>
                      window.open(
                        `https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20would%20like%20to%20inquire%20about%20the%20${plan.name}%20service%20contract`,
                        "_blank",
                      )
                    }
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Service Contracts?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">{benefit.icon}</div>
                  </div>
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
          <h3 className="text-3xl font-bold mb-4">Ready to Save on Vehicle Maintenance?</h3>
          <p className="text-xl text-gray-300 mb-8">Contact us to discuss the best service contract for your needs</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20would%20like%20to%20inquire%20about%20service%20contracts",
                  "_blank",
                )
              }
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              Get Quote via WhatsApp
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
