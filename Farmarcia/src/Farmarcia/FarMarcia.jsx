import { useState } from "react"



function FarMarcia() {
const[paginas, setPaginas] = useState()


  return (
    
    <div>
       
    <div>
      <header>
        <img className='logo' src="public/farmarcia.PNG.png" alt=""/>

        <div>
          <ul className="itens">
              <button onClick={() => {setPaginas(<Estoque/>)}} className="link1">Estoque</button>
              <button onClick={() => {setPaginas(<Atendimento/>)}} className="link2">Atendiemento</button>
              <button onClick={() => {setPaginas(<Vendas/>)}} className="link3">vendas</button>
              <button onClick={() => {setPaginas(<Contatos/>)}} className="link4">Contato</button>
              
     
      
      
          </ul>
      </div>
      </header>
    </div>

     <center> <div className="SOBN">
        <h3 >SOB NOVA DIREÇÃO</h3>

       <img src="public/farmarciacompleta.PNG.png" alt="" />

       <p>🎊Olá a todos, a FarMario esta sob nova direção, agora se chama FarMárcia, sendo a nova dona a Sra. Márcia, convidamos a todos os clientes a aparecerem na inauguração. Terá comidas brindes e novos produtos não perca🎊 </p>
       <button onClick={() => {setPaginas(<Produtos/>)}}className='BNT'> Produtos</button>
       
      </div>
      
      </center>
       {paginas}
    </div>
    
  )
}

export default FarMarcia
