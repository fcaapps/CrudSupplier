<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" style="margin-left: 200px; font-weight: bold;" class="brand-logo">Cadastro de Fornecedor</a>
      </div>
    </nav>

    <div style="margin-top: 20px;" class="container">

    <form @submit.prevent="salvar">
          <label>Razão Social</label>
          <input type="text" placeholder="Razão Social" v-model="supplier.razaoSocial">
          <label>Nome Fantasia</label>
          <input type="text" placeholder="Fantasia" v-model="supplier.nomeFantasia">
          <label>Cnpj</label>
          <input type="text" placeholder="Cnpj" v-model="supplier.cnpj" v-mask="'##.###.###/####-##'">
          <label>CEP</label>
          <input type="text" placeholder="CEP" v-model="supplier.cep" v-mask="'##.###-###'">
          <button style="margin-top: 15px; margin-bottom: 15px;" class="waves-effect waves-light btn-small">Consulta CEP<i class="material-icons left">save</i></button>          
          <br>

          <label>Localidade</label>
          <input type="text" placeholder="Localidade" v-model="supplier.localidade">
          <label>Número</label>
          <input type="text" placeholder="Número" v-model="supplier.numero">
          <label>Complemento</label>
          <input type="text" placeholder="Complemento" v-model="supplier.complemento">
          <label>Bairro</label>
          <input type="text" placeholder="Bairro" v-model="supplier.bairro">

          <button style="margin-top: 15px;" class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <hr style="margin-top: 20px;"/>

      <table style="margin-top: 10px;">

        <thead>

          <tr>
            <th>RAZÃO SOCIAL</th>
            <th>CNPJ</th>
            <th>CEP</th>            
          </tr>

        </thead>

        <tbody>

          <tr v-for="supplier of supplier" :key="supplier.id">

            <td>{{ supplier.razaoSocial }}</td>
            <td>{{ supplier.cnpj }}</td>
            <td>{{ supplier.cep }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button style="margin-left: 5px;" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>
<script>

  import Supplier from './services/suppliers.js'

  export default {
    name: 'app',
    data () {
      return {
        supplier:{
          razaoSocial: '',
          nomeFantasia: '',
          cnpj: '',
          cep: '',
          localidade: '',
          numero: '',
          complemento: '',
          bairro: ''
        },
        suppliers: [],
        errors: []
      }
    },

    mounted(){
      this.listar();
      
    },

    methods:{
      
      listar(){
        Supplier.listar().then(resposta => {
          this.supplier = resposta.data
        }).catch(e => {
          console.log(e)
        })
      },

      salvar(){

        if(!this.suppliers.id){

          Supplier.salvar(this.supplier).then(resposta => {
            this.supplier = {}
            alert('Cadastrado com sucesso!')
            this.listar()
            this.errors = {}
          }).catch(e => {
            this.errors = e.response.data.errors
          })

        }else{

          Supplier.atualizar(this.supplier).then(resposta => {
            this.supplier = {}
            this.errors = {}
            alert('Atualizado com sucesso!')
            this.listar()
          }).catch(e => {
            this.errors = e.response.data.errors
          })

        }
        

      },

      editar(supplier){
        this.supplier = supplier
      },

      remover(supplier){

        if(confirm('Deseja excluir o fornecedor?')){

          Supplier.apagar(supplier).then(resposta => {
            this.listar()
            this.errors = {}
          }).catch(e => {
            this.errors = e.response.data.errors
          })

        }

      }
    }

  }  

  


</script>

<style>

</style>
