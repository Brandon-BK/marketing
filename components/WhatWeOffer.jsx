import React from 'react'

const WhatWeOffer = () => {
  return (
    <div style={{width:'100%',marginTop:50,padding:'0 113px'}}>

        <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
             <h2 style={{fontWeight:400,marginBottom:20,width:'100%',display:'flex',justifyContent:'center'}}>What We Offer</h2>

             <div style={{background:'grey',width:180,height:5}}></div>

             <div style={{display:'flex',marginTop:20,width:'100%'}}>
                <div style={{flex:1,padding:'5px 10px',background:'#f1f1f1 '}}>
                    <h2 style={{fontWeight:400}}>Design</h2>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>

                <div style={{flex:1,padding:'5px 10px',background:'#9e9e9e'}}>
                    <h2 style={{fontWeight:400}}>Branding</h2>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>

                <div style={{flex:1,background:'#616161',padding:'5px 10px',color:'white'}}>
                    <h2 style={{fontWeight:400}}>Consultation</h2>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>

                <div style={{flex:1,background:'black',padding:'5px 10px',color:'white'}}>
                    <h2 style={{fontWeight:400}}>Promises</h2>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
             </div>
        </div>

    </div>
  )
}

export default WhatWeOffer