import React from 'react'
import "./Skill.css"
import SectionWrapper from '../SectionWrapper/SectionWrapper'
//typescript javascript java android development html/css c# 
const Skills = () => {
    return (
        <SectionWrapper>
            <div className='skill__section'>

          
            <h2><span>{`<h2>`}</span>مهارت های من<span>{`</h2>`}</span></h2>
            <div className='skill__list'>
                 
            </div>
            <div className='skill__progress'>  
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="600" height="600">
            <circle id='prograss__info' cx="300" cy="300" r="85" fill="#193340" stroke="none" ></circle>        
            <path fill="none" stroke="#ffff00" d="M209.05639793553053,251.64442903305323A103,103,0,1,1,198.00238891961828,314.33482939888677" stroke-width="26"  opacity="1"></path>
            <path fill="none" stroke="#0000ff" d="M201.1617382115066,211.00562935427183A133,133,0,1,1,167.72858791601965,286.0977143854021" stroke-width="26"  opacity="1"></path>
            <path fill="none" stroke="#ffa500" d="M144.12232477802522,252.34341213019385A163,163,0,1,1,206.50704087477953,433.5217832191057" stroke-width="26"  opacity="1"></path>
            <path fill="none" stroke="#006994" d="M283.178941649702,107.73442326829311A193,193,0,1,1,111.9465774964496,256.58444651163404" stroke-width="26"  opacity="1"></path>
            <path fill="none" stroke="#ffa500" d="M153.69883653511684,131.6997636103219A223,223,0,1,1,185.1465092950579,491.14830805657107" stroke-width="26"  opacity="1"></path>
            <path fill="none" stroke="#a020f0" d="M177.34316607767676,78.72121409373284A253,253,0,0,1,529.2958701202724,406.92242022039693" stroke-width="26"  opacity="1"></path>
           </svg>           
       </div>
       </div>
       </SectionWrapper>
        
    )
}
/*
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="600" height="600" >
<circle cx="300" cy="300" r="85" fill="#193340" stroke="none" ></circle>
<tspan >Skills</tspan></text><path fill="none" stroke="#800080" d="M71.04819059188986,466.34322639876984A283,283,0,0,1,212.54819059188992,30.85100588847149" stroke-width="26" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 26; opacity: 1;" opacity="1"></path>
<path fill="none" stroke="#ffff00" d="M209.05639793553053,251.64442903305323A103,103,0,1,1,198.00238891961828,314.33482939888677" stroke-width="26"  opacity="1"></path>
<path fill="none" stroke="#0000ff" d="M201.1617382115066,211.00562935427183A133,133,0,1,1,167.72858791601965,286.0977143854021" stroke-width="26"  opacity="1"></path>
<path fill="none" stroke="#ffa500" d="M144.12232477802522,252.34341213019385A163,163,0,1,1,206.50704087477953,433.5217832191057" stroke-width="26"  opacity="1"></path>
<path fill="none" stroke="#006994" d="M283.178941649702,107.73442326829311A193,193,0,1,1,111.9465774964496,256.58444651163404" stroke-width="26"  opacity="1"></path>
<path fill="none" stroke="#ffa500" d="M153.69883653511684,131.6997636103219A223,223,0,1,1,185.1465092950579,491.14830805657107" stroke-width="26"  opacity="1"></path>
<path fill="none" stroke="#a020f0" d="M177.34316607767676,78.72121409373284A253,253,0,0,1,529.2958701202724,406.92242022039693" stroke-width="26"  opacity="1"></path></svg>

*/
export default Skills
