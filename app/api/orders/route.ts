import { type NextRequest, NextResponse } from "next/server"
import pb from "@/lib/pocketbase"

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    const record = await pb.collection("orders").create(orderData)

    return NextResponse.json({ success: true, data: record })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const records = await pb.collection("orders").getFullList({
      sort: "-created",
    })

    return NextResponse.json({ success: true, data: records })
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 })
  }
}
