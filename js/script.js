// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

const playButton = document.getElementById('play');
function play(){

    const textGame = document.getElementById('text-game');
    textGame.innerHTML = '';
    const textLost = document.getElementById('text-lost');
    textLost.innerHTML = '';

    let numCell;
    const playground = document.getElementById('bomb-game');
    playground.innerHTML = '';
    // numero di bombe default a 16
    const NUM_BOMB = 16;
    const bombsPosition = [];
    // punteggio iniziale
    let score = 0;

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
    // si creano le bombe e si posizionano in modo random
    while(bombsPosition.length < NUM_BOMB){
        const bomb = randomNumber(1,numCell);
        if(!bombsPosition.includes(bomb)){
            bombsPosition.push(bomb);
        }
    }
    console.log(bombsPosition);
    // punteggio da raggiungere
    const MAX_ATTEMPT = numCell - NUM_BOMB;
    console.log('punteggio da raggiungere per vincere : ' + MAX_ATTEMPT);
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

    // funzione che asegna colore alla cella quando si fa click
    function clickCell(){
        if(bombsPosition.includes(num)){
            endGame();
        }
        else{
            this.classList.add('blue');
            score++;
            console.log('punteggio attuale ' + score);
            cell.removeEventListener('click', clickCell);
            textGame.innerHTML = 'Punteggio : ' + score ;
            if(score === MAX_ATTEMPT){
                 endGame();
            }
        }
    }
    cell.addEventListener('click', clickCell);
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

    // funnzione che scopre tutte le bombe nascoste
    function endGame(){
        const allCell = document.querySelectorAll('.square');
        for(let i = 0; i < allCell.length; i++){
            let num = i + 1;
            if(bombsPosition.includes(num)){
                allCell[i].classList.add('red');
            }
            allCell[i].classList.add('click-none');
        }
        if(score === MAX_ATTEMPT){
            console.log('hai vinto');
            textLost.innerHTML = 'Hai Vinto!';
        } 
        else{
            console.log('hai perso');
            textLost.innerHTML = 'Hai Perso!';
        }
    }
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