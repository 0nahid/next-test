import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, [router])
    return (
        <>
            <Head>
                <title>Oops...page not found</title>
            </Head>
            <div className="text-center">
                <h1 className="text-2xl">Ooops...</h1>
                <h2>That page cannot be found :(</h2>
                <p>Go back to the <Link href="/"><a className="text-red-400">Homepage</a></Link></p>
            </div>
        </>
    );
}
