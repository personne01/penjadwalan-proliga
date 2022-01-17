import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../component/Layout'
import Styles from '../../styles/Users.module.css'

interface UserProps{
    dataUsers : Array<any>;
}

export default function Users(props : UserProps) {
    const {dataUsers} = props;
    const router = useRouter();
    console.log(dataUsers);
    return (
        <Layout pageTitle="User Page">
            {dataUsers.map((user) =>(
                <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={Styles.cardstyle}>
                <h1> {user.id} Nama :  
                {user.name}
                </h1>
                <p> Email : 
                {user.email}
                </p>
                </div>
            )   
            )}
        </Layout>
    )
}

export async function getStaticProps() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const result = await fetch(url);
    const dataUsers = await result.json();
    return {
        props:{
            dataUsers
        }
    }
}