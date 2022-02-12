import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { heros: data }
    }
}

const index = ({ heros }) => {
    // console.log(heros)
    return (
        <>
            <Head>
                <title>Next.js | Heros</title>
                <meta name="keywords" content="Heros, Next.js , next" />
            </Head>

            {/* Users data */}
            <div>
                <h1 className="text-4xl text-[#009B5A]">All Heros</h1>
                {heros.map(hero => (
                    <Link href={`Heros/${hero.id}`} key={hero.id} passHref >
                        <div className="mt-4 bg-slate-100 p-4 rounded cursor-pointer hover:border-l-4 hover:border-[#009b5a]">
                            <a className="text-1xl ">{hero.name}</a>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ margin: '20px' }} >
                <Image src="/hero.svg" loading="eager" layout="responsive" width={700} height={300} alt="Hero" />
            </div>

            <Link href="Heros/Hero" passHref><span className="text-[#009B5A] underline cursor-pointer">Open Hero</span></Link>
        </>
    )
};

export default index;
