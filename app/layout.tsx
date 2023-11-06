import { Metadata } from "next"
import Image from 'next/image'

import './globals.css'

export const metadata: Metadata = {
	title: {
		template: '%s - Learning NextJS',
		default: 'Learning NextJS'
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<header>
					<div className="container">
						<h1 className="title">Quran App</h1>
						<h2 style={{color: '#939393', fontWeight: 400, marginBottom: 0}}>Reading Surahs</h2>

						{/* <div className="progress-card">
							<div className="progress-card-left">
								<h2 className="progress-card-title">Quran Completion</h2>
								<div className="progress-card-description">
									<p>Məkkədə nazil olmuşdur, 7 ayədir</p>
								</div>
							</div>

							<div className="progress-card-right">
								<Image
									src="/images/quran-white.png"
									width={70}
									height={70}
									alt="Picture of the author"
								/>
							</div>
						</div> */}

					</div>
				</header>
				<main>
					<div className="container">
						{children}
					</div>
				</main>
			</body>
		</html>
	)
}