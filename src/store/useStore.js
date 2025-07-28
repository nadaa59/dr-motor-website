import { create } from "zustand"

const useStore = create((set, get) => ({
  // UI State
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),

  // Services Data
  services: [
    {
      id: "major-service",
      icon: "🔧",
      title: "Major Service",
      description:
        "Comprehensive vehicle maintenance including engine diagnostics, brake system check, transmission service, and complete vehicle inspection",
      features: ["Engine Diagnostics", "Brake System Check", "Transmission Service", "Complete Inspection"],
      color: "yellow",
      badge: "Most Popular",
      duration: "2-4 Hours",
      warranty: "6 Month Warranty",
    },
    {
      id: "minor-service",
      icon: "⚡",
      title: "Minor Service",
      description:
        "Essential maintenance services including oil change, filter replacement, fluid top-ups, and basic safety checks",
      features: ["Oil Change", "Filter Replacement", "Fluid Top-ups", "Safety Checks"],
      color: "blue",
      badge: "Quick Service",
      duration: "30-60 Minutes",
      warranty: "3 Month Warranty",
    },
    {
      id: "service-contract",
      icon: "📋",
      title: "Service Contract",
      description:
        "Comprehensive maintenance packages with scheduled services, priority booking, and extended warranty coverage",
      features: ["Scheduled Services", "Priority Booking", "Extended Warranty", "Cost Savings"],
      color: "green",
      badge: "Best Value",
      duration: "12-24 Months",
      warranty: "Extended Coverage",
    },
    {
      id: "mechanical-repairs",
      icon: "🔩",
      title: "Mechanical Repairs",
      description:
        "Expert mechanical problem solving for all vehicle systems including engine, transmission, and suspension repairs",
      features: ["Engine Repairs", "Transmission Fix", "Suspension Service", "Diagnostic Testing"],
      color: "red",
      badge: "Expert Service",
      duration: "Same Day",
      warranty: "6 Month Warranty",
    },
    {
      id: "electrical-repairs",
      icon: "⚡",
      title: "Electrical Repairs",
      description:
        "Advanced electrical system diagnostics and repairs including battery, alternator, and electronic component services",
      features: ["Battery Service", "Alternator Repair", "Electronic Diagnostics", "Wiring Solutions"],
      color: "purple",
      badge: "Advanced Tech",
      duration: "Quick Diagnosis",
      warranty: "6 Month Warranty",
    },
    {
      id: "painting",
      icon: "🎨",
      title: "Painting",
      description:
        "Professional automotive painting services including scratch repair, panel painting, and full vehicle respraying",
      features: ["Scratch Repair", "Panel Painting", "Full Respray", "Color Matching"],
      color: "pink",
      badge: "Professional",
      duration: "2-5 Days",
      warranty: "12 Month Warranty",
    },
  ],

  // Locations Data
  locations: [
    {
      id: "abu-dhabi",
      city: "Abu Dhabi",
      address: "Sheikh Zayed Road, Abu Dhabi, UAE",
      phone: "+971 55 780 9925",
      hours: "Saturday - Thursday: 8:00 AM - 8:00 PM\nFriday: 2:00 PM - 8:00 PM",
      services: ["Major Service", "Minor Service", "Mechanical Repairs", "Electrical Repairs", "Free Recovery"],
      image: "/placeholder.svg?height=300&width=400&text=Abu Dhabi Location",
    },
    {
      id: "sharjah",
      city: "Sharjah",
      address: "Al Wahda Street, Sharjah, UAE",
      phone: "+971 55 780 9925",
      hours: "Saturday - Thursday: 8:00 AM - 8:00 PM\nFriday: 2:00 PM - 8:00 PM",
      services: ["Major Service", "Minor Service", "Painting", "Tyre Replacement", "Free Recovery"],
      image: "/placeholder.svg?height=300&width=400&text=Sharjah Location",
    },
    {
      id: "al-ain",
      city: "Al Ain",
      address: "Khalifa Street, Al Ain, UAE",
      phone: "+971 55 780 9925",
      hours: "Saturday - Thursday: 8:00 AM - 8:00 PM\nFriday: 2:00 PM - 8:00 PM",
      services: ["Major Service", "Minor Service", "Service Contracts", "Recovery Service", "Diagnostics"],
      image: "/placeholder.svg?height=300&width=400&text=Al Ain Location",
    },
  ],

  // Contact Info
  contactInfo: {
    phone: "+971557809925",
    whatsapp: "+971557809925",
    email: "info@drmotor.ae",
  },

  // Actions
  getServiceById: (id) => {
    const { services } = get()
    return services.find((service) => service.id === id)
  },

  getLocationById: (id) => {
    const { locations } = get()
    return locations.find((location) => location.id === id)
  },
}))

export default useStore
