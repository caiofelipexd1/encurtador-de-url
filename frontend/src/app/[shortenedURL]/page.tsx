'use client'

import {useEffect} from "react";
import {useParams, useRouter} from 'next/navigation';

export default function ShortenedURLHandler() {
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        const { shortenedURL } = params;
        fetch(`http://localhost:8000/api/url/${shortenedURL}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                router.replace(data.url.original);
            })
            .catch(error => {
                console.error('Error during fetch operation:', error); // Handle any errors
            });
    }, []);

    return null;
}