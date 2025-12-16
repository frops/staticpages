import React, { useState, useEffect } from 'react';

const GreekCourse = () => {
  const [currentSection, setCurrentSection] = useState('menu');
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [progress, setProgress] = useState({ chapter1: 0, chapter2: 0 });
  const [inputValue, setInputValue] = useState('');
  const [showHint, setShowHint] = useState(false);

  // Greek Alphabet Data
  const alphabet = [
    { upper: 'Α', lower: 'α', name: 'άλφα', sound: '[a]', example: 'Αλβανία' },
    { upper: 'Β', lower: 'β', name: 'βήτα', sound: '[v]', example: 'Βερολίνο' },
    { upper: 'Γ', lower: 'γ', name: 'γάμα', sound: '[γ]', example: 'Γαλλία' },
    { upper: 'Δ', lower: 'δ', name: 'δέλτα', sound: '[δ]', example: 'Δανία' },
    { upper: 'Ε', lower: 'ε', name: 'έψιλον', sound: '[e]', example: 'Ελλάδα' },
    { upper: 'Ζ', lower: 'ζ', name: 'ζήτα', sound: '[z]', example: 'Ζαΐρ' },
    { upper: 'Η', lower: 'η', name: 'ήτα', sound: '[i]', example: 'ΗΠΑ' },
    { upper: 'Θ', lower: 'θ', name: 'θήτα', sound: '[θ]', example: 'Θιβέτ' },
    { upper: 'Ι', lower: 'ι', name: 'γιώτα', sound: '[i]', example: 'Ιράν' },
    { upper: 'Κ', lower: 'κ', name: 'κάπα', sound: '[k]', example: 'Καναδάς' },
    { upper: 'Λ', lower: 'λ', name: 'λάμδα', sound: '[l]', example: 'Λίβανος' },
    { upper: 'Μ', lower: 'μ', name: 'μι', sound: '[m]', example: 'Μαρόκο' },
    { upper: 'Ν', lower: 'ν', name: 'νι', sound: '[n]', example: 'Νότια Αφρική' },
    { upper: 'Ξ', lower: 'ξ', name: 'ξι', sound: '[ks]', example: 'Μεξικό' },
    { upper: 'Ο', lower: 'ο', name: 'όμικρον', sound: '[o]', example: 'Ολλανδία' },
    { upper: 'Π', lower: 'π', name: 'πι', sound: '[p]', example: 'Πακιστάν' },
    { upper: 'Ρ', lower: 'ρ', name: 'ρο', sound: '[r]', example: 'Ρωσία' },
    { upper: 'Σ', lower: 'σ/ς', name: 'σίγμα', sound: '[s]', example: 'Σερβία' },
    { upper: 'Τ', lower: 'τ', name: 'ταυ', sound: '[t]', example: 'Τουρκία' },
    { upper: 'Υ', lower: 'υ', name: 'ύψιλον', sound: '[i]', example: 'Υεμένη' },
    { upper: 'Φ', lower: 'φ', name: 'φι', sound: '[f]', example: 'Φιλιππίνες' },
    { upper: 'Χ', lower: 'χ', name: 'χι', sound: '[h]', example: 'Χιλή' },
    { upper: 'Ψ', lower: 'ψ', name: 'ψι', sound: '[ps]', example: 'Ουψάλα' },
    { upper: 'Ω', lower: 'ω', name: 'ωμέγα', sound: '[o]', example: 'Πολωνία' },
  ];

  // Numbers 0-100
  const numbers = [
    { num: 0, greek: 'μηδέν' },
    { num: 1, greek: 'ένα' },
    { num: 2, greek: 'δύο' },
    { num: 3, greek: 'τρία' },
    { num: 4, greek: 'τέσσερα' },
    { num: 5, greek: 'πέντε' },
    { num: 6, greek: 'έξι' },
    { num: 7, greek: 'εφτά' },
    { num: 8, greek: 'οχτώ' },
    { num: 9, greek: 'εννιά' },
    { num: 10, greek: 'δέκα' },
    { num: 11, greek: 'έντεκα' },
    { num: 12, greek: 'δώδεκα' },
    { num: 20, greek: 'είκοσι' },
    { num: 30, greek: 'τριάντα' },
    { num: 40, greek: 'σαράντα' },
    { num: 50, greek: 'πενήντα' },
    { num: 60, greek: 'εξήντα' },
    { num: 70, greek: 'εβδομήντα' },
    { num: 80, greek: 'ογδόντα' },
    { num: 90, greek: 'ενενήντα' },
    { num: 100, greek: 'εκατό' },
  ];

  // Verb είμαι conjugation
  const verbEimai = [
    { pronoun: 'Εγώ', verb: 'είμαι', translation: 'Я есть' },
    { pronoun: 'Εσύ', verb: 'είσαι', translation: 'Ты есть' },
    { pronoun: 'Αυτός/Αυτή/Αυτό', verb: 'είναι', translation: 'Он/Она/Оно есть' },
    { pronoun: 'Εμείς', verb: 'είμαστε', translation: 'Мы есть' },
    { pronoun: 'Εσείς', verb: 'είσαστε/είστε', translation: 'Вы есть' },
    { pronoun: 'Αυτοί/Αυτές/Αυτά', verb: 'είναι', translation: 'Они есть' },
  ];

  // Verb μένω conjugation
  const verbMeno = [
    { pronoun: 'Εγώ', verb: 'μένω', translation: 'Я живу' },
    { pronoun: 'Εσύ', verb: 'μένεις', translation: 'Ты живёшь' },
    { pronoun: 'Αυτός/Αυτή/Αυτό', verb: 'μένει', translation: 'Он/Она живёт' },
    { pronoun: 'Εμείς', verb: 'μένουμε', translation: 'Мы живём' },
    { pronoun: 'Εσείς', verb: 'μένετε', translation: 'Вы живёте' },
    { pronoun: 'Αυτοί/Αυτές/Αυτά', verb: 'μένουν(ε)', translation: 'Они живут' },
  ];

  // Common phrases Chapter 1
  const phrasesChapter1 = [
    { greek: 'Γεια σου!', translation: 'Привет! (неформ.)' },
    { greek: 'Γεια σας!', translation: 'Здравствуйте! (форм.)' },
    { greek: 'Καλημέρα!', translation: 'Доброе утро!' },
    { greek: 'Καλησπέρα!', translation: 'Добрый вечер!' },
    { greek: 'Πώς σε λένε;', translation: 'Как тебя зовут?' },
    { greek: 'Με λένε...', translation: 'Меня зовут...' },
    { greek: 'Χαίρω πολύ!', translation: 'Очень приятно!' },
    { greek: 'Από πού είσαι;', translation: 'Откуда ты?' },
    { greek: 'Είμαι από...', translation: 'Я из...' },
    { greek: 'Από \'δω...', translation: 'Вот (представляю)...' },
  ];

  // Common phrases Chapter 2
  const phrasesChapter2 = [
    { greek: 'Τι κάνεις;', translation: 'Как дела? (неформ.)' },
    { greek: 'Τι κάνετε;', translation: 'Как дела? (форм.)' },
    { greek: 'Καλά!', translation: 'Хорошо!' },
    { greek: 'Μια χαρά!', translation: 'Отлично!' },
    { greek: 'Έτσι κι έτσι.', translation: 'Так себе.' },
    { greek: 'Πού μένεις;', translation: 'Где ты живёшь?' },
    { greek: 'Μένω στην...', translation: 'Я живу в...' },
    { greek: 'Έχεις τηλέφωνο;', translation: 'У тебя есть телефон?' },
    { greek: 'Το τηλέφωνό μου είναι...', translation: 'Мой телефон...' },
    { greek: 'Ευχαριστώ!', translation: 'Спасибо!' },
  ];

  // Articles
  const articles = {
    masculine: { nominative: 'ο', accusative: 'τον' },
    feminine: { nominative: 'η', accusative: 'την' },
    neuter: { nominative: 'το', accusative: 'το' },
  };

  // Countries with articles
  const countries = [
    { name: 'Ελλάδα', article: 'η', fromArticle: 'την' },
    { name: 'Ιταλία', article: 'η', fromArticle: 'την' },
    { name: 'Γαλλία', article: 'η', fromArticle: 'τη' },
    { name: 'Καναδάς', article: 'ο', fromArticle: 'τον' },
    { name: 'Λίβανος', article: 'ο', fromArticle: 'τον' },
    { name: 'Μεξικό', article: 'το', fromArticle: 'το' },
    { name: 'Μαρόκο', article: 'το', fromArticle: 'το' },
    { name: 'Αλβανία', article: 'η', fromArticle: 'την' },
    { name: 'Τουρκία', article: 'η', fromArticle: 'την' },
    { name: 'Κίνα', article: 'η', fromArticle: 'την' },
  ];

  // Digraphs
  const digraphs = [
    { combo: 'αι', sound: '[e]', example: 'Αιμιλία' },
    { combo: 'ει', sound: '[i]', example: 'Ειρήνη' },
    { combo: 'οι', sound: '[i]', example: 'οικονομία' },
    { combo: 'ου', sound: '[u]', example: 'Ουκρανία' },
    { combo: 'αυ', sound: '[av]/[af]', example: 'αύριο/Αυστραλία' },
    { combo: 'ευ', sound: '[ev]/[ef]', example: 'Ευρώπη/ευχαριστώ' },
    { combo: 'μπ', sound: '[b]/[mb]', example: 'μπάσκετ/ομπρέλα' },
    { combo: 'ντ', sound: '[d]/[nd]', example: 'ντίσκο/Αντρέας' },
    { combo: 'γκ/γγ', sound: '[g]/[ng]', example: 'γκαράζ/Αγγλία' },
    { combo: 'τσ', sound: '[ts]', example: 'πίτσα' },
    { combo: 'τζ', sound: '[dz]', example: 'τζατζίκι' },
  ];

  // Lessons structure
  const lessons = {
    chapter1: [
      {
        id: 'alphabet',
        title: 'Греческий алфавит',
        description: 'Изучите 24 буквы греческого алфавита',
        content: 'alphabet',
      },
      {
        id: 'digraphs',
        title: 'Диграфы и особые сочетания',
        description: 'αι, ει, οι, ου, μπ, ντ, γκ и другие',
        content: 'digraphs',
      },
      {
        id: 'greetings',
        title: 'Приветствия',
        description: 'Γεια σου! Καλημέρα!',
        content: 'greetings',
      },
      {
        id: 'introductions',
        title: 'Знакомство',
        description: 'Πώς σε λένε; Από πού είσαι;',
        content: 'introductions',
      },
      {
        id: 'verb-eimai',
        title: 'Глагол είμαι',
        description: 'Спряжение глагола "быть"',
        content: 'verb-eimai',
      },
      {
        id: 'numbers-1-10',
        title: 'Числа 1-10',
        description: 'ένα, δύο, τρία...',
        content: 'numbers-basic',
      },
    ],
    chapter2: [
      {
        id: 'how-are-you',
        title: 'Как дела?',
        description: 'Τι κάνεις; Πώς είσαι;',
        content: 'how-are-you',
      },
      {
        id: 'where-live',
        title: 'Где ты живёшь?',
        description: 'Πού μένεις; Μένω στην...',
        content: 'where-live',
      },
      {
        id: 'verb-meno',
        title: 'Глаголы типа A',
        description: 'μένω, κάνω, έχω',
        content: 'verb-meno',
      },
      {
        id: 'articles',
        title: 'Артикли',
        description: 'ο, η, το → τον, την, το',
        content: 'articles',
      },
      {
        id: 'numbers-100',
        title: 'Числа до 100',
        description: 'είκοσι, τριάντα, εκατό...',
        content: 'numbers-100',
      },
      {
        id: 'phone',
        title: 'Телефон',
        description: 'Έχεις τηλέφωνο;',
        content: 'phone',
      },
    ],
  };

  // Generate test questions based on content
  const generateQuestions = (lessonId) => {
    switch (lessonId) {
      case 'alphabet':
        return [
          {
            type: 'multiple',
            question: 'Какая буква читается как [a]?',
            options: ['Α α', 'Ε ε', 'Η η', 'Ι ι'],
            correct: 0,
          },
          {
            type: 'multiple',
            question: 'Как называется буква Β β?',
            options: ['альфа', 'бета', 'гамма', 'вита'],
            correct: 3,
          },
          {
            type: 'multiple',
            question: 'Какой звук даёт буква Θ θ?',
            options: ['[t]', '[θ] (как th в английском think)', '[d]', '[s]'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Сколько букв в греческом алфавите?',
            options: ['22', '24', '26', '28'],
            correct: 1,
          },
          {
            type: 'input',
            question: 'Напишите маленькую букву для Σ',
            correct: ['σ', 'ς'],
            hint: 'В конце слова используется ς',
          },
        ];
      case 'digraphs':
        return [
          {
            type: 'multiple',
            question: 'Как читается αι?',
            options: ['[ai]', '[e]', '[i]', '[a]'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Какой звук даёт μπ в начале слова?',
            options: ['[mp]', '[b]', '[m]', '[p]'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Как читается ου?',
            options: ['[ou]', '[o]', '[u]', '[oi]'],
            correct: 2,
          },
          {
            type: 'multiple',
            question: 'Когда αυ читается как [af]?',
            options: ['Всегда', 'Перед гласными', 'Перед κ, π, τ, φ, θ, χ, σ, ξ, ψ', 'Никогда'],
            correct: 2,
          },
          {
            type: 'input',
            question: 'Как читается слово μπάσκετ? (напишите русскими буквами)',
            correct: ['баскет', 'баскэт'],
            hint: 'μπ в начале = [b]',
          },
        ];
      case 'greetings':
        return [
          {
            type: 'multiple',
            question: 'Как сказать "Привет" неформально?',
            options: ['Καλημέρα', 'Γεια σου', 'Γεια σας', 'Χαίρετε'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Что значит Καλησπέρα?',
            options: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Спокойной ночи'],
            correct: 2,
          },
          {
            type: 'multiple',
            question: 'Какое приветствие формальное?',
            options: ['Γεια', 'Γεια σου', 'Γεια σας', 'Τι κάνεις'],
            correct: 2,
          },
          {
            type: 'input',
            question: 'Как сказать "Доброе утро" по-гречески?',
            correct: ['καλημέρα', 'Καλημέρα'],
            hint: 'καλη + μέρα = хороший + день',
          },
          {
            type: 'input',
            question: 'Переведите: Γεια σας!',
            correct: ['здравствуйте', 'Здравствуйте', 'привет', 'Привет'],
            hint: 'Формальное приветствие',
          },
        ];
      case 'introductions':
        return [
          {
            type: 'multiple',
            question: 'Πώς σε λένε; - это вопрос о...',
            options: ['возрасте', 'имени', 'месте жительства', 'профессии'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Как ответить "Меня зовут Мария"?',
            options: ['Είμαι Μαρία', 'Με λένε Μαρία', 'Λέγομαι Μαρία', 'Все варианты верны'],
            correct: 3,
          },
          {
            type: 'multiple',
            question: 'Από πού είσαι; - Что значит этот вопрос?',
            options: ['Где ты живёшь?', 'Откуда ты?', 'Как тебя зовут?', 'Сколько тебе лет?'],
            correct: 1,
          },
          {
            type: 'input',
            question: 'Переведите: Я из России',
            correct: ['είμαι από τη ρωσία', 'Είμαι από τη Ρωσία', 'είμαι από την ρωσία', 'Είμαι από την Ρωσία'],
            hint: 'Είμαι από + страна',
          },
          {
            type: 'multiple',
            question: 'Что означает "Χαίρω πολύ"?',
            options: ['До свидания', 'Спасибо', 'Очень приятно', 'Пожалуйста'],
            correct: 2,
          },
        ];
      case 'verb-eimai':
        return [
          {
            type: 'multiple',
            question: 'Как сказать "Я есть" (форма глагола είμαι)?',
            options: ['είσαι', 'είμαι', 'είναι', 'είμαστε'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Αυτός _____ ο Νίκος.',
            options: ['είμαι', 'είσαι', 'είναι', 'είστε'],
            correct: 2,
          },
          {
            type: 'multiple',
            question: 'Εμείς _____ από την Ελλάδα.',
            options: ['είμαι', 'είσαστε', 'είμαστε', 'είναι'],
            correct: 2,
          },
          {
            type: 'input',
            question: 'Εσύ _____ η Μαρία;',
            correct: ['είσαι'],
            hint: '2-е лицо единственного числа',
          },
          {
            type: 'input',
            question: 'Αυτοί _____ από την Κίνα.',
            correct: ['είναι'],
            hint: '3-е лицо множественного числа',
          },
        ];
      case 'numbers-basic':
        return [
          {
            type: 'multiple',
            question: 'Как будет "пять" по-гречески?',
            options: ['τρία', 'τέσσερα', 'πέντε', 'έξι'],
            correct: 2,
          },
          {
            type: 'multiple',
            question: 'Что означает "εφτά"?',
            options: ['6', '7', '8', '9'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Как будет "десять"?',
            options: ['εννιά', 'δέκα', 'έντεκα', 'δώδεκα'],
            correct: 1,
          },
          {
            type: 'input',
            question: 'Напишите число 3 по-гречески',
            correct: ['τρία'],
            hint: 'Начинается с τ',
          },
          {
            type: 'input',
            question: 'Напишите число 8 по-гречески',
            correct: ['οχτώ', 'οκτώ'],
            hint: 'Начинается с ο',
          },
        ];
      case 'how-are-you':
        return [
          {
            type: 'multiple',
            question: 'Τι κάνεις; - Как перевести?',
            options: ['Что делаешь?', 'Как дела?', 'Где ты?', 'Кто ты?'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Как ответить "Отлично!"?',
            options: ['Καλά', 'Μια χαρά', 'Έτσι κι έτσι', 'Χάλια'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Что значит "Έτσι κι έτσι"?',
            options: ['Отлично', 'Хорошо', 'Так себе', 'Плохо'],
            correct: 2,
          },
          {
            type: 'input',
            question: 'Как спросить "Как дела?" формально?',
            correct: ['τι κάνετε', 'Τι κάνετε', 'πώς είστε', 'Πώς είστε'],
            hint: 'Используется форма на -ετε',
          },
          {
            type: 'multiple',
            question: 'Πώς είσαι; - синоним какой фразы?',
            options: ['Πώς σε λένε;', 'Τι κάνεις;', 'Από πού είσαι;', 'Πού μένεις;'],
            correct: 1,
          },
        ];
      case 'where-live':
        return [
          {
            type: 'multiple',
            question: 'Πού μένεις; - Что значит?',
            options: ['Откуда ты?', 'Где ты живёшь?', 'Куда идёшь?', 'Где работаешь?'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Μένω _____ Αθήνα.',
            options: ['σε', 'στην', 'από', 'με'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Какой предлог используется для "в (город)"?',
            options: ['από', 'σε + артикль', 'με', 'για'],
            correct: 1,
          },
          {
            type: 'input',
            question: 'Переведите: Я живу в Москве',
            correct: ['μένω στη μόσχα', 'Μένω στη Μόσχα', 'μένω στην μόσχα', 'Μένω στην Μόσχα'],
            hint: 'Μένω + στη/στην + город',
          },
          {
            type: 'multiple',
            question: 'Πού ακριβώς; - означает...',
            options: ['Где примерно?', 'Где точно?', 'Где рядом?', 'Где далеко?'],
            correct: 1,
          },
        ];
      case 'verb-meno':
        return [
          {
            type: 'multiple',
            question: 'Какое окончание у глаголов типа А в 1-м лице ед.ч.?',
            options: ['-εις', '-ω', '-ει', '-ουμε'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Εσύ μέν___.',
            options: ['-ω', '-εις', '-ει', '-ουμε'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Αυτοί κάν_____ πολλά.',
            options: ['-ω', '-εις', '-ουν', '-ει'],
            correct: 2,
          },
          {
            type: 'input',
            question: 'Проспрягайте: Εμείς (μένω)',
            correct: ['μένουμε'],
            hint: 'Окончание -ουμε',
          },
          {
            type: 'input',
            question: 'Проспрягайте: Αυτή (έχω)',
            correct: ['έχει'],
            hint: 'Окончание -ει',
          },
        ];
      case 'articles':
        return [
          {
            type: 'multiple',
            question: 'Какой артикль у слова δρόμος (дорога)?',
            options: ['ο', 'η', 'το', 'οι'],
            correct: 0,
          },
          {
            type: 'multiple',
            question: 'Какой артикль у слова θάλασσα (море)?',
            options: ['ο', 'η', 'το', 'τα'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Какой артикль у слова σπίτι (дом)?',
            options: ['ο', 'η', 'το', 'οι'],
            correct: 2,
          },
          {
            type: 'multiple',
            question: 'Как изменится "ο" в винительном падеже с предлогом?',
            options: ['τον', 'την', 'το', 'στον'],
            correct: 3,
          },
          {
            type: 'input',
            question: 'Μένω _____ Πειραιά. (в Пирее)',
            correct: ['στον'],
            hint: 'σε + τον = στον',
          },
        ];
      case 'numbers-100':
        return [
          {
            type: 'multiple',
            question: 'Как будет 20 по-гречески?',
            options: ['δέκα', 'είκοσι', 'τριάντα', 'δώδεκα'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Что означает "πενήντα"?',
            options: ['40', '50', '60', '70'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Как сказать 100?',
            options: ['ενενήντα', 'εκατόν', 'εκατό', 'χίλια'],
            correct: 2,
          },
          {
            type: 'input',
            question: 'Напишите 45 по-гречески',
            correct: ['σαράντα πέντε'],
            hint: '40 + 5',
          },
          {
            type: 'input',
            question: 'Напишите 73 по-гречески',
            correct: ['εβδομήντα τρία'],
            hint: '70 + 3',
          },
        ];
      case 'phone':
        return [
          {
            type: 'multiple',
            question: 'Как спросить "У тебя есть телефон?"',
            options: ['Πού είναι το τηλέφωνο;', 'Έχεις τηλέφωνο;', 'Τι τηλέφωνο έχεις;', 'Ποιο τηλέφωνο;'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Το κινητό μου - это...',
            options: ['Мой домашний телефон', 'Мой мобильный', 'Твой телефон', 'Его телефон'],
            correct: 1,
          },
          {
            type: 'multiple',
            question: 'Το σταθερό означает...',
            options: ['мобильный', 'стационарный', 'рабочий', 'личный'],
            correct: 1,
          },
          {
            type: 'input',
            question: 'Переведите: Мой телефон...',
            correct: ['το τηλέφωνό μου', 'Το τηλέφωνό μου', 'το τηλεφωνο μου'],
            hint: 'Το τηλέφωνο + μου',
          },
          {
            type: 'multiple',
            question: 'Какое притяжательное местоимение для "его"?',
            options: ['μου', 'σου', 'του', 'της'],
            correct: 2,
          },
        ];
      default:
        return [];
    }
  };

  const handleAnswer = (answer) => {
    const questions = generateQuestions(lessons[currentSection === 'test1' ? 'chapter1' : 'chapter2'][currentLesson].id);
    const question = questions[currentQuestion];
    
    let correct = false;
    if (question.type === 'multiple') {
      correct = answer === question.correct;
    } else if (question.type === 'input') {
      correct = question.correct.some(c => c.toLowerCase() === answer.toLowerCase());
    }
    
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, { question: currentQuestion, answer, correct }]);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setInputValue('');
        setShowHint(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setInputValue('');
    setShowHint(false);
  };

  const renderMenu = () => (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Ελληνικά Α'</h1>
        <p>Интерактивный курс греческого языка</p>
        <p className="subtitle">Уровни A1 & A2</p>
      </div>
      
      <div className="chapters-grid">
        <div className="chapter-card chapter1">
          <div className="chapter-icon">1</div>
          <h2>Ενότητα 1: Γεια σας!</h2>
          <p>Приветствия, знакомство, алфавит</p>
          <div className="chapter-topics">
            <span>• Греческий алфавит</span>
            <span>• Διγράφοι (диграфы)</span>
            <span>• Γεια σου / Γεια σας</span>
            <span>• Глагол είμαι</span>
            <span>• Числа 1-10</span>
          </div>
          <div className="chapter-buttons">
            <button onClick={() => setCurrentSection('learn1')} className="btn-learn">
              📚 Изучить
            </button>
            <button onClick={() => { setCurrentSection('test1'); setCurrentLesson(0); resetTest(); }} className="btn-test">
              ✍️ Тест
            </button>
          </div>
        </div>
        
        <div className="chapter-card chapter2">
          <div className="chapter-icon">2</div>
          <h2>Ενότητα 2: Πού μένεις;</h2>
          <p>Где живёшь, телефон, числа</p>
          <div className="chapter-topics">
            <span>• Τι κάνεις;</span>
            <span>• Πού μένεις;</span>
            <span>• Глаголы типа A</span>
            <span>• Артикли ο, η, το</span>
            <span>• Числа до 100</span>
          </div>
          <div className="chapter-buttons">
            <button onClick={() => setCurrentSection('learn2')} className="btn-learn">
              📚 Изучить
            </button>
            <button onClick={() => { setCurrentSection('test2'); setCurrentLesson(0); resetTest(); }} className="btn-test">
              ✍️ Тест
            </button>
          </div>
        </div>
      </div>
      
      <div className="quick-review">
        <h3>⚡ Быстрое повторение</h3>
        <div className="review-buttons">
          <button onClick={() => setCurrentSection('alphabet-review')} className="btn-review">
            🔤 Алфавит
          </button>
          <button onClick={() => setCurrentSection('numbers-review')} className="btn-review">
            🔢 Числа
          </button>
          <button onClick={() => setCurrentSection('verbs-review')} className="btn-review">
            📝 Глаголы
          </button>
          <button onClick={() => setCurrentSection('phrases-review')} className="btn-review">
            💬 Фразы
          </button>
        </div>
      </div>
    </div>
  );

  const renderLearnSection = (chapter) => {
    const chapterLessons = lessons[chapter];
    
    return (
      <div className="learn-container">
        <button onClick={() => setCurrentSection('menu')} className="back-btn">
          ← Назад к меню
        </button>
        
        <h2>{chapter === 'chapter1' ? 'Глава 1: Γεια σας!' : 'Глава 2: Πού μένεις;'}</h2>
        
        <div className="lessons-list">
          {chapterLessons.map((lesson, index) => (
            <div key={lesson.id} className="lesson-card" onClick={() => {
              setCurrentSection(lesson.content);
            }}>
              <div className="lesson-number">{index + 1}</div>
              <div className="lesson-info">
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </div>
              <div className="lesson-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAlphabetReview = () => (
    <div className="review-container">
      <button onClick={() => setCurrentSection('menu')} className="back-btn">
        ← Назад к меню
      </button>
      
      <h2>🔤 Греческий алфавит</h2>
      <p className="review-subtitle">24 буквы от Α до Ω</p>
      
      <div className="alphabet-grid">
        {alphabet.map((letter, index) => (
          <div key={index} className="letter-card">
            <div className="letter-main">
              <span className="letter-upper">{letter.upper}</span>
              <span className="letter-lower">{letter.lower}</span>
            </div>
            <div className="letter-info">
              <span className="letter-name">{letter.name}</span>
              <span className="letter-sound">{letter.sound}</span>
            </div>
            <div className="letter-example">{letter.example}</div>
          </div>
        ))}
      </div>
      
      <div className="digraphs-section">
        <h3>Особые сочетания букв</h3>
        <div className="digraphs-grid">
          {digraphs.map((d, index) => (
            <div key={index} className="digraph-card">
              <span className="digraph-combo">{d.combo}</span>
              <span className="digraph-sound">{d.sound}</span>
              <span className="digraph-example">{d.example}</span>
            </div>
          ))}
        </div>
      </div>
      
      <button onClick={() => { setCurrentSection('test1'); setCurrentLesson(0); resetTest(); }} className="start-test-btn">
        Проверить знания →
      </button>
    </div>
  );

  const renderNumbersReview = () => (
    <div className="review-container">
      <button onClick={() => setCurrentSection('menu')} className="back-btn">
        ← Назад к меню
      </button>
      
      <h2>🔢 Числа 0-100</h2>
      
      <div className="numbers-section">
        <h3>Основные числа</h3>
        <div className="numbers-grid">
          {numbers.map((n, index) => (
            <div key={index} className="number-card">
              <span className="number-digit">{n.num}</span>
              <span className="number-greek">{n.greek}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="numbers-tips">
        <h3>💡 Как составлять числа</h3>
        <div className="tip-examples">
          <div className="tip-example">
            <span className="tip-number">21</span>
            <span className="tip-greek">είκοσι ένα</span>
            <span className="tip-explain">(20 + 1)</span>
          </div>
          <div className="tip-example">
            <span className="tip-number">45</span>
            <span className="tip-greek">σαράντα πέντε</span>
            <span className="tip-explain">(40 + 5)</span>
          </div>
          <div className="tip-example">
            <span className="tip-number">78</span>
            <span className="tip-greek">εβδομήντα οχτώ</span>
            <span className="tip-explain">(70 + 8)</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVerbsReview = () => (
    <div className="review-container">
      <button onClick={() => setCurrentSection('menu')} className="back-btn">
        ← Назад к меню
      </button>
      
      <h2>📝 Спряжение глаголов</h2>
      
      <div className="verb-section">
        <h3>Глагол είμαι (быть)</h3>
        <table className="verb-table">
          <thead>
            <tr>
              <th>Местоимение</th>
              <th>Форма</th>
              <th>Перевод</th>
            </tr>
          </thead>
          <tbody>
            {verbEimai.map((row, index) => (
              <tr key={index}>
                <td>{row.pronoun}</td>
                <td className="verb-form">{row.verb}</td>
                <td>{row.translation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="verb-section">
        <h3>Глаголы типа A: μένω (жить), κάνω (делать), έχω (иметь)</h3>
        <table className="verb-table">
          <thead>
            <tr>
              <th>Местоимение</th>
              <th>μένω</th>
              <th>Окончание</th>
            </tr>
          </thead>
          <tbody>
            {verbMeno.map((row, index) => (
              <tr key={index}>
                <td>{row.pronoun}</td>
                <td className="verb-form">{row.verb}</td>
                <td className="ending">-{row.verb.slice(-1) === 'ω' ? 'ω' : row.verb.slice(-2) === 'ει' ? 'ει' : row.verb.slice(-3) === 'εις' ? 'εις' : row.verb.slice(-4) === 'ουμε' ? 'ουμε' : row.verb.slice(-3) === 'ετε' ? 'ετε' : 'ουν(ε)'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPhrasesReview = () => (
    <div className="review-container">
      <button onClick={() => setCurrentSection('menu')} className="back-btn">
        ← Назад к меню
      </button>
      
      <h2>💬 Полезные фразы</h2>
      
      <div className="phrases-section">
        <h3>Глава 1: Приветствия и знакомство</h3>
        <div className="phrases-list">
          {phrasesChapter1.map((phrase, index) => (
            <div key={index} className="phrase-card">
              <span className="phrase-greek">{phrase.greek}</span>
              <span className="phrase-translation">{phrase.translation}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="phrases-section">
        <h3>Глава 2: Как дела и где живёшь</h3>
        <div className="phrases-list">
          {phrasesChapter2.map((phrase, index) => (
            <div key={index} className="phrase-card">
              <span className="phrase-greek">{phrase.greek}</span>
              <span className="phrase-translation">{phrase.translation}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTest = (chapter) => {
    const chapterKey = chapter === 'test1' ? 'chapter1' : 'chapter2';
    const chapterLessons = lessons[chapterKey];
    const currentLessonData = chapterLessons[currentLesson];
    const questions = generateQuestions(currentLessonData.id);
    
    if (showResult) {
      const percentage = Math.round((score / questions.length) * 100);
      return (
        <div className="test-result">
          <button onClick={() => setCurrentSection('menu')} className="back-btn">
            ← Назад к меню
          </button>
          
          <div className="result-card">
            <div className={`result-icon ${percentage >= 80 ? 'success' : percentage >= 50 ? 'warning' : 'fail'}`}>
              {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
            </div>
            <h2>{currentLessonData.title}</h2>
            <div className="result-score">
              <span className="score-value">{score}/{questions.length}</span>
              <span className="score-percent">{percentage}%</span>
            </div>
            <p className="result-message">
              {percentage >= 80 ? 'Отлично! Вы хорошо усвоили материал!' :
               percentage >= 50 ? 'Неплохо! Но есть над чем поработать.' :
               'Рекомендуем повторить материал и попробовать снова.'}
            </p>
            
            <div className="result-actions">
              <button onClick={resetTest} className="btn-retry">
                🔄 Повторить тест
              </button>
              {currentLesson < chapterLessons.length - 1 && (
                <button onClick={() => { 
                  setCurrentLesson(currentLesson + 1); 
                  resetTest(); 
                }} className="btn-next">
                  Следующий урок →
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    const question = questions[currentQuestion];
    
    return (
      <div className="test-container">
        <button onClick={() => setCurrentSection('menu')} className="back-btn">
          ← Назад к меню
        </button>
        
        <div className="test-header">
          <h2>{currentLessonData.title}</h2>
          <div className="test-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            <span className="progress-text">{currentQuestion + 1} / {questions.length}</span>
          </div>
        </div>
        
        <div className="question-card">
          <p className="question-text">{question.question}</p>
          
          {question.type === 'multiple' ? (
            <div className="options-list">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !selectedAnswer && handleAnswer(index)}
                  className={`option-btn ${
                    selectedAnswer !== null
                      ? index === question.correct
                        ? 'correct'
                        : index === selectedAnswer
                          ? 'incorrect'
                          : ''
                      : ''
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="input-answer">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && inputValue && handleAnswer(inputValue)}
                placeholder="Введите ответ..."
                disabled={selectedAnswer !== null}
                className={selectedAnswer !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}
              />
              <button 
                onClick={() => inputValue && handleAnswer(inputValue)}
                disabled={!inputValue || selectedAnswer !== null}
                className="submit-btn"
              >
                Проверить
              </button>
              {!showHint && selectedAnswer === null && (
                <button onClick={() => setShowHint(true)} className="hint-btn">
                  💡 Подсказка
                </button>
              )}
              {showHint && (
                <p className="hint-text">💡 {question.hint}</p>
              )}
              {selectedAnswer !== null && !isCorrect && (
                <p className="correct-answer">
                  Правильный ответ: {question.correct[0]}
                </p>
              )}
            </div>
          )}
          
          {selectedAnswer !== null && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '✓ Правильно!' : '✗ Неправильно'}
            </div>
          )}
        </div>
        
        <div className="lesson-selector">
          <p>Выберите урок для теста:</p>
          <div className="lesson-tabs">
            {chapterLessons.map((lesson, index) => (
              <button
                key={lesson.id}
                onClick={() => { setCurrentLesson(index); resetTest(); }}
                className={`lesson-tab ${currentLesson === index ? 'active' : ''}`}
              >
                {index + 1}. {lesson.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'menu':
        return renderMenu();
      case 'learn1':
        return renderLearnSection('chapter1');
      case 'learn2':
        return renderLearnSection('chapter2');
      case 'test1':
      case 'test2':
        return renderTest(currentSection);
      case 'alphabet-review':
      case 'alphabet':
        return renderAlphabetReview();
      case 'numbers-review':
      case 'numbers-basic':
      case 'numbers-100':
        return renderNumbersReview();
      case 'verbs-review':
      case 'verb-eimai':
      case 'verb-meno':
        return renderVerbsReview();
      case 'phrases-review':
      case 'greetings':
      case 'introductions':
      case 'how-are-you':
      case 'where-live':
      case 'phone':
        return renderPhrasesReview();
      case 'digraphs':
        return renderAlphabetReview();
      case 'articles':
        return (
          <div className="review-container">
            <button onClick={() => setCurrentSection('menu')} className="back-btn">
              ← Назад к меню
            </button>
            <h2>Артикли ο, η, το</h2>
            <div className="articles-section">
              <table className="articles-table">
                <thead>
                  <tr>
                    <th>Род</th>
                    <th>Именительный</th>
                    <th>Винительный</th>
                    <th>с σε</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Мужской</td>
                    <td>ο</td>
                    <td>τον</td>
                    <td>στον</td>
                  </tr>
                  <tr>
                    <td>Женский</td>
                    <td>η</td>
                    <td>την</td>
                    <td>στην</td>
                  </tr>
                  <tr>
                    <td>Средний</td>
                    <td>το</td>
                    <td>το</td>
                    <td>στο</td>
                  </tr>
                </tbody>
              </table>
              
              <h3>Примеры стран:</h3>
              <div className="countries-grid">
                {countries.map((c, i) => (
                  <div key={i} className="country-card">
                    <span className="country-article">{c.article}</span>
                    <span className="country-name">{c.name}</span>
                    <span className="country-from">από {c.fromArticle} {c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return renderMenu();
    }
  };

  return (
    <div className="greek-course">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Noto+Sans:wght@400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .greek-course {
          font-family: 'Noto Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: #fff;
          padding: 20px;
        }
        
        .menu-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .menu-header {
          text-align: center;
          padding: 40px 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
          border-radius: 20px;
          margin-bottom: 40px;
        }
        
        .menu-header h1 {
          font-family: 'GFS Didot', serif;
          font-size: 4rem;
          color: #e94560;
          text-shadow: 0 0 30px rgba(233, 69, 96, 0.5);
          margin-bottom: 10px;
        }
        
        .menu-header p {
          font-size: 1.3rem;
          color: rgba(255,255,255,0.8);
        }
        
        .menu-header .subtitle {
          font-size: 1rem;
          color: #e94560;
          margin-top: 10px;
        }
        
        .chapters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .chapter-card {
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        
        .chapter-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border-color: rgba(233, 69, 96, 0.5);
        }
        
        .chapter-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .chapter-card h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #fff;
        }
        
        .chapter-card > p {
          color: rgba(255,255,255,0.6);
          margin-bottom: 20px;
        }
        
        .chapter-topics {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 25px;
        }
        
        .chapter-topics span {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
        }
        
        .chapter-buttons {
          display: flex;
          gap: 15px;
        }
        
        .btn-learn, .btn-test {
          flex: 1;
          padding: 15px 25px;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-learn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }
        
        .btn-test {
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          color: white;
        }
        
        .btn-learn:hover, .btn-test:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .quick-review {
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
        }
        
        .quick-review h3 {
          font-size: 1.5rem;
          margin-bottom: 25px;
          color: #e94560;
        }
        
        .review-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }
        
        .btn-review {
          padding: 15px 30px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-review:hover {
          background: rgba(233, 69, 96, 0.3);
          border-color: #e94560;
          transform: scale(1.05);
        }
        
        .back-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          padding: 12px 25px;
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          margin-bottom: 30px;
          transition: all 0.3s ease;
        }
        
        .back-btn:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .learn-container, .review-container, .test-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .learn-container h2, .review-container h2 {
          font-size: 2rem;
          margin-bottom: 30px;
          color: #e94560;
        }
        
        .lessons-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .lesson-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255,255,255,0.05);
          padding: 25px;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .lesson-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(233, 69, 96, 0.5);
          transform: translateX(10px);
        }
        
        .lesson-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.3rem;
        }
        
        .lesson-info {
          flex: 1;
        }
        
        .lesson-info h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        
        .lesson-info p {
          color: rgba(255,255,255,0.6);
        }
        
        .lesson-arrow {
          font-size: 1.5rem;
          color: rgba(255,255,255,0.4);
        }
        
        .review-subtitle {
          color: rgba(255,255,255,0.6);
          margin-bottom: 30px;
        }
        
        .alphabet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 15px;
          margin-bottom: 40px;
        }
        
        .letter-card {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .letter-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: #e94560;
          transform: scale(1.05);
        }
        
        .letter-main {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        
        .letter-upper {
          font-family: 'GFS Didot', serif;
          font-size: 2.5rem;
          color: #e94560;
        }
        
        .letter-lower {
          font-family: 'GFS Didot', serif;
          font-size: 2.5rem;
          color: #fff;
        }
        
        .letter-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        
        .letter-name {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
        }
        
        .letter-sound {
          font-size: 0.85rem;
          color: #e94560;
        }
        
        .letter-example {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          margin-top: 8px;
        }
        
        .digraphs-section {
          margin-top: 40px;
        }
        
        .digraphs-section h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #e94560;
        }
        
        .digraphs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 15px;
        }
        
        .digraph-card {
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .digraph-combo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #e94560;
        }
        
        .digraph-sound {
          color: rgba(255,255,255,0.8);
        }
        
        .digraph-example {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
        }
        
        .start-test-btn {
          display: block;
          width: 100%;
          max-width: 300px;
          margin: 40px auto 0;
          padding: 18px 35px;
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          border: none;
          border-radius: 15px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .start-test-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(233, 69, 96, 0.4);
        }
        
        .numbers-section, .phrases-section, .verb-section {
          margin-bottom: 40px;
        }
        
        .numbers-section h3, .phrases-section h3, .verb-section h3 {
          font-size: 1.3rem;
          margin-bottom: 20px;
          color: #e94560;
        }
        
        .numbers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 12px;
        }
        
        .number-card {
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        
        .number-card:hover {
          background: rgba(255,255,255,0.1);
          transform: scale(1.05);
        }
        
        .number-digit {
          font-size: 1.8rem;
          font-weight: 700;
          color: #e94560;
        }
        
        .number-greek {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.8);
        }
        
        .numbers-tips {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          padding: 25px;
          margin-top: 30px;
        }
        
        .numbers-tips h3 {
          margin-bottom: 20px;
          color: #e94560;
        }
        
        .tip-examples {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .tip-example {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255,255,255,0.05);
          padding: 15px 25px;
          border-radius: 10px;
        }
        
        .tip-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e94560;
        }
        
        .tip-greek {
          font-size: 1.1rem;
        }
        
        .tip-explain {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
        }
        
        .phrases-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .phrase-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.05);
          padding: 18px 25px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .phrase-card:hover {
          background: rgba(255,255,255,0.1);
        }
        
        .phrase-greek {
          font-size: 1.2rem;
          color: #e94560;
          font-weight: 500;
        }
        
        .phrase-translation {
          color: rgba(255,255,255,0.7);
        }
        
        .verb-table {
          width: 100%;
          border-collapse: collapse;
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          overflow: hidden;
        }
        
        .verb-table th, .verb-table td {
          padding: 15px 20px;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .verb-table th {
          background: rgba(233, 69, 96, 0.2);
          color: #e94560;
          font-weight: 600;
        }
        
        .verb-form {
          color: #e94560;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .ending {
          color: rgba(255,255,255,0.5);
        }
        
        .test-container {
          max-width: 800px;
        }
        
        .test-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .test-header h2 {
          color: #e94560;
          margin-bottom: 20px;
        }
        
        .test-progress {
          display: flex;
          align-items: center;
          gap: 15px;
          justify-content: center;
        }
        
        .progress-bar {
          width: 200px;
          height: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #e94560, #ff6b6b);
          transition: width 0.3s ease;
        }
        
        .progress-text {
          color: rgba(255,255,255,0.6);
        }
        
        .question-card {
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
        }
        
        .question-text {
          font-size: 1.4rem;
          margin-bottom: 30px;
          line-height: 1.5;
        }
        
        .options-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .option-btn {
          display: flex;
          align-items: center;
          gap: 15px;
          width: 100%;
          padding: 18px 25px;
          background: rgba(255,255,255,0.05);
          border: 2px solid transparent;
          border-radius: 12px;
          color: white;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        
        .option-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
        }
        
        .option-btn.correct {
          background: rgba(46, 213, 115, 0.2);
          border-color: #2ed573;
        }
        
        .option-btn.incorrect {
          background: rgba(255, 71, 87, 0.2);
          border-color: #ff4757;
        }
        
        .option-letter {
          width: 35px;
          height: 35px;
          background: rgba(255,255,255,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        
        .input-answer {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .input-answer input {
          padding: 18px 25px;
          font-size: 1.2rem;
          background: rgba(255,255,255,0.1);
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }
        
        .input-answer input:focus {
          border-color: #e94560;
        }
        
        .input-answer input.correct {
          border-color: #2ed573;
          background: rgba(46, 213, 115, 0.1);
        }
        
        .input-answer input.incorrect {
          border-color: #ff4757;
          background: rgba(255, 71, 87, 0.1);
        }
        
        .submit-btn {
          padding: 15px 30px;
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: scale(1.02);
        }
        
        .hint-btn {
          padding: 12px 25px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .hint-btn:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .hint-text {
          padding: 15px 20px;
          background: rgba(255, 193, 7, 0.1);
          border-radius: 10px;
          color: #ffc107;
        }
        
        .correct-answer {
          padding: 15px 20px;
          background: rgba(46, 213, 115, 0.1);
          border-radius: 10px;
          color: #2ed573;
        }
        
        .feedback {
          text-align: center;
          padding: 15px;
          border-radius: 10px;
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 20px;
        }
        
        .feedback.correct {
          background: rgba(46, 213, 115, 0.2);
          color: #2ed573;
        }
        
        .feedback.incorrect {
          background: rgba(255, 71, 87, 0.2);
          color: #ff4757;
        }
        
        .lesson-selector {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          padding: 25px;
        }
        
        .lesson-selector p {
          margin-bottom: 15px;
          color: rgba(255,255,255,0.7);
        }
        
        .lesson-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .lesson-tab {
          padding: 10px 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid transparent;
          border-radius: 10px;
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .lesson-tab:hover {
          background: rgba(255,255,255,0.1);
        }
        
        .lesson-tab.active {
          background: rgba(233, 69, 96, 0.2);
          border-color: #e94560;
          color: #e94560;
        }
        
        .test-result {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .result-card {
          background: rgba(255,255,255,0.05);
          border-radius: 25px;
          padding: 50px;
          text-align: center;
        }
        
        .result-icon {
          font-size: 4rem;
          margin-bottom: 25px;
        }
        
        .result-card h2 {
          color: #e94560;
          margin-bottom: 25px;
        }
        
        .result-score {
          display: flex;
          justify-content: center;
          align-items: baseline;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .score-value {
          font-size: 3rem;
          font-weight: 700;
          color: #e94560;
        }
        
        .score-percent {
          font-size: 2rem;
          color: rgba(255,255,255,0.6);
        }
        
        .result-message {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 35px;
        }
        
        .result-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-retry, .btn-next {
          padding: 15px 35px;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-retry {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .btn-retry:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .btn-next {
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          color: white;
        }
        
        .btn-next:hover {
          transform: scale(1.05);
        }
        
        .articles-section {
          margin-top: 20px;
        }
        
        .articles-table {
          width: 100%;
          border-collapse: collapse;
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 30px;
        }
        
        .articles-table th, .articles-table td {
          padding: 15px 20px;
          text-align: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .articles-table th {
          background: rgba(233, 69, 96, 0.2);
          color: #e94560;
        }
        
        .countries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
        }
        
        .country-card {
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .country-article {
          color: #e94560;
          font-weight: 600;
          font-size: 1.2rem;
        }
        
        .country-name {
          font-size: 1.1rem;
        }
        
        .country-from {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
        }
        
        @media (max-width: 768px) {
          .menu-header h1 {
            font-size: 2.5rem;
          }
          
          .chapters-grid {
            grid-template-columns: 1fr;
          }
          
          .chapter-buttons {
            flex-direction: column;
          }
          
          .review-buttons {
            flex-direction: column;
          }
          
          .question-card {
            padding: 25px;
          }
          
          .question-text {
            font-size: 1.2rem;
          }
          
          .lesson-tabs {
            flex-direction: column;
          }
          
          .result-actions {
            flex-direction: column;
          }
        }
      `}</style>
      
      {renderContent()}
    </div>
  );
};

export default GreekCourse;
