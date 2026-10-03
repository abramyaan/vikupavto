import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NovgorodOblast from "@/assets/novgor.webp";
import diler from "@/assets/diler.webp";

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
const nnovCities = [
  "Нижний Новгород",
  "Арзамас",
  "Дзержинск",
  "Бор",
  "Кстово",
  "Выкса",
  "Балахна",
  "Павлово",
  "Саров",
  "Городец",
  "Семёнов",
  "Богородск",
  "Кулебаки",
  "Навашино",
  "Сергач",
  "Лысково",
  "Шахунья",
  "Володарск",
  "Горбатов",
  "Ворсма",
];

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
  { icon: CircleDollarSign, text: "НАЛИЧНЫЙ И БЕЗНАЛИЧНЫЙ РАССЧЕТ" },
  { icon: Car, text: "ЗАПРЕТНЫЕ И ЗАЛОГОВЫЕ АВТО" },
  { icon: MessageCircle, text: "КОНСУЛЬТАЦИЯ БЕСПЛАТНО" },
  { icon: ShieldCheck, text: "ЛЮБОЕ СОСТОЯНИЕ" },
  { icon: Gauge, text: "ЛЮБОЙ ПРОБЕГ" },
  { icon: ThumbsUp, text: "ЧЕСТНАЯ ОЦЕНКА" },
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
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500 text-white shadow-sm group-hover:scale-105 transition-transform">
        <Car className="h-5 w-5" />
      </div>
      <span className="font-heading text-lg font-black tracking-tight uppercase">
        Авто<span className="text-rose-500">Выкуп</span>
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
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-rose-500 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={(e) => go(e, 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-rose-500 transition-all"
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
                  i === idx ? "w-4 bg-rose-500" : "w-1.5 bg-white/70"
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
          <span className="inline-flex shrink-0 items-center rounded-lg bg-rose-500/10 px-2.5 py-1 text-sm font-bold text-rose-500">
            {car.price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{car.specs}</p>
        <Button
          size="sm"
          variant="secondary"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white transition-colors"
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
        <MapPin className="h-3.5 w-3.5 text-rose-500" />
        Нижний Новогород
      </span>
      <span className="flex items-center gap-1.5">
        <ShieldCheck className="h-3.5 w-3.5 text-rose-500" />
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
      <a href="#about" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-rose-500 transition-colors">
        Почему мы
      </a>
      <a href="#catalog" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-rose-500 transition-colors">
        Каталог
      </a>
      <a href="#stages" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-rose-500 transition-colors">
        Этапы
      </a>
      <a href="#reviews" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-rose-500 transition-colors">
        Отзывы
      </a>
      <a href="#faq" className="px-3 py-1.5 text-sm font-medium rounded-full hover:bg-background hover:text-rose-500 transition-colors">
        Вопросы
      </a>
    </div>

    {/* Контакты и иконки */}
    <div className="flex items-center gap-2">
      <a
        href="tel:+79202530110"
        className="hidden md:flex flex-col items-end leading-tight mr-1"
      >
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Звоните сейчас
        </span>
        <span className="text-sm font-bold hover:text-rose-500 transition-colors whitespace-nowrap">
          +7 (920) 253-01-10
        </span>
      </a>

      <a
        href="https://t.me/+79202530110"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-[#229ED9] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </a>

<a
  href="https://wa.me/79202530110"
  target="_blank"
  rel="noopener noreferrer"
  title="WhatsApp"
  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
</a>

      <Button
        size="sm"
        className="hidden md:inline-flex bg-rose-500 hover:bg-rose-600 text-white ml-1"
        asChild
      >
        <a href="#callback">Оставить заявку</a>
      </Button>
    </div>
  </div>
</nav>
      </nav>

      {/* Hero-блок */}
  {/* Hero-блок */}
<section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden bg-black pt-8 pb-14 md:pt-20 md:pb-20">
  <div className="absolute inset-0 z-0">
    <img src={fon} alt="Hero background" className="h-full w-full object-cover object-center opacity filter brightness-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-black/40" />
  </div>

  <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8 text-center space-y-4 md:space-y-6">
    <span
      className="inline-block text-sm md:text-base font-semibold tracking-wide text-white animate-fade-in"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      Нижний Новгород и Нижегородская область
    </span>

    <h1 className="font-heading text-2xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
      Выкуп авто в любом состоянии.{" "}
      <span className="text-rose-500">Оценка эксперта и выезд бесплатно.</span>
    </h1>

    <p className="mx-auto max-w-2xl text-sm md:text-xl text-zinc-300">
      Любой автомобиль может стоить хороших денег
    </p>

    {/* Фичи в hero — 2 колонки на мобилке, компактнее */}
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pt-1 md:pt-2">
      {heroFeatures.map((f, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg md:rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-2 md:px-4 md:py-3 text-left"
        >
          <div className="flex h-7 w-7 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-md md:rounded-lg bg-rose-500/15 text-rose-400">
            <f.icon className="h-3.5 w-3.5 md:h-5 md:w-5" />
          </div>
          <span className="text-[11px] md:text-sm font-medium text-white leading-tight">
            {f.text}
          </span>
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4">
      <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/20" asChild>
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
      className="flex flex-col items-center text-xs tracking-widest text-zinc-400 hover:text-rose-400 uppercase transition-colors duration-300 group"
    >
      <span className="mb-1 font-medium scale-90 opacity-80 group-hover:opacity-100 transition-opacity">
        Листайте вниз
      </span>
      <ChevronsDown className="h-5 w-5 animate-bounce text-muted-foreground group-hover:text-rose-400 transition-colors" />
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
                  ? "bg-rose-500 text-white"
                  : "hover:bg-rose-500/10 text-muted-foreground hover:text-rose-500"
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
{/* ЕДИНЫЙ БЛОК: Условия + Как проходит + Почему выбирают */}
<section id="about" className="border-t border-border bg-secondary/5 py-16 md:py-28">
  <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-20 md:space-y-32">

    {/* ===== ШАПКА ===== */}
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-end">
      <div className="lg:col-span-7">
        <span className="block text-[11px] uppercase tracking-[0.3em] text-rose-500 font-semibold mb-5">
          ● Как мы работаем
        </span>
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Что и как<br className="hidden md:block" /> мы выкупаем
        </h2>
      </div>
      <div className="lg:col-span-5 lg:pb-2">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Продавать машину можно по-разному, но с нами это всегда быстро, честно и удобно.
          Ниже — условия, схема работы и причины, по которым клиенты выбирают нас.
        </p>
      </div>
    </div>

    {/* ===== УСЛОВИЯ ВЫКУПА — EDITORIAL ROWS ===== */}
    <div>
      <div className="flex items-baseline justify-between mb-8 md:mb-12">
        <h3 className="font-heading text-2xl md:text-3xl font-bold">Условия выкупа</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
          Три сценария
        </span>
      </div>

{/* Row 01 */}
<article className="grid gap-6 lg:grid-cols-12 lg:gap-10 py-8 md:py-12 border-t-2 border-foreground/10 items-start">
  <div className="lg:col-span-1">
    <span className="font-heading text-5xl md:text-7xl font-black text-rose-500 leading-none">
      01
    </span>
  </div>
  <div className="lg:col-span-4">
    <h4 className="font-heading text-2xl md:text-3xl font-bold leading-tight mb-3">
      Любой возраст и&nbsp;состояние
    </h4>
    <p className="text-sm text-muted-foreground leading-relaxed">
      От «свежих» до совсем старых. Минимального порога по цене — нет.
    </p>
  </div>
  <div className="lg:col-span-7">
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-muted-foreground">
      <li>— Любые годы выпуска</li>
      <li>— Дорогие: до 20 млн ₽</li>
      <li>— Цену назовём по телефону</li>
      <li>— ПТС обязателен</li>
      <li>— Только легковые</li>
    </ul>
  </div>
</article>

{/* Row 02 */}
<article className="grid gap-6 lg:grid-cols-12 lg:gap-10 py-8 md:py-12 border-t-2 border-foreground/10 items-start">
  <div className="lg:col-span-1">
    <span className="font-heading text-5xl md:text-7xl font-black text-rose-500 leading-none">02</span>
  </div>
  <div className="lg:col-span-4">
    <h4 className="font-heading text-2xl md:text-3xl font-bold leading-tight mb-3">
      Срочный выкуп
    </h4>
    <p className="text-sm text-muted-foreground leading-relaxed">
      Расчёт сразу после подписания договора — без ожидания и лишних поездок.
    </p>
  </div>
  <div className="lg:col-span-7">
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-muted-foreground">
      <li>— Принимаем звонки 24/7</li>
      <li>— Цену озвучим по телефону</li>
      <li>— Договор и деньги на месте</li>
      <li>— Без очередей в ГИБДД</li>
      <li>— Рекорд — 30 минут</li>
    </ul>
  </div>
</article>

{/* Row 03 */}
<article className="grid gap-6 lg:grid-cols-12 lg:gap-10 py-8 md:py-12 border-t-2 border-foreground/10 items-start">
  <div className="lg:col-span-1">
    <span className="font-heading text-5xl md:text-7xl font-black text-rose-500 leading-none">03</span>
  </div>
  <div className="lg:col-span-4">
    <h4 className="font-heading text-2xl md:text-3xl font-bold leading-tight mb-3">
      Типичная ситуация
    </h4>
    <blockquote className="text-sm italic text-muted-foreground leading-relaxed border-l-2 border-rose-500 pl-3">
      «Хочу сменить машину на что-то посвежее, но не готов месяцами возиться с объявлениями»
    </blockquote>
  </div>
  <div className="lg:col-span-7">
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-muted-foreground">
      <li>— Приезжаем сами</li>
      <li>— Оцениваем честно</li>
      <li>— Оформляем договор</li>
      <li>— Отдаём деньги сразу</li>
    </ul>
  </div>
</article>

      <div className="flex justify-center pt-8 md:pt-10">
        <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white" asChild>
          <a href="#callback">Узнать потолок цены</a>
        </Button>
      </div>
    </div>

    {/* ===== ПОЧЕМУ ВЫБИРАЮТ НАС — BIG TYPOGRAPHY ===== */}
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
      <div className="lg:col-span-5 lg:sticky lg:top-24">
        <span className="block text-[11px] uppercase tracking-[0.3em] text-rose-500 font-semibold mb-5">
          ● Почему мы
        </span>
        <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-5">
          Почему выбирают нас
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Мы занимаемся выкупом автомобилей в Нижнем Новгороде и Нижегородской области более 10 лет.
          Наша задача — сделать сделку простой и безопасной, без давления и лишней беготни.
        </p>
        {/* ЗАГЛУШКА под фото */}
        <div className="aspect-[4/3] rounded-2xl bg-secondary border border-border flex items-center justify-center text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
          <img
  src={diler}
  alt="Команда АвтоВыкуп"
  className="aspect-[4/3] w-full object-cover rounded-2xl"
/>
        </div>
      </div>

      <div className="lg:col-span-7">
        <ol>
          {[
            { n: "01", t: "Быстрая оценка онлайн", d: "Оставьте заявку — и уже через пять минут узнаете предварительную цену своего автомобиля." },
            { n: "02", t: "Сделка под ключ", d: "Наши юристы подготовят все документы и оформят продажу строго по закону — без лишних для вас хлопот." },
            { n: "03", t: "Любые авто, любое состояние", d: "Выкупаем машины любых марок и моделей, годов выпуска и пробега — даже после ДТП или без ПТС." },
            { n: "04", t: "Деньги сразу на руки", d: "Сразу после подписания договора вы получаете всю сумму наличными или переводом на карту." },
          ].map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-5 md:gap-8 py-6 md:py-8 border-b border-border first:border-t group"
            >
              <span className="font-heading text-lg md:text-xl font-bold text-rose-500 pt-1">
                {item.n}
              </span>
              <div>
                <h4 className="font-heading text-lg md:text-2xl font-bold mb-2 group-hover:text-rose-500 transition-colors">
                  {item.t}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                  {item.d}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Какие авто выкупаем — тегами */}
        <div className="mt-10 md:mt-14">
          <h4 className="font-heading text-lg md:text-xl font-bold mb-5">
            Какие авто мы выкупаем
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Целые и в отличном состоянии",
              "После ДТП и битые",
              "Не на ходу — эвакуатор бесплатно",
              "В залоге и кредите",
              "Под арестом",
              "Без ПТС",
              "Коммерческий транспорт",
              "Минивэны и спецтехника",
              "С любым пробегом",
            ].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs md:text-sm hover:border-rose-500/40 hover:text-rose-500 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ===== КАК ПРОХОДИТ ВЫКУП — HORIZONTAL STEPPER ===== */}
    <div id="stages" className="scroll-mt-24">
      <div className="flex items-baseline justify-between mb-10 md:mb-16">
        <div>
          <span className="block text-[11px] uppercase tracking-[0.3em] text-rose-500 font-semibold mb-4">
            ● Простая схема
          </span>
          <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            Как проходит выкуп
          </h3>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden md:block">
          4 шага
        </span>
      </div>

      <div className="relative">
        {/* Соединительная линия (desktop) */}
        <div
          className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border"
          aria-hidden="true"
        />

        <div className="grid gap-10 md:gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Заявка", d: "Звонок, WhatsApp или форма на сайте. Мы на связи круглосуточно." },
            { n: "02", t: "Осмотр", d: "Бесплатный выезд эксперта-оценщика в удобное место и время." },
            { n: "03", t: "Оценка", d: "Быстрый анализ рынка и формирование лучшей стоимости за авто." },
            { n: "04", t: "Договор и деньги", d: "Оформляем документы на месте, оплата наличными или переводом.", accent: true },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div
                className={`relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full font-heading text-base font-bold ${
                  step.accent
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                    : "bg-background border-2 border-border"
                }`}
              >
                {step.n}
              </div>
              <h4 className="font-heading text-lg md:text-xl font-bold mb-2">
                {step.t}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
</section>

{/* Блок с картой Нижегородской области и городами */}
<section className="border-t border-border bg-background py-14 md:py-20">
  <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-10 md:space-y-14">
    <div className="text-center space-y-3 md:space-y-4 max-w-3xl mx-auto">
      <span className="inline-flex items-center rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-500 border border-rose-500/20">
        География работы
      </span>
      <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">
        Выкупаем б/у автомобили в Нижнем Новгороде и по всей Нижегородской области
      </h2>
      <p className="text-sm md:text-base text-muted-foreground">
        Скупка б/у авто на разборку в Нижнем Новгороде и по всей Нижегородской области
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-2 items-center">
      {/* Карта */}
      <div className="relative rounded-2xl border border-border bg-card p-6 md:p-8 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
        <img
          src={NovgorodOblast}
          alt="Карта Нижегородской области"
          className="relative w-full max-w-md h-auto object-contain drop-shadow-sm"
        />
      </div>

      {/* Список городов */}
      <div className="space-y-5">
        <h3 className="font-heading text-xl font-bold">
          Города и населённые пункты, где мы работаем
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5 max-h-[420px] overflow-y-auto pr-2">
          {nnovCities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-500 transition-colors"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
              <span>{city}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground pt-2">
          Если вашего города нет в списке — позвоните, уточним возможность выезда.
        </p>
        <Button size="sm" className="bg-rose-500 hover:bg-rose-600 text-white" asChild>
          <a href="#callback">Уточнить по моему городу</a>
        </Button>
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
            <span className="inline-flex items-center rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-500 border border-rose-500/20">
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
                    isOpen ? "border-rose-500/40 shadow-sm" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-sm md:text-base">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-rose-500 transition-transform duration-300 ${
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
{/* Форма заявки */}
<section id="callback" className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
  {/* Декоративный фон */}
  <div
    className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_60%)]"
    aria-hidden="true"
  />

  <div className="grid gap-10 lg:grid-cols-5 lg:gap-14 items-center">
    {/* Левая колонка — доверие и преимущества */}
    <div className="lg:col-span-2 space-y-6">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-500 border border-rose-500/20">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
        Бесплатная оценка
      </span>

      <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight leading-tight">
        Узнайте реальную цену своего авто{" "}
        <span className="text-rose-500">за 5 минут</span>
      </h2>

      <p className="text-muted-foreground text-base">
        Оставьте заявку — эксперт свяжется с вами, задаст пару вопросов и назовёт
        предварительную стоимость. Без обязательств и навязчивых звонков.
      </p>

      <ul className="space-y-3 pt-2">
        {[
          { icon: Zap, text: "Ответим в течение 5 минут" },
          { icon: ShieldCheck, text: "Никаких обязательств и давления" },
          { icon: Wallet, text: "Оценка и выезд — бесплатно" },
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
              <item.icon className="h-4.5 w-4.5" />
            </span>
            <span className="text-sm font-medium">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Правая колонка — форма */}
    <div className="lg:col-span-3">
      <form
        onSubmit={handleFormSubmit}
        className="relative bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 space-y-5"
      >
        {/* Заголовок формы */}
        <div className="space-y-1">
          <h3 className="font-heading text-lg font-bold">
            Заявка на оценку
          </h3>
          <p className="text-xs text-muted-foreground">
            Заполните 3 поля — этого достаточно для расчёта
          </p>
        </div>

        {/* Марка и модель */}
        <div className="space-y-2">
          <label htmlFor="carModel" className="text-sm font-medium flex items-center gap-1.5">
            <Car className="h-3.5 w-3.5 text-rose-500" />
            Марка и модель
          </label>
          <Input
            id="carModel"
            placeholder="Toyota Camry, Kia Rio, ВАЗ 2115…"
            required
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            className="h-12 rounded-xl bg-background border-border focus-visible:ring-2 focus-visible:ring-rose-500/30 focus-visible:border-rose-500 transition-all"
          />
        </div>

        {/* Год и телефон — в одну строку на sm+ */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="carYear" className="text-sm font-medium flex items-center gap-1.5">
              <FileCheck className="h-3.5 w-3.5 text-rose-500" />
              Год выпуска
            </label>
            <Input
              id="carYear"
              placeholder="2015"
              required
              value={carYear}
              onChange={(e) => setCarYear(e.target.value)}
              className="h-12 rounded-xl bg-background border-border focus-visible:ring-2 focus-visible:ring-rose-500/30 focus-visible:border-rose-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium flex items-center gap-1.5">
              <PhoneCall className="h-3.5 w-3.5 text-rose-500" />
              Телефон
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              required
              className="h-12 rounded-xl bg-background border-border focus-visible:ring-2 focus-visible:ring-rose-500/30 focus-visible:border-rose-500 transition-all ym-record-keys"
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                if (onlyNums.length <= 11) setPhone(onlyNums);
              }}
            />
            <span className="text-[11px] text-muted-foreground block">
              {phone.length < 11
                ? `Введено ${phone.length} из 11 цифр`
                : "✓ Номер готов к отправке"}
            </span>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base rounded-xl bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/30"
          disabled={isSending}
        >
          {isSending ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Отправляем…
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Получить оценку
              <ChevronRight className="h-4 w-4" />
            </span>
          )}
        </Button>

        <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных
          и подтверждаете, что ознакомлены с политикой конфиденциальности.
        </p>
      </form>
    </div>
  </div>
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
            <a href="tel:+79202530110" className="block text-muted-foreground hover:text-rose-500">+7 (922) 188-25-30</a>
            <a href="mailto:auto.a11iance@yandex.ru" className="block text-muted-foreground hover:text-rose-500">auto.a11iance@yandex.ru</a>
            <p className="text-muted-foreground">Нижний Новгород</p>
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
          <div className="h-12 w-12 rounded-full border-4 border-rose-500/20 border-t-rose-500 animate-spin" />
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
        href="tel:+79202530110"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse"
        title="Позвонить нам"
      >
        <PhoneCall className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}