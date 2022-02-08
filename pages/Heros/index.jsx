import Link from 'next/link';
import React from 'react';
const index = () => {
    return <div>
        <h1>This is a Nested Hero page</h1>
        <Link href="Heros/Hero">Open Hero</Link>
    </div>;
};

export default index;
