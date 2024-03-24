const magician_name  : string[] = ["herry houndi", "Dynamo", "Dia vernon"];

function make_great(magician:string[]){
    
    const magician_name_with_greeting : string[] = []
    
    for(let i =0 ; i < magician.length ; i++ ){
        magician_name_with_greeting.push("the great"+ magician[i])  

    }

 return magician_name_with_greeting

}


const withGreeting = make_great(magician_name)





const show_magician = (withGreetMagician: string[] , magician_name: string[] ) => {
   
    console.log(withGreetMagician);
    console.log(magician_name);
    
 
}
show_magician(withGreeting , magician_name)