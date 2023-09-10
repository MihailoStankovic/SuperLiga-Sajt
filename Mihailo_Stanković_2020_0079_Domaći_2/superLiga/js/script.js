
$(".komentar").hide();
$(".komentar").show(5000);

$(".polje").on("focus blur",function(event){
    if(event.type=="focus"){
        $(this).css("border","3px solid  blue");
    }else{
        $(this).css("border","1px solid green");
    }
})



$("#ime").on("click",function(){
    $(".poljeEmail").val("@gmail.com");
})


$("#dugme1").on("click",function(event){
    event.preventDefault();
    let imeGreska=false;
    let imeValue=$("#ime").val();
    if(imeValue.length=="" || imeValue.length<4 || imeValue.length>15){
        imeGreska=true;
    }else{
        imeGreska=false;

    }
    let prezimeGreska=false;
    let prezimeValue=$("#prezime").val();
    if(prezimeValue.length=="" || prezimeValue.length<4 || prezimeValue.length>15){
        prezimeGreska=true;
    }else{
        prezimeGreska=false;

    }
   
    if(imeGreska==false && prezimeGreska==false){
        alert("Dobrodosao "+$("#ime").val()+" "+$("#prezime").val()+"\nPrati redovno svoj email "+$("#email").val()+" i budi stalno u toku sa nasim aktivnostima na sajtu! ");
    }else{
        alert("GRESKA!");
        if(imeGreska==true && prezimeGreska==false){
            $("#prezimeCheck").hide();
            $("#imeCheck").show(2000);

       
        
           
        }
        else{
            if(imeGreska==false && prezimeGreska==true){
                $("#imeCheck").hide();
                $("#prezimeCheck").show(2000);
               
            }
            else if(imeGreska==true && prezimeGreska==true){
                $("#prezimeCheck").show(2000);
                $("#imeCheck").show(2000);

            }
          
        }
       
    }

});