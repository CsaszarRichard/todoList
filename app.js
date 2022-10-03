//1. lépes: Használni kívánt elemek eltárolása változóban
//2. lépés: Esemény létrehozása a gombra, amellyel az input mező értékét ki tudjuk nyerni és ezt bele tudjuk tölteni az alatta lévő "list" divbe
//3. lépés: Megoldjuk, hogy az előző művelet ne csak kattintásra működjön, hanem enter billentyű lenyomására is

/* Házi:
    - ha rákattintuk a megjelenített bekezdésre, adjunk hozzá egy áthúzást
    - ha duplán kattintunk a bekezdésre, akkor törlődjön a listából
*/

//1.lépés
const add = document.getElementById("add");
const list = document.getElementById("list");
const text = document.getElementById("text");


//2.lépés
add.addEventListener("click", todo);

function todo(){

    //Új elem létrehozása, amelyben eltároljuk az input mező értékét
    const p = document.createElement("p");
    //Adjuk meg ennek az új elemnek az input mezőből kinyert szöveget(értéket)
    p.innerText = text.value;
    //Adjunk hozzá ehhez az új elemhez egy classt
    p.classList.add("list-item");
    
    //Ha az input mezőm értéke nem üres (ki van töltve)
    if(text.value != ""){

        //Adjuk hozzá ezt az új elemet a "list" divemhez
        list.appendChild(p);
    }
    
    //Input mezőm értékét állítsuk vissza alaphelyzetbe
    text.value = "";


    //Bekezdésre kattintás esetén húzzuk át az adott feladatot
    p.addEventListener("click", function(){

        this.style.textDecoration = "line-through";
        //this.classList.add("athuz");    
    
    })


    //Duplakattintás esetén töröljük ki a feladatot
    p.addEventListener("dblclick", function(){

        list.removeChild(this);
    })

}


//3.lépés
text.addEventListener("keyup", function(e){

    if(e.keyCode == 13){

        todo();
    }
})
