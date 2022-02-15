import Card from "./Card"

const WhoWeAre = () => {
  return (
        <div style={{width:'100%',padding:'0px 113px',marginTop:40}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
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