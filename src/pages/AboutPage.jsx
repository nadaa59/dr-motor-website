import { Link } from "react-router-dom"
import { Star, Shield, Users, Award, CheckCircle, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import Button from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import Badge from "../components/ui/Badge"
import { openWhatsApp, makeCall } from "../utils/contact"

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "3", label: "UAE Locations" },
    { number: "24/7", label: "Emergency Service" },
  ]

  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every service we provide",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust",
      description: "Building long-term relationships through reliable service",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Using only genuine parts and proven techniques",
    },
  ]

  const whyChooseUs = [
    "Certified and experienced technicians",
    "State-of-the-art diagnostic equipment",
    "Genuine parts and quality materials",
    "Comprehensive warranty on all services",
    "Transparent pricing with no hidden costs",
    "Free vehicle pickup and delivery",
    "24/7 emergency roadside assistance",
    "Multiple convenient locations",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-yellow-500 text-gray-900">🏆 Trusted Since 2009</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DR Motor</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted automotive service provider across the UAE, delivering excellence in every service with
            professional care and attention to detail
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, DR Motor began as a small automotive repair shop with a simple mission: to provide
                honest, reliable, and professional automotive services to the UAE community.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we have grown to become one of the most trusted names in automotive care across Abu
                Dhabi, Sharjah, and Al Ain. Our success is built on the foundation of quality workmanship, genuine
                parts, and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we continue to invest in the latest technology and training to ensure that we can service all
                makes and models with the expertise and care they deserve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold w-full sm:w-auto"
                  >
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Contact Us
                  </Button>
                </Link>
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

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-yellow-600">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Professional Technicians"
                alt="Professional Technicians"
                className="rounded-lg shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose DR Motor?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience and a commitment to excellence, we provide automotive services that you can
                trust. Here's what sets us apart:
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Certified professionals dedicated to keeping your vehicle in perfect condition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Master Technicians</h3>
                <p className="text-gray-600 mb-4">15+ years of experience</p>
                <p className="text-sm text-gray-500">Specialized in all vehicle makes and models</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnostic Specialists</h3>
                <p className="text-gray-600 mb-4">Advanced diagnostic training</p>
                <p className="text-sm text-gray-500">Expert in modern vehicle electronics</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Service</h3>
                <p className="text-gray-600 mb-4">Dedicated support team</p>
                <p className="text-sm text-gray-500">Available 24/7 for your needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the DR Motor Difference</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers across the UAE</p>

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
              onClick={() => openWhatsApp("Hello DR Motor, I would like to learn more about your services")}
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
