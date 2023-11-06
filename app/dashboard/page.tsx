import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dashboard'
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Dashboard() {

    const data = await getData()

    console.log(data)

    return (
        <h1>{data[0].name}</h1>
    )
}