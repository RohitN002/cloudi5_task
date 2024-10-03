import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import axios from 'axios';



  const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const[faqs,setFaqs]=useState([])
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
     
    useEffect(() => {
      const fetchFaqs = async () => {
          try {
              const response = await axios.get('http://localhost:3000/api/faqs');
              setFaqs(response.data);
              console.log(faqs)
          } catch (error) {
              console.log('Error fetching FAQs:', error);
          }
      };

      fetchFaqs();
  }, []);


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