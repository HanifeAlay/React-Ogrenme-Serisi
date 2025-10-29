import React from 'react'

function Product({pencilName, price}) {
  
  return (
    
    <div>
        <div>ÜRÜNLER</div>
        <>
        <div>Pencil : {pencilName}</div>
        <div>Fiyat : {price}TL </div>
        </>
     
    


       
        
    </div>
  )
}

export default Product
