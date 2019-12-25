module.exports = {
  "failMessages": [
    "Ахаха, нет. Пойду пока отопью вашего шампусика",
    "Неа. Ребята, вы точно с этого проекта?",
    "Такими темпами вы до Нового года будете бороться со мной",
    "И это.... Неверный ответ, продолжайте",
    "Ура! Вы смогли найти еще один неверный ответ на этот вопрос",
    "Вы точно помните, что шампанское нагревается? Советую шевелить извилинами активнее"
  ],
  "failMessagesFrequency": 0.2,
  "defaultHintsConfig": [2, 5, 7],
  "rounds": [
    {
      "success": [
        "start",
        "начать",
        "старт",
        "hello"
      ],
      "hints": [
        "type \"start\""
      ]
    },
    {
      "output": [
        {
          "text": "Ну привет, ребята 😈",
          "timer": 0
        },
        {
          "text": "Для начала, я хочу проверить насколько вы знаете свой проект.",
          "timer": 2000
        },
        {
          "text": "И вот первый вопрос: в каком месяце он стартовал в епаме?",
          "timer": 4000
        }
      ],
      "success": [
        "май",
        "may",
        "в мае"
      ],
      "hints": ["через что ищут звезды?"]
    },
    {
      "output": [
        {
          "text": "Ничесе, вы что, умеете пользоваться телескопом??",
          "timer": 0
        },
        {
          "text": "Ну ладно, вот вам следующий вопрос:",
          "timer": 3000
        },
        {
          "text": "Кто главный тренер на проекте?",
          "timer": 2500
        }
      ],
      "eggs": {
        "вова": ["очень близко, он и вас заставляет подтягиваться?"]
      },
      "success": ["наташа", "наталья", "натаха", "натали"],
      "hints": ["Тренер по бегу"]
    },
    {
      output: [
        {
          text: "Конечно, вы только посмотрите, что она умеет:",
          timer: 0
        },
        {
          text: "/img/natasha.gif",
          timer: 3500,
        },
        {
          text: "Ладно, пойдем к следующему вопросу",
          timer: 5500
        },
        {
          text: "Кто главный библиотекарь проекта?",
          timer: 3000
        }
      ],
      success: ["макс", "максим", "белов", "капитан белов"],
      hints: ["походите по спэйсу, поищите и возможно узнаете", "это же капитан"]
    },
    {
      output: [
        {
          text: "В точку, тоже брали у него книжки?",
          timer: 0
        },
        {
          text: "Вот вам следующий вопрос:",
          timer: 2000
        },
        {
          text: "Под каким названием выступала наша команда на турслете?",
          timer: 2000
        }
      ],
      eggs: {
        "google": ["нет, у нас более оригинальные ребята"],
        "гугл": ["нет, у нас более оригинальные ребята"],
        "ggrc": ["нет, у нас более оригинальные ребята"],
        "ггрц": ["нет, у нас более оригинальные ребята"]
      },
      success: ["oogle dogs", "угл догс"],
      hints: ["найдите кого-то, кто был там"]
    },
    {
      output: [
        {
          text: "Да, действительно так! Вы наверное присутствовали там и видели это:",
          timer: 0,
        },
        {
          text: "/img/success.gif",
          timer: 4000,
        },
        {
          text: "На этом вопросе вы точно завалитесь 😈",
          timer: 5000
        },
        {
          text: "Напишите фамилию Прасаны не подсматривая. Я слежу!",
          timer: 3000
        }
      ],
      success: ["vaithiswaran"],
      hints: ["гугловые звезды ищут в гугловом телескопе"]
    },
    {
      output: [
        {
          text: "Ого, вы умеете пользоваться интернал тулами гугла? Ладно, погнали дальше",
          timer: 0,
        },
        {
          text: "Кто самый злой на проекте?",
          timer: 5000
        }
      ],
      success: [{type:'regex', regex: '[а-яa-z]{3}'}],
      hints: ["выразите свое мнение"]
    },
    {
      output: [
        {
          text: "ХохО... я передам!!! Be careful in new year!",
          timer: 0
        },
        {
          text: "Ну лаааадно, видимо вы знакомы с проектом, погнали дальше. Вот вам новая задачка... Все равно вы не справитесь дальше, ведь там еще сложнее.",
          timer: 3000
        },
        {
          text: "1-23-3-6",
          timer: 3000
        },
        {
          text: "А разгадку вы найдете в библиотеке проекта.",
          timer: 7000
        },
        {
          text: "Потом возвращайтесь ко мне!",
          timer: 7000
        },
        {
          text: "Ну и что вы там наотгадывали?",
          timer: 1800000
        },
      ],
      success: ["success"]
    },
    {
      output: [
        {
          text: "Мороз ваш друг, топайте к нему.",
          timer: 0,
        },
        {
          text: "Ох, вы и это нашли, ну тогда вы сможете ввести стронг пассворд для взлома базы с фотоархивом на основании подсказки",
          timer: 180000,
        },
        {
          text: "max_length=16",
          timer: 120000
        }
      ],
      success: ["xr[e)m5)2p5~s:na"],
      hints: ["на подсказке фраза для запоминания пароля, введите пароль, который она помогает запомнить"]
    },
    {
      output: [
        {
          text: "Ух ты, ну вы даете, вы взламывали когда-то такие пароли? Ну ладно, это на вашей совести.",
          timer: 0,
        },
        {
          text: "Следующую подсказку вы найдете здесь:",
          timer: 7500
        },
        {
          text: "link to image",
          timer: 2000
        },
        {
          text: "побегайте по офису 😈",
          timer: 5000
        }
      ],
      hint: ["там сейчас происходит 3хмесячный фуршет"],
      success: ["2938 pp-7"]
    },
    {
      output: [
        {
          text: "Ерунда какая-то :Р",
          timer: 0,
        },
        {
          text: "Звезды ищут тут",
          timer: 12000
        },
        {
          text: "/img/telescope.jpg",
          timer: 2000
        },
        {
          text: "Впишите имя владельца",
          timer: 20000
        }
      ],
      hint: ["/img/epam telescope.png"],
      success: ["паша", "павел", "pavel", "khatkovski", "хатковский"]
    },
    {
      output: [
        {
          text: "Вот он знает куда вам дальше.",
          timer: 0
        },
        {
          text: "Вы что-нибудь нашли под замком?",
          timer: 300000
        },
      ],
      success: ["conference"]
    },
    {
      output: [
        {
          text: "Чорт! Вы справились, так и быть. Ваш праздник на 7ом этаже, приходите и возьмите",
          timer: 0
        },
        {
          text: "/img/success.jpg",
          timer: 3000
        }
      ],
      success: ["askldfjlkasj dlkja sldfkjalksdjflkasdj flkjasdlkf jalksdj"]
    }
  ],
  "easterEggs": {},
  "jarvis": ["GRIIINCH"]
};