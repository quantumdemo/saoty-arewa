export interface Album {
  id: string;
  title: string;
  year?: number;
  iframes: string[];
  isDuet?: boolean;
  artists?: string;
  notAvailable?: boolean;
}

export const singleAlbums: Album[] = [
  { id: "1", title: "Ọrọmi Dayọ", year: 2007, iframes: [], notAvailable: true },
  { id: "2", title: "Ọla Ọlọhun", year: 2008, iframes: [], notAvailable: true },
  { id: "3", title: "Ojulowo Ọmọ", year: 2009, iframes: ['<iframe src="https://audiomack.com//embed/freemedigital/album/ojulowo-omo" scrolling="no" width="100%" height="400" frameborder="0" title="Ojulowo Omo"></iframe>'] },
  { id: "4", title: "Baba Iwa", year: 2010, iframes: ['<iframe src="https://audiomack.com//embed/desimusic/album/baba-iwa" scrolling="no" width="100%" height="400" frameborder="0" title="Baba Iwa"></iframe>'] },
  { id: "5", title: "Aridunnu", year: 2011, iframes: ['<iframe src="https://audiomack.com//embed/desimusic/album/aridunnu" scrolling="no" width="100%" height="400" frameborder="0" title="Aridunnu"></iframe>'] },
  { id: "6", title: "Iṣẹ Ọlọhun", year: 2012, iframes: ['<iframe src="https://audiomack.com//embed/saoti-arewa/album/ise-olorun-1" scrolling="no" width="100%" height="400" frameborder="0" title="Ise Olorun"></iframe>'] },
  { id: "7", title: "Eniyan", year: 2013, iframes: ['<iframe src="https://audiomack.com//embed/saoti-arewa/album/eniyan" scrolling="no" width="100%" height="400" frameborder="0" title="Eniyan"></iframe>'] },
  { id: "8", title: "Atunbọtan", year: 2014, iframes: ['<iframe src="https://audiomack.com//embed/saoti-arewa/album/atunbotan-1" scrolling="no" width="100%" height="400" frameborder="0" title="Atunbotan"></iframe>'] },
  { id: "9", title: "Emi ni", year: 2015, iframes: ['<iframe src="https://audiomack.com//embed/saoti-arewa/album/emi-ni-1" scrolling="no" width="100%" height="400" frameborder="0" title="Emi Ni"></iframe>'] },
  { id: "10", title: "Ami (series 1)", year: 2016, iframes: ['<iframe src="https://audiomack.com//embed/desimusic/album/amin" scrolling="no" width="100%" height="400" frameborder="0" title="Amin"></iframe>'] },
  { id: "11", title: "Islam", year: 2017, iframes: ['<iframe src="https://audiomack.com//embed/desimusic/album/islam" scrolling="no" width="100%" height="400" frameborder="0" title="Islam"></iframe>'] },
  { id: "12", title: "Appreciation", year: 2017, iframes: ['<iframe src="https://audiomack.com//embed/alh-saoty-arewa-690b899c7e128/song/appreciation" scrolling="no" width="100%" height="252" frameborder="0" title="Appreciation"></iframe>'] },
  { id: "13", title: "Ẹni're", year: 2017, iframes: ['<iframe src="https://audiomack.com//embed/saoti-arewa/album/eni-re" scrolling="no" width="100%" height="400" frameborder="0" title="Eni Re"></iframe>'] },
  { id: "14", title: "Lagos@50", year: 2017, iframes: [
      '<iframe src="https://audiomack.com//embed/BoyAlone30bg/song/lagos-50-1-saoty-arewa" scrolling="no" width="100%" height="252" frameborder="0" title="Lagos_50_1-Saoty_Arewa"></iframe>',
      '<iframe src="https://audiomack.com//embed/BoyAlone30bg/song/lagos-50-2-saoty-arewa" scrolling="no" width="100%" height="252" frameborder="0" title="Lagos_50_2-Saoty_Arewa"></iframe>',
      '<iframe src="https://audiomack.com//embed/icruise/song/lagos-50-3" scrolling="no" width="100%" height="252" frameborder="0" title="LAGOS @50 3"></iframe>'
    ] },
  { id: "15", title: "Igbeyawo", year: 2018, iframes: ['<iframe src="https://audiomack.com//embed/desimusic/album/igbeyawo-1" scrolling="no" width="100%" height="400" frameborder="0" title="Igbeyawo"></iframe>'] },
  { id: "16", title: "Rumour", year: 2018, iframes: ['<iframe src="https://www.boomplay.com/embed/41141897/MUSIC?colType=5&colID=14256101" width="100%" height="420" frameborder="0"></iframe>'] },
  { id: "17", title: "American Experience", year: 2019, iframes: [
      '<iframe src="https://audiomack.com//embed/naheemak/song/american-experience-track-1" scrolling="no" width="100%" height="252" frameborder="0" title="American Experience track 1"></iframe>',
      '<iframe src="https://audiomack.com//embed/naheemak/song/american-experience-track-2" scrolling="no" width="100%" height="252" frameborder="0" title="American Experience track 2"></iframe>'
    ] },
  { id: "18", title: "Ami (series 2)", year: 2019, iframes: [
      '<iframe src="https://audiomack.com//embed/desimusic/song/saoty-arewa-amin-srs-2-1" scrolling="no" width="100%" height="252" frameborder="0" title="SAOTY AREWA Amin Srs 2 (1)"></iframe>',
      '<iframe src="https://audiomack.com//embed/desimusic/song/saoty-arewa-amin-srs-2-2" scrolling="no" width="100%" height="252" frameborder="0" title="SAOTY AREWA Amin Srs 2 (2)"></iframe>',
      '<iframe src="https://audiomack.com//embed/desimusic/song/saoty-arewa-amin-srs-2-3" scrolling="no" width="100%" height="252" frameborder="0" title="SAOTY AREWA Amin Srs 2 (3)"></iframe>',
      '<iframe src="https://audiomack.com//embed/desimusic/song/saoty-arewa-amin-srs-2-4" scrolling="no" width="100%" height="252" frameborder="0" title="SAOTY AREWA Amin Srs 2 (4)"></iframe>',
      '<iframe src="https://audiomack.com//embed/desimusic/song/saoty-arewa-amin-srs-2-5" scrolling="no" width="100%" height="252" frameborder="0" title="SAOTY AREWA Amin Srs 2 (5)"></iframe>',
      '<iframe src="https://audiomack.com//embed/desimusic/song/saoty-arewa-amin-srs-2-6" scrolling="no" width="100%" height="252" frameborder="0" title="SAOTY AREWA Amin Srs 2 (6)"></iframe>'
    ] },
  { id: "19", title: "Human Right", year: 2019, iframes: ['<iframe src="https://audiomack.com//embed/greattcomm/album/human-right-2" scrolling="no" width="100%" height="400" frameborder="0" title="Human Right"></iframe>'] },
  { id: "20", title: "Advice", year: 2020, iframes: ['<iframe src="https://audiomack.com//embed/freemedigital/album/saoty-arewa-advice" scrolling="no" width="100%" height="400" frameborder="0" title="ADVICE"></iframe>'] },
  { id: "21", title: "Iyale-Aljanat", year: 2020, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/iyale-aljannat" scrolling="no" width="100%" height="400" frameborder="0" title="Iyale Aljannat"></iframe>'] },
  { id: "22", title: "Discovery", year: 2020, iframes: [
      '<iframe src="https://audiomack.com//embed/desimusic/song/saoty-arewa-discovery-a" scrolling="no" width="100%" height="252" frameborder="0" title="Saoty Arewa - Discovery A"></iframe>',
      '<iframe src="https://audiomack.com//embed/HorPEyeMIH/song/saoty-arewa-discovery-b" scrolling="no" width="100%" height="252" frameborder="0" title="Saoty Arewa - Discovery B"></iframe>',
      '<iframe src="https://audiomack.com//embed/desimusic/song/saoty-arewa-discovery-c" scrolling="no" width="100%" height="252" frameborder="0" title="Saoty Arewa - Discovery C"></iframe>'
    ] },
  { id: "23", title: "Prophet", year: 2020, iframes: ['<iframe src="https://audiomack.com//embed/naheemak/album/prophet" scrolling="no" width="100%" height="400" frameborder="0" title="Prophet"></iframe>'] },
  { id: "24", title: "Forgiveness", year: 2021, iframes: ['<iframe src="https://audiomack.com//embed/naijatram/album/saoty-arewa-forgiveness" scrolling="no" width="100%" height="400" frameborder="0" title="Forgiveness (AFORIJI)"></iframe>'] },
  { id: "25", title: "Ọpẹ", year: 2021, iframes: ['<iframe src="https://audiomack.com//embed/saoty-arewa-1/album/ope" scrolling="no" width="100%" height="400" frameborder="0" title="Ope"></iframe>'] },
  { id: "26", title: "Ọrọ", year: 2022, iframes: ['<iframe src="https://audiomack.com//embed/greattcomm/album/oro" scrolling="no" width="100%" height="400" frameborder="0" title="ORO"></iframe>'] },
  { id: "27", title: "The Truth", year: 2022, iframes: ['<iframe src="https://audiomack.com//embed/naijatram/album/the-truth-full-album" scrolling="no" width="100%" height="400" frameborder="0" title="The Truth Full Album"></iframe>'] },
  { id: "28", title: "Ireti mi", year: 2022, iframes: ['<iframe src="https://audiomack.com//embed/mopadola/album/ireti-mi-my-expectations-1" scrolling="no" width="100%" height="400" frameborder="0" title="Ireti mi (My Expectations )"></iframe>'] },
  { id: "29", title: "Ẹmi (soul)", year: 2023, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/emi-rwh" scrolling="no" width="100%" height="400" frameborder="0" title="EMI روح"></iframe>'] },
  { id: "30", title: "Ifẹ Ododo", year: 2023, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/ife-ododo" scrolling="no" width="100%" height="400" frameborder="0" title="Ife ododo"></iframe>'] },
  { id: "31", title: "Ọmọ mi", year: 2023, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/omo-mi-my-child" scrolling="no" width="100%" height="400" frameborder="0" title="Omo mi (my child)"></iframe>'] },
  { id: "32", title: "Orin", year: 2024, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/orin-3" scrolling="no" width="100%" height="400" frameborder="0" title="Orin"></iframe>'] },
  { id: "33", title: "Loyalty", year: 2024, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/loyalty-2" scrolling="no" width="100%" height="400" frameborder="0" title="Loyalty"></iframe>'] },
  { id: "34", title: "Ọpẹ Mi Pọ", year: 2024, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/ope-mi-po" scrolling="no" width="100%" height="400" frameborder="0" title="Ope mi po"></iframe>'] },
  { id: "35", title: "Nkan Mẹfa", year: 2025, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/nkan-mefa" scrolling="no" width="100%" height="400" frameborder="0" title="Nkan Mefa"></iframe>'] },
  { id: "36", title: "Secret", year: 2026, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/secret-asiri" scrolling="no" width="100%" height="400" frameborder="0" title="Secret (Asiri)"></iframe>'] },
  { id: "37", title: "Family", year: 2026, iframes: ['<iframe src="https://audiomack.com//embed/saotyarewa/album/family-ebi" scrolling="no" width="100%" height="400" frameborder="0" title="Family (Ebi)"></iframe>'] },
];

export const duetAlbums: Album[] = [
  { id: "d1", title: "My Parent", isDuet: true, artists: "Alh. Saoty Arewa ft. Alh. Alabi Pasuma", iframes: [
    '<iframe src="https://audiomack.com//embed/naheemak/song/my-parent" scrolling="no" width="100%" height="252" frameborder="0" title="My Parent"></iframe>',
    '<iframe src="https://audiomack.com//embed/naheemak/song/my-parent-1" scrolling="no" width="100%" height="252" frameborder="0" title="MY PARENT 1"></iframe>'
  ] },
  { id: "d2", title: "Iwa Ẹda", isDuet: true, artists: "Alh. Saoty Arewa ft. Alh. Alao Malaika", iframes: ['<iframe src="https://audiomack.com//embed/desimusic/album/iwa-eda-2" scrolling="no" width="100%" height="400" frameborder="0" title="Iwa Eda"></iframe>'] },
  { id: "d3", title: "Divorce", isDuet: true, artists: "Alh. Saoty Arewa ft. Alh. Shefiu Alao", iframes: ['<iframe src="https://audiomack.com//embed/desimusic/album/divorce" scrolling="no" width="100%" height="400" frameborder="0" title="Divorce"></iframe>'] },
  { id: "d4", title: "Jẹnrayewa", isDuet: true, artists: "Alh. Saoty Arẹwa ft. Alh. Saheed Osupa", iframes: [] },
  { id: "d5", title: "Ọba mẹwa", isDuet: true, artists: "Alh. Saoty Arewa ft. Alh. T'aiye Currency", iframes: [] },
  { id: "d6", title: "Ibawi Ọjọkan", isDuet: true, artists: "Alh. Ameerat Ajao ft. Alh. Saoty Arewa", iframes: [] },
  { id: "d7", title: "Towo Tọmọ", isDuet: true, artists: "Alh. Kafayat Ẹni’ayenfẹ ft. Alh. Saoty Arewa", iframes: [] },
  { id: "d8", title: "Alaya Meji", isDuet: true, artists: "Alh. Ameerat Ajao ft. Alh. Aminat Babalola Ọmọtayebi ft. Alh. Saoty Arewa", iframes: [] },
  { id: "d9", title: "Ọkọ nimofẹ", isDuet: true, artists: "Alh. Sofiat Iyankaola ft. Alh. Kabir Alayande Ere Asalatu ft. Alh. Saoty Arewa", iframes: [] },
  { id: "d10", title: "Iyawo Ọbun", isDuet: true, artists: "Alh. Rukayat Gawat ft. Alh. Saoty Arewa", iframes: [] },
  { id: "d11", title: "Ọlọbẹ Lolọkọ", isDuet: true, artists: "Alh. Aminat Babalola Ọmọtayebi ft. Alh. Saoty Arewa", iframes: [] },
];

export const collaborators = [
  { name: "Pasuma", image: "/collabs/pasuma.jpg" },
  { name: "Saheed Osupa", image: "/collabs/osupa.jpg" },
  { name: "Alao Malaika", image: "/collabs/malaika.jpg" },
  { name: "Shefiu Alao", image: "/collabs/shefiu.jpg" },
  { name: "Taiye Currency", image: "/collabs/currency.jpg" },
  { name: "Rukayat Gawat", image: "/collabs/gawat.jpg" },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/saotyarewa?igsh=amlvMG8wdTR4ZjNk",
  facebook: "https://www.facebook.com/share/18jXHBPxhi/",
  youtube: "https://youtube.com/@saotyarewatv?si=-eIn2ZQPZ1XRCcDw",
  tiktok: "https://vm.tiktok.com/ZS9Yh18yBGkpL-RRYdl/",
  audiomack: "https://audiomack.com/saotyarewa",
};
