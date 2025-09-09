'use client'

import { Cal_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const calSans = Cal_Sans({
    subsets: ['latin'],
    weight: "400",
});

export default function Home() {
    return (
        <div className={"min-h-screen flex flex-col items-center justify-center"}>
            <h1 className={`text-5xl font-semibold tracking-tight text-balance text-gray-900 ${calSans.className} mb-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text`}>
                Encurtador de URL
            </h1>
            <div className={`flex flex-row items-center justify-center gap-4 w-full mb-10`}>
                <Input className={"w-1/3"} type="text" placeholder="URL"/>
                <Button className={`hover:cursor-pointer`}>Encurtar!</Button>
            </div>
            <div className={`flex flex-row items-center justify-center gap-4 w-full`}>
                <a href={'#'} rel={`noopener noreferrer`} className={`hover:cursor-pointer hover:underline`}>
                    https://nextjs.org/docs/pages/getting-started/fonts
                </a>

                <Button className={`hover:cursor-pointer`} variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9z"/></svg>
                    Copiar
                </Button>
            </div>
            <p className={`text-red-500`}>Mensagem em caso de um possível erro.</p>
        </div>
    );
}
