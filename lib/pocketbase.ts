import PocketBase from "pocketbase"

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090")

export default pb

// Types for our collections
export interface Order {
  id?: string
  name: string
  email: string
  phone: string
  event: string
  date: string
  guests: number
  package: string
  message?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  created?: string
  updated?: string
}

export interface MenuItem {
  id?: string
  title: string
  price: string
  description: string
  image: string
  category: string
  available: boolean
}
