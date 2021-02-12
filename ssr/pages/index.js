import Head from 'next/head'

export default function Home() {
  return (
    //Renderização da Página de Contato no lado do Servidor (SSR)
    <div>

      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
        <title>Meu primeiro App NextJS</title>
      </Head>

      <body>

        <div>

          <br/><br/>

          <header>

              <h2>Contato</h2>

          </header>

          <hr/>

          <table className="table">
                  
            <thead> 
                <tr>

                  <td className="text-center w-50">
                      
                      <img src={"./imagens/Email.png"} width="40px" alt=""/>
                      contato@fullstackeletro.com

                  </td>

                  <td className="text-center w-50">
                      
                      <img src={"./imagens/Whatsapp.png"} width="40px" alt=""/>
                      (11) 99999-9999

                  </td>

                </tr>
            </thead>

          </table>

          <br/><br/>

          <form className="form-group formulario" id="form">

              <h4>Nome</h4>
              <input className="form-control caixa_mensagem" type="text" name="nome" placeholder="Escreva aqui o seu nome"/>
              <h4>E-mail</h4>
              <input className="form-control caixa_mensagem" type="email" name="email" placeholder="Insira aqui seu email" />
              <h4>Mensagem</h4>
              <textarea rows="8" placeholder="Deixe aqui sua mensagem" name="msg" className=" form-control caixa_mensagem"></textarea>
              <input className="btn btn-lg mt-2 btn-danger" type="submit" value="Enviar"/>

          </form>

          <div className="container-fluid" >
            <div className="row" >
              <div className="col">
                <h3>Comentarios de nossos clientes:</h3>
              </div>
            </div>
          </div>

          <br/><br/><br/><br/>

        </div>

      </body>

    </div>
  )
}
