function h(){
var vnavi = document.getElementById("dateheure");
var date = new Date();
vnavi.innerHTML += alert(date);
}

function valid()                                    
{ 
    var pseudo = document.forms["formu"]["pseudo"];       
    var nom = document.forms["formu"]["np"];         
    var pays = document.forms["formu"]["pays"];   
    var postale = document.forms["formu"]["Postale"]; 
    var email = document.forms["formu"]["Email"]; 
    var url = document.forms["formu"]["site"]; 
    var password = document.forms["formu"]["Password"];  
    var comment = document.forms["formu"]["Commentaire"];  
      
    
    if (pseudo.value == "")                                  
    { 
        alert("Entrez un pseudo."); 
        pseudo.focus(); 
        return false; 
    }    
    if (nom.value == "")                                  
    { 
        alert("Entrez votre nom et prénom."); 
        pseudo.focus(); 
        return false; 
    }  
    if (pays.selectedIndex < 1)                  
    { 
        alert("Choisissez un pays."); 
        pays.focus(); 
        return false; 
    } 
    if (postale.value == "")                               
    { 
        alert("Entrez votre adresse."); 
        postale.focus(); 
        return false; 
    }  
    if (email.value == "")                                   
    { 
        alert("Entrez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Entrez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Entrez une adresse email valide."); 
        email.focus(); 
        return false; 
    } 
     if (url.value == "")                                   
    { 
        alert("Entrez une url valide."); 
        url.focus(); 
        return false; 
    }  
    if (url.value.indexOf("https://www", 0) < 0)                 
    { 
        alert("Entrez une url valide."); 
        url.focus(); 
        return false; 
    }    
    if (url.value.indexOf(".", 0) < 0)                 
    { 
        alert("Entrez une url valide."); 
        url.focus(); 
        return false; 
    }  
    if (password.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        password.focus(); 
        return false; 
    }    
    if (comment.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        comment.focus(); 
        return false; 
    } 
    return true; 
}