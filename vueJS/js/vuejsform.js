var vueObject = {
  email: "",
  nome: "",
  sexo: "",
  curso: "",
  endereco: "",
  complemento: "",
  cep: "",
  municipio: "",
  uf: ""
}

new Vue ({
    el: "#mainVue",
    data: function(){
      return vueObject;
    },
    created: function() {  
        var vform = JSON.parse(localStorage.getItem("form"));
          if(vform){
            this.email = vform.email;
            this.nome = vform.nome;
            this.sexo = vform.sexo;
            this.curso = vform.curso;
            this.endereco = vform.endereco;
            this.complemento = vform.complemento;
            this.cep = vform.cep;
            this.municipio = vform.municipio;          
           }
    }   ,
    methods: {
      salvar: function(){

        localStorage.setItem(localStorage.length+1, JSON.stringify(vueObject));
        alert("Usuário cadastrado com sucesso");    
    }

    }
      
  }       
  

});

