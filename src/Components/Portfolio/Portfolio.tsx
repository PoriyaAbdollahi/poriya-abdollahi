import React , {useState} from 'react'
import './Portfolio.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import portfolio from '../../../static/staticData'
import Chips from '../SubComponents/chips/Chips'
import ChipsHolder from '../SubComponents/chips/ChipsHolder'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Portfolio = () => {
  
    const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
    
`)
      



   const projects = portfolio.projects
  let  [sliderIndex , setSliderIndex] = useState(0)
  const nextSlide = () => {
   if(sliderIndex == projects.length -1){
      setSliderIndex(0)
   }else{
      setSliderIndex(++sliderIndex)
   }
  }
  const prevSlide = () => {
   if(sliderIndex == 0){
      setSliderIndex(projects.length -1)
   }else{
      setSliderIndex(--sliderIndex)
   }
  }
//   let currentphoto = projects[sliderIndex].img
const images = data.allImageSharp.edges
const imageList = projects.map((project)=>{
   return   project.img
})
console.log(imageList)
 
const previewImages = images.filter(element => {
  if(imageList.includes(element.node.fluid.originalName) ){
     return element.node.fluid
  }
});

const previewIndex = previewImages.findIndex((item)=>{
return item.node.fluid.originalName == imageList[sliderIndex]
})

   return (
      <SectionWrapper>
         <div className='porfolio__main__holder'>
        
         <div className='portfolio'>
            <h2 id='portfolio'><span>{`<h2>`}</span>نمونه کارها<span>{`</h2>`}</span></h2>
            <h3><span>{`<h3>`}</span>{projects[sliderIndex].title}<span>{`</h3>`}</span></h3>
         <div className='portfolio__content__holder'> 
            
<div className="container">
   
   <Img className='portfolio__img' fluid={previewImages[previewIndex].node.fluid} alt='abc'/>
 

<div className="circle delay1"></div>
<div className="circle delay2"></div>
<div className="circle delay3"></div>
<div className="circle delay4"></div>
</div>
<div className='portfolio__description__holder'>
 
<p className='portfolio__content'><span>{`<p>`}</span>{projects[sliderIndex].description}<span>{`</p>`}</span> </p>

</div>

</div> 


         </div>
        
         <ChipsHolder>
            {projects[sliderIndex].tag.map((item)=>{
               return  <Chips backgroundColor={item.color} text={item.name}/>
            })}
         </ChipsHolder>
         <button onClick={()=> prevSlide()} className='portfolio__btn__left'>{`<`}</button>
         
         <button onClick={()=> nextSlide()}className='portfolio__btn__right'>{`>`}</button>
         </div>
         
     
         
       
      </SectionWrapper>
    
   )
}

export default Portfolio
