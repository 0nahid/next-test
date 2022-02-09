import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const index = () => {
    return <div>
        <h1 className="text-2xl text-[#009B5A]">This is a Nested Hero page</h1>
        <div style={{ position: 'relative', width: '800px', height: '500px' }} >
            <Image src="/hero.svg" layout='fill' alt="Hero" />
        </div>
        <Link href="Heros/Hero" passHref><span className="text-[#009B5A] underline cursor-pointer">Open Hero</span></Link>
    </div>;
};

export default index;
