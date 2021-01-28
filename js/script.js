var colore = 'red';
var app = new Vue({
 el: '#root',
 data:{
   arrayInput:[],
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
   important : function(i) {
     this.arrayInput = this.arrayInput.filter((element,index)=>{
        return index == i
      })
   }
},
});

Vue.config.devtools = true;
