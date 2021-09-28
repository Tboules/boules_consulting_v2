const NAVIGATION: NavigationType[] = [
  { slug: "home", title: "Home", uri: "/", show: null },
  { slug: "services", title: "Services", uri: "/services", show: "list" },
  { slug: "about-us", title: "About Us", uri: "/about-us", show: "list" },
  { slug: "community", title: "Community", uri: "/community", show: "list" },
  { slug: "contact", title: "Contact", uri: "/contact-us", show: "button" },
]

export default {
  NAVIGATION,
}

export interface NavigationType {
  slug: string
  title: string
  uri: string
  show: string | null
}
