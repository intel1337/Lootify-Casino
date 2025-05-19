'use client';

import { useState } from 'react';
import styles from './roulette.module.css';

export default function Roulette() {
    const user = {
        id: 1
    }

    const [mise, setMise] = useState('');
    const [resultat, setResultat] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
     

        setIsLoading(true);
        setMessage('');

        try {
            const response = await fetch('/api/roulette', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.id,
                    argent: parseInt(mise)
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setResultat({
                    nouveauScore: data.nouveauScore,
                    message: data.message,
                    randomNumber: data.randomNumber
                });
            } else {
                setMessage(data.error || 'Une erreur est survenue');
            }
        } catch (error) {
            setMessage('Erreur de connexion au serveur');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Roulette</h1>
            
            <div className={styles.gameContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="mise">Votre mise :</label>
                        <input
                            type="number"
                            id="mise"
                            value={mise}
                            onChange={(e) => setMise(e.target.value)}
                            min="1"
                            required
                            className={styles.input}
                            placeholder="Entrez votre mise"
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isLoading || !mise}
                        className={styles.button}
                    >
                        {isLoading ? 'En cours...' : 'Jouer'}
                    </button>
                </form>

                {message && (
                    <div className={styles.errorMessage}>
                        {message}
                    </div>
                )}

                {resultat && (
                    <div className={styles.resultat}>
                        <h2>{resultat.message}</h2>
                        <p>Nombre tiré : {resultat.randomNumber}</p>
                        <p>Nouveau solde : {resultat.nouveauScore}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
