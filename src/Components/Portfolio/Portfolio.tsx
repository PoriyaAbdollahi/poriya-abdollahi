import React from 'react'
import './Portfolio.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
const Portfolio = () => {
   const testimg = "data:image/png;base64,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";
   return (
      <SectionWrapper>
         <div className='porfolio__main__holder'>
        
         <div className='portfolio'>
            <h2><span>{`<h2>`}</span>نمونه کارها<span>{`</h2>`}</span></h2>
         
            <div className='portfolio__content__holder'> 
            
               <div className="container">
                  
                  <img className='portfolio__img' src={testimg} alt='abc'/>
                
              
               <div className="circle delay1"></div>
               <div className="circle delay2"></div>
               <div className="circle delay3"></div>
               <div className="circle delay4"></div>
            </div>
               <div className='portfolio__description__holder'>
                
               <p className='portfolio__content'><span>{`<p>`}</span>کابین یک پروژه بازی  حدس کلمات است تکنلوژی های که در آن استفاده کردم جاوا و به عنوان پایگاه داده از کلید مقدار استفاده شده<span>{`</p>`}</span> </p>
             
               </div>
            
            </div>
         
         </div>
           
         <button className='portfolio__btn__left'>{`<`}</button>
         <button className='portfolio__btn__right'>{`>`}</button>
         </div>
     
         
       
      </SectionWrapper>
    
   )
}

export default Portfolio
