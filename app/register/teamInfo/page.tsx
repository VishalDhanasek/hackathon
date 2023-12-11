export const metadata = {
    title: 'Team Info',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  
  export default function TeamInfo() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-5">
            <ol className="max-w-3xl mx-auto text-center pb-12 md:pb-20 items-center w-full space-y-4 sm:flex sm:space-x-[150px] sm:space-y-0 rtl:space-x-reverse">
    <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h3 className="font-medium leading-tight">Team info</h3>
            <p className="text-xs">Enter Team Details</p>
        </span>
    </li>
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
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
            <h2 className="mb-4 text-xl font-bold text-gray-800 ">Team Details</h2>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Team Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your team name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">College Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your college name" required />
                </div>
              </div>


              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">Team Leader Details</h2>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Team Leader Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Team Leader Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required  />
                  </div>
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Team Leader Phone Number <span className="text-red-600">*</span></label>
                    <input id="text" type="phone-input" className="form-input w-full text-gray-800" placeholder="Enter your phone number" required />
                  </div>
                </div>


              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">Team Member 1</h2>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required  />
                  </div>
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Phone Number <span className="text-red-600">*</span></label>
                    <input id="text" type="phone-input" className="form-input w-full text-gray-800" placeholder="Enter your phone number" required />
                  </div>
                </div>


              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">Team Member 2</h2>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required  />
                  </div>
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Phone Number <span className="text-red-600">*</span></label>
                    <input id="text" type="phone-input" className="form-input w-full text-gray-800" placeholder="Enter your phone number" required />
                  </div>
                </div>


              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">Team Member 3</h2>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required  />
                  </div>
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Phone Number <span className="text-red-600">*</span></label>
                    <input id="text" type="phone-input" className="form-input w-full text-gray-800" placeholder="Enter your phone number" required />
                  </div>
                </div>  


              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">Team Member 4</h2>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required  />
                  </div>
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Phone Number <span className="text-red-600">*</span></label>
                    <input id="text" type="phone-input" className="form-input w-full text-gray-800" placeholder="Enter your phone number" required />
                  </div>
                </div>      
    
             
                <div className=" -mx-3 mb-20 mt-10 grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 float-right">
              <Link href="/register" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3 w-50 mb-20">
                  <span>Back</span>
                </Link>
                <Link href="/register/idea" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 mb-20 ml-3">
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
  