import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PhoneCall,
  Search,
  CircleDollarSign,
  FileText,
  Car,
  ChevronsDown,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Zap,
  FileCheck,
  Wallet,
  MapPin,
  ShieldCheck,
  Gauge,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import fon from "@/assets/fonnik.jpg";
import otziv1 from "@/assets/otziv1.jpg";
import otziv2 from "@/assets/otziv2.jpg";
import otziv3 from "@/assets/otziv3.jpg";
import otziv4 from "@/assets/otziv4.jpg";
import otziv5 from "@/assets/otziv5.jpg";
import max from "@/assets/max.png";
import hyundaiCreta from "@/assets/HyundaiCreta.jpg";
import sprinterClassic from "@/assets/Mercedes-BenzSprinterClassic.jpg";
import peugeot308 from "@/assets/Peugeot308.jpg";
import renaultLogan from "@/assets/RenaultLogan.jpg";
import toyotaCamry from "@/assets/ToyotaCamry.jpg";
import toyotaCamry2 from "@/assets/ToyotaCamry2.jpg";
import toyotaCrown from "@/assets/ToyotaCrown.jpg";
import toyotaPrado from "@/assets/ToyotaLandCruiserPrado.jpg";
import vwPassat from "@/assets/VolkswagenPassat.jpg";
import vwTiguan from "@/assets/VolkswagenTiguan.jpg";
import geely from "@/assets/FordFocus.jpg";
import polo from "@/assets/polo.jpg";
import audi from "@/assets/AudiA6.jpg";
import fordFocus from "@/assets/geely.jpg";

const cars = [
  {
    img: toyotaCamry,
    images: [toyotaCamry, toyotaCamry2, toyotaCrown],
    title: "Toyota Camry",
    year: 2013,
    specs: "2.5 AT, 85 т.км, идеальное состояние, 1 владелец",
    price: "1 910 000 ₽",
  },
  {
    img: hyundaiCreta,
    images: [hyundaiCreta, vwTiguan, polo],
    title: "Hyundai Creta",
    year: 2020,
    specs: "2.0 AT, 4WD, 52 т.км, отличное состояние",
    price: "2 050 000 ₽",
  },
  {
    img: vwTiguan,
    images: [vwTiguan, hyundaiCreta, vwPassat],
    title: "Volkswagen Tiguan",
    year: 2020,
    specs: "1.4 TSI AT, 4WD, 95 т.км, на ходу, окрасы, следы кузовного ремонта",
    price: "2 150 000 ₽",
  },
  {
    img: toyotaCrown,
    images: [toyotaCrown, toyotaCamry, toyotaCamry2],
    title: "Toyota Crown",
    year: 2018,
    specs: "2.5 AT гибрид, 4WD, 140 т.км, правый руль, на ходу, требуется косметический ремонт",
    price: "2 600 000 ₽",
  },
  {
    img: toyotaPrado,
    images: [toyotaPrado, vwTiguan, hyundaiCreta],
    title: "Toyota Land Cruiser Prado",
    year: 2007,
    specs: "4.0 AT, 4WD, 180 т.км, рамный внедорожник, без ДТП, второй владелец, отличное состояние",
    price: "2 250 000 ₽",
  },
  {
    img: fordFocus,
    images: [fordFocus, geely, polo],
    title: "Geely Coolray",
    year: 2022,
    specs: "1.5 AMT, 43 т.км, один владелец, отличное состояние, без ДТП",
    price: "1 575 000 ₽",
  },
  {
    img: vwPassat,
    images: [vwPassat, vwTiguan, audi],
    title: "Volkswagen Passat",
    year: 2010,
    specs: "1.8 TSI DSG, 235 т.км, сделан капитальный ремонт двигателя, ухоженный салон, присутствуют сколы по кузову, следы небольшого ДТП",
    price: "680 000 ₽",
  },
  {
    img: peugeot308,
    images: [peugeot308, renaultLogan, polo],
    title: "Peugeot 308",
    year: 2012,
    specs: "1.6 AT, 130 т.км, хорошее техническое состояние, требуется косметический ремонт",
    price: "630 000 ₽",
  },
  {
    img: renaultLogan,
    images: [renaultLogan, peugeot308, polo],
    title: "Renault Logan",
    year: 2020,
    specs: "1.6 AT, 44 т.км, автомобиль в залоге у банка, отличное состояние",
    price: "1 250 000 ₽",
  },
  {
    img: sprinterClassic,
    images: [sprinterClassic, vwPassat, toyotaPrado],
    title: "Mercedes-Benz Sprinter Classic",
    year: 2017,
    specs: "2.2 дизель MT, 237 т.км, собственник юридическое лицо, хорошее состояние, грузопассажирский цельнометаллический фургон",
    price: "1 800 000 ₽",
  },
  {
    img: toyotaCamry2,
    images: [toyotaCamry2, toyotaCamry, toyotaCrown],
    title: "Toyota Camry",
    year: 2008,
    specs: "2.4 AT, 178 т.км, после ДТП, не на ходу, максимальная комплектация",
    price: "600 000 ₽",
  },
  {
    img: polo,
    images: [polo, hyundaiCreta, renaultLogan],
    title: "Volkswagen Polo",
    year: 2022,
    specs: "1.6 АТ, 38 т.км, один владелец, идеальное состояние, без ДТП.",
    price: "1 750 000 ₽",
  },
  {
    img: audi,
    images: [audi, vwPassat, toyotaCamry],
    title: "Audi A6",
    year: 2013,
    specs: "2.0 CVT, 145 т.км, требуется ремонт КПП, на ходу, повреждения по кузову",
    price: "1 100 000 ₽",
  },
  {
    img: geely,
    images: [geely, fordFocus, renaultLogan],
    title: "Ford Focus",
    year: 2013,
    specs: "1.6 AMT, 155 т.км, два владельца, без ДТП, не на ходу, неисправность КПП",
    price: "650 000 ₽",
  },
];

