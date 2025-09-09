'use client'

import { Cal_Sans } from "next/font/google";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {redirect} from "next/navigation";

const calSans = Cal_Sans({
    subsets: ['latin'],
    weight: "400",
});

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState(null);
    const [hasErrors, setHasErrors] = useState({});
    const [copied, setCopied] = useState(false);

    const handleSetURL = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUrl(event.target.value);
    }

    const handleSubmitURL = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        setShortenedUrl(null);
        setHasErrors({});
        event.preventDefault();
        try {
            const req = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL, { url }, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            });
            const { data } = req;
            if (req.status === 200) {
                setShortenedUrl(data);
                setUrl("");
            }
        } catch (e) {
            setHasErrors(e.response?.data);
        }
        setLoading(false);
    }

    const handleClickButtonShortener = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortenedUrl?.url.shortened}`);
    }

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortenedUrl?.url.shortened}`);
        setCopied(!copied);
    }
    return (
        <div className={"min-h-screen flex flex-col items-center justify-center"}>
            <h1 className={`text-5xl font-semibold tracking-tight text-balance text-gray-900 ${calSans.className} mb-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text`}>
                Encurtador de URL
            </h1>
            <div className={`flex flex-row items-center justify-center gap-4 w-full mb-10`}>
                <Input className={"w-1/3"} type="text" placeholder="URL" value={url} onChange={handleSetURL} disabled={loading} />
                <Button className={`hover:cursor-pointer`} onClick={handleSubmitURL} disabled={loading}> { loading ? 'Carregando' : 'Encurtar!'}</Button>
            </div>
            {shortenedUrl && (
                <div className={`flex flex-row items-center justify-center gap-4 w-full`}>
                    <Button className={`hover:cursor-pointer`} variant="link" onClick={handleClickButtonShortener}>
                        {`${process.env.NEXT_PUBLIC_BASE_URL}/${shortenedUrl?.url?.shortened}`}
                    </Button>

                    <Button className={`hover:cursor-pointer`} variant="outline" onClick={copyToClipboard}>
                        {!copied && (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9z"/></svg>
                                Copiar
                            </>
                        )}

                        {copied && (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.17l9.192-9.191l1.414 1.414L10 17.999l-6.364-6.364l1.414-1.414z"/></svg>
                                Copiado
                            </>
                        )}
                    </Button>
                </div>
            )}

            { hasErrors && (
                <p className={`text-red-500`}>{hasErrors.message}</p>
            )}

        </div>
    );
}
