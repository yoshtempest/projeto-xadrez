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

window.onload = function() {
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
    var fonts = {

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
    for (var va n = 0; n<64; n++) {
        if (values[n] !==0){
            sqs[n].innerHTML = fonts[values[n]];
        }
        sqs[n].addEventListener("click", check);
    }
    function updateSquarecolor (){
        for(var n=0; n<64; n++){
            if(Math.Floor (n/8)%2 == 0){
                if(n%2 === 0){
                    sqs [n].style.background = '#9ff';
                }
                else {
                    sqs [n].style.background = '#5fa';
                }
            }
        }
    }
    updateSquarecolor();
    var noveable = false;
    var moveTarget = "";
    var moveScapes = [];

    function checkBlack (n, values) {
        var target = values[n];
        var scopes [];
        var x = n;
        if(target === "whitePawn"){
            
        }
    }

}