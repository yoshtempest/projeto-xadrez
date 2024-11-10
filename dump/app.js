let whiteKing = 1;
let whiteQueen = 2;
let whiteTower = 3;
let whiteBishop = 4;
let whiteKnight = 5;
let whitePawn = 6;

let nothing = 0;

let blackKing = 7;
let blackQueen = 8;
let blackTower = 9;
let blackBishop = 10;
let blackKnight = 11;
let blackPawn = 12;


let board =
[
    [whiteTower, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteTower],
    [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
    [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing],
    [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing],
    [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing],
    [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing],
    [blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn],
    [blackTower, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackTower],
]

window.onload = function()
{
    var w = window.innerWidth || 360;
    var h = window.innerHeight || 500;

    var tsw = (w > h) ? w : h;
    var sw = (tsw - 16) / 8;

    var container = document.getElementById("container");
    for (var n=0; n<64; n++){
        var square = document.createElementNS("div");
        square.classlist.add("square");

        square.classlist.add("s"+n);

        square.style.height = sw + `px`;

        square.style.width = sw + `px`;

        square.style.top = 
        7+
        (h-tsw)
        / 2
        + sw*
        (Math.floor(n/8))
        + `px`;

        square.style.left = 
        7+
        (w-tsw)
        / 2
        + sw*
        (n%8)
        + `px`;

        square.style.fontSize =
        sw*3/4
        + `px`;

        container.appendChild(square);

    }
    var fonts =
    {

        whiteKing : `&#9812;`,
        whiteQueen : `&#9813;`,
        whiteTower : `&#9814;`,
        whiteBishop : `&#9815;`,
        whiteKnight : `&#9816;`,
        whitePawn : `&#9817;`,

        blackKing: `&#9818;`,
        blackQueen: `&#9819;`,
        blackTower: `&#9820;`,
        blackBishop: `&#9821;`,
        blackKnight : `&#9822;`,
        blackPawn : `&#9823;`,

    }

    var values =
    [blackTower,
     blackKnight,
     blackBishop, 
     blackQueen, 
     reiPreto, 
     blackBishop, 
     blackKnight, 
     blackTower, 

     blackPawn,
     blackPawn,
     blackPawn,
     blackPawn,
     blackPawn,
     blackPawn,
     blackPawn,
     blackPawn,

     nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing,

     whitePawn, 
     whitePawn,
     whitePawn,
     whitePawn,
     whitePawn, 
     whitePawn,
     whitePawn,
     whitePawn,

     whiteTower,
     whiteKnight,
     whiteBishop,
     whiteQueen,
     whiteKing,
     whiteBishop,
     whiteKnight,
     whiteTower
    ]
    var ck = false;
    var crl = false;
    var cr2 = false;
    var cl;
    var sqs = document.getElementByClassName("square");
    for (var n = 0; n<64; n++)
    {
        if (values[n] !==0)
        {
            sqs[n].innerHTML = fonts[values[n]];
        }
        sqs[n].addEventListener("click", check);
    }
    function updateSquarecolor ()
    {
        for(var n=0; n<64; n++)
        {
            if(Math.Floor (n/8)%2 == 0)
            {
                if(n%2 === 0)
                {
                    sqs [n].style.background = '#9ff';
                }
                else
                {
                    sqs [n].style.background = '#5fa';
                }
            }
        }
    }
    updateSquarecolor();
    var noveable = false;
    var moveTarget = "";
    var moveScapes = [];

    function checkBlack(n,values)
    {
        var target = values[n];
        var scopes = [];
        var x = n;
       
        if(target === "whitePawn"){
            x -= 8;
            if("prnbkq".indexOf(values[x-1]) >= 0 && x%8 != 0)
            {
                scopes.push(x-1);
            }
            if("prnbkq".indexOf(values[x+1]) >= 0 && x%8 != 7)
            {
                scopes.push(x+1);
            }
            if(x >= 0 && values[x] === 0){
                scopes.push(x);
                if(x >= 40){
                    if(x-8 >= 0 && values[x-8] === 0)
                    {
                        scopes.push(x-8);
                    }
                }
            }
        }
       
        else if(target === "whiteTower")
        {
            x = n;
            x -= 8;
            while(x >= 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while(x < 64){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while(x%8 != 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while(x%8 != 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x--;
            }
        }
        
        else if(target === "whiteKnight")
        {
            x = n;
            if(x%8 > 1 && x%8 < 6)
            {
                x -= 17;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x -= 15;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }

                x = n;
                x -= 10;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x -= 6;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 6;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 10;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 15;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 17;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
            }
            else
            {
                x = n;
                if(x%8 <= 1)
                {
                    x = n;
                    x -= 15;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x -= 6;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 10;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                }
                x = n;
                if(x%8 === 1)
                {
                    x -= 17;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                }
                if(x%8 >= 6)
                {
                    x = n;
                    x -= 17;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x -= 10;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 6;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                }
                x = n;
                if(x%8 === 6){
                    x = n;
                    x -= 15;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                }
            }
        }
        
        else if(target === "whiteBishop")
        {
            x = n;
            x -= 9;
            while(x >= 0 && x%8 !== 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while(x < 64 && x%8 !== 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while(x%8 != 0 && x%8 !== 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while(x%8 != 0){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 7;
            }
        }
       
        else if(target === "whiteQueen")
        {
            x = n;
            x -= 8;
            while(x >= 0){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while(x < 64){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while(x%8 != 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while(x%8 != 7){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x--;
            }
            x = n;
            x -= 9;
            while(x >= 0 && x%8 !== 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while(x < 64 && x%8 !== 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while(x%8 != 0 && x%8 !== 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while(x%8 != 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 7;
            }
        }
        
        else if(target === "whiteKing")
        {
            x = n;
            x += 8;
            if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
            {
                scopes.push(x);
            }
            x = n;
            x -= 8;
            if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
            {
                scopes.push(x);
            }
            x = n;
            if(x%8 > 0)
            {
                x = n;
                x -= 1;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x -= 9;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }

                x = n;
                x += 7;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
            }
            x = n;
            if(x%8 < 7)
            {
                x = n;
                x += 1;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 9;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x -= 7;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
            }
            x = n;
            if(!ck)
            {
                cl = false;
                if(!cr2)
                {
                //    cl = false;
                    if(values[n+1] === 0 && values[n+2] === 0 && values[n+3] === "whiteTower")
                    {
                        scopes.push(x+2);
                        cl = true;
                    }
                }
                if(!cr1){
                //    cl = false;
                    if(values[n-1] === 0 && values[n-2] === 0 && values[n-3] === 0 && values[n-4] === "whiteTower")
                    {
                        scopes.push(x-2);
                        cl = true;
                    }
                }
            }
        }
        if(scopes.length) return scopes;
    }

    function checkWhite(n,values)
    {
        var target = values[n];
        var scopes = [];
        var x = n;
        if(target === "blackPawn")
        {
            x += 8;
            if("otmvlw".indexOf(values[x-1]) >= 0 && x%8 != 0)
            {
                scopes.push(x-1);
            }
            if("otmvlw".indexOf(values[x+1]) >= 0 && x%8 != 7)
            {
                scopes.push(x+1);
            }
            if(x < 64 && values[x] === 0)
            {
                scopes.push(x);
                if(x <= 23){
                    if(x+8 >= 0 && values[x+8] === 0)
                    {
                        scopes.push(x+8);
                    }
                }
            }
        }
        
        else if(target === "blackTower")
        {
            x = n;
            x -= 8;
            while(x >= 0){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while(x < 64){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while(x%8 != 0){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while(x%8 != 7){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x--;
            }
        }
        
        else if(target === "blackKnight")
        {
            x = n;
            if(x%8 > 1 && x%8 < 6)
            {
                x -= 17;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x -= 15;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }

                x = n;
                x -= 10;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x -= 6;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 6;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 10;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 15;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 17;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
            }
            else
            {
                x = n;
                if(x%8 <= 1)
                {
                    x = n;
                    x -= 15;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x -= 6;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 10;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                }
                x = n;
                if(x%8 === 1)
                {
                    x -= 17;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                }
                if(x%8 >= 6)
                {
                    x = n;
                    x -= 17;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x -= 10;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x += 6;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                }
                x = n;
                if(x%8 === 6)
                {
                    x = n;
                    x -= 15;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                    {
                        scopes.push(x);
                    }
                }
            }
        }
     
        else if(target === "blackBishop")
        {
            x = n;
            x -= 9;
            while(x >= 0 && x%8 !== 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while(x < 64 && x%8 !== 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while(x%8 != 0 && x%8 !== 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while(x%8 != 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 7;
            }
        }
        
        else if(target === "blackQueen")
        {
            x = n;
            x -= 8;
            while(x >= 0){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while(x < 64)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while(x%8 != 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while(x%8 != 7){
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x--;
            }
            x = n;
            x -= 9;
            while(x >= 0 && x%8 !== 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while(x < 64 && x%8 !== 7)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while(x%8 != 0 && x%8 !== 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while(x%8 != 0)
            {
                if(values[x] === 0)
                {
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0)
                {
                    scopes.push(x);
                    break;
                }
                else
                {
                    break;
                }
                x -= 7;
            }
        }
        
        else if(target === "blackKing")
        {
            x = n;
            x += 8;
            if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
            {
                scopes.push(x);
            }
            x = n;
            x -= 8;
            if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
            {
                scopes.push(x);
            }
            x = n;
            if(x%8 > 0)
            {
                x = n;
                x -= 1;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x -= 9;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }

                x = n;
                x += 7;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
            }
            x = n;
            if(x%8 < 7)
            {
                x = n;
                x += 1;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x += 9;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
                x = n;
                x -= 7;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0)
                {
                    scopes.push(x);
                }
            }
        }
        if(scopes.length) return scopes;
    }

    var myTurn = true;

    function check()
    {
        if(myTurn)
        {
            var n = Number(this.classList[1].slice(1));
            var target = values[n];

            var scopes = checkBlack(n,values) || [];

            var x = n;

            if(!moveable)
            {
                if(scopes.length > 0)
                {
                    moveable = true;
                    moveTarget = n;
                    moveScopes = scopes.join(",").split(",");
                }
                else
                {

                }
            }
            else
            {
                if(moveScopes.indexOf(String(n)) >= 0)
                {
                    var checkArr = [];
                    var saveKing = false;
                    for(var z = 0; z < 64; z++)
                    {
                        checkArr[z] = values[z];
                    }
                    
                    checkArr[n] = checkArr[moveTarget];
                    checkArr[moveTarget] = 0;
                    
                    for(var y = 0; y < 64; y++){
                        if("prnbkq".indexOf(checkArr[y]) >= 0){
                            var checkScp = checkWhite(y,checkArr) || [];
                            for(var z = 0; z < checkScp.length; z++)
                            {
                                if(checkArr[checkScp[z]] === 'whiteKing'){
                                    if(!saveKing){
                                        alert('Salve seu rei');
                                        saveKing = true;
                                    }
                                }
                            }
                        }
                    }
                    
                    if(!saveKing){
                        values[n] = values[moveTarget];
                        values[moveTarget] = 0;
                        if(cl){
                            if(n === 62 && moveTarget === 60){
                                values[63] = 0;
                                values[61] = "whiteTower";
                            }
                            else if(n === 58 && moveTarget === 60){
                                values[59] = "whiteTower";
                                values[56] = 0;
                            }
                        }
                        if(moveTarget === 60){
                            ck = true;
                        }
                        else if(moveTarget === 63){
                            cr2 = true;
                        }
                        else if(moveTarget === 56){
                            cr1 = true;
                        }
                        if(values[n] === "whitePawn" && n < 8){
                            values[n] = "whiteQueen";
                        }
                        moveable = false;
                        scopes = [];
                        myTurn = false;
                        setTimeout(chooseTurn,1000);
                    }
                }
                else {
                    moveScopes = [];
                    moveable = false;
                }
            }

            updateSquarecolor();
            
            for(var x = 0; x < 64; x++){
                sqs[x].innerHTML = fonts[values[x]];
                if(values[x] === 0){
                    sqs[x].innerHTML = "";
                }
            }

            for(var x = 0; x < scopes.length; x++){
                sqs[scopes[x]].style.background = "#f45";//.classList.add("scope");
            //    alert(scopes)
            }
        }
    }


    var arr = [];

    function chooseTurn()
    {
        var approved = [];
        var actions = [];
        var effects = [];


        for(var n = 0; n < 64; n++){
            if("prnbqk".indexOf(values[n]) >= 0){
                var scopes = checkWhite(n,values) || [];
                for(var x = 0; x < scopes.length; x++)
                {
                    var tmp = []//values.join(',').split(',');
                    for(var xx = 0; xx < 64; xx++)
                    {
                        tmp[xx] = values[xx]
                    }
                    var effect = 0;
                    var action = Math.random()*3;
                    //Action value
                    var actionValue = tmp[scopes[x]];
                    if(actionValue === "whiteKing")
                    {
                        action = 100 + Math.random()*3;
                    }
                    else if(actionValue === "whiteQueen")
                    {
                        action = 50 + Math.random()*3;
                    }
                    else if(actionValue === "whiteBishop")
                    {
                        action = 30 + Math.random()*3;
                    }
                    else if(actionValue === "whiteKnight")
                    {
                        action = 30 + Math.random()*3;
                    }
                    else if(actionValue === "whiteTower")
                    {
                        action = 30 + Math.random()*3;
                    }
                    else if(actionValue === "whitePawn")
                    {
                        action = 15 + Math.random()*3;
                    }
                    //Effect value
                    tmp[scopes[x]] = tmp[n];
                    tmp[n] = 0;
                    for(var y = 0; y < 64; y++){
                        if("otmvlw".indexOf(values[y]) >= 0){
                            var tmpScp = checkBlack(y,tmp) || [];
                            for(var z = 0; z < tmpScp.length; z++){
                                var effectValue = tmp[tmpScp[z]];
                                if(effectValue == "blackKing")
                                {
                                    if(effect < 100)
                                    {
                                        effect = 100;
                                    }
                                }
                                else if(effectValue == "blackqueen")
                                {
                                    if(effect < 50)
                                    {
                                        effect = 50;
                                    }
                                }
                                else if(effectValue == "blackBishop")
                                {
                                    if(effect < 30)
                                    {
                                        effect = 30;
                                    }
                                }
                                else if(effectValue == "blackKnight")
                                {
                                    if(effect < 30)
                                    {
                                        effect = 30;
                                    }
                                }
                                else if(effectValue == "blackTower")
                                {
                                    if(effect < 30)
                                    {
                                        effect = 30;
                                    }
                                }
                                else if(effectValue == "blackPawn")
                                {
                                    if(effect < 15)
                                    {
                                        effect = 15;
                                    }
                                }
                            }
                        }
                    }




                    actions.push(action);
                    effects.push(effect);
                    approved.push(n+"-"+scopes[x]);
                }
            }
        }

        //alert(actions);

        var bestEffect = Math.min.apply(null,effects);
        //alert(bestEffect);
        if(bestEffect >= 100)
        {
            alert("Você Venceu");
            setTimeout(function()
            {
                values = [blackTower,
                    blackKnight,
                    blackBishop, 
                    blackQueen, 
                    reiPreto, 
                    blackBishop, 
                    blackKnight, 
                    blackTower, 
               
                    blackPawn,
                    blackPawn,
                    blackPawn,
                    blackPawn,
                    blackPawn,
                    blackPawn,
                    blackPawn,
                    blackPawn,
               
                    nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing,
               
                    whitePawn, 
                    whitePawn,
                    whitePawn,
                    whitePawn,
                    whitePawn, 
                    whitePawn,
                    whitePawn,
                    whitePawn,
               
                    whiteTower,
                    whiteKnight,
                    whiteBishop,
                    whiteQueen,
                    whiteKing,
                    whiteBishop,
                    whiteKnight,
                    whiteTower
                ];
        },100);
        }

        var tmpA = [];
        var tmpB = [];
        var tmpC = [];
        var bestMove = "";

        for(var n = 0; n < effects.length; n++)
        {
            if(effects[n] === bestEffect)
            {
                tmpA.push(actions[n]);
                tmpB.push(approved[n]);
                tmpC.push(effects[n]);
            }
        }
        bestMove = tmpB[tmpA.indexOf(Math.max.apply(null,tmpA))];
    //    alert(effects)
        //alert(bestMove);


        if(bestMove){
            values[Number(bestMove.split("-")[1])] = values[Number(bestMove.split("-")[0])];
            values[Number(bestMove.split("-")[0])] = 0;
            if(values[Number(bestMove.split("-")[1])] === "blackPawn" && Number(bestMove.split("-")[1]) >= 56)
            {
                values[Number(bestMove.split("-")[1])] = "blackQueen";
            }

            sqs[bestMove.split("-")[1]].style.background = '#aaf';
            sqs[bestMove.split("-")[0]].style.background = '#aaf';

            for(var x = 0; x < 64; x++)
            {
                //sqs[x].style.background = "#afa"//classList.add("scope");
                sqs[x].innerHTML = fonts[values[x]];
                if(values[x] === 0){
                    sqs[x].innerHTML = "";
                }
            }
            myTurn = true;
        }
        else
        {
            alert('Você venceu');
        }
    }
}