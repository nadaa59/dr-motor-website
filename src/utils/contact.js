export const openWhatsApp = (message = "Hello DR Motor, I would like to inquire about your services") => {
  const phone = "971557809925"
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")
}

export const makeCall = (phone = "+971557809925") => {
  window.open(`tel:${phone}`)
}

export const openGoogleMaps = () => {
  window.open(
    "https://www.google.com/maps/place/24%C2%B022'43.7%22N+54%C2%B030'15.0%22E/@24.3787974,54.5041619,17z/data=!4m4!3m3!8m2!3d24.3787974!4d54.5041619",
    "_blank",
  )
}
