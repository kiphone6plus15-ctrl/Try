export type Language = 'zh' | 'en';

export const uiTranslations: Record<Language, Record<string, string>> = {
  zh: {
    appTitle: "大英不列顛、達爾馬提亞、中歐奧捷 25天壯麗史詩旅行",
    day: "第",
    dayUnit: "天",
    searchPlaceholder: "搜尋景點、城市、日期...",
    noResults: "找不到符合的行程景點，請嘗試其他關鍵字",
    todayWeather: "今日氣溫",
    feelsLike: "體感",
    humidity: "濕度",
    windSpeed: "風速",
    weatherTitle: "即時天氣與穿著建議",
    weatherForecast: "未來 3 日預報",
    weatherForecastShort: "未來 3天預報",
    packingGuide: "當前穿衣與打包指南",
    activityListList: "精選活動清單",
    foldDetails: "收合景點詳情",
    expandDetails: "點擊展開精美行程",
    flightSchedule: "飛機航班時刻",
    accommodationList: "住宿飯店清單",
    emergencyContacts: "緊急安全聯絡指南",
    dialPhone: "電話預約撥號",
    navigation: "導航",
    checked: "已解鎖完成",
    unchecked: "尚未拜訪",
    staysBooked: "間飯店預訂",
    flightsBooked: "個執飛航段",
    contactsCount: "個求助熱線",
    packingAndPrep: "穿著打包與防疫建議",
    weatherUpdated: "更新中...",
    weatherUpdateFail: "未能連線至即時氣象台，顯示離線預估溫度",
    reconFail: "無法辨識此城市的地理經緯度資訊",
    languageSwitcher: "EN",
    refreshWeather: "重新整理氣象",
    clearSearch: "清除搜尋",
    backToAllDays: "回到完整日程",
    daysCount: "日行程",
    weatherAdviceTitle: "即時天氣與穿衣預報建議",
    packingGuideTitle: "當前穿衣與打包指南",
    expandAll: "全部展開",
    collapseAll: "全部收合",
    accommodationListTitle: "住宿飯店清單",
    flightsTitle: "國際與歐盟內航段",
    checklistTitle: "行前打包行李清單",
    resetProgress: "重置進度",
    emergencyTitle: "各國緊急聯絡管道",
    footerItinerary: "25日日程",
    footerTools: "行前工具箱",
    pwaSectionTitle: "離線 PWA 與智能通知提醒",
    pwaStatusLabel: "離線快取引擎狀態",
    pwaActiveMsg: "🟢 已啟用：全功能可在無網路下順暢運作",
    pwaInactiveMsg: "⚪ 未啟動：正在準備離線快取",
    pwaInstallBtn: "📥 安裝到手機 / 桌面主畫面",
    pwaInstalledMsg: "🎉 Itineris 已安裝成功！",
    notifStatusLabel: "智能提醒通道權限",
    notifEnabledMsg: "🟢 已授權：系統通知通道常駐背景守護",
    notifDisabledMsg: "🔴 已禁用：請於瀏覽器偏好設定中開啟權限",
    notifPromptBtn: "🔔 開啟每日行程提醒 (行李/起降/景點)",
    testNotifBtn: "🧪 發送 5秒測試推播 (模擬班機降落)",
    testNotifInfo: "提醒已排定！排定後可在 5 秒內鎖定手機螢幕、切換去其他 App 或關閉分頁以便體驗背景推播提醒。",
    notifNotSupported: "⚠️ 您的瀏覽器/裝置不支援網頁通知服務"
  },
  en: {
    appTitle: "Britain, Dalmatia, & Central Europe 25-Day Epic Journey",
    day: "Day ",
    dayUnit: "",
    searchPlaceholder: "Search spots, cities, dates...",
    noResults: "No itinerary matches found. Try another keyword.",
    todayWeather: "Today's Temp",
    feelsLike: "Feels likeness",
    humidity: "Humidity",
    windSpeed: "Wind",
    weatherTitle: "Live Weather & Clothing Advice",
    weatherForecast: "3-Day Forecast",
    weatherForecastShort: "3-Day Forecast",
    packingGuide: "Clothing & Packing Guide",
    activityListList: "Featured Activities",
    foldDetails: "Collapse Details",
    expandDetails: "Click to view detailed itinerary",
    flightSchedule: "Flight Schedule",
    accommodationList: "Accommodation List",
    emergencyContacts: "Emergency & Safety Guide",
    dialPhone: "Call Hotel",
    navigation: "Navigate",
    checked: "Completed",
    unchecked: "Not Visited Yet",
    staysBooked: "Stays booked",
    flightsBooked: "Flights scheduled",
    contactsCount: "Helpline contacts",
    packingAndPrep: "Dressing, Packing & Safety Advice",
    weatherUpdated: "Updating...",
    weatherUpdateFail: "Unable to reach weather station. Showing offline estimates.",
    reconFail: "Cannot recognize coordinates for this city.",
    languageSwitcher: "繁體中文",
    refreshWeather: "Refresh Weather",
    clearSearch: "Clear",
    backToAllDays: "Back to Overall Itinerary",
    daysCount: "Days Itinerary",
    weatherAdviceTitle: "Real-time Weather & Clothing Tips",
    packingGuideTitle: "Current Packing & Clothing Guide",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    accommodationListTitle: "Accommodation List",
    flightsTitle: "International & EU Flight Timeline",
    checklistTitle: "Pre-departure Packing Checklist",
    resetProgress: "Reset Progress",
    emergencyTitle: "Global Emergency Help Centers",
    footerItinerary: "25-Day Itinerary",
    footerTools: "Travel Toolbox",
    pwaSectionTitle: "Offline PWA & Smart Reminders",
    pwaStatusLabel: "Offline Cache Engine Status",
    pwaActiveMsg: "🟢 Active: Fully cached and ready for offline use",
    pwaInactiveMsg: "⚪ Inactive: Standard caching mode active",
    pwaInstallBtn: "📥 Install App to Home Screen",
    pwaInstalledMsg: "🎉 Itineris is successfully installed!",
    notifStatusLabel: "Smart Alerts Access Permission",
    notifEnabledMsg: "🟢 Enabled: Notification channel standby",
    notifDisabledMsg: "🔴 Disabled: Grant permission in browser settings",
    notifPromptBtn: "🔔 Enable Daily Alerts (Luggage/Flight/Spots)",
    testNotifBtn: "🧪 Send 5s Test Alert (Simulated Arrival)",
    testNotifInfo: "Alert scheduled! Please toggle your phone screen, minimize windows or lock screen within 5 seconds to experience.",
    notifNotSupported: "⚠️ Notifications not supported on this device/browser"
  }
};

