"use client"

import { useState } from "react"
import { Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Major Service",
      description:
        "Comprehensive vehicle maintenance including engine diagnostics, brake system check, transmission service, and complete vehicle inspection",
      features: ["Engine Diagnostics", "Brake System Check", "Transmission Service", "Complete Inspection"],
      link: "/services/major-service",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Minor Service",
      description:
        "Essential maintenance services including oil change, filter replacement, fluid top-ups, and basic safety checks",
      features: ["Oil Change", "Filter Replacement", "Fluid Top-ups", "Safety Checks"],
      link: "/services/minor-service",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Service Contract",
      description:
        "Comprehensive maintenance packages with scheduled services, priority booking, and extended warranty coverage",
      features: ["Scheduled Services", "Priority Booking", "Extended Warranty", "Cost Savings"],
      link: "/services/service-contract",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Mechanical Repairs",
      description:
        "Expert mechanical problem solving for all vehicle systems including engine, transmission, and suspension repairs",
      features: ["Engine Repairs", "Transmission Fix", "Suspension Service", "Diagnostic Testing"],
      link: "/services/mechanical-repairs",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Electrical Repairs",
      description:
        "Advanced electrical system diagnostics and repairs including battery, alternator, and electronic component services",
      features: ["Battery Service", "Alternator Repair", "Electronic Diagnostics", "Wiring Solutions"],
      link: "/services/electrical-repairs",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Painting",
      description:
        "Professional automotive painting services including scratch repair, panel painting, and full vehicle respraying",
      features: ["Scratch Repair", "Panel Painting", "Full Respray", "Color Matching"],
      link: "/services/painting",
    },
  ]

  const locations = [
    {
      city: "Abu Dhabi",
      address: "Sheikh Zayed Road, Abu Dhabi",
      phone: "+971 2 123 4567",
    },
    {
      city: "Sharjah",
      address: "Al Wahda Street, Sharjah",
      phone: "+971 6 123 4567",
    },
    {
      city: "Al Ain",
      address: "Khalifa Street, Al Ain",
      phone: "+971 3 123 4567",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200&text=Professional Auto Repair')`,
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-yellow-500 text-gray-900 hover:bg-yellow-400">🚗 FREE RECOVERY SERVICE</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get Your Car
              <span className="text-yellow-400 block">Professionally</span>
              Repaired
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              DR Motor is ready to provide car services that you can rely on with excellent quality and long lasting
              solutions across Abu Dhabi, Sharjah, and Al Ain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
                onClick={() => window.open("tel:+971557809925")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent w-full"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Popular Services</h2>
            <p className="text-lg text-gray-600">Professional automotive care you can trust</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Major Service</h3>
              <p className="text-gray-600 mb-6">Comprehensive vehicle maintenance and inspection</p>
              <Link href="/services/major-service">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Minor Service</h3>
              <p className="text-gray-600 mb-6">Quick maintenance and essential checks</p>
              <Link href="/services/minor-service">
                <Button className="bg-blue-500 hover:bg-blue-400 text-white w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Service Contract</h3>
              <p className="text-gray-600 mb-6">Long-term maintenance packages</p>
              <Link href="/services/service-contract">
                <Button className="bg-green-500 hover:bg-green-400 text-white w-full">Learn More</Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional automotive services with state-of-the-art equipment and experienced technicians
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-yellow-600">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={service.link}>
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose DR Motor?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience in the automotive industry, DR Motor has established itself as a trusted name
                across the UAE. We combine traditional craftsmanship with modern technology to deliver exceptional
                results.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">Certified professionals with extensive experience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">Fast and efficient service without compromising quality</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">All work backed by comprehensive warranty</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="DR Motor Workshop"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Conveniently located across the UAE to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.city}</h3>
                <p className="text-gray-600 mb-4">{location.address}</p>
                <p className="text-yellow-400 font-semibold">{location.phone}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="https://www.google.com/maps/place/24%C2%B022'43.7%22N+54%C2%B030'15.0%22E/@24.3787974,54.5041619,17z/data=!4m4!3m3!8m2!3d24.3787974!4d54.5041619">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
              >
                View on Google Maps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today for professional automotive services</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
              onClick={() => window.open("tel:+971557809925")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/971557809925?text=Hello%20DR%20Motor,%20I%20would%20like%20to%20inquire%20about%20your%20services",
                  "_blank",
                )
              }
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
