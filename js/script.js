var colore = 'red';
var app = new Vue({
 el: '#root',
 data:{
   arrayInput:[],
   importantInput:[],
   inputMessage:'',
 },
 methods:{
   pushing : function() {
     if (this.inputMessage !== '') {
       this.arrayInput.push(this.inputMessage);
       this.inputMessage = ''
     }
     return this.arrayInput
   },
   eliminate : function(i) {
    this.arrayInput = this.arrayInput.filter((element,index)=>{
       return index !== i
     })
   },
   important : function() {
     this.importantInput += this.arrayInput.filter((element)=>{
        return element
      })
      console.log(this.importantInput);
   },
   reset : function(){
     this.importantInput = [];
   }
},
});

Vue.config.devtools = true;