export const weatherTranslations: Record<Language, Record<string, string>> = {
  zh: {
    sunny: "晴朗天空 Sunny",
    cloudy: "多雲/陰天 Overcast",
    rainy: "雨天 Rainy",
    windy: "有風 Windy",
    "晴朗無雲 Clear": "晴朗無雲 Clear",
    "晴時多雲 Partly Cloudy": "晴時多雲 Partly Cloudy",
    "有霧 Foggy": "有霧 Foggy",
    "毛毛雨 Drizzle": "毛毛雨 Drizzle",
    "陣雨/中雨 Rainy": "陣雨/中雨 Rainy",
    "有降雪 Snowy": "有降雪 Snowy",
    "短暫強降雨 Showers": "短暫強降雨 Showers",
    "雷陣雨 Thunderstorm": "雷陣雨 Thunderstorm",
    "多雲陰天 Overcast": "多雲陰天 Overcast"
  },
  en: {
    sunny: "Sunny",
    cloudy: "Cloudy/Overcast",
    rainy: "Rainy",
    windy: "Windy",
    "晴朗無雲 Clear": "Clear & Sunny",
    "晴時多雲 Partly Cloudy": "Partly Cloudy",
    "有霧 Foggy": "Foggy",
    "毛毛雨 Drizzle": "Drizzle Rain",
    "陣雨/中雨 Rainy": "Moderate Rain",
    "有降雪 Snowy": "Snowy Weather",
    "短暫強降雨 Showers": "Showers",
    "雷陣雨 Thunderstorm": "Thunderstorm",
    "多雲陰天 Overcast": "Overcast Sky"
  }
};

// Map weekdays
export const weekdayTranslations: Record<Language, Record<string, string>> = {
  zh: {
    "週一": "週一", "週二": "週二", "週三": "週三", "週四": "週四", "週五": "週五", "週六": "週六", "週日": "週日"
  },
  en: {
    "週一": "Mon", "週二": "Tue", "週三": "Wed", "週四": "Thu", "週五": "Fri", "週六": "Sat", "週日": "Sun"
  }
};

// Map tags
export const tagTranslations: Record<Language, Record<string, string>> = {
  zh: {
    "交通指引": "交通指引",
    "漫步推薦": "漫步推薦",
    "英國大門": "英國大門",
    "歷史文化": "歷史文化",
    "免費景點": "免費景點",
    "必訪地標": "必訪地標",
    "極致美景": "極致美景",
    "攝影熱點": "攝影熱點",
    "必吃美食": "必吃美食",
    "文青推薦": "文青推薦",
    "地中海風": "地中海風",
    "網美打卡": "網美打卡",
    "世界遺產": "世界遺產",
    "需預約": "需預約",
    "私房景點": "私房景點",
    "伴手禮": "伴手禮",
    "避開人潮": "避開人潮",
    "深度體驗": "深度體驗",
    "歐鐵夜行": "歐鐵夜行",
    "收費景點": "收費景點",
    "不列顛回憶": "不列顛回憶",
    "無難度": "無難度",
    "在地體驗": "在地體驗"
  },
  en: {
    "交通指引": "Transit",
    "漫步推薦": "Walking",
    "英國大門": "Gateway UK",
    "歷史文化": "Culture",
    "免費景點": "Free Access",
    "必訪地標": "Must Visit",
    "極致美景": "Scenic",
    "攝影熱點": "Photo Spot",
    "必吃美食": "Local Eats",
    "文青推薦": "Hipster",
    "地中海風": "Coastline",
    "網美打卡": "Trendy",
    "世界遺產": "World Heritage",
    "需預約": "Required RSVP",
    "私房景點": "Hidden Gem",
    "伴手禮": "Souvenirs",
    "避開人潮": "Quiet Hours",
    "深度體驗": "Immersive",
    "歐鐵夜行": "Night Train",
    "收費景點": "Ticket Req",
    "不列顛回憶": "Memories",
    "無難度": "Easy",
    "在地體驗": "Local Life"
  }
};

