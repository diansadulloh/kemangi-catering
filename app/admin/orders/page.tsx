"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import type { Order } from "@/lib/pocketbase"

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders")
      const data = await response.json()
      if (data.success) {
        setOrders(data.data)
      }
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus as any } : order)))
        toast({
          title: "Status Updated",
          description: "Order status has been updated successfully.",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update order status.",
        variant: "destructive",
      })
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    }
    return variants[status as keyof typeof variants] || variants.pending
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Manajemen Pesanan</h1>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pesanan</CardTitle>
        </CardHeader>
        <CardContent>
          {orders.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Belum ada pesanan</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{order.name}</h3>
                      <p className="text-gray-600">{order.email}</p>
                      <p className="text-gray-600">{order.phone}</p>
                    </div>

                    <div>
                      <p>
                        <strong>Acara:</strong> {order.event}
                      </p>
                      <p>
                        <strong>Tanggal:</strong> {new Date(order.date).toLocaleDateString("id-ID")}
                      </p>
                      <p>
                        <strong>Peserta:</strong> {order.guests} orang
                      </p>
                      <p>
                        <strong>Paket:</strong> {order.package}
                      </p>
                    </div>

                    <div>
                      <div className="mb-4">
                        <Badge className={getStatusBadge(order.status)}>{order.status}</Badge>
                      </div>

                      <Select value={order.status} onValueChange={(value) => updateOrderStatus(order.id!, value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {order.message && (
                    <div className="mt-4 p-3 bg-gray-50 rounded">
                      <p className="text-sm">
                        <strong>Pesan:</strong> {order.message}
                      </p>
                    </div>
                  )}

                  <div className="mt-4 text-xs text-gray-500">
                    Dibuat: {new Date(order.created || "").toLocaleString("id-ID")}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
