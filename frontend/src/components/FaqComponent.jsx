import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { api } from '../api';

const faqs = [
    {
      question: 'How long will it take to complete my website?',
      answer: 'The timeline depends on the complexity and scope of the website. Contact us for more details.'
    },
    {
      question: 'What is the process for getting a website designed by your company?',
      answer: 'We follow a structured process including understanding your needs, design, and development phases.'
    },
    {
      question: 'Can I see examples of websites your company has designed?',
      answer: 'Yes, feel free to contact us to view our portfolio.'
    },
    {
      question: 'Do you provide website maintenance and support services after the website is launched?',
      answer: 'Yes, we offer ongoing maintenance and support packages for all clients.'
    },
    {
      question: 'What platform or technologies do you use for website development?',
      answer: 'We use various technologies based on your needs like React, WordPress, and more.'
    },
    {
      question: 'What is the cost of getting a website designed by your company?',
      answer: 'Costs vary depending on the project requirements. Contact us for a detailed quote.'
    },
    {
      question: 'If my proposal is approved, how long does it take?',
      answer: 'The timeline depends on the proposal complexity. Once approved, we provide a clear timeline.'
    },
  ];

  const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState(null);
    // const[faqs,setFaqs]=useState([])
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
      useEffect(()=>{
        try{
          const data =api.get('/faq')
          
        }catch(error){
          console.log(error)
        }


      },[])
  return (

   <>
         <div className=" mb-24 w-full mx-auto max-w-6xl bg-white p-8 rounded-lg ">
      <h3 className="text-3xl font-semibold text-center mb-2">Frequently Asked Questions</h3>
      <p className='text-sm text-gray-500 text-center mb-10'>(FAQ's)</p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className=" bg-gray-100  rounded-lg">
            <summary
              className="flex justify-between items-center p-4 cursor-pointer font-semibold"
              onClick={() => toggleOpen(index)}
            >
              <span>{faq.question}</span>
              <span>
              {openIndex === index ? <IoIosArrowUp/> : <MdOutlineKeyboardArrowDown/>}
              </span>
            </summary>
            {openIndex === index && (
              <p className="mt-2 p-4 text-sm bg-gray-100">{faq.answer}</p>
            )}
          </details>
        ))}
      </div>
    </div>
   </>

  )
}

export default FaqComponent