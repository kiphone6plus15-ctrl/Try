import React, { useState, useEffect, useRef } from 'react';
import {
  itineraryData,
  DayData,
  ItineraryItem,
  flightList,
  accommodationList,
  emergencyContacts,
  FlightInfo,
  AccommodationInfo,
  EmergencyContact
} from './itineraryData';
import {
  Language,
  uiTranslations,
  weatherTranslations,
  weekdayTranslations,
  tagTranslations,
  itineraryTranslations,
  flightTranslations,
  hotelTranslations,
  emergencyTranslations,
  checklistTranslations
} from './translations';


// --- CUSTOM SVG ICONS FOR ABSOLUTE OFFLINE STABILITY ---
function IconCalendar({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
    </svg>
  );
}

function IconBriefcase({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75v-4.25m16.5 0a3 3 0 0 0-3-3H7.05a3 3 0 0 0-3 3m16.5 0V9a2.25 2.25 0 0 0-2.25-2.25h-1.5a.75.75 0 0 0-.75-.75V4.85c0-.42-.321-.788-.74-.805a37.89 37.89 0 0 0-4.52 0c-.42.017-.74.385-.74.805V6c0 .414-.336.75-.75.75h-1.5A2.25 2.25 0 0 0 4.5 9v5.15m15 0H4.5" />
    </svg>
  );
}

function IconNavigation({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  );
}

function IconPhone({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.302a12.036 12.036 0 0 1-5.26-5.258c-.24-.441-.074-.927.302-1.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
    </svg>
  );
}

function IconChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function IconChevronUp({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function IconSearch({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.608 10.608Z" />
    </svg>
  );
}

function IconClock({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

// --- WEATHER ICON SELECTOR ---
function WeatherIcon({ condition, className = "w-5 h-5" }: { condition: string; className?: string }) {
  if (condition === 'sunny') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className={`${className} text-amber-500`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.512 4.512l1.59 1.59m11.796 11.796l1.59 1.59M3 12h2.25m13.5 0H21M4.512 19.488l1.59-1.59M17.898 6.102l1.59-1.59M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
      </svg>
    );
  }
  if (condition === 'cloudy') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className={`${className} text-stone-400`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 .332-7.482 3.5 3.5 0 0 0-6.666-2.472 3 3 0 0 0-5.694 1.133 4.218 4.218 0 0 0-1.72 3.321Z" />
      </svg>
    );
  }
  if (condition === 'rainy') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className={`${className} text-slate-500`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18V12a3.75 3.75 0 0 0-.332-7.482 3.5 3.5 0 0 0-6.666-2.472 3 3 0 0 0-5.694 1.133 4.218 4.218 0 0 0-1.72 3.321zM8.25 19.5l-.75 2.25M12 20.25l-.75 2.25M15.75 19.525l-.75 2.25" />
      </svg>
    );
  }
  // windy
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className={`${className} text-stone-500`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5h-15M18 10.5H6.75M21 13.5H3.75M16.5 16.5h-9" />
    </svg>
  );
}

// --- REFRESH ICON SPINNING COMPONENT ---
function IconRefresh({ className = "w-4 h-4", spinning = false }: { className?: string; spinning?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`${className} ${spinning ? 'animate-spin' : ''}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

// --- CODES & COORDINATES FOR CITIES ---
interface CityCoord {
  chineseName: string;
  englishQuery: string;
  lat: number;
  lon: number;
}

const CITY_COORDINATES: Record<string, CityCoord> = {
  "倫敦 London": { chineseName: "倫敦", englishQuery: "London", lat: 51.5074, lon: -0.1278 },
  "科爾切斯特 Colchester": { chineseName: "科爾切斯特", englishQuery: "Colchester", lat: 51.8892, lon: 0.9042 },
  "杜布羅夫尼克 Dubrovnik": { chineseName: "杜布羅夫尼克", englishQuery: "Dubrovnik", lat: 42.6507, lon: 18.0944 },
  "斯普利特 Split": { chineseName: "斯普利特", englishQuery: "Split", lat: 43.5081, lon: 16.4402 },
  "十六湖 Plitvice": { chineseName: "十六湖", englishQuery: "Plitvice", lat: 44.8808, lon: 15.6161 },
  "奧斯塔里耶 Ostarije": { chineseName: "奧斯塔里耶", englishQuery: "Ostarije", lat: 45.2239, lon: 15.2678 },
  "維也納 Vienna": { chineseName: "維也納", englishQuery: "Vienna", lat: 48.2082, lon: 16.3738 },
  "庫倫洛夫 Český Krumlov": { chineseName: "庫倫洛夫", englishQuery: "Cesky Krumlov", lat: 48.8127, lon: 14.3140 },
  "布拉格 Prague": { chineseName: "布拉格", englishQuery: "Prague", lat: 50.0755, lon: 14.4378 },
  "愛丁堡 Edinburgh": { chineseName: "愛丁堡", englishQuery: "Edinburgh", lat: 55.9533, lon: -3.1883 },
  "蘇格蘭高地 Highlands": { chineseName: "蘇格蘭高地", englishQuery: "Highlands", lat: 57.4778, lon: -4.2247 }
};

const getWMOWeatherStatus = (code: number): { text: string; condition: 'sunny' | 'cloudy' | 'rainy' | 'windy' } => {
  if (code === 0) return { text: "晴朗無雲 Clear", condition: "sunny" };
  if (code >= 1 && code <= 3) return { text: "晴時多雲 Partly Cloudy", condition: "cloudy" };
  if (code === 45 || code === 48) return { text: "有霧 Foggy", condition: "cloudy" };
  if (code >= 51 && code <= 55) return { text: "毛毛雨 Drizzle", condition: "rainy" };
  if (code >= 61 && code <= 65) return { text: "陣雨/中雨 Rainy", condition: "rainy" };
  if (code >= 71 && code <= 75) return { text: "有降雪 Snowy", condition: "rainy" };
  if (code >= 80 && code <= 82) return { text: "短暫強降雨 Showers", condition: "rainy" };
  if (code >= 95 && code <= 99) return { text: "雷陣雨 Thunderstorm", condition: "rainy" };
  return { text: "多雲陰天 Overcast", condition: "cloudy" };
};

const getDressingAdvice = (temp: number, code: number, lang: Language): string => {
  let advice = "";
  if (lang === 'zh') {
    if (temp < 10) {
      advice = "🥶 寒冷低溫：建議著羽絨衣、保暖發熱衣、防風大衣，注意極端溫差做好面部保暖。";
    } else if (temp < 15) {
      advice = "🧥 寒意微涼：建議雙層外搭或防風風衣，可採洋蔥式穿法，厚衛衣、發熱衣與毛呢大衣為佳。";
    } else if (temp < 20) {
      advice = "🍂 舒適微涼：適合長袖襯衫、針織秋衫、薄衛衣，隨身配戴薄夾克。早晚涼意明顯。";
    } else if (temp < 25) {
      advice = "🕶️ 暖和宜人：適合輕便短袖 T 恤、薄短袖配休閒外套、防曬罩衫或休閒風衣。";
    } else {
      advice = "☀️ 炎熱晴朗：著透氣涼爽短袖及短褲。建議佩戴遮陽帽、防曬墨鏡並塗抹高係數防曬乳。";
    }

    const isRain = (code >= 51 && code <= 65) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99);
    if (isRain) {
      advice += " 🌧️ 出門提醒：目前天候不穩定，請務必隨身攜帶折疊傘、著防潑水連帽外套！";
    }
  } else {
    if (temp < 10) {
      advice = "🥶 Cold Temp: Down jacket, thermal base layer, windproof heavy coat suggested. Keep warm against extreme wind chills.";
    } else if (temp < 15) {
      advice = "🧥 Chilly & Cold: Layer up with windbreaker or thermal hoodies; fleece sweater and wool coats are recommended.";
    } else if (temp < 20) {
      advice = "🍂 Cool & Dry: Perfect for long sleeves, light knits, or standard sweatshirts. Carry a handy jacket with you.";
    } else if (temp < 25) {
      advice = "🕶️ Warm & Pleasant: Great for breathable short-sleeve T-shirts, light blouses, or thin cardigans.";
    } else {
      advice = "☀️ Hot & Sunny: Wear thin light shirts and shorts. Put on a sunhat, shades, and apply high-factor SPF protectant.";
    }

    const isRain = (code >= 51 && code <= 65) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99);
    if (isRain) {
      advice += " 🌧️ Rain Warning: Unstable climate ahead. Keep a folding umbrella close and wear a water-repellent jacket!";
    }
  }

  return advice;
};

function WMOWeatherIcon({ code, className = "w-5 h-5" }: { code: number; className?: string }) {
  const { condition } = getWMOWeatherStatus(code);
  return <WeatherIcon condition={condition} className={className} />;
}

// --- IMAGE WITH ROBUST LAZY LOAD & DESIGNED PASTEL FALLBACK ---
function ImageWithFallback({ src, alt, fallbackText }: { src: string; alt: string; fallbackText: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getGradientClass = (text: string) => {
    const code = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = code % 4;
    const gradients = [
      "from-stone-700 to-stone-900",
      "from-neutral-800 to-stone-950",
      "from-slate-800 to-zinc-900",
      "from-zinc-800 to-stone-900"
    ];
    return gradients[index];
  };

  if (hasError) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${getGradientClass(fallbackText)} flex flex-col justify-center items-center p-6 text-center select-none`}>
        <span className="font-serif italic text-stone-100 text-[17px] mb-1.5 leading-relaxed tracking-wider">
          {fallbackText}
        </span>
        <span className="text-stone-400 font-mono text-[9px] uppercase tracking-widest">
          CENTRAL EUROPE & UK 2026
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-stone-100">
      {isLoading && (
        <div className="absolute inset-0 bg-stone-100 animate-pulse flex items-center justify-center">
          <span className="text-stone-400 font-mono text-[10px] tracking-widest">LOADING</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
          isLoading ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
        }`}
      />
    </div>
  );
}

// --- ERROR BOUNDARY CLASS COMPONENT (PROMOTES ROBUST RESILIENCY) ---
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Explicit declarations for strict TS configurations
  props: ErrorBoundaryProps;
  state: ErrorBoundaryState = { hasError: false };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props = props;
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App boundary caught fatal render path error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 flex flex-col justify-center items-center p-8 text-center">
          <h2 className="font-serif text-xl italic text-stone-800 mb-2">系統載入過程有些許偏差</h2>
          <p className="text-stone-500 text-xs mb-6 max-w-xs">這可能是由於瀏覽器快取異常或語法衝突。請重設應用程式或重新載入頁面。</p>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="px-6 py-2.5 bg-stone-800 text-stone-100 hover:bg-stone-900 transition-colors rounded-full font-mono text-xs tracking-widest uppercase"
          >
            重設本地存儲與重新載入
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- INITIAL TASKS FOR LOCAL PACKING CHECKLIST ---
const INITIAL_CHECKPACK = [
  { id: "c1", category: "重要文件", task: "護照與簽證 (確認效期大於半年)", checked: false },
  { id: "c2", category: "重要文件", task: "歐鐵/跨國巴士電子票券下載至手機", checked: false },
  { id: "c3", category: "重要文件", task: "住宿與航班確認憑證 PDF", checked: false },
  { id: "c4", category: "資金錢包", task: "外幣兌換 (英鎊 GBP / 捷克克朗 CZK / 歐元 EUR 與克幣 HRK)", checked: false },
  { id: "c5", category: "資金钱包", task: "雙備份海外刷卡高回饋信用卡", checked: false },
  { id: "c6", category: "電器配件", task: "英規三腳插頭、歐規雙圓頭萬用轉接頭", checked: false },
  { id: "c7", category: "電器配件", task: "行動電源、各款充電線材及降噪耳機", checked: false },
  { id: "c8", category: "個人用品", task: "好穿耐磨慢跑健行鞋 (十六湖健行必備)", checked: false },
  { id: "c9", category: "個人用品", task: "摺疊傘或輕便連帽防風防雨外套 (愛丁堡多雨)", checked: false },
  { id: "c10", category: "個人用品", task: "個人常用醫藥、防蚊液與高強度防曬乳", checked: false }
];

// --- TRAVEL BUDGET DEFAULT DATA ---
const DEFAULT_BUDGET = {
  totalBudget: 150000,
  items: [
    { id: 'b1', category: 'Flights', categoryZh: '國際/內陸機票', amount: 45000, note: '瑞士航空 + 瑞安航空' },
    { id: 'b2', category: 'Hotels', categoryZh: '住宿規費', amount: 38000, note: '雙人房分攤費用' },
    { id: 'b3', category: 'Food', categoryZh: '餐飲美食', amount: 25000, note: '米其林、薩赫咖啡及當地美味' },
    { id: 'b4', category: 'Transport', categoryZh: '自駕與歐鐵交通', amount: 18000, note: '租車、油資、臥舖 EN1272' },
    { id: 'b5', category: 'Tickets', categoryZh: '景點門票與通行證', amount: 12000, note: '大英、十六湖、城牆門票' },
    { id: 'b6', category: 'Shopping', categoryZh: '紀念品及購物', amount: 10000, note: 'Braintree Outlets & 羊絨圍巾' }
  ]
};

// --- MAIN ENTRANCE APP WITH NATIVE SHELL ---
export default function App() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}

function MainApp() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'tools'>('itinerary');
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('europe2026_lang');
      if (saved === 'en' || saved === 'zh') {
        return saved;
      }
    } catch (e) {
      // safe fallback
    }
    return 'zh';
  });

  const handleToggleLang = () => {
    const nextLang = lang === 'zh' ? 'en' : 'zh';
    setLang(nextLang);
    try {
      localStorage.setItem('europe2026_lang', nextLang);
    } catch (e) {
      console.error(e);
    }
  };

  const t = (key: string): string => {
    return uiTranslations[lang]?.[key] || key;
  };

  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [checklist, setChecklist] = useState<typeof INITIAL_CHECKPACK>([]);

  // --- USER CUSTOMIZABLE STATES (LOCAL STORAGE PERSISTED) ---
  const [daysItinerary, setDaysItinerary] = useState<DayData[]>(() => {
    try {
      const saved = localStorage.getItem('europe2026_itinerary');
      return saved ? JSON.parse(saved) : itineraryData;
    } catch (e) {
      return itineraryData;
    }
  });

  const saveItinerary = (newItinerary: DayData[]) => {
    setDaysItinerary(newItinerary);
    try {
      localStorage.setItem('europe2026_itinerary', JSON.stringify(newItinerary));
    } catch (e) {
      console.error(e);
    }
  };

  const [budgetData, setBudgetData] = useState(() => {
    try {
      const saved = localStorage.getItem('europe2026_budget');
      return saved ? JSON.parse(saved) : DEFAULT_BUDGET;
    } catch (e) {
      return DEFAULT_BUDGET;
    }
  });

  const saveBudget = (newBudget: typeof DEFAULT_BUDGET) => {
    setBudgetData(newBudget);
    try {
      localStorage.setItem('europe2026_budget', JSON.stringify(newBudget));
    } catch (e) {
      console.error(e);
    }
  };

  const [dayNotes, setDayNotes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('europe2026_day_notes');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const saveDayNotes = (notes: Record<number, string>) => {
    setDayNotes(notes);
    try {
      localStorage.setItem('europe2026_day_notes', JSON.stringify(notes));
    } catch (e) {
      console.error(e);
    }
  };

  // --- EDITOR / ACTION STATES ---
  const [editingItem, setEditingItem] = useState<ItineraryItem | null>(null);
  const [editingDayNum, setEditingDayNum] = useState<number | null>(null);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [addingDayNum, setAddingDayNum] = useState<number | null>(null);
  const [isPrintView, setIsPrintView] = useState(false);

  // --- CURRENCY CONVERTER STATES ---
  const [eurValue, setEurValue] = useState<number>(100);

  // --- TRAVEL ITEM CONTROL ACTIONS ---
  const handleUpdateItem = (updatedItem: ItineraryItem, dayNum: number) => {
    const updatedItinerary = daysItinerary.map(day => {
      if (day.dayNumber === dayNum) {
        return {
          ...day,
          items: day.items.map(item => item.id === updatedItem.id ? { ...updatedItem, isEdited: true } : item)
        };
      }
      return day;
    });
    saveItinerary(updatedItinerary);
    setEditingItem(null);
    setEditingDayNum(null);
  };

  const handleDeleteItem = (itemId: string, dayNum: number) => {
    if (confirm(lang === 'zh' ? '確定要從行程中刪除這個景點嗎？' : 'Are you sure you want to delete this spot?')) {
      const updatedItinerary = daysItinerary.map(day => {
        if (day.dayNumber === dayNum) {
          return {
            ...day,
            items: day.items.filter(item => item.id !== itemId)
          };
        }
        return day;
      });
      saveItinerary(updatedItinerary);
    }
  };

  const handleAddItem = (newItem: Omit<ItineraryItem, 'id'>, dayNum: number) => {
    const itemWithId: ItineraryItem = {
      ...newItem,
      id: `custom-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      isEdited: true // mark as custom/edited so static translation doesn't match
    };

    const updatedItinerary = daysItinerary.map(day => {
      if (day.dayNumber === dayNum) {
        return {
          ...day,
          items: [...day.items, itemWithId]
        };
      }
      return day;
    });
    saveItinerary(updatedItinerary);
    setIsAddingItem(false);
    setAddingDayNum(null);
  };

  // --- DYNAMIC PASSPORT CARD SVG EXPORT ---
  const downloadDaySVG = () => {
    const cityName = mapCityName(activeDayData.city, lang);
    const dateStr = mapDateString(activeDayData.dateString, lang);
    const notesStr = dayNotes[activeDayData.dayNumber] || (lang === 'zh' ? '尚未加入隨行備忘錄' : 'No personal notes written yet');
    
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
        <defs>
          <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#faf8f5" />
            <stop offset="100%" style="stop-color:#f0ece3" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#bg-grad)" />
        
        <!-- Luxury travel framing borders -->
        <rect x="20" y="20" width="560" height="760" fill="none" stroke="#2c2a29" stroke-width="2" opacity="0.15" rx="16" />
        <rect x="25" y="25" width="550" height="750" fill="none" stroke="#2c2a29" stroke-width="0.5" opacity="0.1" rx="12" />
        
        <!-- Header -->
        <text x="50" y="70" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#1c1917" letter-spacing="1">ITINERIS TRAVEL DIARY</text>
        <text x="50" y="95" font-family="'Courier New', monospace" font-size="10" font-weight="bold" fill="#78716c" letter-spacing="2">CENTRAL EUROPE &amp; UK 2026</text>
        
        <!-- Custom Stamp design -->
        <circle cx="510" cy="85" r="40" fill="none" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.7" />
        <text x="510" y="80" font-family="'Courier New', monospace" font-size="9" font-weight="bold" fill="#b45309" text-anchor="middle" opacity="0.8">DAY ${activeDayData.dayNumber}</text>
        <text x="510" y="95" font-family="'Courier New', monospace" font-size="8" fill="#b45309" text-anchor="middle" opacity="0.8">${activeDayData.dateString}</text>
        
        <line x1="50" y1="130" x2="550" y2="130" stroke="#1c1917" stroke-width="1.5" opacity="0.15" />
        
        <!-- Big Destination Info -->
        <text x="50" y="180" font-family="Georgia, serif" font-size="34" font-style="italic" font-weight="bold" fill="#1c1917">${cityName}</text>
        <text x="50" y="210" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#78716c">${dateStr} (${t(activeDayData.weekday)})  |  🌤️ Temp: ${activeDayData.weatherTemp}</text>
        
        <!-- Daily Activities list -->
        <text x="50" y="260" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#1c1917">DAILY HIGHLIGHTS</text>
        
        ${activeDayData.items.slice(0, 4).map((item, idx) => {
          const trans = !item.isEdited && itineraryTranslations[item.id]?.[lang];
          const v = trans ? trans.venue : item.venue;
          const detailsText = trans ? trans.description : item.description;
          const escapedV = v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          const escapedD = (detailsText || '').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          const y = 300 + idx * 75;
          return `
            <g>
              <circle cx="65" cy="${y - 4}" r="5" fill="#1c1917" />
              <line x1="65" y1="${y}" x2="65" y2="${y + 50}" stroke="#1c1917" stroke-width="0.5" opacity="0.2" />
              
              <text x="85" y="${y}" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#b45309">${item.time}</text>
              <text x="145" y="${y}" font-family="system-ui, sans-serif" font-size="12.5" font-weight="bold" fill="#1c1917">${escapedV.substring(0, 42)}</text>
              <text x="145" y="${y + 18}" font-family="system-ui, sans-serif" font-size="10" fill="#78716c" opacity="0.8">${escapedD.substring(0, 68)}...</text>
            </g>
          `;
        }).join('')}
        
        <!-- Notes part -->
        <g transform="translate(50, 595)">
          <rect width="500" height="125" fill="#fcfbf7" stroke="#1c1917" stroke-width="0.5" opacity="0.3" rx="8" />
          <text x="15" y="23" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#1c1917" font-style="italic">📝 MEMORANDUM &amp; REFLECTIONS</text>
          
          <foreignObject x="15" y="36" width="470" height="75">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:system-ui, sans-serif; font-size:10.5px; color:#57534e; line-height:1.45; overflow:hidden; text-align:justify; word-break:break-all;">
              ${notesStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>")}
            </div>
          </foreignObject>
        </g>
        
        <!-- Footer text -->
        <text x="300" y="755" font-family="'Courier New', monospace" font-size="8" fill="#a8a29e" text-anchor="middle" letter-spacing="1">Generated via Itineris Travel Companion Passport</text>
      </svg>
    `;
    
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `itineris_day_${activeDayData.dayNumber}_passport.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // --- BACKUP RESTORATION AND EXPORT ---
  const exportAllDataToJSON = () => {
    const payload = {
      itinerary: daysItinerary,
      budget: budgetData,
      notes: dayNotes,
      checklist: checklist
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "itineris_europe_2026_personal_backup.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importAllDataFromJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.itinerary) saveItinerary(parsed.itinerary);
        if (parsed.budget) saveBudget(parsed.budget);
        if (parsed.notes) saveDayNotes(parsed.notes);
        if (parsed.checklist) {
          setChecklist(parsed.checklist);
          localStorage.setItem('europe2026_checklist', JSON.stringify(parsed.checklist));
        }
        alert(lang === 'zh' ? '🎉 個人資料庫成功匯入！' : '🎉 Backup imported successfully!');
        window.location.reload();
      } catch (err) {
        alert(lang === 'zh' ? '❌ 檔案解析失敗，請確認是否為正確的 JSON 備份檔' : '❌ Failed to parse file. Confirm it is a correct JSON backup.');
      }
    };
    reader.readAsText(file);
  };

  // --- PWA & NOTIFICATIONS STATES & REGISTRY ---
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [notifPermission, setNotifPermission] = useState<NotificationPermission>(
    typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'default'
  );
  const [showTestNoticeInfo, setShowTestNoticeInfo] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
          console.log('Service Worker registered successfully!', reg.scope);
        })
        .catch((err) => {
          console.error('Service Worker registration failed:', err);
        });
    }

    // App installation prompts listener
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsAppInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    if (window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone) {
      setIsAppInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    try {
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsAppInstalled(true);
      }
    } catch (err) {
      console.error(err);
    }
    setDeferredPrompt(null);
  };

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) return;
    try {
      const permission = await Notification.requestPermission();
      setNotifPermission(permission);
    } catch (err) {
      console.error(err);
    }
  };

  const sendTestNotification = () => {
    if (!('Notification' in window)) return;
    if (Notification.permission !== 'granted') {
      requestNotificationPermission();
      return;
    }

    setShowTestNoticeInfo(true);
    setTimeout(() => {
      setShowTestNoticeInfo(false);
    }, 8000);

    // Schedule 5-second local mock landing push alerts
    setTimeout(() => {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          action: 'showNotification',
          title: lang === 'zh' ? '🛬 Itineris: 班機即將降落 Heathrow!' : '🛬 Itineris: Landing shortly at Heathrow!',
          body: lang === 'zh' 
            ? '英國豪情假期正式起航！倫敦微雨 17°C，記得攜帶連帽外套與隨身摺傘。護照請備妥！' 
            : 'Welcome to United Kingdom! London has light rain, 17°C. Get your hoody or folding umbrella ready.',
          tag: 'flight-landing-test'
        });
      } else {
        try {
          new Notification(lang === 'zh' ? '🛬 Itineris: 班機即將降落 Heathrow!' : '🛬 Itineris: Landing shortly at Heathrow!', {
            body: lang === 'zh' 
              ? '英國豪情假期正式起航！倫敦微雨 17°C，記得攜帶連帽外套與隨身摺傘。護照請備妥！' 
              : 'Welcome to United Kingdom! London has light rain, 17°C. Get your hoody or folding umbrella ready.',
            icon: '/icon-512.jpg'
          });
        } catch (e) {
          console.error('Regular Notification failed, fallback to show on active SW registration', e);
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
              registration.showNotification(lang === 'zh' ? '🛬 Itineris: 班機即將降落 Heathrow!' : '🛬 Itineris: Landing shortly at Heathrow!', {
                body: lang === 'zh' 
                  ? '英國豪情假期正式起航！倫敦微雨 17°C，記得攜帶連帽外套與隨身摺傘。護照請備妥！' 
                  : 'Welcome to United Kingdom! London has light rain, 17°C. Get your hoody or folding umbrella ready.',
                icon: '/icon-512.jpg',
                badge: '/icon-512.jpg'
              });
            });
          }
        }
      }
    }, 5000);
  };

  // Ref list for horizontally scrolling selected day into viewport smoothly
  const daysScrollRef = useRef<HTMLDivElement>(null);
  const dayButtonRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  // --- LIVE WEATHER STATES ---
  const [isWeatherExpanded, setIsWeatherExpanded] = useState(false);
  const [selectedWeatherCity, setSelectedWeatherCity] = useState<string>('');
  const [weatherInfo, setWeatherInfo] = useState<{
    currentTemp: number;
    currentCode: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    forecast: Array<{
      date: string;
      tempMax: number;
      tempMin: number;
      code: number;
      dayOfWeek: string;
    }>;
  } | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  // Parse active day details
  const activeDayData = daysItinerary.find(d => d.dayNumber === selectedDayNum) || daysItinerary[0];

  // Auto-sync weather city with the itinerary active day city
  useEffect(() => {
    if (activeDayData?.city) {
      setSelectedWeatherCity(activeDayData.city);
    }
  }, [activeDayData?.city]);

  // Fetch weather when city selection is adjusted
  useEffect(() => {
    if (selectedWeatherCity) {
      fetchWeatherForCity(selectedWeatherCity);
    }
  }, [selectedWeatherCity]);

  const fetchWeatherForCity = async (cityName: string) => {
    const matchedKey = Object.keys(CITY_COORDINATES).find(
      key => key.toLowerCase().includes(cityName.split(" ")[0].toLowerCase()) || cityName.toLowerCase().includes(key.toLowerCase())
    );
    const cityCoord = matchedKey ? CITY_COORDINATES[matchedKey] : null;

    if (!cityCoord) {
      setWeatherError("無法辨識此城市的地理經緯度資訊");
      setWeatherInfo(null);
      return;
    }

    setWeatherLoading(true);
    setWeatherError(null);

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${cityCoord.lat}&longitude=${cityCoord.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("雷霆連線異常");
      }

      const data = await response.json();
      const daily = data.daily;
      const daysOfWeek = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];

      const forecastDays = [];
      for (let i = 1; i <= 3; i++) {
        if (daily.time[i]) {
          const dateObj = new Date(daily.time[i]);
          const dayStr = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
          const wkDay = daysOfWeek[dateObj.getDay()];
          forecastDays.push({
            date: dayStr,
            dayOfWeek: wkDay,
            tempMax: Math.round(daily.temperature_2m_max[i]),
            tempMin: Math.round(daily.temperature_2m_min[i]),
            code: daily.weather_code[i]
          });
        }
      }

      setWeatherInfo({
        currentTemp: Math.round(data.current.temperature_2m),
        currentCode: data.current.weather_code,
        feelsLike: Math.round(data.current.apparent_temperature),
        humidity: data.current.relative_humidity_2m,
        windSpeed: Math.round(data.current.wind_speed_10m),
        forecast: forecastDays
      });
    } catch (err) {
      console.error("Failed to load weather:", err);
      setWeatherError("未能連線至即時氣象台，顯示離線預估溫度");
    } finally {
      setWeatherLoading(false);
    }
  };

  // Initialize checklist from localStorage with safe fallback
  useEffect(() => {
    try {
      const saved = localStorage.getItem('europe2026_checklist');
      if (saved) {
        setChecklist(JSON.parse(saved));
      } else {
        setChecklist(INITIAL_CHECKPACK);
      }
    } catch (e) {
      setChecklist(INITIAL_CHECKPACK);
    }
  }, []);

  // Sync checklist changes with local storage on edits
  const handleToggleCheck = (id: string) => {
    const updated = checklist.map(t => t.id === id ? { ...t, checked: !t.checked } : t);
    setChecklist(updated);
    try {
      localStorage.setItem('europe2026_checklist', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Reset checklist task progress back to 0
  const handleResetChecklist = () => {
    const resetList = checklist.map(t => ({ ...t, checked: false }));
    setChecklist(resetList);
    try {
      localStorage.setItem('europe2026_checklist', JSON.stringify(resetList));
    } catch (e) {
      console.error(e);
    }
  };

  // Trigger smooth scroll when a day changes is requested
  const handleSelectDay = (dayNum: number) => {
    setSelectedDayNum(dayNum);
    const targetEl = dayButtonRefs.current[dayNum];
    if (targetEl && daysScrollRef.current) {
      const parent = daysScrollRef.current;
      const offsetLeft = targetEl.offsetLeft;
      const parentWidth = parent.clientWidth;
      const targetWidth = targetEl.clientWidth;
      
      parent.scrollTo({
        left: offsetLeft - (parentWidth / 2) + (targetWidth / 2),
        behavior: 'smooth'
      });
    }
  };

  // Easily toggle expansion state of a specific itinerary detail block
  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Expanding or collapsing all active cards currently rendered on screen
  const handleToggleAllOnDay = (dayItems: ItineraryItem[], shouldExpand: boolean) => {
    const nextStates = { ...expandedCards };
    dayItems.forEach(item => {
      nextStates[item.id] = shouldExpand;
    });
    setExpandedCards(nextStates);
  };

  // Logic to process simple global live search of cards
  const isSearching = searchQuery.trim().length > 0;
  
  // Custom tag color utility mapping
  const getTagColorClass = (tag: string): string => {
    const clean = tag.trim();
    if (clean.includes("必訪地標") || clean.includes("歷史文化") || clean.includes("不列顛")) {
      return "bg-stone-100 text-stone-800 border-stone-200/60";
    }
    if (clean.includes("必吃美食") || clean.includes("地中海風")) {
      return "bg-amber-50 text-amber-900 border-amber-200/50";
    }
    if (clean.includes("必吃素食") || clean.includes("免費景點") || clean.includes("漫步推薦")) {
      return "bg-neutral-100 text-neutral-800 border-neutral-200";
    }
    if (clean.includes("需預約") || clean.includes("收費")) {
      return "bg-rose-50 text-rose-800 border-rose-200/50";
    }
    if (clean.includes("攝影熱點") || clean.includes("極致美景") || clean.includes("日落絕景")) {
      return "bg-stone-50 text-stone-700 border-stone-200/40";
    }
    if (clean.includes("伴手禮") || clean.includes("網美") || clean.includes("文青")) {
      return "bg-stone-100 text-stone-700 border-stone-200/50";
    }
    return "bg-stone-50 text-stone-600 border-stone-100";
  };

  // Search filter across ALL 25 days to extract matched venues/descriptions
  const filteredSearchResults = (() => {
    if (!isSearching) return [];
    const query = searchQuery.toLowerCase();
    const matches: Array<{ day: DayData; item: ItineraryItem }> = [];
    daysItinerary.forEach(day => {
      day.items.forEach(item => {
        const itemTrans = !item.isEdited && itineraryTranslations[item.id]?.[lang];
        const localizedVenue = itemTrans ? itemTrans.venue : item.venue;
        const localizedDesc = itemTrans ? itemTrans.description : item.description;
        const localizedCity = mapCityName(day.city, lang);
        const localizedTags = item.tags.map(t => tagTranslations[lang]?.[t] || t);
        
        if (
          localizedVenue.toLowerCase().includes(query) ||
          localizedDesc.toLowerCase().includes(query) ||
          localizedCity.toLowerCase().includes(query) ||
          item.venue.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          day.city.toLowerCase().includes(query) ||
          localizedTags.some(t => t.toLowerCase().includes(query)) ||
          item.tags.some(t => t.toLowerCase().includes(query))
        ) {
          matches.push({ day, item });
        }
      });
    });
    return matches;
  })();

  const estTemp = parseInt((weatherInfo ? `${weatherInfo.currentTemp}` : activeDayData.weatherTemp).replace("°C", ""), 10) || 15;
  const estCode = weatherInfo ? weatherInfo.currentCode : (activeDayData.weatherCondition === 'sunny' ? 0 : activeDayData.weatherCondition === 'rainy' ? 61 : 3);

  // Helper helper to format city text split
  const mapCityName = (cityStr: string, activeLang: Language): string => {
    if (activeLang === 'zh') return cityStr;
    const parts = cityStr.split(' ');
    if (parts.length > 1) {
      return parts.slice(1).join(' ');
    }
    return cityStr;
  };

  // Helper to format date text
  const mapDateString = (dateStr: string, activeLang: Language): string => {
    if (activeLang === 'zh') return dateStr;
    return dateStr
      .replace('7月', 'July ')
      .replace('8月', 'August ')
      .replace('日', '');
  };

  const translateWeather = (weatherStatus: string): string => {
    return weatherTranslations[lang]?.[weatherStatus] || weatherStatus;
  };

  const getLocalizedItem = (item: ItineraryItem): { venue: string; description: string } => {
    const itemTrans = itineraryTranslations[item.id]?.[lang];
    return {
      venue: itemTrans?.venue || item.venue,
      description: itemTrans?.description || item.description
    };
  };

  const getLocalizedFlight = (flight: FlightInfo): { route: string; airline: string } => {
    const flightTrans = flightTranslations[flight.flightNo]?.[lang];
    return {
      route: flightTrans?.route || flight.route,
      airline: flightTrans?.airline || flight.airline
    };
  };

  const getLocalizedHotel = (hotel: AccommodationInfo): { city: string; name: string; period: string } => {
    const hotelTrans = hotelTranslations[hotel.period]?.[lang];
    return {
      city: hotelTrans?.city || hotel.city,
      name: hotelTrans?.name || hotel.name,
      period: hotelTrans?.period || hotel.period
    };
  };

  const getLocalizedEmergency = (contact: EmergencyContact): { label: string; note: string } => {
    const contactTrans = emergencyTranslations[contact.number]?.[lang];
    return {
      label: contactTrans?.label || contact.label,
      note: contactTrans?.note || contact.note
    };
  };

  const getLocalizedChecklist = (id: string, defaultTask: string, defaultCategory: string) => {
    const itemTrans = checklistTranslations[id]?.[lang];
    return {
      task: itemTrans?.task || defaultTask,
      category: itemTrans?.category || defaultCategory
    };
  };

  if (isPrintView) {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans p-4 sm:p-12 animate-fade-in print:p-0">
        
        {/* PRINT NAVIGATION BAR (HIDDEN DURING PRINT) */}
        <div className="max-w-4xl mx-auto mb-8 bg-white border border-stone-200/80 p-4.5 rounded-2xl shadow-sm flex flex-wrap gap-3 items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎛️</span>
            <div>
              <h3 className="font-serif italic font-bold text-stone-850 text-sm">
                {lang === 'zh' ? '行程組裝與列印中心' : 'Itinerary Export & Print Hub'}
              </h3>
              <p className="text-[10px] text-stone-450">
                {lang === 'zh' ? '預覽個人化旅遊手冊，可匯出為 PDF 或儲存備份' : 'Export your custom itinerary, print to PDF, or backup your files'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleLang}
              className="text-[11px] font-semibold border border-stone-200 hover:border-stone-450 bg-stone-50 hover:bg-stone-100 px-3 py-1.5 rounded-lg text-stone-750 transition-colors cursor-pointer"
            >
              {lang === 'zh' ? 'English' : '繁體中文'}
            </button>

            <button
              onClick={exportAllDataToJSON}
              className="text-[11px] font-semibold bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
              title={lang === 'zh' ? '導出 JSON 備份檔' : 'Export JSON Backup'}
            >
              📥 {lang === 'zh' ? '導出備份' : 'Export JSON'}
            </button>

            <label className="text-[11px] font-semibold bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1">
              📤 {lang === 'zh' ? '導入備份' : 'Import JSON'}
              <input
                type="file"
                accept=".json"
                onChange={importAllDataFromJSON}
                className="hidden"
              />
            </label>

            <button
              onClick={() => window.print()}
              className="text-[11px] font-bold bg-stone-900 hover:bg-stone-850 text-amber-200 hover:text-amber-100 px-4 py-1.5 rounded-lg transition-all cursor-pointer shadow-xs animate-pulse"
            >
              🖨️ {lang === 'zh' ? '列印 / 存為 PDF' : 'Print / Save PDF'}
            </button>
            
            <button
              onClick={() => setIsPrintView(false)}
              className="text-[11px] font-bold text-stone-500 hover:text-stone-800 border border-stone-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              ✕ {lang === 'zh' ? '關閉預覽' : 'Close'}
            </button>
          </div>
        </div>

        {/* PRINT CONTENT BOOK */}
        <div className="max-w-3xl mx-auto bg-white border border-stone-200/50 p-8 sm:p-12 rounded-[24px] shadow-sm space-y-10 print:border-none print:shadow-none print:p-0 print:m-0 animate-fade-in">
          
          {/* COVER PAGE */}
          <div className="text-center py-16 border-b-2 border-double border-stone-300 space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-wide uppercase">ITINERIS</h1>
            <p className="font-mono text-xs tracking-widest text-stone-500 font-bold">THE PERSONAL TRAVEL PASSPORT BOOK</p>
            <div className="h-[1px] w-40 bg-stone-300 mx-auto my-6"></div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-wider text-amber-700 font-semibold uppercase">{lang === 'zh' ? '瑞士自駕、奧匈帝國與大英古堡 25 定' : '25-Day Grand Central Europe & UK'}</span>
              <h2 className="font-serif italic font-medium text-stone-700 text-lg sm:text-xl md:text-2xl mt-1 leading-snug">
                {lang === 'zh' ? '倫敦・愛丁堡・蘇黎世・克羅埃西亞・布拉格・布達佩斯・維也納' : 'London • Edinburgh • Switzerland • Croatia • Prague • Budapest • Vienna'}
              </h2>
            </div>
            <p className="text-[10px] text-stone-300 font-mono pt-4 uppercase">
              {lang === 'zh' ? '出發日期：2026 夏季  |  持有人：個人隨行備忘自主手冊' : 'July - Aug 2026 Summer  |  Compiled Personal Edition'}
            </p>
          </div>

          {/* BUDGET DIVISION */}
          <div className="py-2 border-b border-stone-100 space-y-4">
            <h3 className="font-serif italic text-base sm:text-lg font-bold text-stone-850 border-b border-stone-200 pb-1.5">
              {lang === 'zh' ? '一、 旅費財務預算分配書' : 'I. Travel Budget Statement'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/40">
                <span className="text-stone-400 block font-mono text-[9px] uppercase font-bold tracking-wider">{lang === 'zh' ? '預算上限' : 'Allocated Budget'}</span>
                <p className="text-base font-bold font-serif text-stone-855 mt-1">${budgetData.totalBudget.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/40">
                <span className="text-stone-400 block font-mono text-[9px] uppercase font-bold tracking-wider">{lang === 'zh' ? '預估支出累計' : 'Total Planned Expenses'}</span>
                <p className="text-base font-bold font-serif text-stone-855 mt-1">
                  ${budgetData.items.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/40 col-span-2 md:col-span-1">
                <span className="text-stone-400 block font-mono text-[9px] uppercase font-bold tracking-wider">{lang === 'zh' ? '其餘餘額' : 'Remaining Balance'}</span>
                {(() => {
                  const spent = budgetData.items.reduce((acc, curr) => acc + curr.amount, 0);
                  const bal = budgetData.totalBudget - spent;
                  return (
                    <p className={`text-base font-bold font-serif mt-1 ${bal >= 0 ? "text-emerald-750" : "text-rose-600"}`}>
                      ${bal.toLocaleString()}
                    </p>
                  );
                })()}
              </div>
            </div>

            <table className="w-full text-left text-xs text-stone-600 border-collapse mt-4">
              <thead>
                <tr className="border-b border-stone-200 text-stone-405 font-mono text-[9px] tracking-wider uppercase">
                  <th className="py-2 pr-4">{lang === 'zh' ? '類別項目' : 'Category'}</th>
                  <th className="py-2 pr-4">{lang === 'zh' ? '細項說明' : 'Details / Notes'}</th>
                  <th className="py-2 text-right">{lang === 'zh' ? '已編入金額' : 'Amount'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {budgetData.items.map((bItem, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50">
                    <td className="py-2.5 font-medium text-stone-850">{lang === 'zh' ? bItem.categoryZh : bItem.category}</td>
                    <td className="py-2.5 text-stone-400 italic">{bItem.note || '—'}</td>
                    <td className="py-2.5 text-right font-mono font-semibold text-stone-800">${bItem.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SITES SCHEDULES */}
          <div className="space-y-8 pt-4">
            <h3 className="font-serif italic text-base sm:text-lg font-bold text-stone-850 border-b border-stone-200 pb-1.5">
              {lang === 'zh' ? '二、 每日預設與自訂行程表' : 'II. 25-Day Detailed Itineraries'}
            </h3>
            
            <div className="space-y-10">
              {daysItinerary.map((day) => {
                const dayNoteText = dayNotes[day.dayNumber];
                const localizedCity = mapCityName(day.city, lang);
                const localizedDate = mapDateString(day.dateString, lang);
                
                return (
                  <div key={day.dayNumber} className="border-b border-stone-100 pb-8 space-y-4 break-inside-avoid">
                    <div className="flex justify-between items-baseline border-b border-stone-705 pb-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-base font-bold text-stone-900">Day {day.dayNumber < 10 ? `0${day.dayNumber}` : day.dayNumber}</span>
                        <span className="font-serif italic text-[14px] text-stone-750 font-medium">{localizedCity}</span>
                      </div>
                      <span className="font-mono text-xs text-stone-400">
                        {localizedDate} ({t(day.weekday)})
                      </span>
                    </div>

                    <div className="space-y-4">
                      {day.items.length > 0 ? (
                        day.items.map((item, idx) => {
                          const itemTrans = !item.isEdited && itineraryTranslations[item.id]?.[lang];
                          const venue = itemTrans ? itemTrans.venue : item.venue;
                          const desc = itemTrans ? itemTrans.description : item.description;

                          return (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-1 text-xs">
                              {/* Time */}
                              <div className="md:col-span-2 font-mono font-bold text-amber-705 tracking-wider">
                                {item.time}
                              </div>
                              {/* Venue */}
                              <div className="md:col-span-3 font-serif font-bold text-stone-900">
                                {venue}
                              </div>
                              {/* Details */}
                              <div className="md:col-span-7 text-stone-500 text-justify leading-relaxed">
                                {desc}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-xs text-stone-400 font-serif italic text-center py-2">
                          {lang === 'zh' ? '此日暫無參訪計畫景點' : 'No attractions added.'}
                        </p>
                      )}
                    </div>

                    {dayNoteText && (
                      <div className="bg-amber-50/15 border border-amber-200/20 rounded-xl p-3 text-xs space-y-0.5 font-serif italic">
                        <span className="font-sans font-bold text-[8px] uppercase tracking-wider text-amber-800 font-semibold block">
                          📝 {lang === 'zh' ? '旅人隨行記事備忘' : 'MEMO & NOTES'}
                        </span>
                        <p className="text-stone-700 font-sans text-[11px] leading-relaxed whitespace-pre-wrap">{dayNoteText}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="text-center text-stone-400 font-mono text-[9px] pt-12 border-t border-stone-100 select-none">
            © 2026 ITINERIS TRAVEL DECK • GENERATED FOR THE OWNER OF THIS PASSPORT
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 flex justify-center items-start selection:bg-stone-800 selection:text-white">
      {/* 
        PREMIUM MOBILE FRAME CONTAINER
        - On desktop: Centers nicely, with refined minimalist bezels and 3D shadows.
        - On mobile: Scales 100% full screen to blend naturally as a native app shell.
      */}
      <div className="w-full max-w-md bg-stone-50 shadow-2xl min-h-screen flex flex-col relative border-x border-stone-200/50">
        
        {/* TOP TAB CONTROL INTERACTION BAR - NO LANDING HERO TITLE (PER "不要加任何標題") */}
        <header className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/30 px-4 pt-4 pb-2">
          
          <div className="flex items-center justify-between mb-3">
            {/* Minimal Logo / Local Indicator Area with Serif Styling instead of big title */}
            <div className="flex items-baseline space-x-1.5 font-serif">
              <span className="text-xl font-medium tracking-tight text-stone-900">Itineris</span>
              <span className="text-[11px] italic text-stone-400">Europe 2026</span>
            </div>
            {/* Language Switcher Capsule in Top Right */}
            <button
              onClick={handleToggleLang}
              className="px-2 py-1 bg-stone-100 hover:bg-stone-200 border border-stone-200/40 text-[10.5px] font-medium text-stone-700 hover:text-stone-950 transition-all rounded-lg active:scale-95 flex items-center gap-1 cursor-pointer animate-fade-in"
              title={lang === 'zh' ? 'Switch to English' : '切換至繁體中文'}
            >
              <span>🌐</span>
              <span>{lang === 'zh' ? 'English' : '繁體中文'}</span>
            </button>
          </div>

          {/* Core App View State Switcher tabs */}
          <div className="grid grid-cols-2 gap-2 bg-stone-100 p-1 rounded-xl">
            <button
              id="tab-itinerary"
              onClick={() => setActiveTab('itinerary')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                activeTab === 'itinerary'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <IconCalendar className="w-4 h-4" />
              {t('itineraryTab')}
            </button>
            <button
              id="tab-tools"
              onClick={() => setActiveTab('tools')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                activeTab === 'tools'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <IconBriefcase className="w-4 h-4" />
              {t('toolsTab')}
            </button>
          </div>

          {/* Render Minimalistic Search bar only for Itinerary page */}
          {activeTab === 'itinerary' && (
            <div className="mt-3 relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-stone-400 pointer-events-none">
                <IconSearch className="w-3.5 h-3.5" />
              </span>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-1.5 bg-stone-100 focus:bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 border border-transparent rounded-lg text-xs transition-all"
              />
              {isSearching && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-2 flex items-center px-1 text-stone-400 hover:text-stone-700 text-xs font-mono"
                  title="Clear"
                >
                  ✕
                </button>
              )}
            </div>
          )}
        </header>

        {/* MAIN VIEWS WORKSPACE CONTAINER */}
        <main className="flex-1 pb-24 overflow-y-auto">
          
          {activeTab === 'itinerary' ? (
            /* ITINERARY WORKSPACE PATH */
            <div>
              {/* HORIZONTAL DATE PICKER BAR */}
              {!isSearching && (
                <div className="bg-stone-50 pt-2 pb-4 border-b border-stone-200/20">
                  <div
                    ref={daysScrollRef}
                    className="flex gap-2.5 px-4 overflow-x-auto no-scrollbar scroll-smooth"
                  >
                    {daysItinerary.map((day) => {
                      const isActive = day.dayNumber === selectedDayNum;
                      return (
                        <button
                          key={day.dayNumber}
                          ref={el => { dayButtonRefs.current[day.dayNumber] = el; }}
                          onClick={() => handleSelectDay(day.dayNumber)}
                          className={`flex-none w-14 py-2.5 rounded-xl border flex flex-col items-center justify-between transition-all duration-300 ${
                            isActive
                              ? 'bg-stone-900 border-stone-900 text-white shadow-md shadow-stone-950/20 scale-[1.03]'
                              : 'bg-white border-stone-200/60 hover:border-stone-400 text-stone-700'
                          }`}
                        >
                          <span className="font-mono text-[9px] uppercase tracking-wider opacity-70">
                            Day
                          </span>
                          <span className="text-sm font-semibold font-mono tracking-tight my-0.5">
                            {day.dayNumber < 10 ? `0${day.dayNumber}` : day.dayNumber}
                          </span>
                          <span className="text-[10px] scale-90 opacity-80 min-h-[14px]">
                            {day.dateString.split("月")[1].replace("日", "")}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SEARCH MODE HEADER & STATUS LOGS */}
              {isSearching ? (
                <div className="px-5 pt-4 pb-2">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block mb-1">
                    SEARCH RESULTS
                  </span>
                  <p className="text-stone-600 text-[13px] font-sans">
                    關鍵字「<span className="font-semibold text-stone-950">{searchQuery}</span>」共媒合到了{" "}
                    <span className="font-serif italic font-semibold text-amber-700 text-base">{filteredSearchResults.length}</span>{" "}
                    個相關行程點：
                  </p>
                </div>
              ) : (
                /* INLINE LIVE DAY STATS DISPLAY Bar */
                <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif italic text-base text-stone-850 flex items-center gap-1.5 animate-fade-in">
                      <span>{mapCityName(activeDayData.city, lang)}</span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                      <span className="font-sans text-[11px] not-italic text-stone-400 font-medium tracking-wide pt-0.5">
                        {mapDateString(activeDayData.dateString, lang)} ({t(activeDayData.weekday)})
                      </span>
                    </span>
                  </div>
                  
                  {/* Weather forecast indicator with high fidelity details */}
                  <button
                    onClick={() => setIsWeatherExpanded(!isWeatherExpanded)}
                    className={`flex items-center space-x-1 border py-1 px-2.5 rounded-full text-xs font-medium cursor-pointer transition-all active:scale-95 duration-200 shadow-xs ${
                      isWeatherExpanded
                        ? 'bg-stone-900 border-stone-900 text-amber-300'
                        : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-800'
                    }`}
                    title={t('weatherAdviceTitle')}
                  >
                    <WeatherIcon condition={activeDayData.weatherCondition} className="w-3.5 h-3.5" />
                    <span className="font-mono text-[11px] font-semibold">
                      {weatherInfo && selectedWeatherCity === activeDayData.city ? `${weatherInfo.currentTemp}°C` : activeDayData.weatherTemp}
                    </span>
                    <span className="text-[10px] opacity-70">
                      {isWeatherExpanded ? '▲' : '▼'}
                    </span>
                  </button>
                </div>
              )}

              {/* DETAILED REAL-TIME WEATHER ACCORDION BOX */}
              {!isSearching && isWeatherExpanded && (
                <div className="bg-stone-100/65 border border-stone-200/40 rounded-2xl mx-5 mb-4 p-4 space-y-4 shadow-sm animate-fadeIn">
                  <div className="flex items-center justify-between gap-2 border-b border-stone-200/50 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-stone-900 font-serif italic text-sm font-semibold">
                        {lang === 'zh'
                          ? `${CITY_COORDINATES[selectedWeatherCity]?.chineseName || selectedWeatherCity.split(" ")[0]} 即時天氣`
                          : `Live Weather for ${selectedWeatherCity.split(' ').slice(1).join(' ') || selectedWeatherCity}`}
                      </span>
                      {weatherLoading && (
                        <span className="text-[9px] text-stone-400 font-mono tracking-widest animate-pulse">
                          {lang === 'zh' ? '更新中...' : 'Updating...'}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <select
                        value={selectedWeatherCity}
                        onChange={(e) => setSelectedWeatherCity(e.target.value)}
                        className="bg-white border border-stone-200/70 hover:border-stone-400 text-stone-700 text-[11px] rounded-lg px-2 py-0.5 focus:outline-none cursor-pointer transition-colors"
                      >
                        {Object.keys(CITY_COORDINATES).map((cityKey) => (
                          <option key={cityKey} value={cityKey}>
                            {lang === 'zh'
                              ? `${CITY_COORDINATES[cityKey].chineseName} (${CITY_COORDINATES[cityKey].englishQuery})`
                              : `${CITY_COORDINATES[cityKey].englishQuery} (${CITY_COORDINATES[cityKey].chineseName})`
                            }
                          </option>
                        ))}
                      </select>
                      
                      <button
                        onClick={() => fetchWeatherForCity(selectedWeatherCity)}
                        disabled={weatherLoading}
                        className="p-1 hover:bg-stone-200 text-stone-500 hover:text-stone-850 transition-colors rounded-lg active:scale-90"
                        title={lang === 'zh' ? '重新整理氣象' : 'Refresh Weather'}
                      >
                        <IconRefresh className="w-3.5 h-3.5 text-stone-500" spinning={weatherLoading} />
                      </button>
                    </div>
                  </div>

                  {/* Main current weather block */}
                  {weatherError && !weatherInfo ? (
                    <div className="bg-amber-50/50 border border-amber-200/30 rounded-xl p-3 text-center">
                      <p className="text-[11px] text-amber-800 font-medium">
                        ⚠️ {lang === 'zh' ? weatherError : 'Unable to connect to instant weather station, showing estimated reference temp.'}
                      </p>
                    </div>
                  ) : null}

                  <div className="grid grid-cols-2 gap-3">
                    {/* Temperature & Info */}
                    <div className="bg-white rounded-xl p-3 border border-stone-200/30 flex items-center justify-between shadow-xs">
                      <div className="space-y-1">
                        <span className="text-[9px] text-stone-400 font-mono uppercase block tracking-wider">
                          Temperature
                        </span>
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-3xl font-bold font-mono text-stone-950 tracking-tight">
                            {weatherInfo ? `${weatherInfo.currentTemp}°` : activeDayData.weatherTemp}
                          </span>
                          {weatherInfo && (
                            <span className="text-[10px] text-stone-400 font-mono">
                              ({weatherInfo.feelsLike}°)
                            </span>
                          )}
                        </div>
                        <span className="text-[10.5px] text-stone-700 font-medium block">
                          {weatherInfo ? translateWeather(getWMOWeatherStatus(weatherInfo.currentCode).text) : t(activeDayData.weatherCondition)}
                        </span>
                      </div>
                      <div className="p-1 bg-stone-50 rounded-xl">
                        {weatherInfo ? (
                          <WMOWeatherIcon code={weatherInfo.currentCode} className="w-10 h-10" />
                        ) : (
                          <WeatherIcon condition={activeDayData.weatherCondition} className="w-10 h-10" />
                        )}
                      </div>
                    </div>

                    {/* Atmospheric Metrics */}
                    <div className="bg-white rounded-xl p-3 border border-stone-200/30 flex flex-col justify-center gap-2 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-400 font-mono uppercase tracking-wider">{t('humidity')}</span>
                        <span className="font-mono text-[11px] text-stone-850 font-semibold">
                          {weatherInfo ? `${weatherInfo.humidity}%` : "55%"}
                        </span>
                      </div>
                      <div className="h-[1px] bg-stone-100/60 w-full" />
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-400 font-mono uppercase tracking-wider">{t('windSpeed')}</span>
                        <span className="font-mono text-[11px] text-stone-850 font-semibold">
                          {weatherInfo ? `${weatherInfo.windSpeed} km/h` : "12 km/h"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3-Day Forecast segment */}
                  {weatherInfo?.forecast ? (
                    <div className="space-y-2 animate-fade-in">
                      <div className="flex justify-between items-center border-b border-stone-200/40 pb-1">
                        <span className="font-serif italic text-xs text-stone-800 font-medium">{t('forecast3Day')}</span>
                        <span className="font-mono text-[8px] text-stone-400 uppercase tracking-widest">3-Day Forecast</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        {weatherInfo.forecast.map((day, idx) => (
                          <div key={idx} className="bg-white border border-stone-200/40 rounded-xl p-2.5 flex flex-col items-center justify-center space-y-1 shadow-xs">
                            <span className="font-sans text-[10px] text-stone-500 font-medium">
                              {day.date} ({t(day.dayOfWeek)})
                            </span>
                            <WMOWeatherIcon code={day.code} className="w-5.5 h-5.5" />
                            <div className="text-[10px] text-stone-850 font-mono font-medium flex gap-0.5">
                              <span className="text-stone-900 font-semibold">{day.tempMax}°</span>
                              <span className="text-stone-300">/</span>
                              <span className="text-stone-500 text-[9px]">{day.tempMin}°</span>
                            </div>
                            <span className="text-[9px] text-stone-400 text-center font-sans tracking-tight leading-none">
                              {translateWeather(getWMOWeatherStatus(day.code).text).split(" ")[0]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Simple skeleton or feedback for forecast while loading */
                    weatherLoading && (
                      <div className="py-4 text-center bg-white/40 border border-stone-200/20 rounded-xl animate-pulse">
                        <span className="text-[10px] text-stone-400 font-mono tracking-widest">
                          {lang === 'zh' ? '載入三日預報中...' : 'Loading 3-day forecast...'}
                        </span>
                      </div>
                    )
                  )}

                  {/* Clothing Suggestions segment */}
                  <div className="bg-amber-50/40 border border-amber-200/20 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 text-amber-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      </svg>
                      <span className="font-serif italic text-xs text-stone-800 font-bold">
                        {t('packingGuideTitle')}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-700 leading-relaxed font-sans text-justify">
                      {getDressingAdvice(estTemp, estCode, lang)}
                    </p>
                  </div>
                </div>
              )}

              {/* ACTION: SENSITIVE MASS EXPANSION TOOL ONLY WHEN NOT SEARCHING */}
              {!isSearching && (
                <div className="px-5 mb-2.5 flex justify-end space-x-2.5">
                  <button
                    onClick={() => handleToggleAllOnDay(activeDayData.items, true)}
                    className="text-[10px] text-stone-400 hover:text-stone-700 tracking-wider flex items-center gap-0.5"
                  >
                    {t('expandAll')}
                  </button>
                  <span className="text-stone-200">|</span>
                  <button
                    onClick={() => handleToggleAllOnDay(activeDayData.items, false)}
                    className="text-[10px] text-stone-400 hover:text-stone-700 tracking-wider flex items-center gap-0.5"
                  >
                    {t('collapseAll')}
                  </button>
                </div>
              )}

              {/* DYNAMIC CARD RENDER WORKSPACE */}
              <div className="px-4 space-y-4">
                {isSearching ? (
                  /* RENDERING MATCHER RESULTS ON SEARCH */
                  filteredSearchResults.length > 0 ? (
                    filteredSearchResults.map(({ day, item }) => (
                      <ItineraryCard
                        key={`search-${day.dayNumber}-${item.id}`}
                        dayNumber={day.dayNumber}
                        dateString={day.dateString}
                        item={item}
                        isExpanded={expandedCards[item.id] !== false} // default expanded in search
                        onToggle={() => toggleExpand(item.id)}
                        tagColors={getTagColorClass}
                        lang={lang}
                      />
                    ))
                  ) : (
                    <div className="py-16 text-center animate-fade-in">
                      <p className="text-stone-400 text-xs tracking-wider mb-2 font-serif italic">
                        {lang === 'zh' ? '無符合條件的私藏景點' : 'No matching locations found'}
                      </p>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-stone-600 text-xs underline cursor-pointer"
                      >
                        {lang === 'zh' ? '重設搜尋條件' : 'Reset search filter'}
                      </button>
                    </div>
                  )
                ) : (
                  /* RENDERING REGULAR DAILY ITINERARY */
                  <div className="space-y-4">
                    {activeDayData.items.map((item) => (
                      <ItineraryCard
                        key={`daily-${activeDayData.dayNumber}-${item.id}`}
                        item={item}
                        isExpanded={expandedCards[item.id] !== false} // default expanded to allow rich reading
                        onToggle={() => toggleExpand(item.id)}
                        tagColors={getTagColorClass}
                        lang={lang}
                        onEdit={() => {
                          setEditingItem(item);
                          setEditingDayNum(activeDayData.dayNumber);
                        }}
                        onDelete={() => handleDeleteItem(item.id, activeDayData.dayNumber)}
                      />
                    ))}

                    {/* NEW ATTRACTION / SPOT TRIGGER BUTTON */}
                    <button
                      onClick={() => {
                        setIsAddingItem(true);
                        setAddingDayNum(activeDayData.dayNumber);
                      }}
                      className="w-full py-4 border-2 border-dashed border-stone-200/80 hover:border-stone-400 text-stone-500 hover:text-stone-850 rounded-2xl text-[11.5px] font-semibold tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 bg-white hover:bg-stone-50/50 mt-1"
                    >
                      <span>➕</span>
                      <span>{lang === 'zh' ? `加入 Day ${activeDayData.dayNumber} 特色景點` : `Add Spot to Day ${activeDayData.dayNumber}`}</span>
                    </button>

                    {/* PERSONAL DAILY NOTES SECTION CARD */}
                    <div className="bg-amber-50/20 border border-amber-200/30 rounded-2xl p-4.5 space-y-3 mt-6 shadow-xs">
                      <div className="flex items-center justify-between border-b border-amber-200/15 pb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[14px]">📝</span>
                          <h4 className="font-serif italic font-bold text-stone-850 text-[13px]">
                            {lang === 'zh' ? `Day ${activeDayData.dayNumber} 個人隨筆與備忘錄` : `Day ${activeDayData.dayNumber} Personal Notes`}
                          </h4>
                        </div>
                        <span className="font-mono text-[8px] text-stone-400 uppercase tracking-widest font-bold">Diary Log</span>
                      </div>

                      <textarea
                        placeholder={lang === 'zh' ? "在此輸入當日私人備註、餐飲預約或待辦瑣事..." : "Type custom schedules, dinner reservations or tasks here..."}
                        value={dayNotes[activeDayData.dayNumber] || ''}
                        onChange={(e) => {
                          const updated = { ...dayNotes, [activeDayData.dayNumber]: e.target.value };
                          saveDayNotes(updated);
                        }}
                        className="w-full h-24 bg-white/50 border border-stone-200/50 focus:border-stone-400 focus:bg-white rounded-xl p-3 text-[12px] text-stone-800 placeholder-stone-400 focus:outline-none transition-all leading-relaxed resize-none font-sans"
                      />
                      
                      <div className="flex items-center justify-between text-[9px] text-stone-450">
                        <span className="font-mono">
                          {(dayNotes[activeDayData.dayNumber] || '').length} chars
                        </span>
                        <span className="italic flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                          {lang === 'zh' ? '已自動儲存至 LocalStorage' : 'Saved to LocalStorage'}
                        </span>
                      </div>
                    </div>

                    {/* EXPANDED EXPORT ACTIONS BLOCK */}
                    <div className="pt-2 px-1 flex gap-2.5">
                      <button
                        onClick={downloadDaySVG}
                        className="flex-1 py-3 bg-stone-105 hover:bg-stone-200 text-stone-800 border border-stone-200 hover:border-stone-300 rounded-xl text-[11px] font-semibold tracking-wide flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 transition-all font-sans"
                        title={lang === 'zh' ? '下載單日卡片 SVG' : 'Download day card SVG'}
                      >
                        <span>🖼️</span>
                        <span>{lang === 'zh' ? '匯出單日卡片' : 'Export Day Badge'}</span>
                      </button>
                      
                      <button
                        onClick={() => setIsPrintView(true)}
                        className="flex-1 py-3 bg-stone-900 hover:bg-stone-850 text-amber-200 hover:text-amber-100 rounded-xl text-[11px] font-semibold tracking-wide flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 transition-all font-sans shadow-md"
                        title={lang === 'zh' ? '產生整本 PDF 行程' : 'Generate full PDF brochure'}
                      >
                        <span>🖨️</span>
                        <span>{lang === 'zh' ? '預覽組裝 PDF' : 'Preview & Print PDF'}</span>
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </div>
          ) : (
            /* TRAVEL TOOLS WORKSPACE PATH */
            <div className="px-4 pt-4 space-y-6">
              
              {/* SECTION: BUDGET MANAGEMENT TRACKER */}
              <div className="space-y-3.5">
                <div className="border-b border-stone-200/50 pb-1 flex justify-between items-baseline">
                  <h3 className="font-serif italic text-[15px] text-stone-850">
                    {lang === 'zh' ? '📊 歐旅個人預算管家' : '📊 Daily Budget Manager'}
                  </h3>
                  <span className="font-mono text-[9px] text-stone-400 tracking-widest uppercase">BUDGET TRACKER</span>
                </div>

                <div className="bg-white border border-stone-200/40 rounded-2xl p-4 shadow-sm space-y-4">
                  {/* Budget summary header */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-stone-400 font-mono uppercase font-semibold">
                        {lang === 'zh' ? '預算上限 (TWD / EUR)' : 'Target Budget Limit'}
                      </span>
                      <div className="flex items-center gap-1.5 border-b border-stone-200/60 pb-0.5">
                        <span className="text-stone-500 font-serif text-[14px]">$</span>
                        <input
                          type="number"
                          value={budgetData.totalBudget}
                          onChange={(e) => {
                            const val = Math.max(0, parseInt(e.target.value, 10) || 0);
                            saveBudget({ ...budgetData, totalBudget: val });
                          }}
                          className="w-full bg-transparent font-serif font-bold text-stone-850 text-base focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-right">
                      <span className="text-[10px] text-stone-400 font-mono uppercase font-semibold block">
                        {lang === 'zh' ? '累計已排定預估支出' : 'Total Planned Expenses'}
                      </span>
                      <p className="font-serif font-bold text-base text-stone-850 mt-1">
                        ${budgetData.items.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Calculations and alerts bar */}
                  {(() => {
                    const totalSpent = budgetData.items.reduce((acc, curr) => acc + curr.amount, 0);
                    const pct = budgetData.totalBudget > 0 ? (totalSpent / budgetData.totalBudget) * 100 : 0;
                    const remaining = budgetData.totalBudget - totalSpent;
                    
                    let barColor = "bg-stone-850";
                    let textColor = "text-stone-500";
                    let alertMsg = "";
                    if (pct > 100) {
                      barColor = "bg-rose-500";
                      textColor = "text-rose-600 font-semibold";
                      alertMsg = lang === 'zh' ? "⚠️ 預算超支！" : "⚠️ Limit exceeded!";
                    } else if (pct > 85) {
                      barColor = "bg-amber-500";
                      textColor = "text-amber-700 font-semibold";
                      alertMsg = lang === 'zh' ? "⏳ 預算告急" : "⏳ Getting tight";
                    } else {
                      barColor = "bg-emerald-500";
                      textColor = "text-emerald-600 font-semibold";
                      alertMsg = lang === 'zh' ? "✅ 支出安全" : "✅ Within safe zone";
                    }

                    return (
                      <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="flex justify-between items-center text-[10.5px]">
                          <span className="text-stone-450 italic">{alertMsg}</span>
                          <span className="font-sans">
                            {lang === 'zh' ? '剩餘餘額' : 'Remaining Balance'}:{' '}
                            <span className={remaining >= 0 ? "text-emerald-600 font-semibold" : "text-rose-600 font-bold"}>
                              ${remaining.toLocaleString()}
                            </span>
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden shadow-inner">
                          <div
                            className={`h-full transition-all duration-500 ease-out ${barColor}`}
                            style={{ width: `${Math.min(100, pct)}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Individual Categories adjust inputs list */}
                  <div className="pt-2.5 space-y-3 border-t border-stone-100">
                    <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block font-semibold">
                      {lang === 'zh' ? '細項預算調配 (可直接修改金額與備註)' : 'Budget Allocation Breakdown'}
                    </span>
                    
                    <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1 no-scrollbar">
                      {budgetData.items.map((bItem, idx) => {
                        return (
                          <div key={bItem.id} className="text-xs flex items-center justify-between gap-2.5 bg-stone-50/50 hover:bg-stone-50 p-2.5 rounded-xl border border-stone-200/30 transition-all">
                            {/* Category title */}
                            <div className="flex-1 min-w-[70px]">
                              <p className="font-medium text-stone-850">
                                {lang === 'zh' ? bItem.categoryZh : bItem.category}
                              </p>
                            </div>

                            {/* Details input */}
                            <input
                              type="text"
                              value={bItem.note || ''}
                              placeholder={lang === 'zh' ? '備註隨筆...' : 'Notes...'}
                              onChange={(e) => {
                                const val = e.target.value;
                                const updatedItems = budgetData.items.map(item => item.id === bItem.id ? { ...item, note: val } : item);
                                saveBudget({ ...budgetData, items: updatedItems });
                              }}
                              className="flex-1 bg-transparent border-b border-transparent focus:border-stone-200 px-1 py-0.5 text-[11px] text-stone-500 placeholder-stone-300 focus:outline-none"
                            />

                            {/* Amount input */}
                            <div className="flex items-center gap-1 w-20 flex-none justify-end">
                              <span className="text-stone-400 font-serif">$</span>
                              <input
                                type="number"
                                value={bItem.amount}
                                onChange={(e) => {
                                  const val = Math.max(0, parseInt(e.target.value, 10) || 0);
                                  const updatedItems = budgetData.items.map(item => item.id === bItem.id ? { ...item, amount: val } : item);
                                  saveBudget({ ...budgetData, items: updatedItems });
                                }}
                                className="w-16 bg-transparent text-right font-semibold font-mono text-stone-800 border-b border-transparent focus:border-stone-305 pb-0.5 focus:outline-none"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: MULTI-CURRENCY CONVERTER */}
              <div className="space-y-3.5 animate-fadeIn">
                <div className="border-b border-stone-200/50 pb-1 flex justify-between items-baseline">
                  <h3 className="font-serif italic text-[15px] text-stone-850 font-bold">
                    {lang === 'zh' ? '💱 歐旅隨身匯率換算' : '💱 Multi-Currency Converter'}
                  </h3>
                  <span className="font-mono text-[9px] text-stone-400 tracking-widest uppercase font-semibold">CURRENCY TOOL</span>
                </div>

                <div className="bg-white border border-stone-200/40 rounded-2xl p-4 shadow-sm space-y-4">
                  {/* Exchange rate reference notice */}
                  <div className="text-[10px] text-stone-400 font-mono tracking-wide leading-relaxed bg-stone-50 p-2.5 rounded-xl border border-stone-200/40 flex justify-between items-baseline flex-wrap gap-2">
                    <span>{lang === 'zh' ? '📊 四向同步聯動匯率 (1 EUR 等值)' : '📊 4-Way Sync Reference Rates (Base 1 EUR)'}:</span>
                    <span className="font-semibold text-stone-600">🇬🇧 GBP: 0.84 | 🇨🇿 CZK: 25.2 | 🇭🇰 HKD: 8.4</span>
                  </div>

                  {/* Currencies Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* EUR CARD */}
                    <div className="bg-stone-50/50 hover:bg-stone-50 p-3 rounded-xl border border-stone-150/40 space-y-1.5 transition-all">
                      <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-stone-850">
                        <span className="text-sm">🇪🇺</span>
                        <span>{lang === 'zh' ? '歐元 (EUR)' : 'Euro (EUR)'}</span>
                      </div>
                      <div className="flex items-center gap-1 border-b border-stone-200 focus-within:border-stone-500 pb-0.5">
                        <span className="text-stone-400 font-serif font-bold">€</span>
                        <input
                          type="number"
                          step="any"
                          value={Math.round(eurValue * 100) / 100 || ''}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value) || 0;
                            setEurValue(val);
                          }}
                          className="w-full bg-transparent font-serif font-bold text-stone-850 text-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* GBP CARD */}
                    <div className="bg-stone-50/50 hover:bg-stone-50 p-3 rounded-xl border border-stone-150/40 space-y-1.5 transition-all">
                      <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-stone-850">
                        <span className="text-sm">🇬🇧</span>
                        <span>{lang === 'zh' ? '英鎊 (GBP)' : 'Pound (GBP)'}</span>
                      </div>
                      <div className="flex items-center gap-1 border-b border-stone-200 focus-within:border-stone-500 pb-0.5">
                        <span className="text-stone-400 font-serif font-bold">£</span>
                        <input
                          type="number"
                          step="any"
                          value={Math.round((eurValue * 0.84) * 100) / 100 || ''}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value) || 0;
                            setEurValue(val / 0.84);
                          }}
                          className="w-full bg-transparent font-serif font-bold text-stone-850 text-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* CZK CARD */}
                    <div className="bg-stone-50/50 hover:bg-stone-50 p-3 rounded-xl border border-stone-150/40 space-y-1.5 transition-all">
                      <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-stone-850">
                        <span className="text-sm">🇨🇿</span>
                        <span>{lang === 'zh' ? '捷克克朗 (CZK)' : 'Koruna (CZK)'}</span>
                      </div>
                      <div className="flex items-center gap-1 border-b border-stone-200 focus-within:border-stone-500 pb-0.5">
                        <span className="text-stone-400 font-serif font-bold">Kč</span>
                        <input
                          type="number"
                          step="any"
                          value={Math.round(eurValue * 25.2) || ''}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value) || 0;
                            setEurValue(val / 25.2);
                          }}
                          className="w-full bg-transparent font-serif font-bold text-stone-850 text-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* HKD CARD */}
                    <div className="bg-stone-50/50 hover:bg-stone-50 p-3 rounded-xl border border-stone-150/40 space-y-1.5 transition-all">
                      <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-stone-850">
                        <span className="text-sm">🇭🇰</span>
                        <span>{lang === 'zh' ? '港幣 (HKD)' : 'HK Dollar (HKD)'}</span>
                      </div>
                      <div className="flex items-center gap-1 border-b border-stone-200 focus-within:border-stone-500 pb-0.5">
                        <span className="text-stone-400 font-serif font-bold">$</span>
                        <input
                          type="number"
                          step="any"
                          value={Math.round((eurValue * 8.4) * 100) / 100 || ''}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value) || 0;
                            setEurValue(val / 8.4);
                          }}
                          className="w-full bg-transparent font-serif font-bold text-stone-850 text-sm focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hot lookup list table */}
                  <div className="pt-2">
                    <span className="text-[9.5px] text-stone-400 font-mono uppercase tracking-wider block font-semibold mb-2 text-center">
                      {lang === 'zh' ? '📋 常用外幣匯率對照表 (Key Rates Dashboard)' : '📋 Common Amounts Quick Lookup'}
                    </span>
                    <div className="border border-stone-100 rounded-xl overflow-hidden shadow-2xs">
                      <table className="w-full text-left text-[11px] font-sans">
                        <thead className="bg-stone-50 text-stone-450 font-semibold border-b border-stone-100 font-mono text-[9px] uppercase tracking-wider">
                          <tr>
                            <th className="px-3 py-1.5">🇪🇺 EUR</th>
                            <th className="px-3 py-1.5">🇬🇧 GBP</th>
                            <th className="px-3 py-1.5">🇨🇿 CZK</th>
                            <th className="px-3 py-1.5">🇭🇰 HKD</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 bg-white text-stone-600 font-mono">
                          {[10, 50, 100, 500].map((baseEur) => (
                            <tr key={baseEur} className="hover:bg-stone-50/30">
                              <td className="px-3 py-1.5 font-bold text-stone-800">€{baseEur}</td>
                              <td className="px-3 py-1.5">£{(baseEur * 0.84).toFixed(2)}</td>
                              <td className="px-3 py-1.5">Kč{Math.round(baseEur * 25.2).toLocaleString()}</td>
                              <td className="px-3 py-1.5 font-medium text-emerald-700">${(baseEur * 8.4).toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: WEATHER STATION OFFICE */}
              <div className="space-y-3.5 animate-fadeIn">
                <div className="border-b border-stone-200/50 pb-1 flex justify-between items-baseline">
                  <h3 className="font-serif italic text-[15px] text-stone-850 font-bold">
                    {lang === 'zh' ? '🌤️ 歐旅即時氣象觀測台' : '🌤️ Europe Live Weather Hub'}
                  </h3>
                  <span className="font-mono text-[9px] text-stone-400 tracking-widest uppercase font-semibold">WEATHER STATION</span>
                </div>

                <div className="bg-white border border-stone-200/40 rounded-2xl p-4 shadow-sm space-y-4">
                  {/* City selector & Sync Status */}
                  <div className="flex items-center justify-between gap-1.5 border-b border-stone-100 pb-2.5 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <select
                        value={selectedWeatherCity}
                        onChange={(e) => setSelectedWeatherCity(e.target.value)}
                        className="bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-700 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none cursor-pointer transition-colors"
                      >
                        {Object.keys(CITY_COORDINATES).map((cityKey) => (
                          <option key={cityKey} value={cityKey}>
                            {lang === 'zh'
                              ? `${CITY_COORDINATES[cityKey].chineseName} (${CITY_COORDINATES[cityKey].englishQuery})`
                              : `${CITY_COORDINATES[cityKey].englishQuery} (${CITY_COORDINATES[cityKey].chineseName})`
                            }
                          </option>
                        ))}
                      </select>
                      {weatherLoading && (
                        <span className="text-[10px] text-amber-600 font-mono tracking-widest animate-pulse">
                          {lang === 'zh' ? '連線中...' : 'Syncing...'}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => fetchWeatherForCity(selectedWeatherCity)}
                      disabled={weatherLoading}
                      className="text-[10px] font-bold bg-stone-100 hover:bg-stone-200 text-stone-700 px-2.5 py-1.5 rounded-lg border border-stone-200/60 transition-all flex items-center gap-1 active:scale-95 cursor-pointer animate-fade-in"
                    >
                      <IconRefresh className="w-3 h-3 text-stone-500" spinning={weatherLoading} />
                      {lang === 'zh' ? '更新觀測' : 'Refresh'}
                    </button>
                  </div>

                  {/* Main weather dashboard panel */}
                  {weatherError && !weatherInfo ? (
                    <div className="bg-amber-50/50 border border-amber-200/30 rounded-xl p-3 text-center">
                      <p className="text-xs text-amber-800 font-medium leading-relaxed">
                        ⚠️ {lang === 'zh' ? weatherError : 'Unable to connect to instant weather station.'}
                      </p>
                    </div>
                  ) : null}

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    {/* Temperature and main status card */}
                    <div className="bg-stone-50/50 rounded-xl p-3 border border-stone-200/50 flex items-center justify-between shadow-3xs">
                      <div className="space-y-1">
                        <span className="text-[9px] text-stone-400 font-mono uppercase block tracking-wider font-semibold">
                          {lang === 'zh' ? '當前氣溫 Temp' : 'Temp'}
                        </span>
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-3xl font-bold font-mono text-stone-900 tracking-tight">
                            {weatherInfo ? `${weatherInfo.currentTemp}°` : activeDayData.weatherTemp}
                          </span>
                          {weatherInfo && (
                            <span className="text-[10px] text-stone-400 font-mono">
                              ({weatherInfo.feelsLike}°)
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-stone-700 font-medium block">
                          {weatherInfo ? translateWeather(getWMOWeatherStatus(weatherInfo.currentCode).text) : t(activeDayData.weatherCondition)}
                        </span>
                      </div>
                      <div className="p-1 bg-white rounded-xl shadow-2xs border border-stone-100">
                        {weatherInfo ? (
                          <WMOWeatherIcon code={weatherInfo.currentCode} className="w-10 h-10" />
                        ) : (
                          <WeatherIcon condition={activeDayData.weatherCondition} className="w-10 h-10" />
                        )}
                      </div>
                    </div>

                    {/* Atmospheric metrics list card */}
                    <div className="bg-stone-50/50 rounded-xl p-3 border border-stone-200/50 flex flex-col justify-center gap-2 shadow-3xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-450 font-mono uppercase tracking-wider">{t('humidity')}</span>
                        <span className="font-mono text-xs text-stone-700 font-bold">
                          {weatherInfo ? `${weatherInfo.humidity}%` : "55%"}
                        </span>
                      </div>
                      <div className="h-[1px] bg-stone-200/30 w-full" />
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-455 font-mono uppercase tracking-wider">{t('windSpeed')}</span>
                        <span className="font-mono text-xs text-stone-700 font-bold">
                          {weatherInfo ? `${weatherInfo.windSpeed} km/h` : "12 km/h"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3-Day forecast sub-list */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center border-b border-stone-200/40 pb-1">
                      <span className="font-serif italic text-xs text-stone-800 font-semibold">{t('forecast3Day')}</span>
                      <span className="font-mono text-[8px] text-stone-400 uppercase tracking-widest">3-Day Forecast</span>
                    </div>

                    {weatherInfo?.forecast ? (
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {weatherInfo.forecast.map((day, idx) => (
                          <div key={idx} className="bg-stone-50/30 border border-stone-150/50 rounded-xl p-2 flex flex-col items-center justify-center space-y-1 hover:bg-stone-50/60 transition-colors shadow-3xs">
                            <span className="font-sans text-[10px] text-stone-500 font-medium font-semibold">
                              {day.date} ({t(day.dayOfWeek)})
                            </span>
                            <WMOWeatherIcon code={day.code} className="w-5.5 h-5.5" />
                            <div className="text-[10px] text-stone-850 font-mono font-medium flex gap-0.5">
                              <span className="text-stone-900 font-semibold">{day.tempMax}°</span>
                              <span className="text-stone-300">/</span>
                              <span className="text-stone-500 text-[9px]">{day.tempMin}°</span>
                            </div>
                            <span className="text-[9px] text-stone-400 text-center font-sans tracking-tight leading-none">
                              {translateWeather(getWMOWeatherStatus(day.code).text).split(" ")[0]}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-4 text-center bg-stone-50/30 border border-stone-100 rounded-xl animate-pulse">
                        <span className="text-[10px] text-stone-400 font-mono tracking-widest">
                          {lang === 'zh' ? '載入三日預報中...' : 'Loading 3-day forecast...'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Dressing advice sub-box */}
                  <div className="bg-amber-50/40 border border-amber-200/20 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 text-amber-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      </svg>
                      <span className="font-serif italic text-xs text-stone-800 font-bold">
                        {t('packingGuideTitle')}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-700 leading-relaxed font-sans text-justify">
                      {(() => {
                        const estTemp = parseInt((weatherInfo && selectedWeatherCity === activeDayData.city ? `${weatherInfo.currentTemp}` : activeDayData.weatherTemp).replace("°C", ""), 10) || 15;
                        const estCode = weatherInfo ? weatherInfo.currentCode : (activeDayData.weatherCondition === 'sunny' ? 0 : activeDayData.weatherCondition === 'rainy' ? 61 : 3);
                        return getDressingAdvice(estTemp, estCode, lang);
                      })()}
                    </p>
                  </div>

                </div>
              </div>

              {/* SECTION: ACCOMMODATION LIST WITH CLICK TELEPHONE DIALING */}
              <div className="space-y-3">
                <div className="border-b border-stone-200/50 pb-1 flex justify-between items-baseline">
                  <h3 className="font-serif italic text-[15px] text-stone-850">{t('accommodationListTitle')}</h3>
                  <span className="font-mono text-[9px] text-stone-400 tracking-widest uppercase">{accommodationList.length} {t('staysBooked')}</span>
                </div>
                <div className="space-y-3">
                  {accommodationList.map((hotel, index) => {
                    const localHotel = getLocalizedHotel(hotel);
                    return (
                      <div key={index} className="bg-white border border-stone-200/40 rounded-xl p-4 shadow-xs space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest block">{mapCityName(hotel.city, lang)}</span>
                            <h4 className="font-serif text-[14px] font-semibold text-stone-850 leading-tight mt-0.5">{localHotel.name}</h4>
                          </div>
                          <span className="font-sans text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-medium">
                            {localHotel.period}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 font-sans leading-relaxed">{hotel.address}</p>
                        {hotel.phone && hotel.phone !== "N/A" && (
                          <div className="pt-1.5 flex justify-end">
                            <a
                              href={`tel:${hotel.phone.replace(/\s+/g, '')}`}
                              className="flex items-center gap-1 px-3 py-1.5 bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/60 rounded-lg text-[10px] font-medium tracking-wide transition-colors"
                            >
                              <IconPhone className="w-3 h-3" />
                              {t('dialPhone')} ({hotel.phone})
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: FLIGHT TIMELINE SCHEDULES */}
              <div className="space-y-3">
                <div className="border-b border-stone-200/50 pb-1 flex justify-between items-baseline">
                  <h3 className="font-serif italic text-[15px] text-stone-850">{t('flightsTitle')}</h3>
                  <span className="font-mono text-[9px] text-stone-400 tracking-widest uppercase">Flight Details</span>
                </div>
                <div className="space-y-2.5">
                  {flightList.map((flight, idx) => {
                    const localFlight = getLocalizedFlight(flight);
                    return (
                      <div key={idx} className="bg-white border border-stone-200/40 rounded-xl p-3.5 shadow-xs flex items-center justify-between">
                        <div className="space-y-1">
                          <span className="font-sans text-[11px] font-semibold text-stone-880 block">
                            {localFlight.route}
                          </span>
                          <div className="flex items-center gap-1.5 text-[10px] text-stone-400 font-mono">
                            <span>{localFlight.airline}</span>
                            <span>•</span>
                            <span className="text-stone-500 font-medium">{flight.flightNo}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-[11px] font-bold text-stone-850 bg-stone-50 py-1 px-2.5 rounded border border-stone-150/40 inline-flex items-center gap-1">
                            <IconClock className="w-2.5 h-2.5 text-stone-400" />
                            {flight.time}
                          </div>
                          <span className="text-[10px] block text-stone-400 font-mono mt-0.5 mr-1">
                            {lang === 'zh' ? '航廈' : 'Terminal'}: {flight.terminal}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: PERSISTENT PACKING CHECKLIST */}
              <div className="space-y-3">
                <div className="border-b border-stone-200/50 pb-1 flex items-center justify-between">
                  <h3 className="font-serif italic text-[15px] text-stone-850">{t('checklistTitle')}</h3>
                  <button
                    onClick={handleResetChecklist}
                    className="font-mono text-[9px] text-stone-400 hover:text-stone-700 tracking-wider uppercase border border-stone-200/60 px-2 py-0.5 rounded bg-white hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    {t('resetProgress')}
                  </button>
                </div>
                
                {/* Visual completion progress fill */}
                {checklist.length > 0 && (
                  <div className="bg-stone-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-stone-800 h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${(checklist.filter(c => c.checked).length / checklist.length) * 100}%`
                      }}
                    ></div>
                  </div>
                )}
                
                <div className="bg-white border border-stone-200/40 rounded-xl overflow-hidden divide-y divide-stone-100">
                  {checklist.map((item) => {
                    const localTask = getLocalizedChecklist(item.id, item.task, item.category);
                    return (
                      <label
                        key={item.id}
                        className="flex items-center justify-between px-4 py-3 hover:bg-stone-50/50 cursor-pointer transition-colors"
                      >
                        <div className="flex items-start gap-3 flex-1 pr-4">
                          <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleToggleCheck(item.id)}
                            className="sr-only"
                          />
                          <div className={`mt-0.5 flex-none w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-all ${
                            item.checked
                              ? 'bg-stone-800 border-stone-800 text-white'
                              : 'bg-white border-stone-300'
                          }`}>
                            {item.checked && <IconCheck className="w-3 h-3" />}
                          </div>
                          <span className={`text-xs ${item.checked ? 'text-stone-400 line-through' : 'text-stone-700 font-medium'}`}>
                            {localTask.task}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono tracking-wider text-stone-400 uppercase flex-none">
                          {localTask.category}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: EMERGENCY ASSIST LISTS */}
              <div className="space-y-3">
                <div className="border-b border-stone-200/50 pb-1 flex justify-between items-baseline">
                  <h3 className="font-serif italic text-[15px] text-stone-850">{t('emergencyTitle')}</h3>
                  <span className="font-mono text-[9px] text-stone-400 tracking-widest uppercase">Emergency Support</span>
                </div>
                <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 space-y-4 shadow-md">
                  {emergencyContacts.map((contact, i) => {
                    const localEmergency = getLocalizedEmergency(contact);
                    return (
                      <div key={i} className="flex justify-between items-start border-b border-stone-800/60 pb-3 last:border-b-0 last:pb-0">
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-stone-200 block">{localEmergency.label}</span>
                          <p className="text-[10px] text-stone-400 leading-normal max-w-[210px]">{localEmergency.note}</p>
                        </div>
                        <a
                          href={`tel:${contact.number.replace(/[-+\s]/g, '')}`}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-750 text-amber-300 rounded-lg text-xs font-semibold tracking-wider font-mono border border-stone-700/50 transition-colors"
                        >
                          <IconPhone className="w-3.5 h-3.5 text-amber-300/80" />
                          {contact.number}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: PWA CONTROL OFFICE PANEL */}
              <div className="space-y-3">
                <div className="border-b border-stone-200/50 pb-1 flex justify-between items-baseline">
                  <h3 className="font-serif italic text-[15px] text-stone-850">
                    {t('pwaSectionTitle')}
                  </h3>
                  <span className="font-mono text-[9px] text-stone-400 tracking-widest uppercase font-semibold">PWA CONTROL</span>
                </div>

                <div className="bg-white border border-stone-200/40 rounded-2xl p-4.5 shadow-xs space-y-4">
                  {/* APP INSTALLATION STATUS BANNER */}
                  {!isAppInstalled && deferredPrompt ? (
                    <div className="bg-stone-50 border border-stone-200/60 rounded-xl p-3.5 space-y-2.5 animate-fade-in">
                      <div className="flex items-start gap-2.5">
                        <span className="p-1 bg-amber-50 rounded-lg text-amber-800 shrink-0">
                          <svg className="w-4 h-4 text-stone-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                        </span>
                        <div className="flex-1">
                          <h4 className="font-serif text-[13px] font-bold text-stone-850 leading-tight">
                            {lang === 'zh' ? '專屬隨身旅行 App 隨行' : 'Dedicated Travel App Companion'}
                          </h4>
                          <p className="text-[10px] text-stone-400 mt-0.5 leading-snug">
                            {lang === 'zh' ? '一鍵安裝至主畫面，享受極速離線日程與通知推播！' : 'Install to home screen for zero delays, offline lookup & push alerts!'}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={installPWA}
                        className="w-full text-center py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-200 hover:text-white rounded-xl text-xs font-semibold tracking-wider font-mono hover:shadow-xs active:scale-98 transition-all cursor-pointer"
                      >
                        {t('pwaInstallBtn')}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-stone-50 border border-stone-200/30 rounded-xl p-3.5 text-center flex items-center justify-center gap-2 animate-fade-in">
                      <span className="text-amber-500 text-xs">✨</span>
                      <p className="text-[11px] text-stone-600 font-medium font-serif italic">
                        {isAppInstalled ? t('pwaInstalledMsg') : (lang === 'zh' ? '離線 PWA 旅行護照就緒' : 'Offline Travel App Passport Standby')}
                      </p>
                    </div>
                  )}

                  {/* CACHE & REMINDER STATS TILES */}
                  <div className="grid grid-cols-1 gap-3">
                    {/* Offline engine tile */}
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-150/40 space-y-1">
                      <span className="text-[9px] text-stone-400 font-mono uppercase tracking-wider block font-semibold">
                        {t('pwaStatusLabel')}
                      </span>
                      <p className="text-xs font-semibold text-stone-850">
                        {t('pwaActiveMsg')}
                      </p>
                    </div>

                    {/* Notification Permission block */}
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-150/40 space-y-2.5">
                      <div className="space-y-1">
                        <span className="text-[9px] text-stone-400 font-mono uppercase tracking-wider block font-semibold">
                          {t('notifStatusLabel')}
                        </span>
                        {typeof window === 'undefined' || !('Notification' in window) ? (
                          <p className="text-xs font-medium text-stone-500 italic">
                            {t('notifNotSupported')}
                          </p>
                        ) : notifPermission === 'granted' ? (
                          <p className="text-xs font-semibold text-stone-850">
                            {t('notifEnabledMsg')}
                          </p>
                        ) : notifPermission === 'denied' ? (
                          <p className="text-xs font-semibold text-red-600 font-medium">
                            {t('notifDisabledMsg')}
                          </p>
                        ) : (
                          <p className="text-xs font-semibold text-amber-700 font-medium">
                            {lang === 'zh' ? '🔔 尚未授權每日行程通知提醒' : '🔔 Notification permission not requested yet'}
                          </p>
                        )}
                      </div>

                      {/* Request and Test Buttons */}
                      <div className="flex flex-col gap-2 pt-1">
                        {/* Prompt Request Button if default */}
                        {typeof window !== 'undefined' && 'Notification' in window && notifPermission === 'default' && (
                          <button
                            onClick={requestNotificationPermission}
                            className="w-full text-center py-2 bg-amber-50 hover:bg-amber-100/50 text-stone-850 hover:text-stone-900 border border-amber-200/50 rounded-xl text-[10.5px] font-semibold transition-all cursor-pointer"
                          >
                            {t('notifPromptBtn')}
                          </button>
                        )}

                        {/* Test simulated alert sounder */}
                        {typeof window !== 'undefined' && 'Notification' in window && (
                          <button
                            onClick={sendTestNotification}
                            className="w-full text-center py-2 bg-stone-105 hover:bg-stone-200/60 text-stone-800 border border-stone-200/40 rounded-xl text-[10.5px] font-semibold tracking-wide font-sans transition-all cursor-pointer"
                          >
                            {t('testNotifBtn')}
                          </button>
                        )}

                        {showTestNoticeInfo && (
                          <div className="bg-amber-50/50 border border-amber-200/30 rounded-xl p-3 text-justify animate-fade-in">
                            <p className="text-[10px] text-amber-800 font-medium leading-relaxed">
                              💡 {t('testNotifInfo')}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </main>

        {/* 
          FOOTER TAB BAR IN NATIVE-MOBILE STYLE 
          - Safe sticky layout pinned to the bottom of our max-width viewport.
        */}
        <nav className="absolute bottom-5 inset-x-4 h-14 bg-stone-900/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-around px-2 z-40 border border-stone-800/80">
          <button
            onClick={() => { setActiveTab('itinerary'); setSearchQuery(''); }}
            className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-300 ${
              activeTab === 'itinerary' ? 'text-amber-300 scale-105' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <IconCalendar className="w-5 h-5" />
            <span className="text-[10px] tracking-wide font-medium mt-1">{t('footerItinerary')}</span>
          </button>
          
          <div className="w-[1px] h-6 bg-stone-800"></div>

          <button
            onClick={() => setActiveTab('tools')}
            className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-300 ${
              activeTab === 'tools' ? 'text-amber-300 scale-105' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <IconBriefcase className="w-5 h-5" />
            <span className="text-[10px] tracking-wide font-medium mt-1">{t('footerTools')}</span>
          </button>
        </nav>

        {/* ADD SPOT DIALOG MODAL OVERLAY */}
        {isAddingItem && addingDayNum !== null && (
          <div className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in no-print">
            <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden border border-stone-200/80 shadow-2xl flex flex-col max-h-[90vh]">
              {/* Head */}
              <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                <h3 className="font-serif italic font-bold text-stone-850 text-sm">
                  {lang === 'zh' ? `➕ 新增 Day ${addingDayNum} 特色景點` : `➕ Add Spot to Day ${addingDayNum}`}
                </h3>
                <button
                  onClick={() => { setIsAddingItem(false); setAddingDayNum(null); }}
                  className="text-stone-400 hover:text-stone-800 text-sm p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Form panel */}
              <div className="p-5 overflow-y-auto space-y-3.5 text-xs">
                {(() => {
                  const [time, setTime] = useState("09:00");
                  const [venue, setVenue] = useState("");
                  const [desc, setDesc] = useState("");
                  const [tags, setTags] = useState("");
                  const [img, setImg] = useState("");

                  const handleSave = () => {
                    if (!venue.trim()) {
                      alert(lang === 'zh' ? '請填寫特色景點名稱！' : 'Please provide a spot venue name!');
                      return;
                    }
                    const parsedTags = tags.split(',').map(s => s.trim()).filter(Boolean);
                    handleAddItem({
                      time,
                      venue: venue.trim(),
                      description: desc.trim(),
                      tags: parsedTags.length > 0 ? parsedTags : ["私藏景點", "自訂秘密"],
                      imageUrl: img.trim() || "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=600",
                      navigationQuery: venue.trim()
                    }, addingDayNum);
                  };

                  return (
                    <div className="space-y-3.5">
                      {/* Time */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '預定行程時間' : 'Scheduled Time'}</label>
                        <input
                          type="text"
                          value={time}
                          placeholder="e.g. 09:30"
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-850 focus:outline-none"
                        />
                      </div>

                      {/* Venue */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '特色景點名稱 (必填)' : 'Venue / Spot Name'}</label>
                        <input
                          type="text"
                          value={venue}
                          placeholder={lang === 'zh' ? 'e.g. 溫莎城堡 Windsor Castle' : 'e.g. Windsor Castle'}
                          onChange={(e) => setVenue(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-850 focus:outline-none"
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '行程介紹與私藏攻略' : 'Introduction & Logistics'}</label>
                        <textarea
                          placeholder={lang === 'zh' ? '介紹當日遊覽看點、特色玩法、拍照熱點、或是交通等...' : 'Logistical planning...'}
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                          className="w-full h-20 bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-855 focus:outline-none resize-none leading-relaxed"
                        />
                      </div>

                      {/* Tags */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '行程標籤 (英文逗號分隔)' : 'Tags (comma separated)'}</label>
                        <input
                          type="text"
                          value={tags}
                          placeholder={lang === 'zh' ? '必訪地標, 歷史文化, 拍照熱點' : 'Windsor, History, Photospots'}
                          onChange={(e) => setTags(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-850 focus:outline-none"
                        />
                      </div>

                      {/* Image link */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '景點封面圖片網址 (可留空)' : 'Spot Image URL (Optional)'}</label>
                        <input
                          type="text"
                          value={img}
                          placeholder="e.g. https://images.unsplash.com/photo-..."
                          onChange={(e) => setImg(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-850 focus:outline-none"
                        />
                      </div>

                      {/* Actions */}
                      <div className="pt-2 flex gap-2.5">
                        <button
                          onClick={() => { setIsAddingItem(false); setAddingDayNum(null); }}
                          className="flex-1 py-2.5 border border-stone-200 hover:border-stone-400 text-stone-600 rounded-lg font-semibold active:scale-98 transition-all cursor-pointer"
                        >
                          {lang === 'zh' ? '取消' : 'Cancel'}
                        </button>
                        <button
                          onClick={handleSave}
                          className="flex-1 py-2.5 bg-stone-900 hover:bg-stone-850 text-amber-200 hover:text-amber-100 rounded-lg font-semibold shadow-md active:scale-98 transition-all cursor-pointer"
                        >
                          {lang === 'zh' ? '儲存加入' : 'Save Spot'}
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* EDIT SPOT DIALOG MODAL OVERLAY */}
        {editingItem !== null && editingDayNum !== null && (
          <div className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in no-print">
            <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden border border-stone-200/80 shadow-2xl flex flex-col max-h-[90vh]">
              {/* Head */}
              <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                <h3 className="font-serif italic font-bold text-stone-850 text-sm">
                  {lang === 'zh' ? '✏️ 編輯行程景點內容' : '✏️ Edit Itinerary Spot'}
                </h3>
                <button
                  onClick={() => { setEditingItem(null); setEditingDayNum(null); }}
                  className="text-stone-400 hover:text-stone-800 text-sm p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Form panel */}
              <div className="p-5 overflow-y-auto space-y-3.5 text-xs">
                {(() => {
                  const initialTrans = !editingItem.isEdited && itineraryTranslations[editingItem.id]?.[lang];
                  const initialVenue = initialTrans ? initialTrans.venue : editingItem.venue;
                  const initialDesc = initialTrans ? initialTrans.description : editingItem.description;

                  const [time, setTime] = useState(editingItem.time);
                  const [venue, setVenue] = useState(initialVenue);
                  const [desc, setDesc] = useState(initialDesc);
                  const [tags, setTags] = useState(editingItem.tags.join(', '));
                  const [img, setImg] = useState(editingItem.imageUrl);

                  const handleSave = () => {
                    if (!venue.trim()) {
                      alert(lang === 'zh' ? '請填寫特色景點名稱！' : 'Please provide a spot venue name!');
                      return;
                    }
                    const parsedTags = tags.split(',').map(s => s.trim()).filter(Boolean);
                    handleUpdateItem({
                      ...editingItem,
                      time,
                      venue: venue.trim(),
                      description: desc.trim(),
                      tags: parsedTags.length > 0 ? parsedTags : editingItem.tags,
                      imageUrl: img.trim() || editingItem.imageUrl,
                      navigationQuery: venue.trim()
                    }, editingDayNum);
                  };

                  return (
                    <div className="space-y-3.5">
                      {/* Time */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '行程點預定時間' : 'Scheduled Time'}</label>
                        <input
                          type="text"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-850 focus:outline-none"
                        />
                      </div>

                      {/* Venue */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '特色景點名稱' : 'Venue / Spot Name'}</label>
                        <input
                          type="text"
                          value={venue}
                          onChange={(e) => setVenue(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-850 focus:outline-none"
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '行程介紹與私藏攻略' : 'Introduction & Logistics'}</label>
                        <textarea
                          placeholder={lang === 'zh' ? '介紹當日遊覽看點、特色玩法、拍照熱點、或是交通等...' : 'Logistical planning...'}
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                          className="w-full h-20 bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-855 focus:outline-none resize-none leading-relaxed"
                        />
                      </div>

                      {/* Tags */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '行程標籤 (英文逗號分隔)' : 'Tags (comma separated)'}</label>
                        <input
                          type="text"
                          value={tags}
                          onChange={(e) => setTags(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-850 focus:outline-none"
                        />
                      </div>

                      {/* Image link */}
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-450 uppercase tracking-wider block font-bold">{lang === 'zh' ? '景點封面圖片網址' : 'Spot Image URL'}</label>
                        <input
                          type="text"
                          value={img}
                          onChange={(e) => setImg(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200/60 focus:bg-white focus:border-stone-450 p-2.5 rounded-lg text-stone-850 focus:outline-none"
                        />
                      </div>

                      {/* Actions */}
                      <div className="pt-2 flex gap-2.5">
                        <button
                          onClick={() => { setEditingItem(null); setEditingDayNum(null); }}
                          className="flex-1 py-2.5 border border-stone-200 hover:border-stone-400 text-stone-600 rounded-lg font-semibold active:scale-98 transition-all cursor-pointer"
                        >
                          {lang === 'zh' ? '取消' : 'Cancel'}
                        </button>
                        <button
                          onClick={handleSave}
                          className="flex-1 py-2.5 bg-stone-900 hover:bg-stone-850 text-amber-200 hover:text-amber-100 rounded-lg font-semibold shadow-md active:scale-98 transition-all cursor-pointer"
                        >
                          {lang === 'zh' ? '保存修改' : 'Save Changes'}
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// --- DEDICATED ITINERARY CARD RENDERING ---
interface ItineraryCardProps {
  key?: React.Key | string | number;
  dayNumber?: number;
  dateString?: string;
  item: ItineraryItem;
  isExpanded: boolean;
  onToggle: () => void;
  tagColors: (tag: string) => string;
  lang: Language;
  onEdit?: () => void;
  onDelete?: () => void;
}

function ItineraryCard({
  dayNumber,
  dateString,
  item,
  isExpanded,
  onToggle,
  tagColors,
  lang,
  onEdit,
  onDelete
}: ItineraryCardProps) {
  const trans = !item.isEdited && itineraryTranslations[item.id]?.[lang];
  const venue = trans ? trans.venue : item.venue;
  const description = trans ? trans.description : item.description;

  const mapDateString = (dateStr: string, activeLang: Language): string => {
    if (activeLang === 'zh') return dateStr;
    return dateStr
      .replace('7月', 'July ')
      .replace('8月', 'August ')
      .replace('日', '');
  };

  const translateTag = (tagStr: string): string => {
    return tagTranslations[tagStr]?.[lang] || tagStr;
  };

  return (
    <div className="bg-white border border-stone-200/50 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
      
      {/* Dynamic landscape photo using stable ImageWithFallback */}
      <div className="relative h-44 w-full cursor-pointer overflow-hidden group" onClick={onToggle}>
        <ImageWithFallback src={item.imageUrl} alt={venue} fallbackText={venue} />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
        
        {/* Absolute indicators (like Search reference or Day index) on slide */}
        {dayNumber && dateString && (
          <span className="absolute top-3 left-3 bg-stone-90c/75 backdrop-blur-xs text-[10px] text-white font-mono px-2.5 py-1 rounded-md tracking-wider animate-fade-in">
            Day {dayNumber} • {mapDateString(dateString, lang)}
          </span>
        )}

        {/* Compact time card pill on image bottom */}
        <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-stone-900 border border-stone-200/20 text-[10px] font-semibold font-mono tracking-widest px-2.5 py-1 rounded-md inline-flex items-center gap-1 shadow-sm">
          <IconClock className="w-2.5 h-2.5 text-stone-600" />
          {item.time}
        </span>
      </div>

      <div className="p-4 space-y-3">
        {/* Venue Title & Collapsible Trigger Row */}
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-serif text-[15px] font-bold text-stone-900 leading-snug tracking-wide animate-fade-in flex-1 cursor-pointer" onClick={onToggle}>
            {venue}
          </h4>
          <div className="flex items-center gap-1.5 pt-0.5">
            {onEdit && (
              <button
                onClick={(e) => { e.stopPropagation(); onEdit(); }}
                className="text-stone-400 hover:text-amber-700 transition-colors p-1"
                title={lang === 'zh' ? '編輯行程景點' : 'Edit Itinerary Spot'}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
            )}
            {onDelete && (
              <button
                onClick={(e) => { e.stopPropagation(); onDelete(); }}
                className="text-stone-400 hover:text-red-600 transition-colors p-1"
                title={lang === 'zh' ? '刪除此景點' : 'Delete this spot'}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            )}
            <button className="text-stone-400 hover:text-stone-700 p-1" onClick={onToggle} title={lang === 'zh' ? '查看細節' : 'View Details'}>
              {isExpanded ? <IconChevronUp className="w-4 h-4" /> : <IconChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Dynamic Scan Tags pills */}
        <div className="flex flex-wrap gap-1.5 animate-fade-in">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[9px] px-2 py-0.5 rounded-full border tracking-wide font-medium ${tagColors(tag)}`}
            >
              #{translateTag(tag)}
            </span>
          ))}
        </div>

        {/* Deep Commentary Content - with smooth collapsing animation logic */}
        {isExpanded && (
          <div className="pt-2 border-t border-stone-105 space-y-3 animate-fadeIn">
            <p className="text-[12px] text-stone-500 leading-relaxed tracking-normal text-justify whitespace-pre-line font-sans animate-fade-in">
              {description}
            </p>
            
            {/* Quick Map locator navigational buttons */}
            <div className="pt-1.5 flex justify-end">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.navigationQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Guard anchor click from triggering collapse toggling
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-100 hover:text-white rounded-lg text-[10px] font-medium tracking-wide shadow-xs transition-all"
              >
                <IconNavigation className="w-3 h-3 text-amber-200" />
                {lang === 'zh' ? '開啟 Google Maps 導航' : 'Open in Google Maps'}
              </a>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