const heroFeatures = [
  { icon: MapPin, text: "Сами приедем и оценим машину" },
  { icon: Car, text: "Купим авто даже битый" },
  { icon: MessageCircle, text: "Бесплатно проконсультируем" },
  { icon: ShieldCheck, text: "Не смотрим на состояние и обременения" },
  { icon: Gauge, text: "Выкупаем с любым пробегом" },
  { icon: ThumbsUp, text: "Объективно оценим" },
];

const whyUs = [
  {
    icon: Zap,
    title: "Быстрая оценка онлайн",
    text: "Оставьте заявку на сайте — и уже через пять минут узнаете предварительную цену своего автомобиля.",
  },
  {
    icon: FileCheck,
    title: "Сделка под ключ",
    text: "Наши юристы подготовят все документы и оформят продажу строго по закону — без лишних для вас хлопот.",
  },
  {
    icon: Car,
    title: "Любые авто, любое состояние",
    text: "Выкупаем машины любых марок и моделей, годов выпуска и пробега — даже после ДТП или без ПТС.",
  },
  {
    icon: Wallet,
    title: "Деньги сразу на руки",
    text: "Сразу после подписания договора вы получаете всю сумму наличными или переводом на карту.",
  },
];

const faq = [
  {
    q: "Можно ли продать машину, если она старая или не на ходу?",
    a: "Да. Мы выкупаем автомобили в любом состоянии: после ДТП, с неисправным двигателем или КПП, не на ходу, без ПТС и с пробегом более 300 000 км. Если авто не заводится — приедем на эвакуаторе бесплатно.",
  },
  {
    q: "Сколько времени занимает вся сделка?",
    a: "В среднем — от 30 минут до 2 часов. Оценщик выезжает в удобное для вас время, а деньги вы получаете сразу после подписания договора купли-продажи.",
  },
  {
    q: "Как я получу оплату?",
    a: "Оплата возможна наличными сразу на месте или моментальным переводом на карту любого банка. Никаких задержек и скрытых комиссий.",
  },
  {
    q: "Нужно ли готовить документы заранее?",
    a: "Нет, подготовка не обязательна. Достаточно паспорта, ПТС и СТС. Если каких-то документов нет — наши юристы помогут восстановить их или оформить сделку по имеющимся.",
  },
  {
    q: "А если я ещё сомневаюсь?",
    a: "Бесплатная консультация ни к чему не обязывает. Позвоните нам — эксперт ответит на вопросы, сделает предварительную оценку и поможет принять решение.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 group">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500 text-white shadow-sm group-hover:scale-105 transition-transform">
        <Car className="h-5 w-5" />
      </div>
      <span className="font-heading text-lg font-black tracking-tight uppercase">
        Авто<span className="text-red-500">Выкуп</span>
      </span>
    </a>
  );
}

