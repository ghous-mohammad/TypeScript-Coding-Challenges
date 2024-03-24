const magician_name: string[] = ["herry houndi", "Dynamo", "Dia vernon"];


const make_great = (magician: string[]) => {
         for(let i =0 ; i < magician.length ; i++){
            // let splited = magician[i].split(" ")
            // great_names.push(splited)
            // great_names[i].unshift("the great")
            magician[i] = "the great" + magician[i].slice(0)
          
                    
         }


return magician 
//great_names.map((val : string[]) => val.join(" "))


};


const show_magician = (magician: string[]) => {
    magician.forEach((name) => {
        console.log(name);
    });
};


let great_names2 = make_great(magician_name)
show_magician(great_names2)
