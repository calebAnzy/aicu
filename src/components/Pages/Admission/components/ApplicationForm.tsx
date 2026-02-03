"use client";

import { countries } from "../constants";

const ApplicationForm = () => {
   // Array of US states
   const usStates = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
   ];

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
   };

   return (
      <div className="max-w-[1100px] mx-auto p-6 mt-[4rem]">
         <h2 className="text-3xl font-bold text-gray-800 mb-8">Program Application</h2>

         <form
            onSubmit={handleSubmit}
            className="space-y-6"
         >
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                     type="text"
                     required
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Middle Name</label>
                  <input
                     type="text"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                     type="text"
                     required
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                     type="email"
                     required
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Email</label>
                  <input
                     type="email"
                     required
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                     type="tel"
                     required
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               <div className="flex items-center">
                  <input
                     type="checkbox"
                     id="textMessaging"
                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                     htmlFor="textMessaging"
                     className="ml-2 text-sm text-gray-600"
                  >
                     Use for text messaging (US/Canada only)
                  </label>
               </div>
            </div>

            {/* Address */}
            <div className="space-y-6">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input
                     type="text"
                     required
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4"
                  />
                  <input
                     type="text"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                     <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                     />
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                     <select
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                     >
                        <option value="">Choose a state...</option>
                        {usStates.map((state) => (
                           <option
                              key={state}
                              value={state}
                           >
                              {state}
                           </option>
                        ))}
                     </select>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                     <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                     />
                  </div>
               </div>
            </div>

            {/* Program Selection */}
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Program</label>
               <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
               >
                  <option value="">Select a program...</option>
                  <option value="dip_ministry">Dip in Ministry</option>
                  <option value="doctoral">Doctoral</option>
                  <option value="graduate">Graduate</option>
                  <option value="undergraduate">Undergraduate</option>
               </select>
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
               <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
               >
                  <option value="">Select a country...</option>
                  {countries.map((country) => (
                     <option
                        key={country}
                        value={country}
                     >
                        {country}
                     </option>
                  ))}
               </select>
            </div>

            {/* Entrance Term */}
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Entrance Term</label>
               <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
               >
                  <option value="">Select a term...</option>
                  <option value="fall_2024">Fall 2024</option>
                  <option value="spring_2025">Spring 2025</option>
               </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
               <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
               >
                  Start Application
               </button>
            </div>
         </form>
      </div>
   );
};

export default ApplicationForm;
