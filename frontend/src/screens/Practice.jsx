import React from 'react'
import Navbar from '../components/Navbar'
import QuestionStrip from '../components/QuestionStrip'
import Headings from '../components/Headings'
import QuestionTable from '../components/QuestionTable'
import useGetAllQuestions from '../hooks/useGetAllQuestions'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
const Practice = () => {
    
    const questions = useSelector((state) => state.question.questions);
    useGetAllQuestions()
  return (
    <div>
      <Navbar/>
      {
       (!questions || questions.length === 0)?(
        <div className="flex flex-col items-center justify-center mt-10 text-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin" style={{animationDuration:"2s"}}></div>
    <h1 className="text-2xl font-semibold mt-6 text-gray-700">
      Fetching Questions...
    </h1>
    <p className="text-gray-500 mt-2">
      Hang tight, this might take a little while 🚀
    </p>
  </div> 
      ):
       (
         <div className='flex mx-auto my-10 flex-col gap-5 max-w-5xl'>
        <div>
            <h1 className='font-bold text-2xl'>Hand Picked Questions for Practise </h1>
        </div>
        {
           questions.map((category,index)=>(
  <div key={index} className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2"  />
  
  <div className="collapse-title font-semibold">{category.title}</div>
    
     <div className=' collapse-content p-3 text-sm flex-row border-2 border-gray-300 border-b-2'>
       <QuestionTable questions={category.questions}/>
        </div>
</div>
           ))
        }
      
        </div>
       
       )
      }
      
 

    
        <Footer/>
    </div>
  )
}

export default Practice
