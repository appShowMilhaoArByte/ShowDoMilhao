import { Audio } from 'expo-av';

async function playTrilhaPrincipal (status){
    const soundObject = new Audio.Sound();
    try {
    await soundObject.loadAsync(require('../sounds/TrilhaSonoraPrincipal.mp3'));
    await soundObject.playAsync();

    } catch (error) {
        console.log('error: ', error);
    // An error occurred!
    }
}

async function stopSound(){
    const soundObject = new Audio.Sound();
    try{
        await soundObject.loadAsync(require('../sounds/TrilhaSonoraPrincipal.mp3'));
        await soundObject.stopAsync();
    } catch(error){
        console.log('error: ', error);
    }
}

async function Acertou (){
    const soundObject = new Audio.Sound();
    try {
    await soundObject.loadAsync(require('../sounds/Acertou.mpeg'));
    await soundObject.playAsync();
    // Your sound is playing!
    } catch (error) {
        console.log('error: ', error);
    // An error occurred!
    }
}

async function CertaResposta (){
    const soundObject = new Audio.Sound();
    try {
    await soundObject.loadAsync(require('../sounds/CertaResposta.mpeg'));
    await soundObject.playAsync();
    // Your sound is playing!
    } catch (error) {
        console.log('error: ', error);
    // An error occurred!
    }
}
async function EstaCertoDisso (){
    const soundObject = new Audio.Sound();
    try {
    await soundObject.loadAsync(require('../sounds/EstaCertoDisso.mpeg'));
    await soundObject.playAsync();
    // Your sound is playing!
    } catch (error) {
        console.log('error: ', error);
    // An error occurred!
    }
}

async function somPergunta (){
    const soundObject = new Audio.Sound();
    try {
    await soundObject.loadAsync(require('../sounds/Pergunta.mp3'));
    await soundObject.playAsync();
    // Your sound is playing!
    } catch (error) {
        console.log('error: ', error);
    // An error occurred!
    }
}

async function QuePenaVoceErrou (){
    const soundObject = new Audio.Sound();
    try {
    await soundObject.loadAsync(require('../sounds/QuePenaVoceErrou.mpeg'));
    await soundObject.playAsync();
    // Your sound is playing!
    } catch (error) {
        console.log('error: ', error);
    // An error occurred!
    }
}

export {playTrilhaPrincipal, Acertou, CertaResposta, EstaCertoDisso, somPergunta, QuePenaVoceErrou, stopSound}