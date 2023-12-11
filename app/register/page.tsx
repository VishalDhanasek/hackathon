export const metadata = {
    title: 'Register',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  
  export default function Register() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Welcome to SparkX 2024 Registration</h1>
            </div>
  
            {/* Form */}
            <div className="max-w-xl mx-auto">



              
<ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Each participating team is allowed to submit only one project idea for consideration.</span>
    </li>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Teams must provide accurate and up-to-date contact information during registration. This includes the primary contact person's name, email address, and phone number.</span>
    </li>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>The final round or grand finale will be held offline at a specified venue. Qualifying teams from the online rounds must be prepared to attend the offline event.</span>
    </li>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>The first two rounds of the hackathon will be conducted online. Teams must ensure a stable internet connection and adhere to the specified online submission deadlines</span>
    </li>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Team size: <span className="font-semibold text-gray-900 ">5 members</span></span>
    </li>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Registration Fee: <span className="font-semibold text-gray-900 ">₹700 per Team</span></span>
    </li>

</ul>





              <div className="flex items-center mt-10 mb-10 my-6">
                <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
                
              </div>
             
                <div className="flex flex-wrap -mx-3 mb-10">
                  <div className="w-full px-3 ">
                  <Link href="/register/teamInfo" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full">
                  <span>Start Registration</span>
          
                </Link>
                  </div>
                </div>

             

            </div>
  
          </div>
        </div>
      </section>
    )
  }
  