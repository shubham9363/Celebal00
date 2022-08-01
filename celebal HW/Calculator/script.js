let OutputScreen = document.getElementById('output-screen');

function display(num){
    OutputScreen.value += num;
}

function Calculate(){
   try{
     OutputScreen.value = eval(OutputScreen.value);
    }

    catch(err){
        alert('Invalid');
    }
}

function Clear(){
    OutputScreen.value = "" ;
}

function del(){
    OutputScreen.value = OutputScreen.value.slice(0, -1);

}