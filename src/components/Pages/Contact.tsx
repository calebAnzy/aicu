"use client";
import React, { useState } from "react";
import { Clock, Mail, Phone } from "lucide-react";

const ContactForm = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reasonForContact: "",
      message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      console.log(formData);
      try {
         const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         if (!response.ok) throw new Error("Failed to send message");

         setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            reasonForContact: "",
            message: "",
         });
         alert("Message sent successfully!");
      } catch (error) {
         alert("Failed to send message. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   return (
      <div className="max-w-7xl mx-auto px-4 py-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
               <h1
                  className="text-5xl font-bold mb-6"
                  style={{
                     background: "linear-gradient(135deg, #FFD700, #FFA500)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  We'd love to hear
                  <br />
                  from you
               </h1>

               <p className="text-gray-700 mb-12">
                  If you have any inquiries, feedback, or would like to schedule a visit to our
                  campus, please don't hesitate to reach out to us. We look forward to hearing from
                  you soon!
               </p>

               <div className="space-y-4">
                  <div>
                     <h3 className="font-semibold mb-2">Address:</h3>
                     <p className="text-gray-600">
                        Columbia Sc Usa Office 1201 Main Columbia Sc 39201. Suite 1989
                     </p>
                     {/* <p className="text-gray-600">Greenville, TX 75401</p> */}
                  </div>

                  <div className="flex items-center space-x-2">
                     <Phone
                        className="text-[#4169E1]"
                        size={20}
                     />
                     <a
                        href="tel:80337208012"
                        className="text-gray-600 hover:text-[#4169E1]"
                     >
                        80337208012
                     </a>
                  </div>

                  <div className="flex items-center space-x-2">
                     <Mail
                        className="text-[#4169E1]"
                        size={20}
                     />
                     <a
                        href="mailto:info@runa.us"
                        className="text-gray-600 hover:text-[#4169E1]"
                     >
                        aicuglobalcampusreignition@gmail.com
                     </a>
                  </div>

                  <div className="flex items-center space-x-2">
                     <Clock
                        className="text-[#4169E1]"
                        size={20}
                     />
                     <span className="text-gray-600">Hours: Mon.- Fri. 8AM - 9PM</span>
                  </div>
               </div>
            </div>

            {/* Right Column - Form */}
            <form
               onSubmit={handleSubmit}
               className="space-y-6"
            >
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm mb-1">
                        Name <span className="text-red-500">*</span>
                     </label>
                     <input
                        type="text"
                        name="firstName"
                        placeholder="First"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#4169E1]"
                     />
                  </div>
                  <div>
                     <label className="block text-sm mb-1 invisible">Last Name</label>
                     <input
                        type="text"
                        name="lastName"
                        placeholder="Last"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#4169E1]"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm mb-1">
                        Email <span className="text-red-500">*</span>
                     </label>
                     <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#4169E1]"
                     />
                  </div>
                  <div>
                     <label className="block text-sm mb-1">Phone</label>
                     <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#4169E1]"
                     />
                  </div>
               </div>

               <div>
                  <label className="block text-sm mb-1">
                     Reason for Contact <span className="text-red-500">*</span>
                  </label>
                  <select
                     name="reasonForContact"
                     required
                     value={formData.reasonForContact}
                     onChange={handleChange}
                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#4169E1]"
                  >
                     <option value="">Select one</option>
                     <option value="admission">Admission Inquiry</option>
                     <option value="campus">Campus Visit</option>
                     <option value="financial">Financial Aid</option>
                     <option value="other">Other</option>
                  </select>
               </div>

               <div>
                  <label className="block text-sm mb-1">
                     Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                     name="message"
                     required
                     rows={6}
                     value={formData.message}
                     onChange={handleChange}
                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#4169E1]"
                  />
               </div>

               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#4169E1] text-white rounded hover:bg-[#3151a8] transition-colors duration-300 disabled:opacity-50"
               >
                  {isSubmitting ? "Sending..." : "SUBMIT"}
               </button>
            </form>
         </div>
      </div>
   );
};

export default ContactForm;
