import Head from "next/head";
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
                {heros.map(ninja => (
                    <div key={ninja.id} className="mt-4 bg-slate-100 p-4 rounded hover:border-l-4 hover:border-[#009b5a]">
                        <h3 className="text-1xl">{ninja.name}</h3>
                    </div>
                ))}
            </div>

            {/* <div style={{ margin: '20px' }} >
            <Image src="/hero.svg" layout="responsive" width={700} height={300} alt="Hero" />
        </div> */}
            {/* <Link href="Heros/Hero" passHref><span className="text-[#009B5A] underline cursor-pointer">Open Hero</span></Link> */}

        </>
    )
};

export default index;