// Detailed translations for all 25 Days
export const itineraryTranslations: Record<string, Record<Language, { venue: string; description: string }>> = {
  "d1-1": {
    zh: {
      venue: "倫敦希斯洛國際機場 (LHR T2) 抵達",
      description: "今日搭乘瑞士國際航空，歷經兩段舒適漫長的歐陸飛行（中轉蘇黎世），終於降落在大英帝國門戶——希斯洛國際機場。出關後，呼吸著不列顛略帶涼意、溫潤清爽的夏夜空氣，長途旅行的疲憊煙消雲散。您將搭乘專屬配車前往歷史積澱深厚的古羅馬小鎮科爾切斯特，沿途看見英格蘭平緩寬廣的林地丘陵與夜幕低垂。抵達後可以辦理入住，並品嚐經典的英式午夜餐點，開啟這段神奇的中歐、不列顛與達爾馬提亞的二十五天壯麗長征。"
    },
    en: {
      venue: "Arrival at London Heathrow Airport (LHR T2)",
      description: "Fly from Hong Kong to Zurich and transfer smoothly to London with SWISS. Upon clearing customs, breath in the refreshing, cool breeze of a British summer evening. Your private ride takes you through rolling woodlands of the English countryside to Colchester, England's oldest recorded Roman town. After checking in, savor a classic late-night British snack and prepare for this grand 25-day odyssey spanning Britain, Dalmatia, Austria, and Czechia."
    }
  },
  "d2-1": {
    zh: {
      venue: "科爾切斯特城堡公園 Colchester Castle Park",
      description: "科爾切斯特是經由羅馬暴君克勞狄烏斯大帝親自授權建立、英國有史記載最古老的城市。城堡公園內矗立著全歐洲規模最大的諾曼式城堡。這座城堡令人稱奇的是，它是直接建造在公元一世紀羅馬克勞狄神殿的巨大地基之上，見證了布狄卡起義時的鮮血、中古時期的女巫審判與英國內戰的慘烈圍城。漫步在花團錦簇、綠草如茵的維多利亞庭園中，看著古老城牆與百年參天橡樹，感受英格蘭鄉村極致平靜和極簡的歷史張力。"
    },
    en: {
      venue: "Colchester Castle Park",
      description: "Colchester is the oldest recorded town in Britain, founded under Emperor Claudius. Its legendary Castle features the largest Norman keep ever built in Europe, standing directly atop the vaults of the 1st-century Roman Temple of Claudius. Wander past blooming Victorian flower beds, weeping willow trees, and thick defensive stone walls. Listen to historical echoes from Boudican uprisings to medieval witch trials in an atmosphere of absolute English countryside serenity."
    }
  },
  "d3-1": {
    zh: {
      venue: "倫敦大英博物館 British Museum",
      description: "今日搭乘英格蘭郊區火車前往大英帝國的心臟。大英博物館巨大的白色新古典主義中庭被英倫陽光灑落，呈現神聖空靈感。館內珍藏著全人類文明跨越數千年的精華：古埃及神祕尊貴的「羅塞塔石碑」、大膽雕刻的巴特農神殿大理石壁畫、美索不達米亞平原的楔形文字。行走在宏偉展廳中，彷彿將指尖貼在時光的脈搏之上，聆聽這款人類歷史演變長卷的低吟，是一次無與倫比的心靈洗禮與美學視覺震盪。"
    },
    en: {
      venue: "British Museum, London",
      description: "Take an regional English train into the heart of London. The British Museum greets you with its iconic glass-and-steel Great Court roof casting elegant patterns. Walk the vast chambers containing treasures of human civilization: the mysterious Rosetta Stone, magnificent Greek Parthenon Marbles, and the pristine treasures of Mesopotamia. Running your hand adjacent to thousands of years of human story offers a transcendent moment of connection with history and world art."
    }
  },
  "d4-1": {
    zh: {
      venue: "倫敦塔橋與泰晤士河畔 Tower Bridge Walk",
      description: "倫敦塔橋巍然跨越寬廣壯闊的泰晤士河。這座擁有維多利亞哥德式雙高塔的吊橋，是倫敦極具辨識度的城市符號。行走在精心雕鑿的橋面之上，泰晤士河水在腳下翻滾。極目遠眺，一側是歷史滄桑重疊的倫敦塔要塞，另一側則是拔地而起、充滿未來感的前衛碎片大廈。風笛手的悠揚聲音穿透泰晤士河畔的微風灑下，將不列顛的古典底蘊、全球金融中心的喧囂與地平線晚霞完美調和，非常適合拍攝旅行極簡風大片。"
    },
    en: {
      venue: "Tower Bridge & Thames Riverside Walk",
      description: "Observe the mighty Tower Bridge stretching majestically across the river Thames. Admire the landmark's glorious Victorian Gothic twin towers. Looking down, watch current ripples swirl; looking up, take in the high-contrast vista of the ancient medieval fortress Tower of London on one side, and the futuristic steel spikes of the Shard on the other. Allow the bagpipe notes echoing along the promenade to guide you under London's radiant sunset sky."
    }
  },
  "d5-1": {
    zh: {
      venue: "考文特花園與市集 Covent Garden Market",
      description: "考文特花園前身曾是修道院著名的蔬果市集，如今已改建為極具優雅與煙火氣息的開放式文藝廣場。在巨大的維多利亞鑄鐵和玻璃圓形頂蓋下，年輕的古典弦樂四重奏正在即興演奏莫札特名曲，音浪在柱頂迴盪。這裡匯聚了英國知名頂尖手作工藝師、獨立首飾設計品牌與琳瑯滿目的創意咖啡。買一杯經典的伯爵紅茶，搭配一個酥脆的司康，坐在老石階上，與當地的淑女和紳士們一同享受難得的夏日明亮日照，感受純粹英倫街頭的精巧魅力。"
    },
    en: {
      venue: "Covent Garden & Artisan Market",
      description: "Covent Garden is a vibrant cultural piazza housed under beautifully restored curved Victorian glass and iron arches. Listen to the echoes of live classical quartets executing Mozart under the grand arcades. Explore row after row of British handmade crafts, bespoke fashion, and premium tea salons. Grab an Earl Grey tea alongside a buttery, warm scone and sit by the lively steps to experience the quintessence of classy London lifestyle."
    }
  },
  "d6-1": {
    zh: {
      venue: "杜布羅夫尼克古城 check-in 與派勒門 Pile Gate",
      description: "今日搭乘 Ryanair 航班從倫敦特快直飛克羅埃西亞的璀璨珍珠——「杜布羅夫尼克」（美劇《冰與火之歌》中的君臨城）。飛機降落後跨越海角抵達老城，辦妥入住 Guest House Kono。晚間穿過中世紀厚重石砌的「派勒門」，踩在光滑如銀色鏡面、經過幾百年擦磨的史特拉敦主街上。兩側新哥德式的金色廊柱亮起昏黃典雅的投射燈，達爾馬提亞溫軟的海風拂面，伴隨著酒吧傳來的冰鎮白葡萄酒香與低沉南歐音樂，波希米亞夜生活之浪漫面紗在此優雅拉開。"
    },
    en: {
      venue: "Dubrovnik Old Town Check-in & Pile Gate",
      description: "Fly direct from London Stansted to Dubrovnik, the sensational 'Pearl of the Adriatic' (known widely as King's Landing in Game of Thrones). Settle into Guest House Kono. At sunset, cross the historic stone drawbridge through Pile Gate and take steps onto Stradun, the main street paved with limestone blocks polished to a reflective shine by centuries of shoes. Let the warm coastal Adriatic breeze and distant acoustic guitars introduce you to Southern European magic."
    }
  },
  "d7-1": {
    zh: {
      venue: "杜布羅夫尼克老城牆 Walks of the City Walls",
      description: "杜布羅夫尼克的環城古堡石牆，是歐洲最壯麗宏偉且保存未受絲毫侵害的中世紀海上要塞，全長1.9公里。清晨微風時攀登是絕佳時刻。站在古牆最高堡壘上極目遠眺：一側是浩瀚湛藍、波光萬頃的亞得里亞海；另一側則是上萬戶起伏交錯、紅如烈火的磚泥屋瓦。耳畔聽見海浪瘋狂拍打城腳巨石，眼前是神聖的巴洛克教堂圓頂。這幕視覺是地中海之魂的最高定義，無數冒險家在此迷失在歷史斑駁、無畏且自由的金色宿命之中。"
    },
    en: {
      venue: "Walking the Ancient Dubrovnik City Walls",
      description: "Dubrovnik's majestic limestone walls, stretching 1.9 kilometers around the city, represent Europe's grandest coastal defensive rampart. Stand on the highest stone battlements in the gentle morning breeze. Look down to see the waves breaking against old sea cliffs, and look inward to see thousands of houses painted in signature uniform terracotta orange. It is the absolute visual epitome of Mediterranean aesthetics, captivating and timeless."
    }
  },
  "d8-1": {
    zh: {
      venue: "戴克里先宮殿遺址 Diocletian's Palace",
      description: "今日自駕沿著亞得里亞海岸公路（風景奇佳）驅車北上，抵達古羅馬重鎮斯普利特。戴克里先宮是公元四世紀君臨羅馬的戴克里先大帝給自己精心建造的退位养老行宮。令人唏噓的是，兩千年滄海桑田，這座巨大的羅馬城堡並未淪為供遊人參拜的荒塚，而是奇妙地融為當代斯普利特平民的日常生活地。斑駁雄偉的羅馬科林斯石柱下，開滿了前衛酒吧，當地老嫗在千年石券窗外晾曬衣服。古羅馬與地中海人間煙火在此精緻交疊，讓人驚嘆不已。"
    },
    en: {
      venue: "Diocletian's Palace Ruins, Split",
      description: "Drive along the stunning Adriatic scenic highway to the Roman city of Split. Emperor Diocletian built this grand fortress palace in the 4th century AD for his retirement. Strikingly, these stone vaults and majestic columns are not a barren archaeological site, but the living soul of Split. Vibrant cafes operate within Roman arcades while local laundry hangs adjacent to centuries-old carvings. It is an amazing and intimate collision of Roman scale and relaxed seaside life."
    }
  },
  "d9-1": {
    zh: {
      venue: "水車磨坊村 Rastoke & Smoljanac check-in",
      description: "今日午餐後，驅車穿越崎嶇深邃的達爾馬提亞喀斯特高原，前往十六湖群山區。途中造訪古樸清涼的「拉斯特克水車小鎮」(Rastoke)。小鎮家家戶戶建造在湍急跳躍的溪流與瀑布之上，木質磨坊和石築底座歷經數百年，仍完好地利用流水動力磨製大麥。漫步在青蔥的水道橋旁，空氣中瀰漫著松林與青苔的芬芳。參觀完後，入住 Smoljanac 宛如北歐童話精緻簡約的 Studio Patricia 民宿，在遠離外界車馬之喧囂中沉穩款款入眠。"
    },
    en: {
      venue: "Rastoke Watermill Village & Check-in",
      description: "Drive through the wild karst highlands of Croatia's interior. Stop at the watermill town of Rastoke, where rustic wooden cottages and millstones are perched directly over bubbling cataracts and waterfalls. Take a path through the misty streams and moss-scented pines. Settle into the minimalist Nordic-style Studio Patricia in Smoljanac for a deep night of wilderness sleep."
    }
  },
  "d10-1": {
    zh: {
      venue: "普利特維采國家公園森林秘境健行 Trails walk",
      description: "普利特維采湖群（十六湖）被公認為歐洲自然地貌最具奇蹟的綠色天堂之冠。今日細雨微朦，將這片林壑翠鬱洗刷得愈發空靈。沿著幽靜的原木步道穿行在遮天蔽日的百年冷杉與山毛櫸原始森林中，腳底是流水潺潺越過鈣華階地，漫步其中，不時可見在清澈見底、如融化松石綠果凍一般的翡翠湖水中游弋的野生鱒魚。山間霧氣蒸騰，將兩旁的陡峭岩壁染上朦朧的仙境墨綠色，讓身心在這座真正的天然高純度負離子氧吧中得到終極洗滌。"
    },
    en: {
      venue: "Plitvice Lakes National Park Hiking Trail",
      description: "Lacing your sneakers for Plitvice Lakes, widely crowned as Europe’s premier natural aquatic wonderland. Under a soft morning drizzle, the ancient beech forests look exceptionally verdant. Walk along the tranquil log boardwalks suspended over streams. Peer deep into crystalline, jelly-like turquoise lakes to see wild trout swimming. The mist rising from the gorge turns the steep rock walls into an emerald watercolor backdrop, purifying your senses with fresh mountain air."
    }
  },
  "d11-1": {
    zh: {
      venue: "十六湖下湖區與大瀑布 Veliki Slap",
      description: "今日搬離民宿，辦理入住 Cvitović 的 Lov&Mar 隱世公寓。隨後由下湖區入口進入。這裡地勢垂直陡峭。無數蒂芙尼藍的鏡面湖泊，因高低落差被無數鈣華堤壁切割，跌宕為雷霆萬鈞的湍急瀑布群。步行終點是高達78公尺、全克國第一險峰大瀑布「Veliki Slap」。雪白的水花怒吼著撞擊灰白相間的石灰底岩，激起百米高漫天濛濛水汽，在偶然射入大峽谷的晨光中折射出無數圈耀眼彩虹，其磅礡音聲與自然震懾力讓人久久無法平復心神。"
    },
    en: {
      venue: "Lower Lakes & Great Waterfall (Veliki Slap)",
      description: "Check into the peaceful Lov & Mar apartment in Cvitović, then head to the Lower Lakes canyon. Stand inside a gorge cut deep into chalky cliffs where layers of intense tiffany-blue pools plunge sequentially into thunderous cascades. Your trek concludes at Veliki Slap (78m), the nation's tallest waterfall. Behold the dramatic view of spray crashing into raw limestone basins, producing micro-rainbows when sunbeams break through the canyon walls."
    }
  },
  "d12-1": {
    zh: {
      venue: "科茲雅克湖 P2 渡輪遊船與上湖區 Lake Kozjak Cruise",
      description: "在歷經兩天強度稍高的徒步後，今日迎來一場舒緩、極簡優雅的湖光漫遊。在科茲雅克湖著名的P2渡輪碼頭，搭乘完全無油污震動的環保電瓶平底船，在深邃如黑曜石般平靜無波的明亮湖面上無聲滑行，清徐的微風吹過山谷。抵達上湖區開闊幽深的平坦綠地後，在參天古木的溫涼樹蔭草坪下進行一場精緻的野餐，享用利卡當地的羊奶酪、蜂蜜與新鮮無花果。一對對高雅的天鵝在清亮水邊盤旋，大自然和生命的極致和諧，在眼前安靜綻放。"
    },
    en: {
      venue: "Lake Kozjak Electric Cruise & Upper Trails",
      description: "Treat your feet today to a slow, serene lake cruise. At the P2 pier, board the silent electric boat to slide across the obsidian-flat water of Lake Kozjak under high alpine skies. Disembark on the marshy Upper Lakes boardwalks and find a grassy bank surrounded by pine woods for a scenic picnic. Savor local cheese, figs, and wild honey in a flawless sanctuary of absolute ecological stillness."
    }
  },
  "d13-1": {
    zh: {
      venue: "Ostarije ➡️ Wien Hbf 奧地利國鐵 EN1272 臥舖夜車之旅",
      description: "今日收拾行裝告別達爾馬提亞群山。晚間乘車前往古老的山區轉運站 Ostarije，踏上這趟極具中世紀浪漫情懷、橫跨克羅埃西亞、匈牙利邊境直達維也納的夜行歐鐵(EuroNight 1272)臥舖。伴隨著復古包廂柔和亮起的橘色閱讀燈、蒸汽運行的微弱震響、以及火車穿越寂靜東歐麥田荒原與鐵軌碰擊的催眠節奏，在專屬的臥鋪包廂內安然款款入眠，隨夜色在時空輪轉中迎來音樂之都高雅的古典晨光。"
    },
    en: {
      venue: "Cross-Border Sleeper Night Train to Vienna",
      description: "Say farewell to Croatia. Drive to the old mountain junctions at Ostarije to embark on EuroNight Express Train 1272 to Vienna. Settle into your charming sleeper compartments. Let the warm orange glow of reading lamps, the rhythmic thud-thud of the train crossing Hungarian cornfields, and the gentle rocking of the carriages ease you into a deep sleep, awakening refreshed tomorrow in Austria's imperial capital."
    }
  },
  "d14-1": {
    zh: {
      venue: "聖史蒂芬大教堂與 Hotel Sacher 下午茶 St. Stephens",
      description: "早上09:23安抵維也納中央車站。入住 Hotel The Weekend 放妥行李。漫步前往維也納的核心地標聖史蒂芬大教堂。這座宏偉大堂覆蓋著幾十萬塊拼成雙頭鷹圖案的彩色馬賽克高溫琉璃瓦，威嚴無比。下午來到聞名全球的薩赫飯店優雅紅木宮廷包廂內，品嚐1832年創製的經典國寶薩赫巧克力蛋糕(Sachertorte)搭配現打無糖輕盈鮮奶油與「米朗琪」(Melange)咖啡，濃郁的黑巧克力糖衣與微酸杏桃醬在舌尖曼妙起舞，尊享皇室典雅韻味。"
    },
    en: {
      venue: "St. Stephens Cathedral & Hotel Sacher Afternoon Tea",
      description: "Arrive at Wien Hbf at 09:23 and check in with Hotel The Weekend. Walk into Vienna's epic heart, St. Stephens Cathedral, and admire the majestic roof tiled with thousands of colored glazed mosaics in double-headed eagle crests. Afternoon tea awaits in the scarlet halls of Hotel Sacher to experience the original 1832 Sachertorte – rich chocolate gateau paired with light, sugar-free cream and traditional Wiener Melange espresso cup."
    }
  },
  "d15-1": {
    zh: {
      venue: "庫倫洛夫城堡與拉特朗老城區 Castle towers",
      description: "今日搭乘跨國豪華大巴離開維也納，進入波西米亞仙境小鎮庫倫洛夫。一條呈大S型完美流淌的伏爾塔瓦河，將小鎮優雅懷抱。沿著古老蜿蜒的鵝卵石拉特朗街道上行，山頂高高矗立著飾滿華麗文藝復興粉彩壁畫的城堡圓塔。兩旁低矮低調的红瓦石屋，如今被波希米亞年輕世代手藝人改裝為奇特的木製玩具屋、精緻香氛香皂工坊與書攤。站在石拱橋上，看著皮划艇越過翻卷的水壩，斜陽將金色碎光撒在城堡塔尖，時空倒流至安靜的16世紀。"
    },
    en: {
      venue: "Český Krumlov Castle & Latrán District",
      description: "Board a premium cross-border coach from Vienna to Český Krumlov, a fairytale town enclosed inside an absolute loop of the Vltava River. Ascend Latrán Street's winding cobblestones toward the castle keep. Gaze at the colorful Renaissance frescoes painted on towers. Find Bohemian artisans selling wooden toys, and organic lavender soap. Stand beside the old bridge, watch canoes drift past the weir, and enjoy the sunset reflecting off the castle turrets."
    }
  },
  "d16-1": {
    zh: {
      venue: "布拉格老城廣場與泰恩教堂 Old Town Square",
      description: "今日搭乘便捷巴德捷克大巴前往魔幻金色之都布拉格，入住 Hotel Royal。向晚時分慢行到老城廣場。這座宛如大型室外建築博物館的天堂，四周被華美絕倫的巴洛克、洛可可與歌德式高聳塔樓包圍。最具張力的莫過於一側黑石砌就、雙塔直插雲霄的泰恩教堂，在晚霞的橙紅微光中呈現冷冽而神秘的魁梧黑影，宛如魔術師和黑巫師在黑夜即將低垂時降下的寂色結界。買一卷熱騰騰、散發甜蜜焦肉桂香與杏仁碎的捷克國民糖捲(Trdelník)，享受布拉格之極致浪漫。"
    },
    en: {
      venue: "Prague Old Town Square & Týn Church",
      description: "Travel by express bus to Prague, the golden-spired magic capital, and check into Hotel Royal. Walk toward the Old Town Square at dusk. The square resembles a massive outdoor museum. Look up at the coal-dark spires of Church of Our Lady before Týn, projecting in majestic Gothic silhouette against the sunset glow. Buy a warm, sugar-cinnamon Trdelník chimney cake and listen to traditional street buskers filling Prague's night air with violin melodies."
    }
  },
  "d17-1": {
    zh: {
      venue: "查理大橋晨間漫步與天文鐘報時 Charles Bridge",
      description: "早晨晨霧裊繞起寬廣平靜的伏爾塔瓦河上，查理大橋遊人罕至。這座1357年由查理四世大帝親自奠基、完全由砂布岩築成的古橋上兩旁列峙著三十尊青銅聖者雕像。走到聖約翰·尼波木克浮雕前，用手撫摸基座上發亮的銅像，傳說那裡封存著重返布拉格的幸福秘密。中午回到市政廳外牆觀賞天文鐘。這台世界上最古老的實體天文鐘，指針依循太陽和黃道運行，整點時窗格緩緩滑開，十二門徒等石偶在肅穆樂聲中起舞，黑夜魔術躍然牆上。"
    },
    en: {
      venue: "Charles Bridge Morning Walk & Astronomical Clock",
      description: "Capture the Vltava River blanked in scenic morning mist with a stroll across Charles Bridge, first laid in 1357. Touch the glistening brass of St. John of Nepomuk's relief to reserve your return luck. At noon, return to the Old Town Hall to watch the world's oldest active Astronomical Clock. Marvel at the Apostles parading through wood shutter windows as hourly chime mechanical puppets spring to life."
    }
  },
  "d18-1": {
    zh: {
      venue: "愛丁堡舊城區皇家哩路 Royal Mile walk",
      description: "今日傍晚搭乘 EasyJet 航班，由布拉格起飛橫過北海，回到不列顛最具文人浪漫底蘊與陰鬱雄渾之美的蘇格蘭首府——「愛丁堡」。辦理入住後步至皇家哩路，這條鵝卵石主幹道連接頂部黑火山岩上的愛丁堡城堡與山腳下的皇室官邸。街道旁林立著中古黑金風格的蘇格蘭高聳灰色石砌公寓，隱秘在各處深深的「Closes」幽巷裡。在涼夜的海風中，遠處嘹亮、略帶滄桑的蘇格蘭風笛聲響起，威士忌與石楠花香交錯，開啟英倫蘇格蘭探秘長征。"
    },
    en: {
      venue: "Royal Mile & Edinburgh Old Town Walk",
      description: "Fly north with easyJet over the North Sea to Edinburgh, the gothic heart of Scotland. Settle into your guest house and start exploring the Royal Mile, the old spine connecting Edinburgh Castle atop volcanic rock to the Holyroodhouse Palace. Wander past narrow lanes and dark tenements. Stand in the cool sea breeze while the sound of a lone bagpiper plays, blending with traces of single malt whisky in the air."
    }
  },
  "d19-1": {
    zh: {
      venue: "格倫科峽谷與羅蒙湖 Loch Lomond & Glencoe",
      description: "展開為期三天的豪華蘇格蘭高地探索之旅。清晨驅車深入北疆，途經碧波連天、如藍水晶般的羅蒙湖(Loch Lomond)。午後進入格倫科峽谷(Glencoe)。今日高地下起陰寒細雨，使得這片因1692年氏族慘烈大屠殺而流傳無數史詩民歌的黑色火山峽谷，更加顯得刀割斧鑿、寸草不生。黑褐色而荒涼萬分的大山壁上，無數道由高空融雪匯聚成的白細瀑布如淚痕般直墜而下，重重薄霧遮蓋山顛，將凱爾特民族極致悲壯、狂野荒涼的神魔史詩氣魄，呈現得淋漓盡致。"
    },
    en: {
      venue: "Loch Lomond & Glencoe Valley Highland Tour",
      description: "Begin your 3-day guided Highland exploration. Drive past the serene blue expanse of Loch Lomond before arriving in the primeval valley of Glencoe. The landscape looks spectacular under low-lying clouds and rain. See peerless black crags marked by slender white streams of melting snow cascading down like teardrops. This raw, dramatic landscape encapsulates Celtic legends of Clan survival with great visual power."
    }
  },
  "d20-1": {
    zh: {
      venue: "天空島裙岩懸崖與史前巨岩 Isle of Skye & Kilt Rock",
      description: "今日行程直指蓋雅語中代表「迷霧之島」的天空島(Isle of Skye)。行經地質奇絕崎嶇、猶如異星神明地平線的裙岩懸崖(Kilt Rock)。高聳的玄武岩玄立之牆酷似蘇格蘭格子呢百褶裙，挺拔聳峙在大西洋狂怒拍卷的寒浪邊，一道由高山融雪匯流的Mealt瀑布直接由百米高懸崖絕壁凌空直瀉入墨藍大洋之中。山谷荒原上，深粉紫色的野生石楠花肆意綻放，寒涼刺骨的主峰狂風呼嘯，大開大闔的孤傲與空靈景致完美撞擊大腦神經。"
    },
    en: {
      venue: "Isle of Skye, Kilt Rock & Old Man of Storr",
      description: "Traverse the magical Isle of Skye. Reach Kilt Rock, a massive cliff of basalt columns resembling a traditional pleated tartan kilts. Watch Mealt Falls fall from the 100m sheer precipice straight into the deep Atlantic Ocean. Walk the heather-blanketed moors under the gusty northern sky, soaking in Scotland's most dramatic, wild, and isolated horizons."
    }
  },
  "d21-1": {
    zh: {
      venue: "愛蓮朵娜城堡與神祕尼斯湖 Eilean Donan Castle",
      description: "早晨造訪矗立在三個深水海灣交匯岬角之上的「愛蓮朵娜城堡」(Eilean Donan Castle)。這座黑石築就、唯有一條狹窄古老石拱石道相通的幽美城堡，是威士忌包裝和多部巨製史詩大片的拍攝御用聖地。午後造訪神祕幽深的「尼斯湖」(Loch Ness)。因含泥炭而呈墨汁般渾濁深邃、極致陰寒的黑色湖水，倒映著兩側鬱鬱蔥蔥、挺拔筆直的松林，傳言湖底深邃無比，隱藏著冰河史前水妖的神秘蹤跡，增添蘇格蘭獨特的神話氣息。"
    },
    en: {
      venue: "Eilean Donan Castle & Loch Ness Mystery",
      description: "Visit Eilean Donan Castle, standing on a low rock island where three sea-lochs converge, connected to the mainland by a single stone footbridge. In the afternoon, head to the dark, bottomless waters of Loch Ness. Admire the dark reflections of towering pine forests on the water surface and explore the local legends of the prehistoric lake monster."
    }
  },
  "d22-1": {
    zh: {
      venue: "迪恩村幽靜水壩與利斯溪河畔 Dean Village Walk",
      description: "結束三日高地漫漫洗禮，下午安抵愛丁堡，隨即漫步至位於舊城區外、隱蔽不為人知的幽雅世外桃源「迪恩村」(Dean Village)。在潺潺流動、泛著清綠漣漪的利斯河畔，錯落分布著極具中世紀歐洲風情、由赤紅與黃赭石砌成的百年莊重磨坊住宅群。爬滿青藤、斑駁陳舊的古木與垂柳在清亮河岸招展。水鳥飛掠，這裡和咫尺之外車水馬龍喧鬧無比的王子大街道相比，呈現極簡極精緻的寂靜與高雅，是寫作與享受心靈片刻平息的聖地。"
    },
    en: {
      venue: "Serene Water of Leith & Dean Village",
      description: "Return from the highlands to Edinburgh. Walk to the secluded, fairytale enclave of Dean Village along the Water of Leith. Admire the half-timbered yellow and red sandstone milling residences dating back more than 200 years. Observe weeping willows and ivies brushing the limestone bridge as waterfowl glide past. Cozy up by the silent bank to enjoy a quiet, contemplative moment in Edinburgh."
    }
  },
  "d23-1": {
    zh: {
      venue: "聖保羅大教堂穹頂與千禧橋 St Paul’s Cathedral",
      description: "今日傍晚搭機由愛丁堡飛回倫敦，回到科爾切斯特大本營。下午特別前往聖保羅大教堂。雷恩大師設計的巨大巨型石灰岩圓頂，直刺倫敦晴朗藍天。這是僅次於西敏寺、見證英國無數帝王葬禮、查爾斯與黛安娜世紀婚禮的巴洛克史詩經典。走上精緻不凡、充滿幾何迴轉美感的心跳階梯爬上最頂部的「金廊與石廊」露台。頂風极目，整座倫敦在向晚金紅色的夕陽斜照中熠熠。隨後走過現代前衛鋼纜的「千禧橋」在泰晤士河岸留下不列顛最終浪漫剪影。"
    },
    en: {
      venue: "St. Paul's Cathedral & Millennium Bridge, London",
      description: "Fly back from Edinburgh and head to St. Paul's Cathedral. Christopher Wren's massive dome dominates London's skyline. Ascend the spiral geometric stone stairs to the high Golden Gallery. Gaze over the entire capital glistening under the warm, amber dusk. Walk across the futuristic suspension cable Millennium Bridge to conclude your classic British sightseeing."
    }
  },
  "d24-1": {
    zh: {
      venue: "Braintree Village 奧特萊斯名品村 Braintree Outlets",
      description: "今日是瘋狂大採購與備足好禮的完美囤貨日。上午前往埃塞克斯郡著名的 Braintree Outlets 奧特萊斯購物名品村。全露天對稱美式園林小鎮中，林立著不列顛與英倫當地的經典奢侈、戶外防風防雨風衣與設計師品牌專售。您可以為親密摯友和長輩挑選血統純正的蘇格蘭喀什米爾羊絨長圍巾、頂級英式莊園紅茶、及極簡時尚的精裝香水禮盒。在極度放鬆休閒的購物林蔭大步道上邊走邊挑，度過輕鬆舒緩的戰利品收集日。"
    },
    en: {
      venue: "Braintree Outlets & Shopping Village",
      description: "Spend a relaxing day sourcing souvenirs and designer brands at Braintree Village in Essex. Stroll along pleasant, tree-lined garden walks filled with British outerwears, premium Scottish cashmere wool scarves, fine English breakfast teas, and bespoke fragrance houses. It is the perfect, stress-free spot to procure keepsake gifts for friends and family."
    }
  },
  "d25-1": {
    zh: {
      venue: "希斯洛國際機場 Heathrow LHR 登機返台",
      description: "今日下午收拾囊裹，搭車前往倫敦希斯洛國際機場辦理行李直掛與奧匈英行程退稅手續。這趟歷時整整二十五天奇幻璀璨長征的漫長假期在此落下厚重完美的終章。在辦理好出關手續進入候機大堂登機時，看著窗外遠方起伏的機群。這一大疊蓋滿歐陸達爾馬提亞印戳的登機牌、相冊中無瑕純淨的十六湖翡翠、維也納優雅的莫札特餘弦、及蘇格蘭高地粗獷萬分的迷濛冷風，都將融合為血液中最絢麗、最高貴、也最不可磨滅的靈魂世界文學浪漫印記。"
    },
    en: {
      venue: "Heathrow LHR Flight Departure",
      description: "Head to Heathrow Airport for your return flight home. This brings an epic, unforgettable 25-day grand European tour to a majestic close. Sitting in the boarding gate gazing out at taxiing jetliners, the memories of your pages of boarding stamps, crystal-clear Plitvice lakes, Vienna's Mozart concerts, and Skye's wild wind will become deeply ingrained in your heart as a priceless treasure."
    }
  }
};

