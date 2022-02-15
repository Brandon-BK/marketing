

const Nav = () => {
  return (
    <div style={{height:43,width:'100%',background:'lightgrey',display:'flex',justifyContent:"space-between",top:0,position:'fixed'}}>
        <button style={{flex:1,border:'none',fontSize:17}}>Home</button>
        <button style={{flex:1,border:'none',fontSize:17}}>Plans</button>
        <button style={{flex:1,border:'none',fontSize:17}}>About</button>
        <button style={{flex:1,border:'none',fontSize:17}}>Contact</button>
    </div>
  )
}

export default Nav