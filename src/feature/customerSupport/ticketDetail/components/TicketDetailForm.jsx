import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

const TicketDetailForm = () => {
  const { id } = useParams();

  // Sample ticket data - in real app, fetch by id
  const ticketData = {
    ticketId: id || 'TKT001',
    issueType: 'Payment Issue',
    priority: 'High',
    date: 'Jan 14, 2025',
    assignedAgent: 'John Doe',
    ticketStatus: 'In Progress',
    responseTime: '2 hours',
    resolutionTime: 'Resolved in 12 hours',
    complaint: 'Lorem ipsum dolor sit amet consectetur. Aliquam non justo a et habitant amet ornare. Nulla molestie quam',
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
  };

  // Sample order history data
  const orderHistory = [
    { orderId: '#ORD3458', date: '01/12/24', totalAmount: '₹200', items: 'Lipstick, Eyeliner' },
    { orderId: '#ORD3460', date: '01/12/24', totalAmount: '₹200', items: 'Moisturizer' },
    { orderId: '#ORD3458', date: '01/12/24', totalAmount: '₹200', items: 'Lipstick, Eyeliner' },
    { orderId: '#ORD3456', date: '01/12/24', totalAmount: '₹200', items: 'Lipstick, Eyeliner' },
    { orderId: '#ORD3458', date: '01/12/24', totalAmount: '₹200', items: 'Lipstick, Eyeliner' },
    { orderId: '#ORD3456', date: '01/12/24', totalAmount: '₹200', items: 'Lipstick, Eyeliner' },
    { orderId: '#ORD3458', date: '01/12/24', totalAmount: '₹200', items: 'Lipstick, Eyeliner' },
    { orderId: '#ORD3456', date: '01/12/24', totalAmount: '₹200', items: 'Lipstick, Eyeliner' },
  ];

  // Sample interaction history data
  const interactionHistory = [
    { dateTime: 'Jan 12, 2025 - 10:00 AM', type: 'Chat' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-red-500 text-white';
      case 'In Progress':
        return 'bg-yellow-500 text-white';
      case 'Resolved':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-8">
      {/* TICKET DETAILS Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase">TICKET DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ticket ID</label>
            <input
              type="text"
              value={ticketData.ticketId}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Issue Type</label>
            <input
              type="text"
              value={ticketData.issueType}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
            <input
              type="text"
              value={ticketData.priority}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="text"
              value={ticketData.date}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Assigned agent</label>
            <input
              type="text"
              value={ticketData.assignedAgent}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ticket Status</label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-yellow-500 text-white rounded-full">
                <span className="text-xs font-medium">{ticketData.ticketStatus}</span>
                <Icon icon="mdi:chevron-down" width={16} height={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Response Time</label>
            <input
              type="text"
              value={ticketData.responseTime}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Resolution Time</label>
            <input
              type="text"
              value={ticketData.resolutionTime}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Complaint</label>
            <textarea
              value={ticketData.complaint}
              readOnly
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 resize-none"
            />
          </div>
        </div>
      </div>

      {/* CUSTOMER DETAILS Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase">CUSTOMER DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={ticketData.customerName}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={ticketData.customerEmail}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* ORDER HISTORY Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase">ORDER HISTORY</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 bg-gray-100 px-4 py-3 text-xs font-extrabold text-gray-500">
            <div>Order ID</div>
            <div>Date</div>
            <div>Total Amount</div>
            <div>Items Purchased</div>
          </div>

          {/* Table Rows */}
          <div>
            {orderHistory.map((order, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 px-4 py-3 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div className="text-gray-900 text-sm">{order.orderId}</div>
                <div className="text-gray-900 text-sm">{order.date}</div>
                <div className="text-gray-900 text-sm">{order.totalAmount}</div>
                <div className="text-gray-900 text-sm">{order.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTERACTION HISTORY Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase">INTERACTION HISTORY</h2>
        <div className="space-y-4">
          {interactionHistory.map((interaction, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                <input
                  type="text"
                  value={interaction.dateTime}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <input
                  type="text"
                  value={interaction.type}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 shadow-sm"
                />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Communication</label>
                <button className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketDetailForm;

