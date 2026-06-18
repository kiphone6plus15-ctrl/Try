export interface ItineraryItem {
  id: string;
  time: string;
  venue: string;
  tags: string[];
  imageUrl: string;
  description: string;
  navigationQuery: string;
  isEdited?: boolean;
}

export interface DayData {
  dayNumber: number;
  dateString: string;
  weekday: string;
  weatherTemp: string;
  weatherCondition: 'sunny' | 'cloudy' | 'rainy' | 'windy';
  city: string;
  items: ItineraryItem[];
}

export const itineraryData: DayData[] = [
  {
    dayNumber: 1,
    dateString: "7月28日",
    weekday: "週二",
    weatherTemp: "21°C",
    weatherCondition: "cloudy",
    city: "倫敦 London",
    items: [
      {
        id: "d1-1",
        time: "19:25",
        venue: "倫敦希斯洛國際機場 (LHR T2) 抵達",
        tags: ["交通指引", "漫步推薦", "英國大門"],
        imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
        description: "今日搭乘瑞士國際航空，歷經兩段舒適漫長的歐陸飛行（中轉蘇黎世），終於降落在大英帝國門戶——希斯洛國際機場。出關後，呼吸著不列顛略帶涼意、溫潤清爽的夏夜空氣，長途旅行的疲憊煙消雲散。您將搭乘專屬配車前往歷史積澱深厚的古羅馬小鎮科爾切斯特，沿途看見英格蘭平緩寬廣的林地丘陵與夜幕低垂。抵達後可以辦理入住，並品嚐經典的英式午夜餐點，開啟這段神奇的中歐、不列顛與達爾馬提亞的二十五天壯麗長征。",
        navigationQuery: "Heathrow Airport Terminal 2 London"
      }
    ]
  },
  {
    dayNumber: 2,
    dateString: "7月29日",
    weekday: "週三",
    weatherTemp: "22°C",
    weatherCondition: "sunny",
    city: "科爾切斯特 Colchester",
    items: [
      {
        id: "d2-1",
        time: "10:00",
        venue: "科爾切斯特城堡公園 Colchester Castle Park",
        tags: ["歷史文化", "漫步推薦", "免費景點"],
        imageUrl: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&w=800&q=80",
        description: "科爾切斯特是經由羅馬暴君克勞狄烏斯大帝親自授權建立、英國有史記載最古老的城市。城堡公園內矗立著全歐洲規模最大的諾曼式城堡。這座城堡令人稱奇的是，它是直接建造在公元一世紀羅馬克勞狄神殿的巨大地基之上，見證了布狄卡起義時的鮮血、中古時期的女巫審判與英國內戰的慘烈圍城。漫步在花團錦簇、綠草如茵的維多利亞庭園中，看著古老城牆與百年參天橡樹，感受英格蘭鄉村極致平靜和極簡的歷史張力。",
        navigationQuery: "Colchester Castle Park Essex"
      }
    ]
  },
  {
    dayNumber: 3,
    dateString: "7月30日",
    weekday: "週四",
    weatherTemp: "20°C",
    weatherCondition: "cloudy",
    city: "倫敦 London",
    items: [
      {
        id: "d3-1",
        time: "10:30",
        venue: "倫敦大英博物館 British Museum",
        tags: ["必訪地標", "歷史文化", "極致美景"],
        imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
        description: "今日搭乘英格蘭郊區火車前往大英帝國的心臟。大英博物館巨大的白色新古典主義中庭被英倫陽光灑落，呈現神聖空靈感。館內珍藏著全人類文明跨越數千年的精華：古埃及神祕尊貴的「羅塞塔石碑」、大膽雕刻的巴特農神殿大理石壁畫、美索不達米亞平原的楔形文字。行走在宏偉展廳中，彷彿將指尖貼在時光的脈搏之上，聆聽這款人類歷史演變長卷的低吟，是一次無與倫比的心靈洗禮與美學視覺震盪。",
        navigationQuery: "The British Museum London"
      }
    ]
  },
  {
    dayNumber: 4,
    dateString: "7月31日",
    weekday: "週五",
    weatherTemp: "21°C",
    weatherCondition: "windy",
    city: "倫敦 London",
    items: [
      {
        id: "d4-1",
        time: "15:00",
        venue: "倫敦塔橋與泰晤士河畔 Tower Bridge Walk",
        tags: ["攝影熱點", "漫步推薦", "免費景點"],
        imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=800&q=80",
        description: "倫敦塔橋巍然跨越寬廣壯闊的泰晤士河。這座擁有維多利亞哥德式雙高塔的吊橋，是倫敦極具辨識度的城市符號。行走在精心雕鑿的橋面之上，泰晤士河水在腳下翻滾。極目遠眺，一側是歷史滄桑重疊的倫敦塔要塞，另一側則是拔地而起、充滿未來感的前衛碎片大廈。風笛手的悠揚聲音穿透泰晤士河畔的微風灑下，將不列顛的古典底蘊、全球金融中心的喧囂與地平線晚霞完美調和，非常適合拍攝旅行極簡風大片。",
        navigationQuery: "Tower Bridge London"
      }
    ]
  },
  {
    dayNumber: 5,
    dateString: "8月1日",
    weekday: "週六",
    weatherTemp: "23°C",
    weatherCondition: "sunny",
    city: "倫敦 London",
    items: [
      {
        id: "d5-1",
        time: "14:00",
        venue: "考文特花園與市集 Covent Garden Market",
        tags: ["必吃美食", "漫步推薦", "文青推薦"],
        imageUrl: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80",
        description: "考文特花園前身曾是修道院著名的蔬果市集，如今已改建為極具優雅與煙火氣息的開放式文藝廣場。在巨大的維多利亞鑄鐵和玻璃圓形頂蓋下，年輕的古典弦樂四重奏正在即興演奏莫札特名曲，音浪在柱頂迴盪。這裡匯聚了英國知名頂尖手作工藝師、獨立首飾設計品牌與琳瑯滿目的創意咖啡。買一杯經典的伯爵紅茶，搭配一個酥脆的司康，坐在老石階上，與當地的淑女和紳士們一同享受難得的夏日明亮日照，感受純粹英倫街頭的精巧魅力。",
        navigationQuery: "Covent Garden London"
      }
    ]
  },
  {
    dayNumber: 6,
    dateString: "8月2日",
    weekday: "週日",
    weatherTemp: "29°C",
    weatherCondition: "sunny",
    city: "杜布羅夫尼克 Dubrovnik",
    items: [
      {
        id: "d6-1",
        time: "20:05",
        venue: "杜布羅夫尼克古城 check-in 與派勒門 Pile Gate",
        tags: ["交通指引", "地中海風", "網美打卡"],
        imageUrl: "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=800&q=80",
        description: "今日搭乘 Ryanair 航班從倫敦特快直飛克羅埃西亞的璀璨珍珠——「杜布羅夫尼克」（美劇《冰與火之歌》中的君臨城）。飛機降落後跨越海角抵達老城，辦妥入住 Guest House Kono。晚間穿過中世紀厚重石砌的「派勒門」，踩在光滑如銀色鏡面、經過幾百年擦磨的史特拉敦主街上。兩側新哥德式的金色廊柱亮起昏黃典雅的投射燈，達爾馬提亞溫軟的海風拂面，伴隨著酒吧傳來的冰鎮白葡萄酒香與低沉南歐音樂，波希米亞夜生活之浪漫面紗在此優雅拉開。",
        navigationQuery: "Pile Gate Dubrovnik Old Town"
      }
    ]
  },
  {
    dayNumber: 7,
    dateString: "8月3日",
    weekday: "週一",
    weatherTemp: "31°C",
    weatherCondition: "sunny",
    city: "杜布羅夫尼克 Dubrovnik",
    items: [
      {
        id: "d7-1",
        time: "09:00",
        venue: "杜布羅夫尼克老城牆 Walks of the City Walls",
        tags: ["世界遺產", "極致美景", "需預約"],
        imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        description: "杜布羅夫尼克的環城古堡石牆，是歐洲最壯麗宏偉且保存未受絲毫侵害的中世紀海上要塞，全長1.9公里。清晨微風時攀登是絕佳時刻。站在古牆最高堡壘上極目遠眺：一側是浩瀚湛藍、波光萬頃的亞得里亞海；另一側則是上萬戶起伏交錯、紅如烈火的磚泥屋瓦。耳畔聽見海浪瘋狂拍打城腳巨石，眼前是神聖的巴洛克教堂圓頂。這幕視覺是地中海之魂的最高定義，無數冒險家在此迷失在歷史斑駁、無畏且自由的金色宿命之中。",
        navigationQuery: "Dubrovnik City Walls Walk"
      }
    ]
  },
  {
    dayNumber: 8,
    dateString: "8月4日",
    weekday: "週二",
    weatherTemp: "32°C",
    weatherCondition: "sunny",
    city: "斯普利特 Split",
    items: [
      {
        id: "d8-1",
        time: "15:00",
        venue: "戴克里先宮殿遺址 Diocletian's Palace",
        tags: ["世界遺產", "歷史文化", "攝影熱點"],
        imageUrl: "https://images.unsplash.com/photo-1520116468888-953a79ebdf93?auto=format&fit=crop&w=800&q=80",
        description: "今日自駕沿著亞得里亞海岸公路（風景奇佳）驅車北上，抵達古羅馬重鎮斯普利特。戴克里先宮是公元四世紀君臨羅馬的戴克里先大帝給自己精心建造的退位养老行宮。令人唏噓的是，兩千年滄海桑田，這座巨大的羅馬城堡並未淪為供遊人參拜的荒塚，而是奇妙地融為當代斯普利特平民的日常生活地。斑駁雄偉的羅馬科林斯石柱下，開滿了前衛酒吧，當地老嫗在千年石券窗外晾曬衣服。古羅馬與地中海人間煙火在此精緻交疊，讓人驚嘆不已。",
        navigationQuery: "Diocletians Palace Split Croatia"
      }
    ]
  },
  {
    dayNumber: 9,
    dateString: "8月5日",
    weekday: "週三",
    weatherTemp: "23°C",
    weatherCondition: "cloudy",
    city: "十六湖 Plitvice",
    items: [
      {
        id: "d9-1",
        time: "15:30",
        venue: "水車磨坊村 Rastoke & Smoljanac check-in",
        tags: ["私房景點", "伴手禮", "避開人潮"],
        imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
        description: "今日午餐後，驅車穿越崎嶇深邃的達爾馬提亞喀斯特高原，前往十六湖群山區。途中造訪古樸清涼的「拉斯特克水車小鎮」(Rastoke)。小鎮家家戶戶建造在湍急跳躍的溪流與瀑布之上，木質磨坊和石築底座歷經數百年，仍完好地利用流水動力磨製大麥。漫步在青蔥的水道橋旁，空氣中瀰漫著松林與青苔的芬芳。參觀完後，入住 Smoljanac 宛如北歐童話精緻簡約的 Studio Patricia 民宿，在遠離外界車馬之喧囂中沉穩款款入眠。",
        navigationQuery: "Rastoke Slunj Croatia"
      }
    ]
  },
  {
    dayNumber: 10,
    dateString: "8月6日",
    weekday: "週四",
    weatherTemp: "22°C",
    weatherCondition: "rainy",
    city: "十六湖 Plitvice",
    items: [
      {
        id: "d10-1",
        time: "10:00",
        venue: "普利特維采國家公園森林秘境健行 Trails walk",
        tags: ["世界遺產", "攝影熱點", "極致美景"],
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
        description: "普利特維采湖群（十六湖）被公認為歐洲自然地貌最具奇蹟的綠色天堂之冠。今日細雨微朦，將這片林壑翠鬱洗刷得愈發空靈。沿著幽靜的原木步道穿行在遮天蔽日的百年冷杉與山毛櫸原始森林中，腳底是流水潺潺越過鈣華階地，漫步其中，不時可見在清澈見底、如融化松石綠果凍一般的翡翠湖水中游弋的野生鱒魚。山間霧氣蒸騰，將兩旁的陡峭岩壁染上朦朧的仙境墨綠色，讓身心在這座真正的天然高純度負離子氧吧中得到終極洗滌。",
        navigationQuery: "Plitvice Lakes National Park Hiking Trail"
      }
    ]
  },
  {
    dayNumber: 11,
    dateString: "8月7日",
    weekday: "週五",
    weatherTemp: "21°C",
    weatherCondition: "cloudy",
    city: "十六湖 Plitvice",
    items: [
      {
        id: "d11-1",
        time: "09:30",
        venue: "十六湖下湖區與大瀑布 Veliki Slap",
        tags: ["世界遺產", "極致美景", "必訪地標"],
        imageUrl: "https://images.unsplash.com/photo-1505244760054-323a78a6ff61?auto=format&fit=crop&w=800&q=80",
        description: "今日搬離民宿，辦理入住 Cvitović 的 Lov&Mar 隱世公寓。隨後由下湖區入口進入。這裡地勢垂直陡峭。無數蒂芙尼藍的鏡面湖泊，因高低落差被無數鈣華堤壁切割，跌宕為雷霆萬鈞的湍急瀑布群。步行終點是高達78公尺、全克國第一險峰大瀑布「Veliki Slap」。雪白的水花怒吼著撞擊灰白相間的石灰底岩，激起百米高漫天濛濛水汽，在偶然射入大峽谷的晨光中折射出無數圈耀眼彩虹，其磅礡音聲與自然震懾力讓人久久無法平復心神。",
        navigationQuery: "Veliki Slap Plitvice Lakes"
      }
    ]
  },
  {
    dayNumber: 12,
    dateString: "8月8日",
    weekday: "週六",
    weatherTemp: "24°C",
    weatherCondition: "sunny",
    city: "十六湖 Plitvice",
    items: [
      {
        id: "d12-1",
        time: "10:30",
        venue: "科茲雅克湖 P2 渡輪遊船與上湖區 Lake Kozjak Cruise",
        tags: ["私房景點", "漫步推薦", "免費景點"],
        imageUrl: "https://images.unsplash.com/photo-1520156555841-a1bf1e49f11e?auto=format&fit=crop&w=800&q=80",
        description: "在歷經兩天強度稍高的徒步後，今日迎來一場舒緩、極簡優雅的湖光漫遊。在科茲雅克湖著名的P2渡輪碼頭，搭乘完全無油污震動的環保電瓶平底船，在深邃如黑曜石般平靜無波的明亮湖面上無聲滑行，清徐的微風吹過山谷。抵達上湖區開闊幽深的平坦綠地後，在參天古木的溫涼樹蔭草坪下進行一場精緻的野餐，享用利卡當地的羊奶酪、蜂蜜與新鮮無花果。一對對高雅的天鵝在清亮水邊盤旋，大自然和生命的極致和諧，在眼前安靜綻放。",
        navigationQuery: "Lake Kozjak Plitvice Lakes"
      }
    ]
  },
  {
    dayNumber: 13,
    dateString: "8月9日",
    weekday: "週日",
    weatherTemp: "18°C",
    weatherCondition: "windy",
    city: "奧斯塔里耶 Ostarije",
    items: [
      {
        id: "d13-1",
        time: "23:57",
        venue: "Ostarije ➡️ Wien Hbf 奧地利國鐵 EN1272 臥舖夜車之旅",
        tags: ["交通指引", "需預約", "歐鐵夜行"],
        imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
        description: "今日收拾行裝告別達爾馬提亞群山。晚間乘車前往古老的山區轉運站 Ostarije，踏上這趟極具中世紀浪漫情懷、橫跨克羅埃西亞、匈牙利邊境直達維也納的夜行歐鐵(EuroNight 1272)臥舖。伴隨著復古包廂柔和亮起的橘色閱讀燈、蒸汽運行的微弱震響、以及火車穿越寂靜東歐麥田荒原與鐵軌碰擊的催眠節奏，在專屬的臥鋪包廂內安然款款入眠，隨夜色在時空輪轉中迎來音樂之都高雅的古典晨光。",
        navigationQuery: "EN 1272 train"
      }
    ]
  },
  {
    dayNumber: 14,
    dateString: "8月10日",
    weekday: "週一",
    weatherTemp: "28°C",
    weatherCondition: "sunny",
    city: "維也納 Vienna",
    items: [
      {
        id: "d14-1",
        time: "10:30",
        venue: "聖史蒂芬大教堂與 Hotel Sacher 下午茶 St. Stephens",
        tags: ["必訪地標", "必吃美食", "需預約"],
        imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
        description: "早上09:23安抵維也納中央車站。入住 Hotel The Weekend 放妥行李。漫步前往維也納的核心地標聖史蒂芬大教堂。這座宏偉大堂覆蓋著幾十萬塊拼成雙頭鷹圖案的彩色馬賽克高溫琉璃瓦，威嚴無比。下午來到聞名全球的薩赫飯店優雅紅木宮廷包廂內，品嚐1832年創製的經典國寶薩赫巧克力蛋糕(Sachertorte)搭配現打無糖輕盈鮮奶油與「米朗琪」(Melange)咖啡，濃郁的黑巧克力糖衣與微酸杏桃醬在舌尖曼妙起舞，尊享皇室典雅韻味。",
        navigationQuery: "St Stephens Cathedral Vienna"
      }
    ]
  },
  {
    dayNumber: 15,
    dateString: "8月11日",
    weekday: "週二",
    weatherTemp: "25°C",
    weatherCondition: "sunny",
    city: "庫倫洛夫 Český Krumlov",
    items: [
      {
        id: "d15-1",
        time: "14:30",
        venue: "庫倫洛夫城堡與拉特朗老城區 Castle towers",
        tags: ["世界遺產", "漫步推薦", "伴手禮"],
        imageUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
        description: "今日搭乘跨國豪華大巴離開維也納，進入波西米亞仙境小鎮庫倫洛夫。一條呈大S型完美流淌的伏爾塔瓦河，將小鎮優雅懷抱。沿著古老蜿蜒的鵝卵石拉特朗街道上行，山頂高高矗立著飾滿華麗文藝復興粉彩壁畫的城堡圓塔。兩旁低矮低調的红瓦石屋，如今被波希米亞年輕世代手藝人改裝為奇特的木製玩具屋、精緻香氛香皂工坊與書攤。站在石拱橋上，看著皮划艇越過翻卷的水壩，斜陽將金色碎光撒在城堡塔尖，時空倒流至安靜的16世紀。",
        navigationQuery: "Cesky Krumlov State Castle"
      }
    ]
  },
  {
    dayNumber: 16,
    dateString: "8月12日",
    weekday: "週三",
    weatherTemp: "26°C",
    weatherCondition: "sunny",
    city: "布拉格 Prague",
    items: [
      {
        id: "d16-1",
        time: "16:00",
        venue: "布拉格老城廣場與泰恩教堂 Old Town Square",
        tags: ["必訪地標", "攝影熱點", "極致美景"],
        imageUrl: "https://images.unsplash.com/photo-1513829096999-4978602294fc?auto=format&fit=crop&w=800&q=80",
        description: "今日搭乘便捷巴德捷克大巴前往魔幻金色之都布拉格，入住 Hotel Royal。向晚時分慢行到老城廣場。這座宛如大型室外建築博物館的天堂，四周被華美絕倫的巴洛克、洛可可與歌德式高聳塔樓包圍。最具張力的莫過於一側黑石砌就、雙塔直插雲霄的泰恩教堂，在晚霞的橙紅微光中呈現冷冽而神秘的魁梧黑影，宛如魔術師和黑巫師在黑夜即將低垂時降下的寂色結界。買一卷熱騰騰、散發甜蜜焦肉桂香與杏仁碎的捷克國民糖捲(Trdelník)，享受布拉格之極致浪漫。",
        navigationQuery: "Old Town Square Prague"
      }
    ]
  },
  {
    dayNumber: 17,
    dateString: "8月13日",
    weekday: "週四",
    weatherTemp: "24°C",
    weatherCondition: "cloudy",
    city: "布拉格 Prague",
    items: [
      {
        id: "d17-1",
        time: "09:00",
        venue: "查理大橋晨間漫步與天文鐘報時 Charles Bridge",
        tags: ["歷史文化", "免費景點", "必訪地標"],
        imageUrl: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
        description: "早晨晨霧裊繞起寬廣平靜的伏爾塔瓦河上，查理大橋遊人罕至。這座1357年由查理四世大帝親自奠基、完全由砂布岩築成的古橋上兩旁列峙著三十尊青銅聖者雕像。走到聖約翰·尼波木克浮雕前，用手撫摸基座上發亮的銅像，傳說那裡封存著重返布拉格的幸福秘密。中午回到市政廳外牆觀賞天文鐘。這台世界上最古老的實體天文鐘，指針依循太陽和黃道運行，整點時窗格緩緩滑開，十二門徒等石偶在肅穆樂聲中起舞，黑夜魔術躍然牆上。",
        navigationQuery: "Charles Bridge Prague"
      }
    ]
  },
  {
    dayNumber: 18,
    dateString: "8月14日",
    weekday: "週五",
    weatherTemp: "19°C",
    weatherCondition: "cloudy",
    city: "愛丁堡 Edinburgh",
    items: [
      {
        id: "d18-1",
        time: "19:30",
        venue: "愛丁堡舊城區皇家哩路 Royal Mile walk",
        tags: ["交通指引", "歷史文化", "漫步推薦"],
        imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
        description: "今日傍晚搭乘 EasyJet 航班，由布拉格起飛橫過北海，回到不列顛最具文人浪漫底蘊與陰鬱雄渾之美的蘇格蘭首府——「愛丁堡」。辦理入住後步至皇家哩路，這條鵝卵石主幹道連接頂部黑火山岩上的愛丁堡城堡與山腳下的皇室官邸。街道旁林立著中古黑金風格的蘇格蘭高聳灰色石砌公寓，隱秘在各處深深的「Closes」幽巷裡。在涼夜的海風中，遠處嘹亮、略帶滄桑的蘇格蘭風笛聲響起，威士忌與石楠花香交錯，開啟英倫蘇格蘭探秘長征。",
        navigationQuery: "Royal Mile Edinburgh Scotland"
      }
    ]
  },
  {
    dayNumber: 19,
    dateString: "8月15日",
    weekday: "週六",
    weatherTemp: "17°C",
    weatherCondition: "rainy",
    city: "蘇格蘭高地 Highlands",
    items: [
      {
        id: "d19-1",
        time: "09:00",
        venue: "格倫科峽谷與羅蒙湖 Loch Lomond & Glencoe",
        tags: ["深度體驗", "極致美景", "收費景點"],
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        description: "展開為期三天的豪華蘇格蘭高地探索之旅。清晨驅車深入北疆，途經碧波連天、如藍水晶般的羅蒙湖(Loch Lomond)。午後進入格倫科峽谷(Glencoe)。今日高地下起陰寒細雨，使得這片因1692年氏族慘烈大屠殺而流傳無數史詩民歌的黑色火山峽谷，更加顯得刀割斧鑿、寸草不生。黑褐色而荒涼萬分的大山壁上，無數道由高空融雪匯聚成的白細瀑布如淚痕般直墜而下，重重薄霧遮蓋山顛，將凱爾特民族極致悲壯、狂野荒涼的神魔史詩氣魄，呈現得淋漓盡致。",
        navigationQuery: "Glencoe Valley Scottish Highlands"
      }
    ]
  },
  {
    dayNumber: 20,
    dateString: "8月16日",
    weekday: "週日",
    weatherTemp: "16°C",
    weatherCondition: "cloudy",
    city: "蘇格蘭高地 Highlands",
    items: [
      {
        id: "d20-1",
        time: "10:00",
        venue: "天空島裙岩懸崖與史前巨岩 Isle of Skye & Kilt Rock",
        tags: ["攝影熱點", "極致美景", "免費景點"],
        imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        description: "今日行程直指蓋雅語中代表「迷霧之島」的天空島(Isle of Skye)。行經地質奇絕崎嶇、猶如異星神明地平線的裙岩懸崖(Kilt Rock)。高聳的玄武岩玄立之牆酷似蘇格蘭格子呢百褶裙，挺拔聳峙在大西洋狂怒拍卷的寒浪邊，一道由高山融雪匯流的Mealt瀑布直接由百米高懸崖絕壁凌空直瀉入墨藍大洋之中。山谷荒原上，深粉紫色的野生石楠花肆意綻放，寒涼刺骨的主峰狂風呼嘯，大開大闔的孤傲與空靈景致完美撞擊大腦神經。",
        navigationQuery: "Kilt Rock Isle of Skye Scotland"
      }
    ]
  },
  {
    dayNumber: 21,
    dateString: "8月17日",
    weekday: "週一",
    weatherTemp: "18°C",
    weatherCondition: "sunny",
    city: "蘇格蘭高地 Highlands",
    items: [
      {
        id: "d21-1",
        time: "11:00",
        venue: "愛蓮朵娜城堡與神祕尼斯湖 Eilean Donan Castle",
        tags: ["必訪地標", "歷史文化", "極致美景"],
        imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        description: "早晨造訪矗立在三個深水海灣交匯岬角之上的「愛蓮朵娜城堡」(Eilean Donan Castle)。這座黑石築就、唯有一條狹窄古老石拱石道相通的幽美城堡，是威士忌包裝和多部巨製史詩大片的拍攝御用聖地。午後造訪神祕幽深的「尼斯湖」(Loch Ness)。因含泥炭而呈墨汁般渾濁深邃、極致陰寒的黑色湖水，倒映著兩側鬱鬱蔥蔥、挺拔筆直的松林，傳言湖底深邃無比，隱藏著冰河史前水妖的神秘蹤跡，增添蘇格蘭獨特的神話氣息。",
        navigationQuery: "Eilean Donan Castle Highlands"
      }
    ]
  },
  {
    dayNumber: 22,
    dateString: "8月18日",
    weekday: "週二",
    weatherTemp: "19°C",
    weatherCondition: "cloudy",
    city: "愛丁堡 Edinburgh",
    items: [
      {
        id: "d22-1",
        time: "15:05",
        venue: "迪恩村幽靜水壩與利斯溪河畔 Dean Village Walk",
        tags: ["私房景點", "漫步推薦", "免費景點"],
        imageUrl: "https://images.unsplash.com/photo-155529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
        description: "結束三日高地漫漫洗禮，下午安抵愛丁堡，隨即漫步至位於舊城區外、隱蔽不為人知的幽雅世外桃源「迪恩村」(Dean Village)。在潺潺流動、泛著清綠漣漪的利斯河畔，錯落分布著極具中世紀歐洲風情、由赤紅與黃赭石砌成的百年莊重磨坊住宅群。爬滿青藤、斑駁陳舊的古木與垂柳在清亮河岸招展。水鳥飛掠，這裡和咫尺之外車水馬龍喧鬧無比的王子大街道相比，呈現極簡極精緻的寂靜與高雅，是寫作與享受心靈片刻平息的聖地。",
        navigationQuery: "Dean Village Edinburgh"
      }
    ]
  },
  {
    dayNumber: 23,
    dateString: "8月19日",
    weekday: "週三",
    weatherTemp: "21°C",
    weatherCondition: "sunny",
    city: "倫敦 London",
    items: [
      {
        id: "d23-1",
        time: "15:30",
        venue: "聖保羅大教堂穹頂與千禧橋 St Paul’s Cathedral",
        tags: ["必訪地標", "歷史文化", "攝影熱點"],
        imageUrl: "https://images.unsplash.com/photo-1545638870-1220a9dc8a76?auto=format&fit=crop&w=800&q=80",
        description: "今日傍晚搭機由愛丁堡飛回倫敦，回到科爾切斯特大本營。下午特別前往聖保羅大教堂。雷恩大師設計的巨大巨型石灰岩圓頂，直刺倫敦晴朗藍天。這是僅次於西敏寺、見證英國無數帝王葬禮、查爾斯與黛安娜世紀婚禮的巴洛克史詩經典。走上精緻不凡、充滿幾何迴轉美感的心跳階梯爬上最頂部的「金廊與石廊」露台。頂風极目，整座倫敦在向晚金紅色的夕陽斜照中熠熠。隨後走過現代前衛鋼纜的「千禧橋」在泰晤士河岸留下不列顛最終浪漫剪影。",
        navigationQuery: "St Pauls Cathedral London"
      }
    ]
  },
  {
    dayNumber: 24,
    dateString: "8月20日",
    weekday: "週四",
    weatherTemp: "22°C",
    weatherCondition: "sunny",
    city: "倫敦 London",
    items: [
      {
        id: "d24-1",
        time: "11:00",
        venue: "Braintree Village 奧特萊斯名品村 Braintree Outlets",
        tags: ["在地體驗", "伴手禮", "需預約"],
        imageUrl: "https://images.unsplash.com/photo-1481437156560-3205fa1a55f2?auto=format&fit=crop&w=800&q=80",
        description: "今日是瘋狂大採購與備足好禮的完美囤貨日。上午前往埃塞克斯郡著名的 Braintree Outlets 奧特萊斯購物名品村。全露天對稱美式園林小鎮中，林立著不列顛與英倫當地的經典奢侈、戶外防風防雨風衣與設計師品牌專售。您可以為親密摯友和長輩挑選血統純正的蘇格蘭喀什米爾羊絨長圍巾、頂級英式莊園紅茶、及極簡時尚的精裝香水禮盒。在極度放鬆休閒的購物林蔭大步道上邊走邊挑，度過輕鬆舒緩的戰利品收集日。",
        navigationQuery: "Braintree Village Outlets Essex"
      }
    ]
  },
  {
    dayNumber: 25,
    dateString: "8月21日",
    weekday: "週五",
    weatherTemp: "20°C",
    weatherCondition: "sunny",
    city: "倫敦 London",
    items: [
      {
        id: "d25-1",
        time: "15:00",
        venue: "希斯洛國際機場 Heathrow LHR 登機返台",
        tags: ["交通指引", "不列顛回憶", "無難度"],
        imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
        description: "今日下午收拾囊裹，搭車前往倫敦希斯洛國際機場辦理行李直掛與奧匈英行程退稅手續。這趟歷時整整二十五天奇幻璀璨長征的漫長假期在此落下厚重完美的終章。在辦理好出關手續進入候機大堂登機時，看著窗外遠方起伏的機群。這一大疊蓋滿歐陸達爾馬提亞印戳的登機牌、相冊中無瑕純淨的十六湖翡翠、維也納優雅的莫札特餘弦、及蘇格蘭高地粗獷萬分的迷濛冷風，都將融合為血液中最絢麗、最高貴、也最不可磨滅的靈魂世界文學浪漫印記。",
        navigationQuery: "Heathrow Airport London"
      }
    ]
  }
];

