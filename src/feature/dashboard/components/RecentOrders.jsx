const orders = [
  { product: 'Lipstick Care Balm', orderId: '123456789', status: 'Completed', color: '#22C55E' },
  { product: 'Lipstick Care Balm', orderId: '123456789', status: 'Pending', color: '#F59E0B' },
  { product: 'Lipstick Care Balm', orderId: '123456789', status: 'Cancelled', color: '#EF4444' },
  { product: 'Lipstick Care Balm', orderId: '123456789', status: 'Completed', color: '#22C55E' },
  { product: 'Lipstick Care Balm', orderId: '123456789', status: 'Completed', color: '#22C55E' },
];

const RecentOrders = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <button className="text-xs font-semibold text-pink-600 hover:text-pink-700">
          See all orders
        </button>
      </div>

      <div className="space-y-4">
        {orders.map((order, idx) => (
          <div key={`${order.product}-${idx}`} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-gray-100" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">{order.product}</p>
                <p className="text-xs text-gray-400">Order ID - {order.orderId}</p>
              </div>
            </div>
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${order.color}15`, color: order.color }}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;