// Flight List translation
export const flightTranslations: Record<string, Record<Language, { route: string; airline: string }>> = {
  "LX139": {
    zh: { route: "香港 HKG ➡️ 蘇黎世 ZRH", airline: "瑞士國際航空 SWISS" },
    en: { route: "Hong Kong HKG ➡️ Zurich ZRH", airline: "SWISS International Air Lines" }
  },
  "LX316": {
    zh: { route: "蘇黎世 ZRH ➡️ 倫敦 LHR", airline: "瑞士國際航空 SWISS" },
    en: { route: "Zurich ZRH ➡️ London Heathrow LHR", airline: "SWISS International Air Lines" }
  },
  "FR5967": {
    zh: { route: "倫敦 STN ➡️ 杜布羅夫尼克 DBV", airline: "瑞安航空 Ryanair" },
    en: { route: "London Stansted STN ➡️ Dubrovnik DBV", airline: "Ryanair" }
  },
  "EZY3326": {
    zh: { route: "布拉格 PRG ➡️ 愛丁堡 EDI", airline: "易捷航空 easyJet" },
    en: { route: "Prague PRG ➡️ Edinburgh EDI", airline: "easyJet" }
  },
  "RK8604": {
    zh: { route: "愛丁堡 EDI ➡️ 倫敦 STN", airline: "瑞安航空 Ryanair" },
    en: { route: "Edinburgh EDI ➡️ London Stansted STN", airline: "Ryanair" }
  },
  "LX327": {
    zh: { route: "倫敦 LHR ➡️ 蘇黎世 ZRH", airline: "瑞士國際航空 SWISS" },
    en: { route: "London Heathrow LHR ➡️ Zurich ZRH", airline: "SWISS International Air Lines" }
  },
  "LX138": {
    zh: { route: "蘇黎世 ZRH ➡️ 香港 HKG", airline: "瑞士國際航空 SWISS" },
    en: { route: "Zurich ZRH ➡️ Hong Kong HKG", airline: "SWISS International Air Lines" }
  }
};

