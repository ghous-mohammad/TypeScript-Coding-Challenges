const magician_name  : string[] = ["herry houndi", "Dynamo", "Dia vernon"];

const show_magician = (magician: string[]) => {
    magician.forEach((name) => {
    console.log(name);
  });
};

show_magician(magician_name);