import React from 'react';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(user => ({ params: { id: user.id.toString() } }));
    return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props: { hero: data }
    }
}

export default function Details({ hero }) {
    return (
        <>
            <div className=" bg-[#009B5A] text-white p-5 rounded">
                <h1 className="text-4xl mb-2">{hero.name}</h1>
                <p className="mt-3">E-mail: {hero.email.toLowerCase()}</p>
                <p className="mt-3">Website: www.{hero.website}</p>
                <p className="mt-3">Phone: {hero.phone}</p>
                <p className="mt-3">Company: {hero.company.name}</p>
                <p className="mt-3">Address: Street: {hero.address.street} , City: {hero.address.city} , Z-{hero.address.zipcode}</p>
            </div>
        </>
    );
}