// Accommodation List translations
export const hotelTranslations: Record<string, Record<Language, { city: string; name: string; period: string }>> = {
  "7/29 - 8/2 (4夜)": {
    zh: { city: "科爾切斯特 Colchester", name: "Colchester 雅緻寓所", period: "7/29 - 8/2 (4晚)" },
    en: { city: "Colchester, United Kingdom", name: "Colchester Stay", period: "July 29 - August 2 (4 Nights)" }
  },
  "8/2 - 8/4 (2夜)": {
    zh: { city: "杜布羅夫尼克 Dubrovnik", name: "Guest House Kono 觀海民宿", period: "8/2 - 8/4 (2晚)" },
    en: { city: "Dubrovnik, Croatia", name: "Guest House Kono", period: "August 2 - August 4 (2 Nights)" }
  },
  "8/4 - 8/5 (1夜)": {
    zh: { city: "斯普利特 Split (Bristane)", name: "科爾卡國家公園森林謐境別墅", period: "8/4 - 8/5 (1晚)" },
    en: { city: "Split (Bristane), Croatia", name: "Peaceful villa nearby Krka National Park", period: "August 4 - August 5 (1 Night)" }
  },
  "8/5 - 8/7 (2夜)": {
    zh: { city: "十六湖 Plitvice (Smoljanac)", name: "Studio apartmani Patricia 壁爐公寓 #2", period: "8/5 - 8/7 (2晚)" },
    en: { city: "Plitvice (Smoljanac), Croatia", name: "Studio apartmani Patricia #2", period: "August 5 - August 7 (2 Nights)" }
  },
  "8/7 - 8/9 (2夜)": {
    zh: { city: "十六湖 Plitvice (Cvitović)", name: "Lov & Mar 隱世景觀別墅", period: "8/7 - 8/9 (2晚)" },
    en: { city: "Plitvice (Cvitović), Croatia", name: "Lov & Mar apartment", period: "August 7 - August 9 (2 Nights)" }
  },
  "8/9 - 8/10 (1夜)": {
    zh: { city: "跨國夜車 (Ostarije ➡️ Wien)", name: "EN1272 跨國歐鐵經典單人臥舖", period: "8/9 - 8/10 (1晚)" },
    en: { city: "Cross-Border Night Train", name: "EuroNight EN1272 Sleeper (1 Bed)", period: "August 9 - August 10 (1 Night)" }
  },
  "8/10 - 8/11 (1夜)": {
    zh: { city: "維也納 Vienna", name: "Hotel The Weekend 時尚藝術酒店", period: "8/10 - 8/11 (1晚)" },
    en: { city: "Vienna, Austria", name: "Hotel The Weekend", period: "August 10 - August 11 (1 Night)" }
  },
  "8/11 - 8/12 (1夜)": {
    zh: { city: "捷克克魯姆洛夫 Český Krumlov", name: "Church Apartments 歷史教堂公寓", period: "8/11 - 8/12 (1晚)" },
    en: { city: "Český Krumlov, Czechia", name: "Church Apartments", period: "August 11 - August 12 (1 Night)" }
  },
  "8/12 - 8/14 (2夜)": {
    zh: { city: "布拉格 Prague", name: "Hotel Royal 皇家精品設計酒店", period: "8/12 - 8/14 (2晚)" },
    en: { city: "Prague, Czechia", name: "Hotel Royal", period: "August 12 - August 14 (2 Nights)" }
  },
  "8/14 - 8/15 (1夜)": {
    zh: { city: "愛丁堡 Edinburgh", name: "愛丁堡特選尊享民宿", period: "8/14 - 8/15 (1晚)" },
    en: { city: "Edinburgh, Scotland", name: "Edinburgh Premier Stay", period: "August 14 - August 15 (1 Night)" }
  },
  "8/15 - 8/18 (2夜)": {
    zh: { city: "蘇格蘭高地 Highlands", name: "蘇格蘭高地莊園 B&B (三日遊包套住宿)", period: "8/15 - 8/18 (2晚)" },
    en: { city: "Highlands, Scotland", name: "Highlands B&B (3-Day Tour Included Stay)", period: "August 15 - August 18 (2 Nights)" }
  },
  "8/18 - 8/19 (1夜)": {
    zh: { city: "愛丁堡 Edinburgh", name: "愛丁堡返程景觀精緻套房", period: "8/18 - 8/19 (1晚)" },
    en: { city: "Edinburgh, Scotland", name: "Edinburgh Return Stay", period: "August 18 - August 19 (1 Night)" }
  },
  "8/19 - 8/21 (2夜)": {
    zh: { city: "科爾切斯特 Colchester", name: "Colchester 悠閒鄉野套房", period: "8/19 - 8/21 (2晚)" },
    en: { city: "Colchester, United Kingdom", name: "Colchester Return Stay", period: "August 19 - August 21 (2 Nights)" }
  }
};

