export default async function smootie(icecream, itens, menu) {

    if((typeof icecream !== "string") || (typeof itens !== "object") || (typeof menu !== "object")){
        console.error("Ivalids parameters");
        return false; 
    }
    
    if(!menu[icecream]){ 
        console.error("Ice cream not found");        
        return false; 
    }
    
    if((!itens) || (itens.length <= 0)){
        console.error("Necessary itens do add or remove");
        return false; 
    }

    await itens.forEach(item => { 
        if(item[0] === "+") menu[icecream].push(item.slice(1));
        else{
            var index = menu[icecream].indexOf(item.slice(1));
            if(index >= 0) menu[icecream].splice(index, 1); 
        } 
    });

    return menu;
}