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

    showData: function(){

        var a = 0;
    if (localStorage.length == 0) {
        alert("Não existem cadastrados");
    }
    else {
        while (a+1 < localStorage.length) {
        
                  

            email: localStorage.email,
            $(".collection").prepend("<br> ", "<b>Cadastro Número: </b>", a, "<br><br>");
            $(".collection").prepend("<b>UF: </b>", show["uf"], "<br>");
            $(".collection").prepend("<b>Cep: </b>", show["cep"], "<br>");
            $(".collection").prepend("<b>Munícipio: </b>", show["municipio"], "<br>");
            $(".collection").prepend("<b>Complemeto: </b>", show["complemento"], "<br>");
            $(".collection").prepend("<b>Endereço: </b>", show["endereco"], "<br>");
            $(".collection").prepend("<b>Curso: </b>", show["curso"], "<br>");
            $(".collection").prepend("<b>Sexo: </b>", show["sexo"], "<br>");
            $(".collection").prepend("<b>Nome: </b>", show["nome"], "<br>");
            $(".collection").prepend("<b>Email: </b>", show["email"], "<br>");
                        
            a++;
            
       
        }
    }
    }
      
  }       
  

});

