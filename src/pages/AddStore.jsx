import React, { useState } from 'react';

export const AddStore = () => {
  const [formData, setFormData] = useState({
    name: '', address: '', email: '', landmark: '', url: '', owner: '', primaryColor: '', openingTime: '', closingTime: '', daysAvailable: '', images: [], gst: '', description: '', deliveryAvailable: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const imageNames = Array.from(formData.images).map(file => file.name);
    const storeData = {
      ...formData,
      images: imageNames,
    };

    console.log("Saving store data:", storeData);
    alert('Store added successfully!');

    localStorage.setItem('store-data', JSON.stringify(storeData));
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-10 font-sans">
      <h2 className="text-2xl font-semibold mb-6">Add Store</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl px-4 sm:px-6 md:px-8 bg-white rounded-xl p-6 md:p-8 mb-10 shadow-2xl space-y-6"
      >


        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <input name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />
          <input name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />
        </div>


        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <input name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            required
            className="w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />
          <input name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Landmark"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <input name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="URL"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049] "
          />
          <input name="owner"
            value={formData.owner}
            onChange={handleChange}
            placeholder="Owner"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />
        </div>


        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <input
            name="primaryColor"
            value={formData.primaryColor}
            onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value.toLowerCase() })}
            placeholder="Primary Colour (#ffffff)"
            required
            pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
            title="Enter a valid hex colour, e.g., #ffffff or #fff"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />
          <input name="daysAvailable"
            value={formData.daysAvailable}
            onChange={handleChange}
            placeholder="Days Available"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />

        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">

          <input
            name="images"
            onChange={(e) => {
              if (e.target.files.length > 10) {
                alert("You can only upload up to 10 images.");
                e.target.value = '';
              } else {
                handleChange(e);
              }
            }}
            accept=".jpg, .jpeg, .png"
            type="file"
            required
            multiple
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />
          <input
            name="gst"
            value={formData.gst}
            onChange={(e) => setFormData({ ...formData, gst: e.target.value.toUpperCase() })}
            placeholder="GST"
            maxLength={15}
            pattern="^[0-9A-Z]{15}$"
            title="Enter a valid GST number (15 characters, alphanumeric)"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">


          <input name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
            type="time"
            placeholder='openingTime'
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />

          <input name="closingTime"
            value={formData.closingTime}
            onChange={handleChange}
            type="time"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]"
          />

        </div>
        <div className="flex">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            rows={3}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003049] resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <span className="font-medium">Delivery Available?</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-1">
              <input type="radio"
                name="deliveryAvailable"
                value="yes"
                checked={formData.deliveryAvailable === 'yes'}
                onChange={handleChange}
                required />
              <span>Yes</span>
            </label>

            <label className="flex items-center space-x-1">
              <input type="radio"
                name="deliveryAvailable"
                value="no"
                checked={formData.deliveryAvailable === 'no'}
                onChange={handleChange}
                required />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button type="submit"
            className="w-auto px-8 py-3 bg-[#003049] hover:bg-[#0075A2] text-white font-semibold rounded-md transition duration-200">
            Add Store
          </button>
        </div>
      </form>
    </div>
  );
};
