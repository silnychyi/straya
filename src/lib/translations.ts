import type { Locale } from "./i18n";

export const translations = {
  en: {
    meta: {
      title: "STRAYA FP-5 — Autonomous Counter-UAS Interceptor",
      description:
        "STRAYA FP-5 is an autonomous counter-UAS interceptor. 310 km/h top speed, 30 km range, EW-resistant, airborne in under 30 seconds. Designed in the Netherlands, combat deployed in Ukraine.",
      ogDescription:
        "310 km/h · 30 km range · 5 km ceiling · EW-resistant. Designed in the Netherlands, combat deployed in Ukraine.",
    },
    nav: {
      menu: "Menu",
      home: "Straya home",
      links: [
        { href: "#specifications", label: "Specifications" },
        { href: "#platform", label: "Platform" },
        { href: "#systems", label: "Systems" },
        { href: "#advantages", label: "Advantages" },
        { href: "#configurations", label: "Configurations" },
      ],
    },
    lang: {
      en: "EN",
      ua: "UA",
    },
    hero: {
      subtitle: "Autonomous counter-UAS interceptor",
      viewSpecs: "View specifications",
      imageAlt: "Straya FP-5 interceptor",
    },
    specs: {
      title: "Specifications",
      items: [
        { value: 310, unit: "km/h", label: "Max. speed" },
        { value: 30, unit: "km", label: "Flight range" },
        { value: 5, unit: "km", label: "Flight height" },
        { value: 20, unit: "min", label: "Flight time" },
        { value: 400, unit: "g", label: "Combat unit" },
      ],
    },
    platform: {
      title: "Platform",
      items: [
        { title: "Motors", value: "3115 900KV" },
        { title: "Propellers", value: "8x8 or 8x10" },
        { title: "Stack", value: "8S, heat-resistant" },
        { title: "Battery", value: "8S3P, 15 000 mAh" },
        { title: "Cooling", value: "Active fan + air intake" },
        {
          title: "Camera",
          value: "640x512 thermal",
          note: "Caddx Ratel Pro · Walksnail Ascent GT Pro · DJI O4 Air Unit",
        },
        { title: "Communication", value: "ELRS or SineLink" },
        { title: "Flight controller", value: "ArduPilot / Betaflight" },
      ],
    },
    systems: {
      title: "In-house systems",
      imageAlt: "Straya FP-5 interceptor fleet",
      items: [
        {
          codename: "Smazhenyi Kabanchyk",
          role: "Initiation unit",
          body: "An in-house design developed in accordance with NGU requirements. It features a timer, visual and audible indicators, and mechanical and software safety locks.",
        },
        {
          codename: "DREMIAN",
          role: "Terminal guidance",
          body: "Last-mile targeting module",
        },
      ],
    },
    statement: {
      netherlands: "Designed in the Netherlands",
      ukraine: "Combat deployment in Ukraine",
      body: "Manufactured by Ukrainian military veterans during their rehabilitation, in collaboration with the National Guard of Ukraine.",
    },
    advantages: {
      title: "Advantages",
      items: [
        {
          title: "High-quality construction",
          body: "Built to hold together at 310 km/h and survive repeated sorties.",
        },
        {
          title: "Built with the National Guard of Ukraine",
          body: "Developed in collaboration with the NGU — all operational needs and requirements have been taken into account.",
        },
        {
          title: "Resistance to electronic warfare",
          body: "Hardened against EW measures across the comms and navigation stack.",
        },
        {
          title: "Ready for takeoff in under 30 seconds",
          body: "From case to airborne in less than half a minute.",
        },
        {
          title: "Drone power switch",
          body: "Physical cut-off on the airframe for safe handling and transport.",
        },
        {
          title: "SkyMap planning + beacon guidance",
          body: "Flight path planning in SkyMap with flight guidance via beacons.",
        },
        {
          title: "Built by Ukrainian veterans",
          body: "Manufactured in the Netherlands by Ukrainian military veterans during their rehabilitation.",
        },
      ],
    },
    configurations: {
      title: "Configurations",
      perUnit: "Per unit",
      items: [
        {
          optic: "Thermal",
          detail: "640x512 thermal imager",
          price: 1100,
          range: "Night + obscured conditions",
        },
        {
          optic: "DJI O4",
          detail: "DJI O4 Air Unit",
          price: 850,
          range: "Daylight digital HD",
        },
        {
          optic: "Walksnail Ascent",
          detail: "Walksnail Ascent GT Pro",
          price: 800,
          range: "20 km link budget",
        },
      ],
    },
    footer: {
      tagline: "Autonomous counter-UAS interceptor",
      designed: "Designed in the Netherlands",
      deployed: "Combat deployment in Ukraine",
      copyright: "Straya",
    },
  },
  ua: {
    meta: {
      title: "STRAYA FP-5 — автономний перехоплювач БпЛА",
      description:
        "STRAYA FP-5 — автономний перехоплювач БпЛА. Максимальна швидкість 310 км/год, дальність 30 км, стійкість до РЕБ, зліт менше ніж за 30 секунд. Розроблено в Нідерландах, бойове застосування в Україні.",
      ogDescription:
        "310 км/год · 30 км дальність · 5 км висота · стійкість до РЕБ. Розроблено в Нідерландах, бойове застосування в Україні.",
    },
    nav: {
      menu: "Меню",
      home: "Straya на головну",
      links: [
        { href: "#specifications", label: "Характеристики" },
        { href: "#platform", label: "Платформа" },
        { href: "#systems", label: "Системи" },
        { href: "#advantages", label: "Переваги" },
        { href: "#configurations", label: "Конфігурації" },
      ],
    },
    lang: {
      en: "EN",
      ua: "UA",
    },
    hero: {
      subtitle: "Автономний перехоплювач БпЛА",
      viewSpecs: "Характеристики",
      imageAlt: "Перехоплювач Straya FP-5",
    },
    specs: {
      title: "Характеристики",
      items: [
        { value: 310, unit: "км/год", label: "Макс. швидкість" },
        { value: 30, unit: "км", label: "Дальність польоту" },
        { value: 5, unit: "км", label: "Висота польоту" },
        { value: 20, unit: "хв", label: "Час польоту" },
        { value: 400, unit: "г", label: "Бойова частина" },
      ],
    },
    platform: {
      title: "Платформа",
      items: [
        { title: "Мотори", value: "3115 900KV" },
        { title: "Пропелери", value: "8x8 або 8x10" },
        { title: "Стек", value: "8S, термостійкий" },
        { title: "Батарея", value: "8S3P, 15 000 мА·год" },
        { title: "Охолодження", value: "Активний вентилятор + повітрозабірник" },
        {
          title: "Камера",
          value: "640x512 тепловізор",
          note: "Caddx Ratel Pro · Walksnail Ascent GT Pro · DJI O4 Air Unit",
        },
        { title: "Зв'язок", value: "ELRS або SineLink" },
        { title: "Політний контролер", value: "ArduPilot / Betaflight" },
      ],
    },
    systems: {
      title: "Власні системи",
      imageAlt: "Флот перехоплювачів Straya FP-5",
      items: [
        {
          codename: "Смажений Кабанчик",
          role: "Блок ініціації",
          body: "Власна розробка відповідно до вимог НГУ. Має таймер, світлову та звукову індикацію, а також механічні й програмні запобіжники.",
        },
        {
          codename: "DREMIAN",
          role: "Термінальне наведення",
          body: "Модуль наведення на останній милі",
        },
      ],
    },
    statement: {
      netherlands: "Розроблено в Нідерландах",
      ukraine: "Бойове застосування в Україні",
      body: "Виробляється українськими військовими ветеранами під час реабілітації, у співпраці з Національною гвардією України.",
    },
    advantages: {
      title: "Переваги",
      items: [
        {
          title: "Якісна конструкція",
          body: "Розрахована триматися на 310 км/год і витримувати повторні вильоти.",
        },
        {
          title: "Створено з Національною гвардією України",
          body: "Розроблено спільно з НГУ — враховано всі операційні потреби та вимоги.",
        },
        {
          title: "Стійкість до радіоелектронної боротьби",
          body: "Захист від засобів РЕБ у каналах зв'язку та навігації.",
        },
        {
          title: "Готовність до зльоту менше ніж за 30 секунд",
          body: "Від кейса до повітря — менше ніж за пів хвилини.",
        },
        {
          title: "Вимикач живлення дрона",
          body: "Фізичне відключення на планері для безпечного транспортування та роботи.",
        },
        {
          title: "Планування SkyMap + наведення по маяках",
          body: "Планування маршруту в SkyMap з польотним наведенням за маяками.",
        },
        {
          title: "Зроблено українськими ветеранами",
          body: "Виробляється в Нідерландах українськими військовими ветеранами під час реабілітації.",
        },
      ],
    },
    configurations: {
      title: "Конфігурації",
      perUnit: "За одиницю",
      items: [
        {
          optic: "Тепловізор",
          detail: "Тепловізор 640x512",
          price: 1100,
          range: "Ніч і складні умови видимості",
        },
        {
          optic: "DJI O4",
          detail: "DJI O4 Air Unit",
          price: 850,
          range: "Цифрове HD у денних умовах",
        },
        {
          optic: "Walksnail Ascent",
          detail: "Walksnail Ascent GT Pro",
          price: 800,
          range: "Бюджет лінку 20 км",
        },
      ],
    },
    footer: {
      tagline: "Автономний перехоплювач БпЛА",
      designed: "Розроблено в Нідерландах",
      deployed: "Бойове застосування в Україні",
      copyright: "Straya",
    },
  },
} as const;

export type Dictionary = (typeof translations)["en"];

export function getDictionary(locale: Locale): Dictionary {
  return translations[locale] as Dictionary;
}
