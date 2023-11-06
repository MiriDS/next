import localFont from 'next/font/local';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// Font files can be colocated inside of `app`s
const myFont = localFont({
	src: '../public/fonts/UthmanRegular.ttf',
	weight: '400',
	display: 'swap',
})




export default async function Home() {

	const surahs = await prisma.surah.findMany()


	return (
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
	)
}
