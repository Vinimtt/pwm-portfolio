"use client";

import React, { useState, useEffect } from 'react';
import { Boneco } from './Boneco';
import styles from '../Forca.module.css';

const palavras = [
    "SPORT", "LEAO", "ILHADORETIRO", "RECIFE", "PERNAMBUCO",
    "RUBRONEGRO", "TORCIDA", "CAMPEAO", "BRASILEIRO", "COPADOBRASIL",
    "FUTEBOL", "GLORIA", "HINO", "ESCUDO", "MANTO",
    "ADVERSARIO", "CLUBE", "CAMPO", "ARQUIBANCADA", "GRITO",
    "JOGO", "GOLEIRO", "ARTILHEIRO", "TECNICO", "CAMPEONATO",
    "JOVEM", "TRADICAO", "HISTORIA", "TORCEDOR", "GARRA"
];

const palavraAleatoria = () => palavras[Math.floor(Math.random() * palavras.length)];

export default function Forca() {
    const [palavra, setPalavra] = useState(''); 
    
    const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
    const [letrasErradas, setLetrasErradas] = useState([]);
    const [letraInput, setLetraInput] = useState('');
    const [mensagemFinal, setMensagemFinal] = useState('');
    const [jogoFinalizado, setJogoFinalizado] = useState(false);

    useEffect(() => {
        setPalavra(palavraAleatoria());
    }, []);

    const tentativas = 6 - letrasErradas.length;

    useEffect(() => {
        if (!palavra) return;

        const letrasUnicas = [...new Set(palavra.split(''))];
        if (letrasUnicas.length > 0 && letrasUnicas.every(letra => letrasAdivinhadas.includes(letra))) {
            setMensagemFinal(`Parabéns! 🦁 Você adivinhou: ${palavra}`);
            setJogoFinalizado(true);
        }

        if (tentativas <= 0) {
            setMensagemFinal(`Perdeu 😂! A palavra era: ${palavra}`);
            setJogoFinalizado(true);
        }
    }, [letrasAdivinhadas, tentativas, palavra]);

    const handleInputChange = (event) => {
        setLetraInput(event.target.value.toUpperCase());
    };

    const verificarLetra = () => {
        if (!letraInput || !/^[A-Z]$/.test(letraInput)) {
            alert("Por favor, digite uma letra válida.");
            return;
        }
        if (letrasAdivinhadas.includes(letraInput) || letrasErradas.includes(letraInput)) {
            alert("Você já tentou esta letra.");
            setLetraInput('');
            return;
        }
        if (palavra.includes(letraInput)) {
            setLetrasAdivinhadas(prev => [...prev, letraInput]);
        } else {
            setLetrasErradas(prev => [...prev, letraInput]);
        }
        setLetraInput('');
    };
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !jogoFinalizado) {
            verificarLetra();
        }
    };

    const reiniciarJogo = () => {
        setPalavra(palavraAleatoria());
        setLetrasAdivinhadas([]);
        setLetrasErradas([]);
        setLetraInput('');
        setMensagemFinal('');
        setJogoFinalizado(false);
    };

    const palavraExibida = palavra
        .split('')
        .map(letra => (letrasAdivinhadas.includes(letra) ? letra : '_'))
        .join(' ');

    if (!palavra) {
        return <div className={styles.container}><h1>Carregando Jogo...</h1></div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Jogo da Forca do Sport Club do Recife!</h1>
            
            <Boneco numeroDeErros={letrasErradas.length} />

            <p className={styles.palavra}>{palavraExibida}</p>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    maxLength="1"
                    value={letraInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    disabled={jogoFinalizado}
                    autoFocus
                />
                <button className={styles.button} onClick={verificarLetra} disabled={jogoFinalizado}>
                    Tentar
                </button>
            </div>
            
            {mensagemFinal && <p className={styles.mensagemFinal}>{mensagemFinal}</p>}

            <div className={styles.infoJogo}>
                <p>Letras erradas: {letrasErradas.join(', ')}</p>
                <p>Tentativas restantes: {tentativas}</p>
            </div>

            <button className={styles.botaoReiniciar} onClick={reiniciarJogo}>
                {jogoFinalizado ? 'Jogar Novamente' : 'Reiniciar Jogo'}
            </button>
        </div>
    );
}