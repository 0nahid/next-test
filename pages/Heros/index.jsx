import Link from 'next/link';
import React from 'react';
const index = () => {
    return <div>
        <h1>This is a Nested Hero page</h1>
        <Link href="Heros/Hero" passHref><span className="text-blue-700 underline cursor-pointer">Open Hero</span></Link>
    </div>;
};

export default index;
