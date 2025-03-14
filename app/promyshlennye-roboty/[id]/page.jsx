export async function generateMetadata({ params }) {
  if (params.id === "svarochnye-roboty") {
    return {
      title: "Промышленный сварочный робот CRP – надежные решения для автоматизации сварки",
      description:
        "Промышленный сварочный робот для автоматизации сварочных процессов. Повышение скорости, точности и безопасности. Купить сварочный робот манипулятор по выгодной цене. Интегрированные сварочные источники. Самый большой склад сварочных роботов манипуляторов в России.",
      keywords: [
        "промышленный сварочный робот",
        "сварочный робот",
        "сварочный робот купить",
        "сварочный робот манипулятор",
        "сварочный робот манипулятор купить",
        "сварочный робот манипулятор цена",
      ],
    };
  } else if (params.id === "polirovochnye-roboty") {
    return {
      title: "Полировка и шлифовка роботом CRP –  автоматизация фрезерной обработки с высокой точностью",
      description:
        "Полировка и шлифовка роботом – это высокоэффективные решения для роботизированной обработки материалов с превосходной точностью. Роботы для полировки позволяют значительно ускорить процессы, улучшить качество поверхности и снизить производственные затраты.Узнайте больше на нашем сайте.",
      keywords: [
        "полировка роботом",
        "шлифовка роботом",
        "робот полировщик",
        "шлифовальный робот",
        "робот для полировки",
        "робот для шлифовки",
      ],
    };
  } else if (params.id === "frezernye-roboty") {
    return {
      title: "Робот манипулятор для фрезеровки плоскости: фрезерный робот CRP для точной обработки",
      description:
        "Робот манипулятор для фрезеровки плоскости – эффективное решение для роботизации фрезерных работ. Фрезерный робот CRP позволяет достичь высокой точности и скорости при обработке материалов, снижая затраты. Покажем работу фрезерных роботов на нашем сайте.",
      keywords: [
        "робот манипулятор для фрезеровки плоскости",
        "робот фрезеровщик",
        "фрезерный робот",
        "фрезерный робот купить",
        "фрезеровка роботом",
        "робот фрезеровщик цена",
      ],
    };
  } else if (params.id === "roboty-dlya-obsluzhivaniya-stankov") {
    return {
      title: "Робот для станка ЧПУ – автоматизация обслуживания станков и загрузки, цена",
      description:
        "Робот для станка ЧПУ – решение для автоматической загрузки и обслуживания станков. Роботы для станков оптимизируют процессы на токарных и фрезерных станках, повышая производительность и точность. Роботы для обслуживания станков улучшают процесс обработки деталей. Разработаем решение по роботизированному обслуживанию станков с ЧПУ бесплатно. ",
      keywords: [
        "робот для станка чпу",
        "роботы для обслуживания станков",
        "роботы для станков",
        "роботы для токарных станков",
        "загрузка станка роботом",
        "робот для чпу",
      ],
    };
  } else if (params.id === "roboty-dlya-paletirovaniya") {
    return {
      title: "Робот паллетайзер CRP –  автоматизация паллетирования мешков и коробов, узнать цену",
      description:
        "Робот паллетайзер – решение для автоматического паллетирования коробов и мешки. Купить робот паллетайзер по выгодной цене для улучшения процессов упаковки и транспортировки. Высокая производительность и надежность для беспрерывного производства. Разработаем решение по роботизации паллетирования бесплатно. ",
      keywords: [
        "робот паллетайзер",
        "робот паллетайзер купить",
        "робот паллетайзер мешков",
        "робот паллетайзер цена",
        "робот паллетировщик",
        "роботы для паллетирования",
      ],
    };
  } else if (params.id === "roboty-manipulyatory") {
    return {
      title: "Роботы манипуляторы CRP – купить и заказать по выгодной цене",
      description:
        "Промышленные роботы манипуляторы для автоматизации производства. Купить робот манипулятор с механической рукой по выгодной цене. Высокая точность и надежность для вашего бизнеса. Закажите робота манипулятора на нашем сайте прямо сейчас - поможем с выбором!",
      keywords: [
        "промышленные роботы манипуляторы",
        "промышленные роботы манипуляторы купить",
        "промышленный робот манипулятор цена",
        "робот манипулятор",
        "робот манипулятор купить",
        "робот манипулятор механическая рука купить",
      ],
    };
  } else if (params.id === "scara") {
    return {
      title: "SCARA робот CRP – купить робот типа SCARA для автоматизации производства, цены",
      description:
        "SCARA робот для высокоточной автоматизации процессов на производстве. Купить робот типа SCARA с высокой производительностью и надежностью. Идеален для сборки, упаковки и других операций. Робот типа SCARA гарантируют высокую точность и производительность.",
      keywords: [
        "scara робот",
        "scara робот купить",
        "робот типа scara",
        "scara",
        "scara робот цена",
        "scara робот заказать",
      ],
    };
  } else if (params.id === "koboty") {
    return {
      title: "Коллаборативные роботы (коботы) CRP – купить коллаборативные роботы и манипуляторы",
      description:
        "Коллаборативные роботы (коботы) для автоматизации производства. Купить коллаборативный робот-манипулятор по выгодной цене. Идеальны для совместной работы с человеком на разных стадиях производства. Доступные коллаборативные роботы для повышения эффективности и безопасности работы. ",
      keywords: [
        "коллаборативные промышленные роботы это",
        "коллаборативные роботы коботы",
        "коллаборативный робот ",
        "коллаборативный робот купить",
        "коллаборативный робот манипулятор",
        "коллаборативный робот цена",
      ],
    };
  }


}

import CategoryPage from "./CategoryPage";

export default function Page(props) {
  return <CategoryPage />;
}
