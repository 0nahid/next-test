import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div className="text-center">
                <h1 className="text-2xl">Ooops...</h1>
                <h2>That page cannot be found :(</h2>
                <p>Go back to the <Link href="/"><a className="text-red-400">Homepage</a></Link></p>
            </div>
        </>
    );
}
