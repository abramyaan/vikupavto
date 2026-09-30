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
  Headset,
  Eye,
  TrendingUp,
  Handshake,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import fon from "@/assets/fonneta.webp";
import otziv1 from "@/assets/otziv1.jpg";
import otziv2 from "@/assets/otziv22.jpg";
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

import chetyrka from "@/assets/chetyrka.jpg";
import benzcls from "@/assets/benzcls.jpg";
import suzuki from "@/assets/suzuki.jpg";
import pikanto from "@/assets/pikanto.jpg";
import granta from "@/assets/granta.jpg";
import kiario3 from "@/assets/kiario3.jpg";
import vaz21 from "@/assets/vaz21.jpg";
import camry40 from "@/assets/camry40.jpg";
import niva from "@/assets/niva.jpg";
import dodge from "@/assets/dodge.jpg";
import mitsubi from "@/assets/mitsubi.jpg";

const cars = [
    {
    img: mitsubi,
    images: [mitsubi, mitsubi, mitsubi],
    title: "Mitsubishi",
    year: 2006,
    specs: "3.0 AT, полный привод",
    price: "599 000 ₽",
  },
  {
    img: dodge,
    images: [dodge, dodge, dodge],
    title: "Dodge Grand Caravan",
    year: 2008,
    specs: "3.3 бензин, 178 л.с., 7 мест (полный салон)",
    price: "555 000 ₽",
  },
  {
    img: niva,
    images: [niva, niva, niva],
    title: "Chevrolet Niva",
    year: 2013,
    specs: "1 собственник, 130 000 км оригинал, в родной краске, сигнализация с автозапуском, зелёная автотека, кондиционер",
    price: "330 000 ₽",
  },
  {
    img: camry40,
    images: [camry40, camry40, camry40],
    title: "Toyota Camry 40",
    year: 2006,
    specs: "2.4 AT, родной пробег 250 000 км",
    price: "540 000 ₽",
  },
  {
    img: vaz21,
    images: [vaz21, vaz21, vaz21],
    title: "ВАЗ 2107",
    year: 2005,
    specs: "1 хозяин, пробег 65 000 км",
    price: "100 000 ₽",
  },
  {
    img: kiario3,
    images: [kiario3, kiario3, kiario3],
    title: "Kia Rio 3",
    year: 2011,
    specs: "AT, родной пробег 130 000 км, максимальная комплектация (старт-стоп, бесключевой доступ), гаражное хранение, полностью обслужена, в родном окрасе",
    price: "500 000 ₽",
  },
  {
    img: granta,
    images: [granta, granta, granta],
    title: "Lada Granta",
    year: 2022,
    specs: "ЭУР, подъёмники, 2 подушки безопасности, 14 000 км родного пробега",
    price: "150 000 ₽",
  },
  {
    img: pikanto,
    images: [pikanto, pikanto, pikanto],
    title: "Kia Picanto",
    year: 2010,
    specs: "1.0 МКПП, 2 хозяина, 185 000 км пробега",
    price: "215 000 ₽",
  },
  {
    img: suzuki,
    images: [suzuki, suzuki, suzuki],
    title: "Suzuki Grand Vitara",
    year: 2006,
    specs: "2.0 механика, полный привод, мотор после полной капиталки (вложено 150 000 ₽), идеальное состояние",
    price: "450 000 ₽",
  },
  {
    img: benzcls,
    images: [benzcls, benzcls, benzcls],
    title: "Mercedes-Benz CLS 218",
    year: 2013,
    specs: "3.5 мотор, 306 л.с., чистейшие документы, 5 хозяев, родной пробег 220 000 км",
    price: "1 300 000 ₽",
  },
  {
    img: chetyrka,
    images: [chetyrka, chetyrka, chetyrka],
    title: "ВАЗ 2115",
    year: 2011,
    specs: "ПТС оригинал, 1 хозяин",
    price: "155 000 ₽",
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
        {/* Верхняя инфо-полоска */}
<div className="hidden md:block border-b border-border bg-secondary/40 text-xs">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 h-9">
    <div className="flex items-center gap-6 text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 text-red-500" />
        Нижний Новогород, ул. Малышева, 51
      </span>
      <span className="flex items-center gap-1.5">
        <ShieldCheck className="h-3.5 w-3.5 text-red-500" />
        Работаем 24/7 без выходных
      </span>
    </div>
    <span className="text-muted-foreground">
      Бесплатная оценка и выезд эксперта
    </span>
  </div>
</div>

{/* Основная навигация */}
<nav className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8 h-16">
    {/* Логотип */}
    <Logo />

    {/* Меню по центру */}
    <div className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-secondary/40 px-1.5 py-1">
      <a href="#about" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-red-500 transition-colors">
        Почему мы
      </a>
      <a href="#catalog" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-red-500 transition-colors">
        Каталог
      </a>
      <a href="#stages" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-red-500 transition-colors">
        Этапы
      </a>
      <a href="#reviews" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-red-500 transition-colors">
        Отзывы
      </a>
      <a href="#faq" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-red-500 transition-colors">
        Вопросы
      </a>
    </div>

    {/* Контакты и иконки */}
    <div className="flex items-center gap-2">
      <a
        href="tel:+79221882530"
        className="hidden md:flex flex-col items-end leading-tight mr-1"
      >
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Звоните сейчас
        </span>
        <span className="text-sm font-bold hover:text-red-500 transition-colors whitespace-nowrap">
          +7 (922) 188-25-30
        </span>
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

      <Button
        size="sm"
        className="hidden md:inline-flex bg-red-500 hover:bg-red-600 text-white ml-1"
        asChild
      >
        <a href="#callback">Оставить заявку</a>
      </Button>
    </div>
  </div>
</nav>
      </nav>

      {/* Hero-блок */}
      <section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden bg-black pt-32 pb-20 md:pt-30">
        <div className="absolute inset-0 z-0">
          <img src={fon} alt="Hero background" className="h-full w-full object-cover object-center opacity filter brightness-80" />
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
   

      {/* Почему выбирают нас */}
{/* ЕДИНЫЙ БЛОК: Условия + Как проходит + Почему выбирают */}
<section id="about" className="border-t border-border bg-secondary/5 py-14 md:py-24">
  <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-14 md:space-y-20">

    {/* Общая шапка */}
    <div className="text-center space-y-3 md:space-y-4 max-w-3xl mx-auto">
      <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 border border-red-500/20">
        Как мы работаем
      </span>
      <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">
        Что и как мы выкупаем
      </h2>
      <p className="text-sm md:text-base text-muted-foreground">
        Продавать машину можно по-разному, но с нами это всегда быстро, честно и удобно.
        Ниже — условия, схема работы и причины, по которым клиенты выбирают нас.
      </p>
    </div>

    {/* Подблок 1 — Условия выкупа (3 колонки) */}
    <div className="space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight">
          Условия выкупа
        </h3>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Три главных сценария — выберите свой и мы подскажем, как действовать.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Колонка 1 — Любой возраст и состояние */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-7 space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <Car className="h-6 w-6" />
            </div>
            <h4 className="font-heading text-lg font-bold">Любой возраст и состояние</h4>
          </div>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Автомобили любых годов выпуска — от «свежих» до совсем старых</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Недорогие и «уставшие» — минимального порога по цене нет</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Дорогие — выкупаем до 20 млн ₽</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Хотите узнать цену заранее — назовём по телефону за пару минут</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>ПТС обязателен: без него не выкупаем</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Только легковые: грузовой транспорт не берём</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Дороже 20 млн ₽ — не наш формат</span>
            </li>
          </ul>
          <Button size="sm" className="w-full bg-red-500 hover:bg-red-600 text-white" asChild>
            <a href="#callback">Узнать потолок цены</a>
          </Button>
        </div>

        {/* Колонка 2 — Срочный выкуп */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-7 space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <Zap className="h-6 w-6" />
            </div>
            <h4 className="font-heading text-lg font-bold">Срочный выкуп</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Расчёт сразу после подписания договора — без ожидания и лишних поездок.
          </p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Звоните в любое время: принимаем звонки круглосуточно</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Потолок цены озвучиваем ещё по телефону</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Договор и деньги — на месте, без очередей в ГИБДД</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>30 минут — это рекорд, а не норма</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>При дальнем выезде сделка занимает день</span>
            </li>
          </ul>
          <div className="flex items-end gap-2 pt-2">
            <span className="font-heading text-5xl font-black text-red-500 leading-none">30</span>
            <span className="text-sm text-muted-foreground pb-1">минут — наш рекорд</span>
          </div>
          <Button size="sm" className="w-full bg-red-500 hover:bg-red-600 text-white" asChild>
            <a href="#callback">Продать срочно</a>
          </Button>
        </div>

        {/* Колонка 3 — Типичная ситуация */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-7 space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h4 className="font-heading text-lg font-bold">Типичная ситуация</h4>
          </div>
          <blockquote className="border-l-4 border-red-500 pl-4 text-sm italic text-muted-foreground">
            «Хочу сменить машину на что-то посвежее, но не готов месяцами возиться с объявлениями и звонками»
          </blockquote>
          <p className="text-sm text-muted-foreground">
            Если вы узнали себя — просто позвоните. Мы приедем, посмотрим машину и назовём реальную цену.
            Дальше — ваше решение.
          </p>
          <div className="rounded-xl bg-red-500/5 border border-red-500/10 p-4 text-sm">
            <p className="font-medium text-red-500 mb-2">Что делаем мы:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                <span>Приезжаем сами — в удобное для вас время</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                <span>Оцениваем честно, без «сбивания» цены на месте</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                <span>Оформляем договор и отдаём деньги сразу</span>
              </li>
            </ul>
          </div>
          <Button size="sm" variant="outline" className="w-full border-red-500/30 text-red-500 hover:bg-red-500/10" asChild>
            <a href="#callback">Обсудить мою ситуацию</a>
          </Button>
        </div>
      </div>
    </div>

    {/* Разделитель */}
    <div className="border-t border-border" />

    {/* ОБЪЕДИНЁННЫЙ БЛОК: Почему выбирают нас (слева) + Как проходит выкуп (справа) */}
    <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">

      {/* ЛЕВАЯ КОЛОНКА — Почему выбирают нас */}
      <div className="space-y-6">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 border border-red-500/20">
            Почему мы
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight">
            Почему выбирают нас
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Продавать машину можно по-разному, но с нами это всегда{" "}
            <span className="text-red-500 font-medium">быстро, честно и удобно</span>.
          </p>
        </div>

        <p className="text-sm md:text-base text-muted-foreground">
          Мы занимаемся выкупом автомобилей в Нижнем Новгороде и Нижегородской области более 10 лет.
          Наша задача — сделать сделку простой и безопасной: без давления, скрытых условий и лишней беготни.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4 space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <Zap className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-sm">Быстрая оценка онлайн</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Оставьте заявку — и уже через пять минут узнаете предварительную цену своего автомобиля.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <FileCheck className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-sm">Сделка под ключ</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Наши юристы подготовят все документы и оформят продажу строго по закону — без лишних для вас хлопот.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <Car className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-sm">Любые авто, любое состояние</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Выкупаем машины любых марок и моделей, годов выпуска и пробега — даже после ДТП или без ПТС.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <Wallet className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-sm">Деньги сразу на руки</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Сразу после подписания договора вы получаете всю сумму наличными или переводом на карту.
            </p>
          </div>
        </div>

        {/* Мини-блок «Какие авто выкупаем» */}
        <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
          <h4 className="font-heading text-base font-bold">Какие авто мы выкупаем?</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Целые и в отличном состоянии (дороже всех)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>После ДТП, битые, не на ходу (сами заберем на эвакуаторе)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>В залоге, кредите или под арестом (закроем долг сами)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Коммерческий транспорт, спецтехнику и минивэны</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>Без ПТС, с ограничениями и любым пробегом</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ПРАВАЯ КОЛОНКА — Как проходит выкуп (2×2) */}
      <div id="stages" className="space-y-6 scroll-mt-24">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 border border-red-500/20">
            Простая схема
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight">
            Как проходит выкуп
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Всего 4 простых шага от первого контакта до получения денег за ваш автомобиль.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Шаг 1 — Заявка */}
          <div className="group relative bg-card border border-border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110">
                <Headset className="h-5 w-5" />
              </div>
              <span className="font-heading text-4xl font-black text-red-500/10 group-hover:text-red-500/25 transition-colors leading-none">
                01
              </span>
            </div>
            <h4 className="font-heading text-base font-bold mb-1.5">Заявка</h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Звонок, WhatsApp или удобная форма на нашем сайте. Мы на связи круглосуточно.
            </p>
          </div>

          {/* Шаг 2 — Осмотр */}
          <div className="group relative bg-card border border-border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110">
                <Eye className="h-5 w-5" />
              </div>
              <span className="font-heading text-4xl font-black text-red-500/10 group-hover:text-red-500/25 transition-colors leading-none">
                02
              </span>
            </div>
            <h4 className="font-heading text-base font-bold mb-1.5">Осмотр</h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Бесплатный выезд эксперта-оценщика в удобное для вас место и время.
            </p>
          </div>

          {/* Шаг 3 — Оценка и цена */}
          <div className="group relative bg-card border border-border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="font-heading text-4xl font-black text-red-500/10 group-hover:text-red-500/25 transition-colors leading-none">
                03
              </span>
            </div>
            <h4 className="font-heading text-base font-bold mb-1.5">Оценка и цена</h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Быстрый анализ текущего рынка и формирование лучшей стоимости за авто.
            </p>
          </div>

          {/* Шаг 4 — Договор и деньги (акцентный) */}
          <div className="group relative bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/25 overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Handshake className="h-5 w-5" />
                </div>
                <span className="font-heading text-4xl font-black text-white/20 leading-none">
                  04
                </span>
              </div>
              <h4 className="font-heading text-base font-bold mb-1.5">Договор + деньги</h4>
              <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                Оформляем официальные документы на месте, оплата наличными или моментальный перевод.
              </p>
            </div>
          </div>
        </div>
      </div>

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
            {[otziv1, otziv2].map((src, i) => (
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