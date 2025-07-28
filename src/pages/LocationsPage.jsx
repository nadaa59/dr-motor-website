import { MapPin, Phone, Clock, PhoneIcon as WhatsApp, Car, Wrench } from "lucide-react"
import Button from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import Badge from "../components/ui/Badge"
import { useLocations } from "../hooks/useLocations"
import { openWhatsApp, makeCall, openGoogleMaps } from "../utils/contact"

const LocationsPage = () => {
  const { data: locations = [], isLoading } = useLocations()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500"></div>
          <p className="mt-4 text-gray-600">Loading locations...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-yellow-500 text-gray-900">📍 3 UAE Locations</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Conveniently located across Abu Dhabi, Sharjah, and Al Ain to serve you better with professional automotive
            care
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={`${location.city} Location`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-gray-900">{location.city}</Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-900">{location.city}</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-gray-600 font-medium mb-1 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Address:
                      </p>
                      <p className="text-gray-800 ml-6">{location.address}</p>
                    </div>

                    <div>
                      <p className="text-gray-600 font-medium mb-1 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone:
                      </p>
                      <p className="text-gray-800 ml-6">{location.phone}</p>
                    </div>

                    <div>
                      <p className="text-gray-600 font-medium mb-1 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Working Hours:
                      </p>
                      <p className="text-gray-800 whitespace-pre-line text-sm ml-6">{location.hours}</p>
                    </div>

                    <div>
                      <p className="text-gray-600 font-medium mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        Available Services:
                      </p>
                      <div className="flex flex-wrap gap-2 ml-6">
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
                      <WhatsApp className="w-4 h-4 mr-1" />
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

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
          <p className="text-lg text-gray-600 mb-8">
            Click below to view our locations on Google Maps and get directions
          </p>

          <Button size="lg" className="bg-blue-500 hover:bg-blue-400 text-white font-semibold" onClick={openGoogleMaps}>
            <MapPin className="w-5 h-5 mr-2" />
            View on Google Maps
          </Button>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600">We proudly serve customers across these areas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Abu Dhabi Region</h3>
                <p className="text-gray-600 text-sm">
                  Sheikh Zayed Road, Corniche, Marina, Khalifa City, and surrounding areas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sharjah Region</h3>
                <p className="text-gray-600 text-sm">
                  Al Wahda, Al Qasimia, Al Majaz, Industrial Area, and surrounding areas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Al Ain Region</h3>
                <p className="text-gray-600 text-sm">
                  Khalifa Street, Al Jimi, Al Muwaiji, Hili, and surrounding areas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-xl text-gray-300 mb-8">Choose the location most convenient for you</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
              onClick={() => makeCall()}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +971 55 780 9925
            </Button>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold"
              onClick={() => openWhatsApp("Hello DR Motor, I would like to visit your location")}
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              WhatsApp for Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LocationsPage
