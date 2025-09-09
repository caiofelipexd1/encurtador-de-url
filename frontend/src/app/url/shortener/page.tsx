import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from "next/link";

const Page = () => {
    return (
        <div className={"min-h-screen flex flex-col items-center justify-center"}>
            <h1 className="text-5xl font-semibold mb-5 bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Encurtador de URL
            </h1>
            <div className={"flex flex-row gap-x-4 pt-5 w-full justify-center mb-10"}>
                <Input type="text" placeholder="URL" className={"w-1/3"} disabled={false} />
                <Button className={"w-1/10 hover:cursor-pointer"} disabled={false}>Encurtar!</Button>
            </div>
            <div className={"flex flex-row gap-x-4 pt-5 w-full justify-center"}>
                <Link href={"https://www.youtube.com/"} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className={"hover:cursor-pointer"}>
                        https://www.youtube.com/
                    </Button>
                </Link>
                <Button variant="outline" className={"hover:cursor-pointer"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9z"/></svg>
                    Copiar
                </Button>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <p className={"text-red-600"}>Mensagem em caso de erro.</p>
            </div>
        </div>
    );
}

export default Page;