'use client'

import { useEffect } from "react";
import { useParams, useRouter } from 'next/navigation';

export default function ShortenedURLHandler() {
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        const { shortenedURL } = params;
        try {
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${shortenedURL}`)
                .then(response => {
                    if (!response.ok) {
                        if (response.status === 404) {
                            router.replace('404');
                        }
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    router.replace(data.url.original);
                })
                .catch(error => {
                    console.error('Error during fetch operation:', error);
                });
        } catch (e) {
            console.log('Falha na conexão com o servidor. Entre em contato com o administrador.');
        }
    }, []);

    return null;
}