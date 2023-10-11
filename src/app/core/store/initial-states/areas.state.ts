import { IAreasState } from '../models/areas.models';

export const initialAreasState: IAreasState = {
  areas: [
    {
      id: 1,
      title: 'Здоровье',
      point: 3,
      color: '#87F03C',
      description:
        'В эту сферу входит: физическое здоровье, психологическое здоровье, физическая активность, внешний вид.',
      grade_1_desc: 'Я присмерти.',
      grade_10_desc:
        'У меня тело греческого бога, идеальные анализы, наичистейший рассудок.',
      grade_current_desc:
        'У меня есть несколько запущенных болезней: гастрит; плохое зрение; я не занимаюсь спортом; в голове беспорядок.',
      grade_next_desc:
        'Начать вести физическую активность. Перестать пользоваться лифтом и использовать только лестницу (если конечно я не несу домой что-то очень тяжёлое), пройти обследование у гастроентеролога и окулиста, начать правильно питаться, записаться на психотерапию.',
    },
    {
      id: 2,
      title: 'Работа',
      point: 4,
      color: '#0B5FA5',
      description:
        'Эта сфера про то, насколько меня устраивает то дело, которое приносит мне доход.',
      grade_1_desc: 'Я безработный',
      grade_10_desc:
        'Я занимаюсь любимым делом, в котором мне нравится абсолютно всё и при этом зарабатываю большие деньги.',
      grade_current_desc:
        'На этой работе я получаю неплохо, но мне не совсем нравится то, чем я занимаюсь.',
      grade_next_desc:
        'Подумать о смене работы. Решить, чем бы я хотел зарабатывать на жизнь, чтобы это было и интересно и приносило хороший доход.',
    },
    {
      id: 3,
      title: 'Финансы',
      point: 7,
      color: '#2B8E00',
      description:
        'В эту сферу входит: доходы; соотношение доходов и расходов; долги и кредиты.',
      grade_1_desc: 'Я нищий. У меня нет работы, куча долгов, живу на улице.',
      grade_10_desc: 'Я долларовый миллиардер',
      grade_current_desc:
        'У меня хорошая, высоко-оплачиваемая работа - 100к, имеется неплохой пассивный доход - 50к, есть один кредит, но его я в скором времени закрою.',
      grade_next_desc: 'Выйти на доход в 1 миллион рублей в месяц.',
    },
    {
      id: 4,
      title: 'Отношения и семья',
      point: 7,
      color: '#F03C79',
      description:
        'Сфера для оценки отношений с семьёй (родители, братья, сёстры) и моей девушкой.',
      grade_1_desc:
        'Отношения с родителями испорчены, они не желают меня видеть, сестра тоже. Девушка бросила со сканадлом.',
      grade_10_desc:
        'Идеальные отношения с родителями и сестрой, мы часто проводим время вместе и нам хорошо. Ждём с женой второго ребёнка.',
      grade_current_desc:
        'У меня хорошие отношения с сестрой и с родителями, но не очень с девушкой. Мы начали часто ругаться.',
      grade_next_desc:
        'Поговорить с девушкой о наших отношениях, записаться на семейную терапию.',
    },
    {
      id: 5,
      title: 'Окружение',
      point: 9,
      color: '#FF8940',
      description:
        'Сфера для оценки окружения - количество и качество друзей, знакомые, деловые связи и отношения с коллегами.',
      grade_1_desc: 'У меня нет друзей, на работе ни с кем не общаюсь.',
      grade_10_desc:
        'У меня есть несколько очень хороший друзей, на которых я всегда могу положиться, а так же много знакомых, которые могу подсобить в некоторых ситуациях. На работе с коллегами всё хорошо. Я знаю много очень влиятельных и состоятельных людей.',
      grade_current_desc:
        'У меня очень хорошие и надёжные друзья, есть много полезных знакомств, но нет влиятельных друзей, для решения серьёзных проблем.',
      grade_next_desc:
        'Прочитать информацию о том, как завести влиятельных знакомых, сходить на несколько мероприятий.',
    },
    {
      id: 6,
      title: 'Саморазвитие',
      point: 4,
      color: '#F10026',
      description: 'Количество и качество моих знаний',
      grade_1_desc: 'Я не знаю ничего. Даже 9-ти классних выглядит умнее меня.',
      grade_10_desc: 'Я познал суть бытия.',
      grade_current_desc:
        'Я неплохо знаю школьную программу, могу поддержать диалог, но не на сложные темы. Мало читаю.',
      grade_next_desc:
        'Начать читать. Составить список из 10 книг для прочтения и прочесть их!',
    },
    {
      id: 7,
      title: 'Творчество',
      point: 1,
      color: '#FFEC40',
      description: 'Мои хобби, чем мне нравится заниматься в свободное время.',
      grade_1_desc:
        'Я ни чем не занимаюсь в свободное время. Лежу в кровати, смотрю Tik Tok.',
      grade_10_desc:
        'Я умею играть на всех музыкальных инструментах, нарисовал 100 картин рисовать, написал 10 книг.',
      grade_current_desc:
        'Я немного умею играть на гитаре и фортепиано, но только что-то простое.',
      grade_next_desc: 'Освоить 10 композиция на гитаре и 10 на фортепиано.',
    },
    {
      id: 8,
      title: 'Отдых',
      point: 2,
      color: '#3BA3D0',
      description: 'Как я провожу свободное время.',
      grade_1_desc: 'Смотрю Tik Tok',
      grade_10_desc:
        'Как только у меня появляется свободное время, я знаю чем его занять. Путешествую, встречаюсь с друзьями, медитирию, пробую множество активностей.',
      grade_current_desc:
        'Иногда я встречаюсь с друзьями, только когда есть повод. Никогда не путешествовал.',
      grade_next_desc:
        'Попробовать сходить на какие-то мероприятия, встречаться чаще с друзьями.',
    },
  ],
};
