
const button = document.querySelector('button');
const clearBtn = document.querySelector('#clear');

const jokes = document.querySelector('#jokes');

const addNewJoke = async () =>{
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const clearJokes = () =>{
    jokes.innerHTML = ''
}

const getDadJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    }
    catch(e){
        return "NO JOKEZ AVAILABLE!";
    }
}

button.addEventListener('click', addNewJoke);
clearBtn.addEventListener('click', clearJokes);