function CarCard({
  car,
  onZoom,
}: {
  car: (typeof cars)[number];
  onZoom: (img: string) => void;
}) {
  const [idx, setIdx] = useState(0);
  const total = car.images.length;

  const go = (e: React.MouseEvent, dir: number) => {
    e.stopPropagation();
    setIdx((prev) => (prev + dir + total) % total);
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={car.images[idx]}
          alt={car.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
          onClick={() => onZoom(car.images[idx])}
        />

        {/* Стрелки слайдера */}
        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={(e) => go(e, -1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={(e) => go(e, 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Точки-индикаторы */}
        {total > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {car.images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Фото ${i + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIdx(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-4 bg-red-500" : "w-1.5 bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-lg leading-snug">{car.title}</h3>
            <p className="text-xs text-muted-foreground">{car.year} г.в.</p>
          </div>
          <span className="inline-flex shrink-0 items-center rounded-lg bg-red-500/10 px-2.5 py-1 text-sm font-bold text-red-500">
            {car.price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{car.specs}</p>
        <Button
          size="sm"
          variant="secondary"
          className="w-full bg-red-500 hover:bg-red-600 text-white transition-colors"
          asChild
        >
          <a href="#callback">Хочу похожую цену</a>
        </Button>
      </div>
    </div>
  );
}

function Index() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [isSending, setIsSending] = useState(false);
  const isSubmittingRef = useRef(false);
  const [activeTab, setActiveTab] = useState<"all" | "excellent" | "budget" | "commercial">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredCars = cars.filter((car) => {
    if (activeTab === "all") return true;
    if (activeTab === "commercial") return car.title.toLowerCase().includes("sprinter");

    const priceNum = parseInt(car.price.replace(/\s/g, ""), 10);
    if (activeTab === "budget") return priceNum < 1000000 && !car.title.toLowerCase().includes("sprinter");
    if (activeTab === "excellent") return car.year >= 2017 && !car.title.toLowerCase().includes("sprinter");

    return true;
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmittingRef.current) return;

    if (phone.replace(/\D/g, "").length !== 11) {
      alert("Номер телефона должен состоять ровно из 11 цифр!");
      return;
    }

    isSubmittingRef.current = true;
    setIsSending(true);

    const templateParams = {
      car_model: carModel,
      car_year: carYear,
      phone: phone,
    };

    emailjs
      .send(
        "service_1f0rik7",
        "template_0xsn60e",
        templateParams,
        "7krMmgLWMid3DqKU1"
      )
      .then(
        (response) => {
          console.log("Успешно отправлено!", response.status, response.text);
          setCarModel("");
          setCarYear("");
          setPhone("");
          navigate({ to: "/thanks" });
        },
        (err) => {
          console.error("Ошибка при отправке:", err);
          alert("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
        }
      )
      .finally(() => {
        setIsSending(false);
        isSubmittingRef.current = false;
      });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Навигация */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 h-16">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-red-500 transition-colors">Почему мы</a>
            <a href="#catalog" className="hover:text-red-500 transition-colors">Каталог</a>
            <a href="#stages" className="hover:text-red-500 transition-colors">Этапы</a>
            <a href="#reviews" className="hover:text-red-500 transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-red-500 transition-colors">Вопросы</a>
            <a href="#callback" className="hover:text-red-500 transition-colors">Контакты</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+79221882530"
              className="hidden md:block text-sm font-bold text-foreground hover:text-red-500 transition-colors whitespace-nowrap"
            >
              +7 (922) 188-25-30
            </a>
            <a
              href="https://t.me/+79221882530"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href="https://max.app/call/+79221882530"
              target="_blank"
              rel="noopener noreferrer"
              title="Макс"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors"
            >
              <img src={max} alt="Макс" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero-блок */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-0">
          <img src={fon} alt="Hero background" className="h-full w-full object-cover object-center opacity-70 filter brightness-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 border border-red-500/30 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Выкуп авто в Нижнем Новгороде и Нижегородской области
          </span>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
            Выкуп авто в любом состоянии.{" "}
            <span className="text-red-500">Оценка эксперта и выезд бесплатно.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base md:text-xl text-zinc-300">
            Любой автомобиль может стоить хороших денег
          </p>

          {/* Фичи в hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {heroFeatures.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 text-left"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-400">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-white">{f.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20" asChild>
              <a href="#callback">Оставить заявку</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base bg-white/5 border-white/10 hover:bg-white/10 text-white" asChild>
              <a href="#catalog">Смотреть выкупленные</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
          <a
            href="#catalog"
            className="flex flex-col items-center text-xs tracking-widest text-zinc-400 hover:text-red-400 uppercase transition-colors duration-300 group"
          >
            <span className="mb-1 font-medium scale-90 opacity-80 group-hover:opacity-100 transition-opacity">
              Листайте вниз
            </span>
            <ChevronsDown className="h-5 w-5 animate-bounce text-muted-foreground group-hover:text-red-400 transition-colors" />
          </a>
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" className="mx-auto max-w-7xl px-4 md:px-8 py-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Выкупленные автомобили</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Посмотрите реальные примеры автомобилей, которые мы выкупили в последнее время. Честные цены и сроки.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-6">
          {[
            { key: "all", label: "Все авто" },
            { key: "excellent", label: "Свежие (от 2017)" },
            { key: "budget", label: "Бюджетные (до 1 млн)" },
            { key: "commercial", label: "Коммерческие" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as typeof activeTab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === t.key
                  ? "bg-red-500 text-white"
                  : "hover:bg-red-500/10 text-muted-foreground hover:text-red-500"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car, index) => (
            <CarCard key={index} car={car} onZoom={setSelectedImage} />
          ))}
        </div>
      </section>

      {/* Этапы выкупа */}
      <section id="stages" className="border-t border-border bg-secondary/5 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 border border-red-500/20">
              Простая схема работы
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">Как проходит выкуп</h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Всего 4 простых шага от первого контакта до получения денег за ваш автомобиль.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group bg-card border border-border p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-black text-red-500/20 group-hover:text-red-500/40 transition-colors">
                  01
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">Заявка</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Звонок, WhatsApp или удобная форма на нашем сайте. Мы на связи круглосуточно.
              </p>
            </div>

            <div className="group bg-card border border-border p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <Search className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-black text-red-500/20 group-hover:text-red-500/40 transition-colors">
                  02
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">Осмотр</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Бесплатный выезд эксперта-оценщика в удобное для вас место и время.
              </p>
            </div>

            <div className="group bg-card border border-border p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <CircleDollarSign className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-black text-red-500/20 group-hover:text-red-500/40 transition-colors">
                  03
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">Оценка и цена</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Быстрый анализ текущего рынка и формирование лучшей стоимости за авто.
              </p>
            </div>

            <div className="group bg-card border border-border p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-black text-red-500/30 group-hover:text-red-500/50 transition-colors">
                  04
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">Договор + деньги</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Оформляем официальные документы на месте, оплата наличными или моментальный перевод.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section id="about" className="border-t border-border bg-secondary/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 border border-red-500/20">
              Почему выбирают нас
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Продавать машину можно по-разному, но с нами это всегда <span className="text-red-500">быстро, честно и удобно</span>
            </h2>
            <p className="text-muted-foreground">
              Мы занимаемся профессиональным выкупом автомобилей в Нижегородской области более 10 лет.
              Наша главная задача — сделать сделку максимально быстрой, безопасной и выгодной для вас.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-4 space-y-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="font-heading text-2xl font-bold">Какие авто мы выкупаем?</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Целые и в отличном состоянии (дороже всех)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> После ДТП, битые, не на ходу (сами заберем на эвакуаторе)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> В залоге, кредите или под арестом (закроем долг сами)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Коммерческий транспорт, спецтехнику и минивэны</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Без ПТС, с ограничениями и любым пробегом</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="border-t border-border bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">Отзывы</h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Реальные отзывы выкупленных автомобилей.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[otziv1, otziv2, otziv3, otziv4, otziv5].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-border cursor-zoom-in"
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Отзыв ${i + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-secondary/10 py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8 space-y-8 md:space-y-10">
          <div className="text-center space-y-3 md:space-y-4">
            <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 border border-red-500/20">
              FAQ
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">Часто задаваемые вопросы</h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Собрали самые популярные вопросы наших клиентов. Не нашли ответ? Позвоните — подскажем.
            </p>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border bg-card transition-all ${
                    isOpen ? "border-red-500/40 shadow-sm" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-sm md:text-base">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-red-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="callback" className="mx-auto max-w-3xl px-4 py-20 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="font-heading text-3xl font-bold">Узнайте стоимость за 5 минут</h2>
          <p className="text-muted-foreground">Заполните форму, и наш оценщик свяжется с вами с готовым предложением.</p>
        </div>
        <form
          className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4 text-left"
          onSubmit={handleFormSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Марка и модель</label>
              <Input
                placeholder="Например: Toyota Camry"
                required
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Год выпуска</label>
              <Input
                placeholder="Например: 2018"
                required
                value={carYear}
                onChange={(e) => setCarYear(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Номер телефона</label>
            <Input
              type="tel"
              placeholder="79990000000"
              value={phone}
              required
              className="ym-record-keys"
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                if (onlyNums.length <= 11) {
                  setPhone(onlyNums);
                }
              }}
            />
            <span className="text-[11px] text-muted-foreground block mt-1">
              Введено цифр: {phone.length} из 11
            </span>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base bg-red-500 hover:bg-red-600 text-white"
            disabled={isSending}
          >
            {isSending ? "Отправка..." : "Отправить заявку на оценку"}
          </Button>
          <p className="text-[11px] text-center text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </form>
      </section>

      {/* Футер */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Срочный выкуп автомобилей в Нижнем Новгороде в любом состоянии. Оценка эксперта и выезд — бесплатно.
            </p>
          </div>
          <div className="text-sm space-y-2">
            <p className="font-semibold mb-2">Контакты</p>
            <a href="tel:+79221882530" className="block text-muted-foreground hover:text-red-500">+7 (922) 188-25-30</a>
            <a href="mailto:auto.a11iance@yandex.ru" className="block text-muted-foreground hover:text-red-500">auto.a11iance@yandex.ru</a>
            <p className="text-muted-foreground">Нижний Новгород, ул. Малышева, 51</p>
          </div>
          <div className="text-sm space-y-2">
            <p className="font-semibold mb-2">Режим работы</p>
            <p className="text-muted-foreground">Без выходных, 24/7</p>
            <p className="text-muted-foreground">Выезд оценщика — бесплатно</p>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} АвтоВыкуп. Все права защищены.
        </div>
      </footer>

      {/* Оверлей отправки заявки */}
      {isSending && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-background/90 backdrop-blur-sm">
          <div className="h-12 w-12 rounded-full border-4 border-red-500/20 border-t-red-500 animate-spin" />
          <p className="text-sm font-medium text-muted-foreground">Отправляем заявку, подождите...</p>
        </div>
      )}

      {/* Модальное окно просмотра изображений */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors text-sm font-medium"
            onClick={() => setSelectedImage(null)}
          >
            Закрыть ✕
          </button>
          <img
            src={selectedImage}
            alt="Полноразмерное фото"
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Плавающая кнопка звонка */}
      <a
        href="tel:+79221882530"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse"
        title="Позвонить нам"
      >
        <PhoneCall className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}