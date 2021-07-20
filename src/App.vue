<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" style="margin-left: 200px; font-weight: bold;" class="brand-logo">Cadastro de Fornecedor</a>
      </div>
    </nav>

    <div style="margin-top: 20px;" class="container">

      <form>

          <label>Razão Social</label>
          <input type="text" placeholder="Razão Social">
          <label>Nome Fantasia</label>
          <input type="number" placeholder="Fantasia">
          <label>Cnpj</label>
          <input type="text" placeholder="Cnpj">
          <label>CEP</label>
          <input type="text" placeholder="CEP">
          <label>Localidade</label>
          <input type="text" placeholder="Localidade">
          <label>Número</label>
          <input type="text" placeholder="Número">
          <label>Complemento</label>
          <input type="text" placeholder="Complemento">
          <label>Bairro</label>
          <input type="text" placeholder="Bairro">
          <label>Data de Inclusão</label>
          <input type="text" placeholder="Data de Inclusão">


          <button style="margin-top: 15px;" class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <hr style="margin-top: 20px;"/>

      <table style="margin-top: 10px;">

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Arduino</td>
            <td>100</td>
            <td>50.00</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>
<script>

</script>

<style>

</style>
