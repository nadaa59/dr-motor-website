import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle, Clock, Star, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import Button from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import Badge from "../components/ui/Badge"
import { useService } from "../hooks/useServices"
import { openWhatsApp, makeCall } from "../utils/contact"

const ServiceDetailPage = () => {
  const { serviceId } = useParams()
  const { data: service, isLoading, error } = useService(serviceId)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    )
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getColorClasses = (color) => {
    const colors = {
      yellow: "from-yellow-50 to-yellow-100",
      blue: "from-blue-50 to-blue-100",
      green: "from-green-50 to-green-100",
      red: "from-red-50 to-red-100",
      purple: "from-purple-50 to-purple-100",
      pink: "from-pink-50 to-pink-100",
    }
    return colors[color] || colors.yellow
  }

  const getBadgeClasses = (color) => {
    const colors = {
      yellow: "bg-yellow-500 text-gray-900",
      blue: "bg-blue-500 text-white",
      green: "bg-green-500 text-white",
      red: "bg-red-500 text-white",
      purple: "bg-purple-500 text-white",
      pink: "bg-pink-500 text-white",
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

  const getIconColor = (color) => {
    const colors = {
      yellow: "text-yellow-600",
      blue: "text-blue-600",
      green: "text-green-600",
      red: "text-red-600",
      purple: "text-purple-600",
      pink: "text-pink-600",
    }
    return colors[color] || colors.yellow
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Link to="/services">
              <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">{service.title}</h1>
              <p className="text-gray-300">{service.badge}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-16 bg-gradient-to-r ${getColorClasses(service.color)}`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className={`mb-4 ${getBadgeClasses(service.color)}`}>
                {service.icon} {service.badge}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className={`w-5 h-5 ${getIconColor(service.color)}`} />
                  <span className="text-gray-700">{service.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className={`w-5 h-5 ${getIconColor(service.color)}`} />
                  <span className="text-gray-700">{service.warranty}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={`font-semibold ${getButtonClasses(service.color)}`}
                  onClick={() => openWhatsApp(`Hello DR Motor, I would like to book a ${service.title} appointment`)}
                >
                  <WhatsApp className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
                <Button size="lg" variant="outline" onClick={() => makeCall()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={`/placeholder.svg?height=400&width=600&text=${service.title}`}
                alt={service.title}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h3>
            <p className="text-lg text-gray-600">Comprehensive service features and benefits</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose This Service?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h4>
                <p className="text-gray-600 text-sm">Expert technicians with years of experience</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Quality Guarantee</h4>
                <p className="text-gray-600 text-sm">All work backed by comprehensive warranty</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Service</h4>
                <p className="text-gray-600 text-sm">Fast turnaround without compromising quality</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Best Value</h4>
                <p className="text-gray-600 text-sm">Competitive pricing with premium service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Book Your {service.title}?</h3>
          <p className="text-xl text-gray-300 mb-8">Contact us today to schedule your appointment</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`font-semibold ${getButtonClasses(service.color)}`}
              onClick={() => openWhatsApp(`Hello DR Motor, I would like to book a ${service.title} appointment`)}
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              onClick={() => makeCall()}
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

export default ServiceDetailPage