export interface FlightInfo {
  route: string;
  airline: string;
  flightNo: string;
  time: string;
  terminal: string;
}

export interface AccommodationInfo {
  city: string;
  name: string;
  address: string;
  phone: string;
  period: string;
}

export interface EmergencyContact {
  label: string;
  number: string;
  note: string;
}

export const flightList: FlightInfo[] = [
  {
    route: "香港 HKG ➡️ 蘇黎世 ZRH",
    airline: "瑞士國際航空 SWISS",
    flightNo: "LX139",
    time: "23:05 - 06:10 (+1)",
    terminal: "T1"
  },
  {
    route: "蘇黎世 ZRH ➡️ 倫敦 LHR",
    airline: "瑞士國際航空 SWISS",
    flightNo: "LX316",
    time: "07:05 - 07:55",
    terminal: "T1"
  },
  {
    route: "倫敦 STN ➡️ 杜布羅夫尼克 DBV",
    airline: "瑞安航空 Ryanair",
    flightNo: "FR5967",
    time: "16:30 - 20:05",
    terminal: "STN"
  },
  {
    route: "布拉格 PRG ➡️ 愛丁堡 EDI",
    airline: "易捷航空 easyJet",
    flightNo: "EZY3326",
    time: "17:10 - 18:35",
    terminal: "T1"
  },
  {
    route: "愛丁堡 EDI ➡️ 倫敦 STN",
    airline: "瑞安航空 Ryanair",
    flightNo: "RK8604",
    time: "18:35 - 20:00",
    terminal: "EDI"
  },
  {
    route: "倫敦 LHR ➡️ 蘇黎世 ZRH",
    airline: "瑞士國際航空 SWISS",
    flightNo: "LX327",
    time: "18:40 - 21:25",
    terminal: "T2"
  },
  {
    route: "蘇黎世 ZRH ➡️ 香港 HKG",
    airline: "瑞士國際航空 SWISS",
    flightNo: "LX138",
    time: "22:40 - 16:40 (+1)",
    terminal: "T1"
  }
];

