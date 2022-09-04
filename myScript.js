console.log('JS-OK')

/*
Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella
la cella cliccata si colora di azzurro se il numero progressivo è pari
di verde se dispari
Inoltre emette un messaggio in console con il numero della cella cliccata.

Bonus:

Potete sbizzarrirvi Ad esempio mettendo i numeri da 1 a 100 in ordine random nelle celle, ma avete massima libertà!

Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:

Di cosa ho bisogno per generare i numeri?

Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

//l'utente clicca sul bottone che genera una griglia quadrata
const button  = document.getElementById('init-btn')


button.addEventListener('click', function(){
    console.log('cliccato');
    //prendo l'elemento grid
    const gridElement = document.getElementById('grid')
    gridElement.innerHTML='';
    //prendo la sezione dove dichiaro il risultato e la resetto
    const youLose = document.getElementById('youLose')
    youLose.classList.add('d-none')

    //creo le celle con un numero progressivo, da 1 a 100
    for(let index = 1; index <= 100; index ++){
        //l'utente può cliccare ogni cella
        
        //CREO UN ELEMENTO
        const cellElement = document.createElement('div');
        const randomNumber = getRandomNumber(0, 100)
        //ALL'ELEMENTO APPENA CREATO GLI ASSEGNO UNA CLASSE
        cellElement.className = 'ae-cell';
        //l'utente può cliccare ogni cella
        cellElement.addEventListener('click', function(){
            //mette un messaggio il console con il numero della cella cliccata

            console.log('cella cliccata', index);
            cellElement.innerHTML = randomNumber;

            //la cella cliccata si colora di un colore se pari, di un altro colore se dispari
            const isEven = isNumberEven(randomNumber);

            if(isEven){
                cellElement.classList.add('ae-even');
                //cellElement.className += 'even';
            }
            else if (randomNumber % 5 === 0){
                cellElement.classList.add('ae-boom')
                alert('Hai perso')
                gridElement.innerHTML='';
                youLose.classList.remove('d-none')
            }
            else{
                this.classList.add('ae-odd') // this cambia perchè uso function(){}
            }
            console.log(isEven)
        });
        //aggiungo l'elemento alla grid
        gridElement.append(cellElement)
    }
})

function isNumberEven(number){
    return number % 2 === 0
}

function getRandomNumber(min, max){

    if (max === undefined){
        max = min;
        min = 0;
    }

    const range = max - min;
    const random = Math.floor(Math.random()*range)

    const result = min + random;

    return result;

}