// Emergency Contacts translations
export const emergencyTranslations: Record<string, Record<Language, { label: string; note: string }>> = {
  "112": {
    zh: { label: "歐洲通用緊急電話", note: "所有歐盟國家免費，救護、火警、警察通用，支援多國語言" },
    en: { label: "Europe SOS Line", note: "Free across all EU countries, covers medical, fire, & police. Multi-language support." }
  },
  "999": {
    zh: { label: "英國 警察/火警/救護", note: "英國境內緊急求助專線" },
    en: { label: "UK Emergency Dispatch", note: "Emergency support line within the UK for extreme peril" }
  },
  "101": {
    zh: { label: "英國 非緊急警政熱線", note: "遺失護照或財物、非即時人身威脅時撥打" },
    en: { label: "UK Non-Emergency Police", note: "Call for passport/wallet loss or reporting non-immediate threat" }
  },
  "158": {
    zh: { label: "捷克 警察局", note: "捷克當地直接轉接警察局專線" },
    en: { label: "Czechia Police Department", note: "Direct emergency line for Czech local police force" }
  },
  "133": {
    zh: { label: "奧地利 警察局", note: "奧地利當地直接轉接警察局專選" },
    en: { label: "Austria Police Station", note: "Direct connection line for Austria safety response" }
  },
  "1987": {
    zh: { label: "克羅埃西亞 道路救援 (HAK)", note: "克羅埃西亞境內發生自駕車輛故障時，提供英語道路救援" },
    en: { label: "Croatia Road Assistance (HAK)", note: "For car breakdown or driving emergencies inside Croatia. English spoken." }
  },
  "+886-800-085-095": {
    zh: { label: "旅外國人急難救助專線", note: "外交部領事事務局 global call, 提供24小時緊急諮詢與協助" },
    en: { label: "Global Citizen Protection", note: "24-hr hotline for critical overseas emergency assistance" }
  }
};

