import { CATEGORIES } from "./categories";
import { UNITS } from "./units";

const { BREAKFAST, LUNCH, DINNER } = CATEGORIES;
const { GRAMS, ML, PCS, TO_TASTE } = UNITS;

export const initRecipes = [
  {
    id: 1,
    name: "Свинной стейк",
    imgUrl: "https://bing.com/th?id=OSK.80bccb01665cbbb41dfeab4e9e350c90",
    categories: [LUNCH, DINNER],
    description: "Настоящий, сочный свиной стейк",
    ingredients: [
        {name: "Свиная шея", amount: 500, unit: GRAMS},
        {name: "Молотый черный перец", amount: 0, unit: TO_TASTE},
        {name: "Соль", amount: 0, unit: TO_TASTE},
        {name: "Головка чеснока", amount: 1, unit: PCS},
        {name: "Подсолнечное масло", amount: 100, unit: ML},
    ],
    temperatureC: 180,
    durationMinutes: 20,
    instructions: [
        "Нарежьте мясо на куски толщиной 1.5-2см",
        "Натрите солью и чёрным перцем по вкусу",
        "Очистите головку на зубчики и нарежьте зубчики на пластинки",
        "Сделайте надрезы в мясе и поместите пластинки чеснока внутрь",
        "Обмажьте мясо тонким слоем подсолнечного масла",
        "Поместите в Аэрогриль на указанные время и температуру",
        "Подавайте с гарниром из картофеля"
    ]
  },
  {
    id: 2,
    name: "Омлет с томатами",
    imgUrl: "https://bing.com/th?id=OSK.9b97de570b0af3f489ee9933de3aef97",
    categories: [BREAKFAST],
    description: "Быстрый и питательный завтрак для всей семьи",
    ingredients: [
        { name: "Яйца куриные", amount: 3, unit: PCS },
        { name: "Молоко", amount: 50, unit: ML },
        { name: "Помидор", amount: 1, unit: PCS },
        { name: "Масло сливочное", amount: 10, unit: GRAMS },
        { name: "Соль", amount: 0, unit: TO_TASTE }
    ],
    temperatureC: 160,
    durationMinutes: 10,
    instructions: [
        "Взбейте яйца с молоком и солью до однородности",
        "Нарежьте помидор кубиками",
        "Разогрейте форму в Аэрогриле и смажьте маслом",
        "Вылейте смесь в форму и добавьте помидоры сверху",
        "Запекайте до готовности"
    ]
  },
  {
    id: 3,
    name: "Куриные ножки с травами",
    imgUrl: "https://bing.com/th?id=OSK.4ed7bc46c8c381cb678758006de663ab",
    categories: [LUNCH, DINNER],
    description: "Хрустящая корочка и нежное мясо внутри",
    ingredients: [
        { name: "Куриные голени", amount: 6, unit: PCS },
        { name: "Паприка", amount: 5, unit: GRAMS },
        { name: "Сушеный чеснок", amount: 0, unit: TO_TASTE },
        { name: "Оливковое масло", amount: 30, unit: ML },
        { name: "Соль", amount: 0, unit: TO_TASTE }
    ],
    temperatureC: 200,
    durationMinutes: 25,
    instructions: [
        "Промойте и обсушите куриные ножки",
        "Смешайте масло со специями и солью",
        "Тщательно натрите ножки полученной смесью",
        "Выложите в один слой в корзину Аэрогриля",
        "Переверните в середине приготовления для равномерной корочки"
    ]
  },
  {
    id: 4,
    name: "Запеченный картофель",
    imgUrl: "https://bing.com/th?id=OSK.3bd251d6df114476df651817dc48531a",
    categories: [LUNCH, DINNER],
    description: "Идеальный гарнир или самостоятельное блюдо",
    ingredients: [
        { name: "Картофель", amount: 500, unit: GRAMS },
        { name: "Розмарин", amount: 0, unit: TO_TASTE },
        { name: "Чеснок", amount: 2, unit: PCS },
        { name: "Растительное масло", amount: 40, unit: ML },
        { name: "Соль", amount: 0, unit: TO_TASTE }
    ],
    temperatureC: 190,
    durationMinutes: 30,
    instructions: [
        "Нарежьте картофель дольками (по-деревенски)",
        "Смешайте дольки с маслом, солью и розмарином",
        "Раздавите зубчики чеснока ножом и добавьте к картофелю",
        "Запекайте до золотистой корочки, периодически встряхивая корзину"
    ]
  },
  {
    id: 5,
    name: "Творожная запеканка",
    imgUrl: "https://th.bing.com/th/id/OIP.wXMs3_z6xwmTdGUwp7hk9AHaE8?w=271&h=181&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
    categories: [BREAKFAST, DINNER],
    description: "Нежный десерт, который тает во рту",
    ingredients: [
        { name: "Творог", amount: 400, unit: GRAMS },
        { name: "Яйца", amount: 2, unit: PCS },
        { name: "Сахар", amount: 50, unit: GRAMS },
        { name: "Сметана", amount: 30, unit: GRAMS },
        { name: "Ванилин", amount: 0, unit: TO_TASTE }
    ],
    temperatureC: 170,
    durationMinutes: 35,
    instructions: [
        "Смешайте творог, яйца, сахар и сметану в блендере",
        "Добавьте ванилин и перемешайте ложкой",
        "Смажьте форму маслом и выложите массу",
        "Запекайте до появления румяной корочки сверху",
        "Дайте немного остыть перед подачей"
    ]
  }
];