Vue.component('search-cep', {
    template: '#search-cep-template',
    data: function () {

        return {
            zip_code: '',
            state_id: '',
            city_id: '', 
            patio: '',
            complement: '',
            neighborhood: '',
            number: '',
            response_cep: [],
            is_complete: false

        }

    },

    methods: {

        search_cep: function (event) {

            if (event) {
                event.preventDefault();
            }

            this.zip_code = this.zip_code.trim().replace(/[^0-9]/g, '');

            // viacep.com.br/ws/RS/Porto Alegre/Domingos/json

            url_cep = 'https://viacep.com.br/ws/' + this.state_id + '/' + this.city_id + '/' + this.patio + '/json/';

            // clear all headers axios to viacep
            axios.defaults.headers.common = null

            axios.get(url_cep).then(function (response) {

                this.is_complete = true;
                this.response_cep = response.data;
                // jQuery('#number').focus();

            }.bind(this)).catch(function (error) {
                console.log(error.statusText);
            });

        }
    }

})

element = document.getElementById("app")

if (element != null) {

    var app = new Vue({
        el: "#app",
       data: function () {

            return {

                zip_code: '',                             
                patio: '',
                complement: '',
                neighborhood: '',
                number: '',
                state_id: '',
                city_id: '',
                response_cep: [],
                is_complete: false

            }
           },
            
            methods: {

                load_cep: function (event) {

                    var url_cep, self;
                    
                    if (event) {
                        event.preventDefault();
                    }
                                      
                    this.zip_code = this.zip_code.trim().replace(/[^0-9]/g, '');

                    url_cep = 'https://viacep.com.br/ws/' + this.zip_code + '/json';

                    // clear all headers axios to viacep
                    axios.defaults.headers.common = null;

                    axios.get(url_cep).then(function (response) {

                        this.patio = response.data.logradouro;
                        this.complement = response.data.complemento;
                        this.neighborhood = response.data.bairro;
                        this.state_id = response.data.uf;
                        this.city_id = response.data.localidade;

                        jQuery("#number").focus();

                    }.bind(this)).catch(function (error) {
                        console.log(error.statusText);
                    });

                }
                
            }
    });

}