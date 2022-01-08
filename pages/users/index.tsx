import React from 'react'
import Layout from '../../component/Layout'

interface UserProps{
    dataUsers : Array<any>;
}

export default function Users(props : UserProps): JSX.Element {
    const {dataUsers} = props;
    console.log(dataUsers);
    return (
        <Layout pageTitle="User Page">
            {dataUsers.map((user) =>(
                <>
                <p>
                {user.name}
                {user.email}
                </p>
                
                </>
            )   
            )}
        </Layout>
    )
}

export async function getStaticProps() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(url);
    const dataUsers = await res.json();
    return {
        props:{
            dataUsers
        }
    }
}