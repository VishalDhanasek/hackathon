export const metadata = {
    title: 'Idea Submission',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  
  export default function IdeaSubmission() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-5">
            <ol className="max-w-3xl mx-auto text-center pb-12 md:pb-20 items-center w-full space-y-4 sm:flex sm:space-x-[150px] sm:space-y-0 rtl:space-x-reverse">
    <li className="flex items-center text-green-600 dark:text-green-500 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-green-600 rounded-full shrink-0 dark:border-green-500">
            1
        </span>
        <span>
            <h3 className="font-medium leading-tight">Team info</h3>
            <p className="text-xs">Enter Team Details</p>
        </span>
    </li>
    <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            2
        </span>
        <span>
            <h3 className="font-medium leading-tight">Idea Submission</h3>
            <p className="text-xs">Submit your Idea</p>
        </span>
    </li>
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h3 className="font-medium leading-tight">Payment</h3>
            <p className="text-xs">Registration Fee</p>
        </span>
    </li>
</ol>

</div>



            
  
            {/* Form */}
            <div className="max-w-2xl mx-auto">
            
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Idea Title <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your Idea Title" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                <label htmlFor="countries" className="block text-gray-800 text-sm font-medium mb-1">Theme <span className="text-red-600">*</span></label>
                  <select id="option" className="form-input w-full text-gray-800" required>
                    <option selected>Select your idea theme</option>
                    <option value="Agri">Agri Tech</option>
                    <option value="Edu">Edu Tech</option>
                    <option value="Fin">Fin Tech</option>
                    <option value="Health">Health Tech</option>
                    <option value="Sus">Sustainability</option>
                    <option value="Web">Web 3.0</option>
                    <option value="Ai">AI & Robotics</option>
                 </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="long-text">Problem Statement <span className="text-red-600">*</span></label>
                    <textarea id="long-text" name="long-text"  className="form-input w-full resize-none text-gray-800" placeholder="Enter problem statement" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="long-text">Brief Description of the Idea <span className="text-red-600">*</span></label>
                    <textarea id="long-text" name="long-text"  className="form-input w-full resize-none text-gray-800" placeholder="Description" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Target Audience/Users <span className="text-red-600">*</span></label>
                  <input id="Audiance" type="text" className="form-input w-full text-gray-800" placeholder="Enter your Target Audience" required />
                </div>
              </div>  
              <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="long-text">Key Features <span className="text-red-600">*</span></label>
                    <textarea id="long-text" name="long-text"  className="form-input w-full resize-none text-gray-800" placeholder="Enter key features of your idea" required />
                  </div>
                </div>


              


              


              


              


              
             
              <div className=" -mx-3 mb-20 mt-10 grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 float-right">
              <Link href="/register/teamInfo" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3 w-50 mb-20">
                  <span>Back</span>
                </Link>
                <Link href="#" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 mb-20 ml-3">
                  <span>Next</span>
                  <svg className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>  
              </div>

            </form>
            
            
              
              
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  