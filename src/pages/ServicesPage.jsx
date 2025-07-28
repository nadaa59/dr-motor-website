import { Link } from "react-router-dom"
import { Phone, PhoneIcon as WhatsApp } from "lucide-react"
import Button from "../components/ui/Button"
import Badge from "../components/ui/Badge"
import { Card, CardContent } from "../components/ui/Card"
import { useServices } from "../hooks/useServices"
import { openWhatsApp, makeCall } from "../utils/contact"

const ServicesPage = () => {
  const { data: services = [], isLoading } = useServices()

  const getColorClasses = (color) => {
    const colors = {
      yellow: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      green: "bg-green-100 text-green-600 hover:bg-green-200",
      red: "bg-red-100 text-red-600 hover:bg-red-200",
      purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      pink: "bg-pink-100 text-pink-600 hover:bg-pink-200",
    }
    return colors[color] || colors.yellow
  }

  const getButtonClasses = (color) => {
    const colors = {
      yellow: "bg-yellow-500 hover:bg-yellow-400 text-gray-900",
      blue: "bg-blue-500 hover:bg-blue-400 text-white",
      green: "bg-green-500 hover:bg-green-400 text-white",
      red: "bg-red-500 hover:bg-red-400 text-white",
      purple: "bg-purple-500 hover:bg-purple-400 text-white",
      pink: "bg-pink-500 hover:bg-pink-400 text-white",
    }
    return colors[color] || colors.yellow
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-yellow-500 text-gray-900">🔧 Professional Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Professional automotive services with state-of-the-art equipment and experienced technicians across Abu
            Dhabi, Sharjah, and Al Ain
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer relative"
              >
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gray-900 text-white text-xs">{service.badge}</Badge>
                </div>
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${getColorClasses(service.color)} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center text-sm">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/services/${service.id}`}>
                    <Button className={`w-full font-semibold ${getButtonClasses(service.color)}`}>Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Service?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us today to book your service appointment</p>

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
              onClick={() => openWhatsApp("Hello DR Motor, I would like to book a service appointment")}
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
