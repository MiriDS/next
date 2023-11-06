"use client"

import localFont from 'next/font/local';
import { useState, useEffect } from 'react'


// Font files can be colocated inside of `app`s
const myFont = localFont({
	src: '../public/fonts/UthmanRegular.ttf',
	weight: '400',
	display: 'swap',
})

type SurahType = {
	id: number,
	surah_number: number,
	name: string,
	description: string,
}

export default function Home() {

	const [surahs, setSurahs] = useState<SurahType[] | []>([])
	const [q, setQ] = useState("")
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		fetch('/api?q=' + q)
			.then((res) => res.json())
			.then((data) => {
				setSurahs(data.result)
				setLoading(false)
			})
	}, [q])


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQ(e.target.value)
	}

	if (isLoading) return <p>Loading...</p>
	if (!surahs) return <p>No data</p>

	return (

		<>
			<div className="search">
				<input type="text" onChange={handleChange} />
			</div>
			{
				surahs.map((surahName) => (
					<div className="card" key={surahName.id}>
						<div className="card-col">
							<div className="card-number">
								{surahName.id}
							</div>
						</div>
						<div className="card-col flex-pull">
							<h2 className="card-title">{surahName.name}</h2>
							<div className="card-description">
								{surahName.description}
							</div>
						</div>
						<div className="card-col">
							<h2 style={{ fontSize: "48px", color: '#4a4a4a' }} className={myFont.className}>{surahName.name}</h2>
						</div>
					</div>
				))
			}
		</>

	)
}
