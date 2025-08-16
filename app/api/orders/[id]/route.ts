import { type NextRequest, NextResponse } from "next/server"
import pb from "@/lib/pocketbase"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const updateData = await request.json()

    const record = await pb.collection("orders").update(id, updateData)

    return NextResponse.json({ success: true, data: record })
  } catch (error) {
    console.error("Error updating order:", error)
    return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 })
  }
}
