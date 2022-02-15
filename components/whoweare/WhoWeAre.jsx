import Card from "./Card"

const WhoWeAre = () => {
  return (
        <div style={{width:'100%',padding:'0px 113px',marginTop:70,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>

<h2 style={{fontWeight:400,marginBottom:20,width:'100%',display:'flex',justifyContent:'center'}}>What We Offer</h2>

<div style={{background:'grey',width:180,height:5}}></div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:20,width:'100%'}}>
                <Card 
                    src="./jane.jpg"
                    name="Jane Doe"
                    title="CEO & Founder"
                    description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
                />

                <Card 
                    src="./mike.jpg"
                    name="Mike Ross"
                    title="Architect"
                    description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
                />


                <Card 
                    src="./mike.jpg"
                    name="John Doe"
                    title="Architect"
                    description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
                />

            </div>
        </div>
  )
}

export default WhoWeAre