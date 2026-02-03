import HeaderPage from "@/components/Shared/HeaderPage";

const CourseWithdrawalPolicy = () => {
   return (
      <>
         <title>Add/Drop Date & Refunds</title>
         <HeaderPage
            text="Add/Drop Date & Refunds"
            image="/admission/ad-18.jpg"
         />
         <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-8">
            {/* Left side - Policy Information */}
            <div className="flex-1 space-y-6">
               <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Withdrawal Policy</h2>

               <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                     <h3 className="font-semibold text-gray-700 mb-2">Add/Drop Period</h3>
                     <p className="text-gray-600">
                        During the add/drop period, students can adjust their class schedules
                        without penalty.
                     </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                     <h3 className="font-semibold text-gray-700 mb-2">One Week After</h3>
                     <p className="text-gray-600">
                        Course changes made a week following the add/drop period will result in a
                        50% charge for the course and a 50% refund.
                     </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                     <h3 className="font-semibold text-gray-700 mb-2">Two Weeks After</h3>
                     <p className="text-gray-600">
                        Course changes made two weeks following the add/drop period will result in a
                        75% charge for the course and a 25% refund.
                     </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                     <h3 className="font-semibold text-gray-700 mb-2">After Two Weeks</h3>
                     <p className="text-gray-600">
                        Courses dropped more than two weeks following the add/drop period will be
                        considered a withdrawal of the course. Students will not be refunded when
                        they withdraw from a course.
                     </p>
                  </div>
               </div>
            </div>

            {/* Right side - Graduate Image */}
            <div className="flex-1 flex items-center justify-center">
               <div className="relative w-full max-w-md">
                  <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
                     <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                        <div className="bg-white h-full w-full rounded-lg p-2">
                           <div className="h-full w-full bg-gray-200 rounded-lg flex items-center justify-center">
                              {/* Replace with actual image */}

                              <div className="text-center p-4">
                                 <img
                                    src="/admission/ad-17.jpg"
                                    alt="Graduation Image Placeholder"
                                 />
                                 {/* <p className="mt-2 text-gray-500">Graduation Image Placeholder</p> */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CourseWithdrawalPolicy;