export const checklistTranslations: Record<string, Record<Language, { task: string; category: string }>> = {
  "c1": {
    zh: { task: "護照與簽證 (確認效期大於半年)", category: "重要文件" },
    en: { task: "Passport and visas (valid for > 6 months)", category: "Documents" }
  },
  "c2": {
    zh: { task: "歐鐵/跨國巴士電子票券下載至手機", category: "重要文件" },
    en: { task: "Download EuroRail & cross-border bus e-tickets to phone", category: "Documents" }
  },
  "c3": {
    zh: { task: "住宿與航班確認憑證 PDF", category: "重要文件" },
    en: { task: "PDFs of booking receipts for hotels & flights", category: "Documents" }
  },
  "c4": {
    zh: { task: "外幣兌換 (英鎊 GBP / 捷克克朗 CZK / 歐元 EUR 與克幣 HRK)", category: "資金錢包" },
    en: { task: "Exchange currencies (GBP, CZK, EUR, HRK)", category: "Funds" }
  },
  "c5": {
    zh: { task: "雙備份海外刷卡高回饋信用卡", category: "資金錢包" },
    en: { task: "Keep two high-cashback credit cards as backups", category: "Funds" }
  },
  "c6": {
    zh: { task: "英規三腳插頭、歐規雙圓頭萬用轉接頭", category: "電器配件" },
    en: { task: "UK three-pin & European two-round adaptable plugs", category: "Electronics" }
  },
  "c7": {
    zh: { task: "行動電源、各款充電線材及降噪耳機", category: "電器配件" },
    en: { task: "Power bank, various electronic cables, and noise-cancelling headphones", category: "Electronics" }
  },
  "c8": {
    zh: { task: "好穿耐磨慢跑健行鞋 (十六湖健行必備)", category: "個人用品" },
    en: { task: "Durable, high-abrasion running/hiking shoes (essential for Plitvice Lakes)", category: "Personal items" }
  },
  "c9": {
    zh: { task: "摺疊傘或輕便連帽防風防雨外套 (愛丁堡多雨)", category: "個人用品" },
    en: { task: "Folding umbrella or light zip-up windproof hooded raincoat (Edinburgh raining)", category: "Personal items" }
  },
  "c10": {
    zh: { task: "個人常用醫藥、防蚊液與高強度防曬乳", category: "個人用品" },
    en: { task: "Personal medicine cabinet, mosquito sprays, & high SPF sunblock", category: "Personal items" }
  }
};

