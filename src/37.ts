function make_shirt(size: string = "large", text: string ="i love typescript"): void {
    console.log(`"${text}" is printed on your shirt of size :"${size}"`);
    return;
}

make_shirt()
make_shirt("medium")
make_shirt("small" , 'i love ai')