import React from 'react'

const PendingOrders = () => {
  return (
    <div className='px-4 pt-10 font-sans'>
      <h2 className=" flex items-center justify-center text-2xl font-semibold mb-6">Pending Orders</h2>
      <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 mb-10 shadow-2xl">
        <div className='overflow-x-auto'>
          <table className="min-w-full border divide-y divide-gray-200">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-start whitespace-nowrap">Order ID</th>
                <th className="px-4 py-2 text-start whitespace-nowrap">Method</th>
                <th className="px-4 py-2 text-start whitespace-nowrap">Time Slot</th>
                <th className="px-4 py-2 text-start whitespace-nowrap">Created</th>
                <th className="px-4 py-2 text-start whitespace-nowrap">Last Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-[#003049] whitespace-nowrap ">5fb85tb</td>
                <td className="px-4 py-2 whitespace-nowrap">delivery</td>
                <td className="px-4 py-2 whitespace-nowrap">immediately</td>
                <td className="px-4 py-2 whitespace-nowrap">11 july 2025 <br />3.30pm</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-lg text-center text-sm text-green-600 border border-green-600 font-medium ${"bg-green-200"}`}>
                    Deliverd
                  </span>
                </td>
              </tr>
            </tbody>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-[#003049] whitespace-nowrap ">5fb85tb</td>
                <td className="px-4 py-2 whitespace-nowrap">delivery</td>
                <td className="px-4 py-2 whitespace-nowrap">immediately</td>
                <td className="px-4 py-2 whitespace-nowrap">11 july 2025 <br />3.30pm</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-lg text-center text-sm  text-orange-600 border border-orange-600 font-medium ${"bg-orange-200"}`}>
                    Prepared
                  </span>
                </td>
              </tr>
            </tbody>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-[#003049] whitespace-nowrap ">5fb85tb</td>
                <td className="px-4 py-2 whitespace-nowrap">Pickup</td>
                <td className="px-4 py-2 whitespace-nowrap">immediately</td>
                <td className="px-4 py-2 whitespace-nowrap">11 july 2025 <br />3.30pm</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-lg text-center text-sm text-yellow-600 border border-yellow-600 font-medium ${"bg-yellow-200"}`}>
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default PendingOrders