import localFont from 'next/font/local'


const surahNames = [
	{
		id: 1,
		name: "Fatihə surəsi",
		arab: "الفاتحة",
		info: "Məkkədə nazil olmuşdur, 7 ayədir"
	},
	{
		id: 2,
		name: "Bəqərə surəsi",
		arab: "البقرة",
		info: "Mədinədə nazil olmuşdur, 286 ayədir"
	},
	{
		id: 3,
		name: "Ali-İmran surəsi",
		arab: "آل عمران",
		info: "Mədinədə nazil olmuşdur, 200 ayədir"
	},
	{
		id: 4,
		name: "Nisa surəsi",
		arab: "النساء",
		info: "Mədinədə nazil olmuşdur, 176 ayədir"
	},
	{
		id: 5,
		name: "Maidə surəsi",
		arab: "المائدة",
		info: "Mədinədə nazil olmuşdur, 120 ayədir"
	},
	{
		id: 6,
		name: "Ənam surəsi",
		arab: "الأنعام",
		info: "Məkkədə nazil olmuşdur, 165 ayədir"
	},
	{
		id: 7,
		name: "Əraf surəsi",
		arab: "الأعراف",
		info: "Məkkədə nazil olmuşdur, 206 ayədir"
	},
	{
		id: 8,
		name: "Ənfal surəsi",
		arab: "الأنفال",
		info: "Mədinədə nazil olmuşdur, 75 ayədir"
	},
	{
		id: 9,
		name: "Tövbə surəsi",
		arab: "التوبة",
		info: "Mədinədə nazil olmuşdur, 129 ayədir"
	},
	{
		id: 10,
		name: "Yunus surəsi",
		arab: "يونس",
		info: "Məkkədə nazil olmuşdur, 109 ayədir"
	},
	{
		id: 11,
		name: "Hud surəsi",
		arab: "هود",
		info: "Məkkədə nazil olmuşdur, 123 ayədir"
	},
	{
		id: 12,
		name: "Yusuf surəsi",
		arab: "يوسف",
		info: "Məkkədə nazil olmuşdur, 111 ayədir"
	},
	{
		id: 13,
		name: "Rəd surəsi",
		arab: "الرعد",
		info: "Mədinədə nazil olmuşdur, 43 ayədir"
	},
	{
		id: 14,
		name: "İbrahim surəsi",
		arab: "إبراهيم",
		info: "Məkkədə nazil olmuşdur, 52 ayədir"
	},
	{
		id: 15,
		name: "Hicr surəsi",
		arab: "الحجر",
		info: "Məkkədə nazil olmuşdur, 99 ayədir"
	},
	{
		id: 16,
		name: "Nəhl surəsi",
		arab: "النحل",
		info: "Məkkədə nazil olmuşdur, 128 ayədir"
	},
	{
		id: 17,
		name: "İsra surəsi",
		arab: "الإسراء",
		info: "Məkkədə nazil olmuşdur və 111 ayədir"
	},
	{
		id: 18,
		name: "Kəhf surəsi",
		arab: "الكهف",
		info: "Məkkədə nazil olmuşdur və 110 ayədir"
	},
	{
		id: 19,
		name: "Məryəm surəsi",
		arab: "مريم",
		info: "Məkkədə nazil olmuşdur, 98 ayədir"
	},
	{
		id: 20,
		name: "Ta-Ha surəsi",
		arab: "طه",
		info: "Məkkədə nazil olmuşdur, 135 ayədir"
	},
	{
		id: 21,
		name: "Ənbiya surəsi",
		arab: "الأنبياء",
		info: "Məkkədə nazil olmuşdur, 112 ayədir"
	},
	{
		id: 22,
		name: "Həcc surəsi",
		arab: "الحج",
		info: "Mədinədə nazil olmuşdur, 78 ayədir"
	},
	{
		id: 23,
		name: "Muminun surəsi",
		arab: "المؤمنون",
		info: "Məkkədə nazil olmuşdur, 118 ayədir"
	},
	{
		id: 24,
		name: "Nur surəsi",
		arab: "النّور",
		info: "Mədinədə nazil olmuşdur, 64 ayədir"
	},
	{
		id: 25,
		name: "Furqan surəsi",
		arab: "الفرقان",
		info: "Məkkədə nazil olmuşdur, 77 ayədir"
	},
	{
		id: 26,
		name: "Şuəra surəsi",
		arab: "الشعراء",
		info: "Məkkədə nazil olmuşdur, 227 ayədir"
	},
	{
		id: 27,
		name: "Nəml surəsi",
		arab: "النّمل",
		info: "Məkkədə nazil olmuşdur, 93 ayədir"
	},
	{
		id: 28,
		name: "Qəsəs surəsi",
		arab: "القصص",
		info: "Məkkədə nazil olmuşdur, 88 ayədir"
	},
	{
		id: 29,
		name: "Ənkəbut surəsi",
		arab: "العنكبوت",
		info: "Məkkədə nazil olmuşdur, 69 ayədir"
	},
	{
		id: 30,
		name: "Rum surəsi",
		arab: "الرّوم",
		info: "Məkkədə nazil olmuşdur, 60 ayədir"
	},
	{
		id: 31,
		name: "Loğman surəsi",
		arab: "لقمان",
		info: "Məkkədə nazil olmuşdur, 34 ayədir"
	},
	{
		id: 32,
		name: "Səcdə surəsi",
		arab: "السجدة",
		info: "Məkkədə nazil olmuşdur, 30 ayədir"
	},
	{
		id: 33,
		name: "Əhzab surəsi",
		arab: "الأحزاب",
		info: "Mədinədə nazil olmuşdur, 73 ayədir"
	},
	{
		id: 34,
		name: "Səbə surəsi",
		arab: "سبأ",
		info: "Məkkədə nazil olmuşdur, 54 ayədir"
	},
	{
		id: 35,
		name: "Fatir surəsi",
		arab: "فاطر",
		info: "Məkkədə nazil olmuşdur, 45 ayədir"
	},
	{
		id: 36,
		name: "Yasin surəsi",
		arab: "يس",
		info: "Məkkədə nazil olmuşdur, 83 ayədir"
	},
	{
		id: 37,
		name: "Saffat surəsi",
		arab: "الصافات",
		info: "Məkkədə nazil olmuşdur, 182 ayədir"
	},
	{
		id: 38,
		name: "Sad surəsi",
		arab: "ص",
		info: "Məkkədə nazil olmuşdur, 88 ayədir"
	},
	{
		id: 39,
		name: "Zumər surəsi",
		arab: "الزمر",
		info: "Məkkədə nazil olmuşdur, 75 ayədir"
	},
	{
		id: 40,
		name: "Ğafir surəsi",
		arab: "غافر",
		info: "Məkkədə nazil olmuşdur, 85 ayədir"
	},
	{
		id: 41,
		name: "Fussilət surəsi",
		arab: "فصّلت",
		info: "Məkkədə nazil olmuşdur, 54 ayədir"
	},
	{
		id: 42,
		name: "Şura surəsi",
		arab: "الشورى",
		info: "Məkkədə nazil olmuşdur, 53 ayədir"
	},
	{
		id: 43,
		name: "Zuxruf surəsi",
		arab: "الزخرف",
		info: "Məkkədə nazil olmuşdur, 89 ayədir"
	},
	{
		id: 44,
		name: "Duxan surəsi",
		arab: "الدّخان",
		info: "Məkkədə nazil olmuşdur, 59 ayədir"
	},
	{
		id: 45,
		name: "Casiyə surəsi",
		arab: "الجاثية",
		info: "Məkkədə nazil olmuşdur, 37 ayədir"
	},
	{
		id: 46,
		name: "Əhqaf surəsi",
		arab: "الأحقاف",
		info: "Məkkədə nazil olmuşdur, 35 ayədir"
	},
	{
		id: 47,
		name: "Muhəmməd surəsi",
		arab: "محمد",
		info: "Mədinədə nazil olmuşdur, 38 ayədir"
	},
	{
		id: 48,
		name: "Fəth surəsi",
		arab: "الفتح",
		info: "Mədinədə  nazil olmuşdur, 29 ayədir"
	},
	{
		id: 49,
		name: "Hucurat surəsi",
		arab: "الحجرات",
		info: "Mədinədə  nazil olmuşdur, 18 ayədir"
	},
	{
		id: 50,
		name: "Qaf surəsi",
		arab: "ق",
		info: "Məkkədə nazil olmuşdur, 45 ayədir"
	},
	{
		id: 51,
		name: "Zariyat surəsi",
		arab: "الذاريات",
		info: "Məkkədə nazil olmuşdur, 60 ayədir"
	},
	{
		id: 52,
		name: "Tur surəsi",
		arab: "الطور",
		info: "Məkkədə nazil olmuşdur, 49 ayədir"
	},
	{
		id: 53,
		name: "Nəcm surəsi",
		arab: "النجم",
		info: "Məkkədə nazil olmuşdur, 62 ayədir"
	},
	{
		id: 54,
		name: "Qəmər surəsi",
		arab: "القمر",
		info: "Məkkədə nazil olmuşdur, 55 ayədir"
	},
	{
		id: 55,
		name: "Rəhman surəsi",
		arab: "الرحمن",
		info: "Mədinədə nazil olmuşdur, 78 ayədir"
	},
	{
		id: 56,
		name: "Vaqiə surəsi",
		arab: "الواقعة",
		info: "Məkkədə nazil olmuşdur, 96 ayədir"
	},
	{
		id: 57,
		name: "Hədid surəsi",
		arab: "الحديد",
		info: "Mədinədə nazil olmuşdur, 29 ayədir"
	},
	{
		id: 58,
		name: "Mücadilə surəsi",
		arab: "المجادلة",
		info: "Mədinədə nazil olmuşdur, 22 ayədir"
	},
	{
		id: 59,
		name: "Həşr surəsi",
		arab: "الحشر",
		info: "Mədinədə nazil olmuşdur, 24 ayədir"
	},
	{
		id: 60,
		name: "Mumtəhənə surəsi",
		arab: "الممتحنة",
		info: "Mədinədə nazil olmuşdur, 13 ayədir"
	},
	{
		id: 61,
		name: "Səff surəsi",
		arab: "الصف",
		info: "Mədinədə nazil olmuşdur, 14 ayədir"
	},
	{
		id: 62,
		name: "Cümə surəsi",
		arab: "الجمعة",
		info: "Mədinədə nazil olmuşdur, 11 ayədir"
	},
	{
		id: 63,
		name: "Munafiqun surəsi",
		arab: "المنافقون",
		info: "Mədinədə nazil olmuşdur, 11 ayədir"
	},
	{
		id: 64,
		name: "Təğabun surəsi",
		arab: "التغابن",
		info: "Mədinədə nazil olmuşdur, 18 ayədir"
	},
	{
		id: 65,
		name: "Təlaq surəsi",
		arab: "الطلاق",
		info: "Mədinədə nazil olmuşdur, 12 ayədir"
	},
	{
		id: 66,
		name: "Təhrim surəsi",
		arab: "التحريم",
		info: "Mədinədə nazil olmuşdur, 12 ayədir"
	},
	{
		id: 67,
		name: "Mülk surəsi",
		arab: "الملك",
		info: "Məkkədə nazil olmuşdur, 30 ayədir"
	},
	{
		id: 68,
		name: "Qələm surəsi",
		arab: "القلم",
		info: "Məkkədə nazil olmuşdur, 52 ayədir"
	},
	{
		id: 69,
		name: "Haqqə surəsi",
		arab: "الحاقة",
		info: "Məkkədə nazil olmuşdur, 52 ayədir"
	},
	{
		id: 70,
		name: "Məaric surəsi",
		arab: "المعارج",
		info: "Məkkədə nazil olmuşdur, 44 ayədir"
	},
	{
		id: 71,
		name: "Nuh surəsi",
		arab: "نوح",
		info: "Məkkədə nazil olmuşdur, 28 ayədir"
	},
	{
		id: 72,
		name: "Cinn surəsi",
		arab: "الجن",
		info: "Məkkədə nazil olmuşdur, 28 ayədir"
	},
	{
		id: 73,
		name: "Muzzəmmil surəsi",
		arab: "المزّمّل",
		info: "Məkkədə nazil olmuşdur, 20 ayədir"
	},
	{
		id: 74,
		name: "Muddəssir surəsi",
		arab: "المدّثر",
		info: "Məkkədə nazil olmuşdur, 56 ayədir"
	},
	{
		id: 75,
		name: "Qiyamət surəsi",
		arab: "القيامة",
		info: "Məkkədə nazil olmuşdur, 40 ayədir"
	},
	{
		id: 76,
		name: "İnsan surəsi",
		arab: "الإنسان",
		info: "Mədinədə nazil olmuşdur, 31 ayədir"
	},
	{
		id: 77,
		name: "Mursəlat surəsi",
		arab: "المرسلات",
		info: "Məkkədə nazil olmuşdur, 50 ayədir"
	},
	{
		id: 78,
		name: "Nəbə surəsi",
		arab: "النبأ",
		info: "Məkkədə nazil olmuşdur, 40 ayədir"
	},
	{
		id: 79,
		name: "Naziat surəsi",
		arab: "النازعات",
		info: "Məkkədə nazil olmuşdur, 46 ayədir"
	},
	{
		id: 80,
		name: "Əbəsə surəsi",
		arab: "عبس",
		info: "Məkkədə nazil olmuşdur, 42 ayədir"
	},
	{
		id: 81,
		name: "Təkvir surəsi",
		arab: "التكوير",
		info: "Məkkədə nazil olmuşdur, 29 ayədir"
	},
	{
		id: 82,
		name: "İnfitar surəsi",
		arab: "الإنفطار",
		info: "Məkkədə nazil olmuşdur, 19 ayədir"
	},
	{
		id: 83,
		name: "Mutəffifin surəsi",
		arab: "المطفّفين",
		info: "Məkkədə nazil olmuşdur, 36 ayədir"
	},
	{
		id: 84,
		name: "İnşiqaq surəsi",
		arab: "الإنشقاق",
		info: "Məkkədə nazil olmuşdur, 25 ayədir"
	},
	{
		id: 85,
		name: "Buruc surəsi",
		arab: "البروج",
		info: "Məkkədə nazil olmuşdur, 22 ayədir"
	},
	{
		id: 86,
		name: "Tariq surəsi",
		arab: "الطارق",
		info: "Məkkədə nazil olmuşdur, 17 ayədir"
	},
	{
		id: 87,
		name: "Əla surəsi",
		arab: "الأعلى",
		info: "Məkkədə nazil olmuşdur, 19 ayədir"
	},
	{
		id: 88,
		name: "Ğaşiyə surəsi",
		arab: "الغاشية",
		info: "Məkkədə nazil olmuşdur, 26 ayədir"
	},
	{
		id: 89,
		name: "Fəcr surəsi",
		arab: "الفجر",
		info: "Məkkədə nazil olmuşdur, 30 ayədir"
	},
	{
		id: 90,
		name: "Bələd surəsi",
		arab: "البلد",
		info: "Məkkədə nazil olmuşdur, 20 ayədir"
	},
	{
		id: 91,
		name: "Şəms surəsi",
		arab: "الشمس",
		info: "Məkkədə nazil olmuşdur, 15 ayədir"
	},
	{
		id: 92,
		name: "Ləyl surəsi",
		arab: "الليل",
		info: "Məkkədə nazil olmuşdur, 21 ayədir"
	},
	{
		id: 93,
		name: "Zuha surəsi",
		arab: "الضحى",
		info: "Məkkədə nazil olmuşdur, 11 ayədir"
	},
	{
		id: 94,
		name: "Şərh surəsi",
		arab: "الشرح",
		info: "Məkkədə nazil olmuşdur, 8 ayədir"
	},
	{
		id: 95,
		name: "Tin surəsi",
		arab: "التين",
		info: "Məkkədə nazil olmuşdur, 8 ayədir"
	},
	{
		id: 96,
		name: "Ələq surəsi",
		arab: "العلق",
		info: "Məkkədə nazil olmuşdur, 19 ayədir"
	},
	{
		id: 97,
		name: "Qədr surəsi",
		arab: "القدر",
		info: "Məkkədə nazil olmuşdur, 5 ayədir"
	},
	{
		id: 98,
		name: "Bəyyinə surəsi",
		arab: "البينة",
		info: "Mədinədə nazil olmuşdur, 8 ayədir"
	},
	{
		id: 99,
		name: "Zəlzələ surəsi",
		arab: "الزلزلة",
		info: "Mədinədə nazil olmuşdur, 8 ayədir"
	},
	{
		id: 100,
		name: "Adiyat surəsi",
		arab: "العاديات",
		info: "Məkkədə nazil olmuşdur, 11 ayədir"
	},
	{
		id: 101,
		name: "Qariə surəsi",
		arab: "القارعة",
		info: "Məkkədə nazil olmuşdur, 11 ayədir"
	},
	{
		id: 102,
		name: "Təkasur surəsi",
		arab: "التكاثر",
		info: "Məkkədə nazil olmuşdur, 8 ayədir"
	},
	{
		id: 103,
		name: "Əsr surəsi",
		arab: "العصر",
		info: "Məkkədə nazil olmuşdur, 3 ayədir"
	},
	{
		id: 104,
		name: "Huməzə surəsi",
		arab: "الهمزة",
		info: "Məkkədə nazil olmuşdur, 9 ayədir"
	},
	{
		id: 105,
		name: "Fil surəsi",
		arab: "الفيل",
		info: "Məkkədə nazil olmuşdur, 5 ayədir"
	},
	{
		id: 106,
		name: "Qureyş surəsi",
		arab: "قريش",
		info: "Məkkədə nazil olmuşdur, 4 ayədir"
	},
	{
		id: 107,
		name: "Maun surəsi",
		arab: "الماعون",
		info: "Məkkədə nazil olmuşdur, 7 ayədir"
	},
	{
		id: 108,
		name: "Kövsər surəsi",
		arab: "الكوثر",
		info: "Məkkədə nazil olmuşdur, 3 ayədir"
	},
	{
		id: 109,
		name: "Kafirun surəsi",
		arab: "الكافرون",
		info: "Məkkədə nazil olmuşdur, 6 ayədir"
	},
	{
		id: 110,
		name: "Nəsr surəsi",
		arab: "النصر",
		info: "Mədinədə nazil olmuşdur, 3 ayədir"
	},
	{
		id: 111,
		name: "Məsəd surəsi",
		arab: "المسد",
		info: "Məkkədə nazil olmuşdur, 5 ayədir"
	},
	{
		id: 112,
		name: "İxlas surəsi",
		arab: "الإخلاص",
		info: "Məkkədə nazil olmuşdur, 4 ayədir"
	},
	{
		id: 113,
		name: "Fələq surəsi",
		arab: "الفلق",
		info: "Məkkədə nazil olmuşdur, 5 ayədir"
	},
	{
		id: 114,
		name: "Nas surəsi",
		arab: "النّاس",
		info: "Məkkədə nazil olmuşdur, 6 ayədir"
	}
];

// Font files can be colocated inside of `app`
const myFont = localFont({
	src: '../public/fonts/UthmanRegular.ttf',
	weight: '400',
	display: 'swap',
  })


export default function Home() {
	return (
		surahNames.map((surahName: { id: number, name: string, arab: string, info: string }) => (
			<div className="card" key={surahName.id}>
				<div className="card-col">
					<div className="card-number">
						{surahName.id}
					</div>
				</div>
				<div className="card-col flex-pull">
					<h2 className="card-title">{surahName.name}</h2>
					<div className="card-description">
						{surahName.info}
					</div>
				</div>
				<div className="card-col">
					<h2 style={{fontSize: "48px", color: '#4a4a4a'}} className={myFont.className}>{surahName.arab}</h2>
				</div>
			</div>
		))
	)
}
