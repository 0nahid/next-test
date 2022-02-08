import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return <div>
        <nav>
            <div className="logo">
                <h1 className="text-[#009b5a] font-bold text-6xl mb-5" >Simple Next.js </h1>
            </div>
            <nav className="mb-5">
                <Link href="/" ><a className="mr-5 hover:text-gray-900">Home</a></Link>
                <Link href="/about" ><a className="mr-5 hover:text-gray-900">About</a></Link>
                <Link href="/Heros" ><a className="mr-5 hover:text-gray-900">Heros</a></Link>
            </nav>
        </nav>
    </div>;
};