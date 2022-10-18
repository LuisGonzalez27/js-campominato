// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

const playButton = document.getElementById('play');
function play(){
    let numCell;
    const playground = document.getElementById('bomb-game');
    playground.innerHTML = '';
    // numero di bombe default a 16
    const NUM_BOMB = 16;
    const bombsPosition = [];

    const levelHtml = document.getElementById('livello');
    const level = levelHtml.value;

    // scelta tra tre diversi livelli di difficoltà
    switch(level){
        case '1':
            numCell = 100;
            break;
        case '2':
            numCell = 81;
            break;
        case '3':
            numCell = 49;
            break;
    }
    // si posizionano le bombe in modo random
    while(bombsPosition.length < NUM_BOMB){
        const bomb = randomNumber(1,numCell);
        if(!bombsPosition.includes(bomb)){
            bombsPosition.push(bomb);
        }
    }
    console.log(bombsPosition);
    
    // funzione che genera la cella
    function  drawCell(num) {
        const cellUp = Math.sqrt(numCell);
        const cell = document.createElement('div');
        cell.className = 'square';
        cell.style.width = `calc(100% / ${cellUp})`;
        cell.style.height = `calc(100% / ${cellUp})`;

        cell.innerHTML = `
            <span>${num}</span>
        `;

    // evento di cambio colore della cella
        cell.addEventListener('click', function(){
            if(bombsPosition.includes(num)){
                this.classList.add('red');
                // alert('Hai perso riprova!');
                // window.location.reload();
            }
            else{
                this.classList.add('blue');
            }
        });
        return cell;
    }
    // funzione che genera griglia di gioco
    function drawGrid(){
        const grid = document.createElement('div');
        grid.className = 'grid';
        for(i = 1; i <=numCell; i++){
            const cell = drawCell(i);
            grid.appendChild(cell);
        }
        playground.appendChild(grid);
    }
    drawGrid();
};
playButton.addEventListener('click', play);

// funzione per nascondere selezione livello
function myFunction(){
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        window.location.reload();
    } else {
      x.style.display = "none";
    }
};