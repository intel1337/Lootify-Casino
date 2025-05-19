import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request) {
    try {
        const body = await request.json();
        const { userId, argent } = body;
        console.log(argent, userId)

        if (!userId || argent === undefined) {
            return NextResponse.json(
                { error: 'Données manquantes' },
                { status: 400 }
            );
        }
        const user = await prisma.user.findFirst({
                where: { id: userId },
            });

        // Générer un nombre aléatoire entre 0 et 99
        const randomNumber = Math.floor(Math.random() * 100);

        let nouveauScore = 0;
        let message;

        if (randomNumber === 1) {
            // Gagné : score x5
            let tempo = user.argent + argent * 5;
            nouveauScore = tempo;
            message = 'Félicitations ! Vous avez gagné !';
            message = nouveauScore;
        } else {
                nouveauScore = user.argent - argent;
                message = 'Dommage, vous avez perdu !';
                message = nouveauScore;

              
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