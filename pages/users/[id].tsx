import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../component/Layout'

interface User{
    id: number;
    name: string;
    email: string;
    phone: string;
}
interface DetailProps{
    user: User;
}

export default function UserDetail(props: DetailProps) {
    const { user } = props;
    return (
        <Layout pageTitle='User Detail'>
            <h1>Selamat datang di halaman user detail</h1>
            <p>
                {user.name}
            </p>
            <p>
                {user.email}
            </p>
            <p>
                {user.phone}
            </p>
        </Layout>
    )
}

export async function getStaticPaths() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const result = await fetch(url);
    const dataUsers = await result.json();

    const paths = dataUsers.map((user : User) => ({
        params: {
            id : `${user.id}`,
        },
    }));

    return{
        paths,
        fallback: false,
    };
}

interface GetStaticProps{
    params:{
        id: string;
    }
}
export async function getStaticProps(context : GetStaticProps) {
    const { id } = context.params;
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await result.json();

    return {
        props: {
            user
        }
    };
}