import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request) {
    try {
        const body = await request.json();
        const { userId, argent } = body;

        if (!userId || argent === undefined) {
            return NextResponse.json(
                { error: 'Données manquantes' },
                { status: 400 }
            );
        }

        // Générer un nombre aléatoire entre 0 et 99
        const randomNumber = Math.floor(Math.random() * 100);

        let nouveauScore;
        let message;

        if (randomNumber === 1) {
            // Gagné : score x5
            nouveauScore = argent * 5;
            message = 'Félicitations ! Vous avez gagné !';
        } else {
            // Perdu : score à 0
            if(nouveauScore <= 0){
                message = "Vous N'avez plus d'argent, vous etes pauvre !!!"
            }
            else{
                nouveauScore = nouveauScore -100;
                message = 'Dommage, vous avez perdu !';
            }
            
        }

        // Mettre à jour le score de l'utilisateur
        await prisma.user.update({
            where: { id: userId },
            data: { argent: nouveauScore }
        });

        return NextResponse.json({
            nouveauScore,
            message,
            randomNumber
        });

    } catch (error) {
        console.error('Erreur dans la route roulette:', error);
        return NextResponse.json(
            { error: 'Erreur serveur' },
            { status: 500 }
        );
    }
} 