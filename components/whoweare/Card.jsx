const Card = ({ src, name, title, description }) => {
    return (
      <div>
          <div style={{width:345,height:450,display:'flex',justifyContent:'space-between',flexDirection:'column',boxShadow:'1px 2px 8px grey'}}>
              <img src={src} style={{width:'100%',height:'190px',objectFit:'cover',filter:'greyscale(0.2)'}} />
  
              <p style={{width:'100%',fontSize:25,paddingLeft:20}}>{name}</p>
              <p style={{width:'100%',color:'grey',paddingLeft:20}}>{title}</p>
              <p style={{width:'100%',paddingLeft:20}}>{description}</p>
              <button style={{textTransform:'inherit',width:'100%',background:'#ccc ',color:'black',height:'80px',border:'none'}}>Contact</button>
          </div>
      </div>
    )
  }
  
  export default Card