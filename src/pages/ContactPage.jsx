"use client"

import { Phone, MapPin, PhoneIcon as WhatsAppIcon, Car, Wrench, Users, Award } from "lucide-react"
import Button from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import Badge from "../components/ui/Badge"
import { useLocations } from "../hooks/useLocations"
import { openWhatsApp, makeCall } from "../utils/contact"

const ContactPage = () => {
  const { data: locations = [] } = useLocations()

  const garageInfo = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Modern Equipment",
      description: "State-of-the-art diagnostic tools and service equipment",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Technicians",
      description: "Certified professionals with 15+ years experience",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "All Vehicle Types",
      description: "Service for all car makes and models",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "All services backed by comprehensive warranty",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-yellow-500 text-gray-900">📞 24/7 Support Available</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact DR Motor</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to service your vehicle? Contact us through any of the methods below. We're here to help with all your
            automotive needs across Abu Dhabi, Sharjah, and Al Ain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold"
              onClick={() => openWhatsApp()}
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              WhatsApp: +971 55 780 9925
            </Button>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
              onClick={() => makeCall()}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +971 55 780 9925
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Multiple ways to reach us for your convenience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <WhatsAppIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-6">Quick responses and easy booking</p>
                <Button className="bg-green-500 hover:bg-green-400 text-white" onClick={() => openWhatsApp()}>
                  Message Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone</h3>
                <p className="text-gray-600 mb-6">Direct line for immediate assistance</p>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900" onClick={() => makeCall()}>
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-6">3 convenient locations across UAE</p>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/24%C2%B022'43.7%22N+54%C2%B030'15.0%22E/@24.3787974,54.5041619,17z/data=!4m4!3m3!8m2!3d24.3787974!4d54.5041619",
                      "_blank",
                    )
                  }
                >
                  View Locations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600">Visit us at any of our convenient locations</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-900">{location.city}</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-gray-600 font-medium mb-1">Address:</p>
                      <p className="text-gray-800">{location.address}</p>
                    </div>

                    <div>
                      <p className="text-gray-600 font-medium mb-1">Phone:</p>
                      <p className="text-gray-800">{location.phone}</p>
                    </div>

                    <div>
                      <p className="text-gray-600 font-medium mb-1">Working Hours:</p>
                      <p className="text-gray-800 whitespace-pre-line text-sm">{location.hours}</p>
                    </div>

                    <div>
                      <p className="text-gray-600 font-medium mb-2">Available Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-green-500 hover:bg-green-400 text-white"
                      onClick={() =>
                        openWhatsApp(`Hello DR Motor ${location.city}, I would like to book an appointment`)
                      }
                    >
                      <WhatsAppIcon className="w-4 h-4 mr-1" />
                      WhatsApp
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" onClick={() => makeCall()}>
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garage Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Garage</h2>
            <p className="text-lg text-gray-600">Professional automotive care with modern facilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {garageInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-yellow-600">{info.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Badge className="mb-4 bg-red-500 text-white">🚨 Emergency Service</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Emergency Recovery?</h2>
            <p className="text-lg text-gray-600 mb-8">
              24/7 emergency recovery service available across Abu Dhabi, Sharjah, and Al Ain. We'll get you back on the
              road quickly and safely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-400 text-white font-semibold"
                onClick={() => openWhatsApp("EMERGENCY: I need immediate recovery service. My location is:")}
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Emergency WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                onClick={() => makeCall()}
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
