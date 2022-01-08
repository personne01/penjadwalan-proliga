import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../component/Layout'

export default function userDetail() {
    const router = useRouter()
    const { id } = router.query
    return (
        <Layout pageTitle='User Detail'>
            <h1>Selamat datang di halaman user detail</h1>
            <p>
                haii...{id}
            </p>
        </Layout>
    )
}
