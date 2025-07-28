import { Link } from "react-router-dom"
import { Phone, PhoneIcon as WhatsApp, MapPin } from "lucide-react"
import Button from "../components/ui/Button"
import Badge from "../components/ui/Badge"
import { Card, CardContent } from "../components/ui/Card"
import { useServices } from "../hooks/useServices"
import { useLocations as useLocationsHook } from "../hooks/useLocations"
import { openWhatsApp, makeCall, openGoogleMaps } from "../utils/contact"

const HomePage = () => {
  const { data: services = [] } = useServices()
  const { data: locations = [] } = useLocationsHook()

  const popularServices = services.slice(0, 3)

  return (
    <div>
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
                onClick={() => makeCall()}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Link to="/services">
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
            {popularServices.map((service) => (
              <Card key={service.id} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description.substring(0, 100)}...</p>
                  <Link to={`/services/${service.id}`}>
                    <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
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
                    <span className="text-yellow-600">⭐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">Certified professionals with extensive experience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">Fast and efficient service without compromising quality</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600">🛡️</span>
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
                src="/placeholder.svg?height=500&width=600&text=DR Motor Workshop"
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
            {locations.map((location) => (
              <Card key={location.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{location.city}</h3>
                  <p className="text-gray-300 mb-4">{location.address}</p>
                  <p className="text-yellow-400 font-semibold">{location.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
              onClick={openGoogleMaps}
            >
              <MapPin className="w-5 h-5 mr-2" />
              View on Google Maps
            </Button>
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
              onClick={() => makeCall()}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold"
              onClick={() => openWhatsApp()}
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
