'use server';

export default async function Page404() {
    return (
        <div className="flex flex-col justify-center items-center text-center min-h-screen">
            <p className="text-8xl font-medium mb-2">404</p>
            <p>Página não encontrada ou link expirado.</p>
        </div>
    )
}