export const accommodationList: AccommodationInfo[] = [
  {
    city: "科爾切斯特 Colchester",
    name: "Colchester Accommodation",
    address: "Colchester CO4 6FA, United Kingdom",
    phone: "N/A",
    period: "7/29 - 8/2 (4夜)"
  },
  {
    city: "杜布羅夫尼克 Dubrovnik",
    name: "Guest House Kono",
    address: "Dubrovnik, Dubrovačko-neretvanska županija, Croatia",
    phone: "N/A",
    period: "8/2 - 8/4 (2夜)"
  },
  {
    city: "斯普利特 Split (Bristane)",
    name: "Peaceful house in nature nearby National Park Krka",
    address: "5 Malenice, 22324 Bristane, Croatia (GPS: N 43°52.301, E 15°59.739)",
    phone: "+385 91 155 8488",
    period: "8/4 - 8/5 (1夜)"
  },
  {
    city: "十六湖 Plitvice (Smoljanac)",
    name: "Studio apartmani Patricia (2+2) #2",
    address: "Smoljanac 26, Smoljanac, Ličko-senjska županija 53231, Croatia",
    phone: "N/A",
    period: "8/5 - 8/7 (2夜)"
  },
  {
    city: "十六湖 Plitvice (Cvitović)",
    name: "Lov & Mar apartment",
    address: "65 Cvitović, 47240 Cvitović, Croatia (GPS: N 45°8.303, E 15°35.538)",
    phone: "+385 98 321 254",
    period: "8/7 - 8/9 (2夜)"
  },
  {
    city: "跨國夜車 (Ostarije ➡️ Wien)",
    name: "EN1272 臥鋪夜行列車睡 1晚 (1 Bed in Coupe)",
    address: "Ostarije Station, Croatia ➡️ Wien Hbf, Austria (23:57 - 09:23)",
    phone: "N/A",
    period: "8/9 - 8/10 (1夜)"
  },
  {
    city: "維也納 Vienna",
    name: "Hotel The Weekend",
    address: "Halbgasse 3-5, 07. Neubau, Wien, Österreich",
    phone: "+43 1 523 69 89 0",
    period: "8/10 - 8/11 (1夜)"
  },
  {
    city: "捷克克魯姆洛夫 Český Krumlov",
    name: "Church Apartments",
    address: "Kostelní 168, Vnitřní Město, 381 01 Český Krumlov, Czechia (GPS: N 48°48.597, E 14°18.898)",
    phone: "+420 734 300 926",
    period: "8/11 - 8/12 (1夜)"
  },
  {
    city: "布拉格 Prague",
    name: "Hotel Royal (布拉格皇家酒店)",
    address: "Thámova 688/36, Karlín, 186 00 Praha 8, Czechia (GPS: N 50°5.671, E 14°27.099)",
    phone: "+420 296 686 911",
    period: "8/12 - 8/14 (2夜)"
  },
  {
    city: "愛丁堡 Edinburgh",
    name: "Edinburgh Premier Stay / Guest House",
    address: "Edinburgh, EH1, Scotland, United Kingdom",
    phone: "N/A",
    period: "8/14 - 8/15 (1夜)"
  },
  {
    city: "蘇格蘭高地 Highlands",
    name: "Highlands B&B (3-Day Tour Included Stay)",
    address: "Highlands, Inverness-shire / Skye, Scotland",
    phone: "N/A",
    period: "8/15 - 8/18 (2夜)"
  },
  {
    city: "愛丁堡 Edinburgh",
    name: "Edinburgh Return Stay",
    address: "Edinburgh, EH1, Scotland, United Kingdom",
    phone: "N/A",
    period: "8/18 - 8/19 (1夜)"
  },
  {
    city: "科爾切斯特 Colchester",
    name: "Colchester Accommodation",
    address: "Colchester CO4 6FA, United Kingdom",
    phone: "N/A",
    period: "8/19 - 8/21 (2夜)"
  }
];

export const emergencyContacts: EmergencyContact[] = [
  {
    label: "歐洲通用緊急電話",
    number: "112",
    note: "所有歐盟國家免費，救護、火警、警察通用，支援多國語言"
  },
  {
    label: "英國 警察/火警/救護",
    number: "999",
    note: "英國境內緊急求助專線"
  },
  {
    label: "英國 非緊急警政熱線",
    number: "101",
    note: "遺失護照或財物、非即時人身威脅時撥打"
  },
  {
    label: "捷克 警察局",
    number: "158",
    note: "捷克當地直接轉接警察局專線"
  },
  {
    label: "奧地利 警察局",
    number: "133",
    note: "奧地利當地直接轉接警察局專選"
  },
  {
    label: "克羅埃西亞 道路救援 (HAK)",
    number: "1987",
    note: "克羅埃西亞境內發生自駕車輛故障時，提供英語道路救援"
  },
  {
    label: "旅外國人急難救助專線",
    number: "+886-800-085-095",
    note: "外交部領事事務局 global call, 提供24小時緊急諮詢與協助"
  }
];
