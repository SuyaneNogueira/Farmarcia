import { useState } from "react"



function FarMarcia() {
const[paginas, setPaginas] = useState()


  return (
    
    <div>
       
    <div>
      <header>
        <img className='logo' src="public/farmarcia.PNG.png" alt=""/>

        <div className="divI">
          <ul className="itens">
              <button  className="link1">Estoque</button>
              <button className="link2">Atendiemento</button>
              <button className="link3">vendas</button>
              <button className="link4">Contato</button>
          </ul>
      </div>
      </header>
    </div>

    <div className="SND" >

      <h2 className="" >Sob Nova Direção</h2>

      <h3 className="">bem-Vindos a Farmárcia</h3>
      
      <p>✨A antiga farmario foi vendida para a nova dona a Márcia, e ela convida a todos para a sua inauguração, tera brindes, sorteio e muita comida deliciosa✨ </p>
 <h4 >Iremos disponibilizar as novas camisetas e seus preços para quem tiver interece, no dia: 25/12/25 vamos fazer um sorteio valendo um kit ressaca para o pós-ano novo junto com uma camiseta.</h4>
    </div>

    <center>
      <div className="Sorteio">
      <h1 className="Kit">O que terá no kit:</h1>
      <p>Água: para hidratação</p>
      <p>Paracetamol</p>
      <p>Ibuprofeno</p>
      <p>Antiácidos</p>
      <p>Máscaras para os olhos</p>
      <p>Chá de camomila:Para acalmar</p>
      <p>Mais um vale de 10% de desconto em qualquer remédio</p>
      </div>
      </center>

       <div  className="Camisetas"><img  src="./public/farmarcia-camisetas.PNG.png" alt="camisetas" /></div>
  
    
    </div>
  
  )
}

export default FarMarcia
