import React, { useState } from 'react';

const GreekCourseChapter3 = () => {
    const [currentSection, setCurrentSection] = useState('menu');
    const [currentLesson, setCurrentLesson] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [showHint, setShowHint] = useState(false);

    // Family vocabulary
    const familyVocab = [
        { greek: 'ο άντρας', translation: 'муж', article: 'ο' },
        { greek: 'η γυναίκα', translation: 'жена', article: 'η' },
        { greek: 'ο πατέρας / ο μπαμπάς', translation: 'отец / папа', article: 'ο' },
        { greek: 'η μητέρα / η μαμά', translation: 'мать / мама', article: 'η' },
        { greek: 'οι γονείς', translation: 'родители', article: 'οι' },
        { greek: 'ο παππούς', translation: 'дедушка', article: 'ο' },
        { greek: 'η γιαγιά', translation: 'бабушка', article: 'η' },
        { greek: 'το αγόρι', translation: 'мальчик', article: 'το' },
        { greek: 'το κορίτσι', translation: 'девочка', article: 'το' },
        { greek: 'ο γιος', translation: 'сын', article: 'ο' },
        { greek: 'η κόρη', translation: 'дочь', article: 'η' },
        { greek: 'το παιδί / τα παιδιά', translation: 'ребёнок / дети', article: 'το/τα' },
        { greek: 'ο αδερφός', translation: 'брат', article: 'ο' },
        { greek: 'η αδερφή', translation: 'сестра', article: 'η' },
        { greek: 'τα αδέρφια', translation: 'братья и сёстры', article: 'τα' },
    ];

    // Marital status vocabulary
    const maritalStatus = [
        { male: 'παντρεμένος', female: 'παντρεμένη', translation: 'женат/замужем' },
        { male: 'ελεύθερος', female: 'ελεύθερη', translation: 'холост/не замужем' },
        { male: 'χωρισμένος', female: 'χωρισμένη', translation: 'разведён/разведена' },
    ];

    // Professions vocabulary
    const professions = [
        { male: 'καθηγητής', female: 'καθηγήτρια', translation: 'преподаватель' },
        { male: 'κομμωτής', female: 'κομμώτρια', translation: 'парикмахер' },
        { male: 'φοιτητής', female: 'φοιτήτρια', translation: 'студент' },
        { male: 'εργάτης', female: 'εργάτρια', translation: 'рабочий' },
        { male: 'πωλητής', female: 'πωλήτρια', translation: 'продавец' },
        { male: 'αθλητής', female: 'αθλήτρια', translation: 'спортсмен' },
        { male: 'σερβιτόρος', female: 'σερβιτόρα', translation: 'официант' },
        { male: 'νοσοκόμος', female: 'νοσοκόμα', translation: 'медсестра/медбрат' },
        { male: 'δάσκαλος', female: 'δασκάλα', translation: 'учитель' },
        { male: 'άνεργος', female: 'άνεργη', translation: 'безработный' },
        { male: 'μάγειρας', female: 'μαγείρισσα', translation: 'повар' },
    ];

    // Gender-neutral professions
    const neutralProfessions = [
        { greek: 'δικηγόρος', translation: 'адвокат' },
        { greek: 'ηλεκτρολόγος', translation: 'электрик' },
        { greek: 'οδηγός', translation: 'водитель' },
        { greek: 'μηχανικός', translation: 'инженер/механик' },
        { greek: 'γιατρός', translation: 'врач' },
        { greek: 'υπάλληλος', translation: 'служащий' },
        { greek: 'ηθοποιός', translation: 'актёр' },
        { greek: 'ταμίας', translation: 'кассир' },
        { greek: 'αρχιτέκτονας', translation: 'архитектор' },
        { greek: 'γραμματέας', translation: 'секретарь' },
    ];

    // Key phrases Chapter 3
    const phrasesChapter3 = [
        { greek: 'Τι δουλειά κάνεις;', translation: 'Кем ты работаешь? (неформ.)' },
        { greek: 'Τι δουλειά κάνετε;', translation: 'Кем вы работаете? (форм.)' },
        { greek: 'Δουλεύω στην Ελλάδα.', translation: 'Я работаю в Греции.' },
        { greek: 'Είμαι γιατρός.', translation: 'Я врач.' },
        { greek: 'Είσαι παντρεμένος;', translation: 'Ты женат?' },
        { greek: 'Είσαι παντρεμένη;', translation: 'Ты замужем?' },
        { greek: 'Μένω με τη φίλη μου.', translation: 'Я живу с моей девушкой.' },
        { greek: 'Έχεις παιδιά;', translation: 'У тебя есть дети?' },
        { greek: 'Αυτή είναι η οικογένειά μου.', translation: 'Это моя семья.' },
        { greek: 'Ποιος είναι αυτός;', translation: 'Кто это? (о мужчине)' },
        { greek: 'Ποια είναι αυτή;', translation: 'Кто это? (о женщине)' },
        { greek: 'Ποιο είναι αυτό το παιδί;', translation: 'Кто этот ребёнок?' },
        { greek: 'Πώς τον λένε;', translation: 'Как его зовут?' },
        { greek: 'Πώς τη λένε;', translation: 'Как её зовут?' },
        { greek: 'Τον λένε Γιώργο.', translation: 'Его зовут Йоргос.' },
        { greek: 'Τη λένε Μαρία.', translation: 'Её зовут Мария.' },
    ];

    // Verb δουλεύω conjugation
    const verbDoulevo = [
        { pronoun: 'Εγώ', verb: 'δουλεύω', translation: 'Я работаю' },
        { pronoun: 'Εσύ', verb: 'δουλεύεις', translation: 'Ты работаешь' },
        { pronoun: 'Αυτός/Αυτή/Αυτό', verb: 'δουλεύει', translation: 'Он/Она работает' },
        { pronoun: 'Εμείς', verb: 'δουλεύουμε', translation: 'Мы работаем' },
        { pronoun: 'Εσείς', verb: 'δουλεύετε', translation: 'Вы работаете' },
        { pronoun: 'Αυτοί/Αυτές/Αυτά', verb: 'δουλεύουν(ε)', translation: 'Они работают' },
    ];

    // Possessive pronouns
    const possessivePronouns = [
        { greek: 'μου', translation: 'мой/моя/моё' },
        { greek: 'σου', translation: 'твой/твоя/твоё' },
        { greek: 'του', translation: 'его' },
        { greek: 'της', translation: 'её' },
        { greek: 'μας', translation: 'наш/наша/наше' },
        { greek: 'σας', translation: 'ваш/ваша/ваше' },
        { greek: 'τους', translation: 'их' },
    ];

    // Question words for this chapter
    const questionWords = [
        { greek: 'Ποιος;', translation: 'Кто? (муж.)' },
        { greek: 'Ποια;', translation: 'Кто? (жен.)' },
        { greek: 'Ποιο;', translation: 'Кто?/Какой? (ср.)' },
        { greek: 'Πώς τον/τη λένε;', translation: 'Как его/её зовут?' },
        { greek: 'Τι δουλειά;', translation: 'Какая работа?' },
    ];

    // Lessons structure for Chapter 3
    const lessons = [
        {
            id: 'family',
            title: 'Η οικογένειά μου',
            description: 'Моя семья - члены семьи',
            content: 'family',
        },
        {
            id: 'who-is',
            title: 'Ποιος/Ποια/Ποιο είναι;',
            description: 'Кто это? Как зовут?',
            content: 'who-is',
        },
        {
            id: 'marital',
            title: 'Семейное положение',
            description: 'παντρεμένος, ελεύθερος, χωρισμένος',
            content: 'marital',
        },
        {
            id: 'professions',
            title: 'Τι δουλειά κάνεις;',
            description: 'Профессии и работа',
            content: 'professions',
        },
        {
            id: 'verb-doulevo',
            title: 'Глагол δουλεύω',
            description: 'Спряжение глагола "работать"',
            content: 'verb-doulevo',
        },
        {
            id: 'possessive',
            title: 'Притяжательные местоимения',
            description: 'μου, σου, του, της...',
            content: 'possessive',
        },
    ];

    // Generate test questions
    const generateQuestions = (lessonId) => {
        switch (lessonId) {
            case 'family':
                return [
                    {
                        type: 'multiple',
                        question: 'Как по-гречески "отец"?',
                        options: ['ο πατέρας', 'η μητέρα', 'ο γιος', 'ο αδερφός'],
                        correct: 0,
                    },
                    {
                        type: 'multiple',
                        question: 'Что значит "η γιαγιά"?',
                        options: ['мама', 'сестра', 'бабушка', 'дочь'],
                        correct: 2,
                    },
                    {
                        type: 'multiple',
                        question: 'Какой артикль у слова "παιδί"?',
                        options: ['ο', 'η', 'το', 'οι'],
                        correct: 2,
                    },
                    {
                        type: 'multiple',
                        question: 'Как сказать "братья и сёстры"?',
                        options: ['οι αδερφοί', 'τα αδέρφια', 'οι γονείς', 'τα παιδιά'],
                        correct: 1,
                    },
                    {
                        type: 'input',
                        question: 'Переведите: муж',
                        correct: ['ο άντρας', 'άντρας'],
                        hint: 'Мужской род',
                    },
                ];
            case 'who-is':
                return [
                    {
                        type: 'multiple',
                        question: 'Ποιος είναι αυτός; - Спрашиваем о...',
                        options: ['женщине', 'мужчине', 'ребёнке', 'предмете'],
                        correct: 1,
                    },
                    {
                        type: 'multiple',
                        question: 'Как спросить "Как её зовут?"',
                        options: ['Πώς τον λένε;', 'Πώς τη λένε;', 'Πώς το λένε;', 'Πώς σε λένε;'],
                        correct: 1,
                    },
                    {
                        type: 'multiple',
                        question: 'Τον λένε Νίκο - значит...',
                        options: ['Меня зовут Никос', 'Тебя зовут Никос', 'Его зовут Никос', 'Её зовут Никос'],
                        correct: 2,
                    },
                    {
                        type: 'input',
                        question: 'Как сказать "Её зовут Елена"?',
                        correct: ['τη λένε ελένη', 'Τη λένε Ελένη', 'την λένε Ελένη'],
                        hint: 'Τη(ν) λένε + имя',
                    },
                    {
                        type: 'multiple',
                        question: 'Ποια είναι αυτή; - Ответ...',
                        options: ['Ο Γιώργος.', 'Η Μαρία.', 'Το παιδί.', 'Ο πατέρας μου.'],
                        correct: 1,
                    },
                ];
            case 'marital':
                return [
                    {
                        type: 'multiple',
                        question: 'Как сказать "женат" (мужчина)?',
                        options: ['παντρεμένη', 'παντρεμένος', 'ελεύθερος', 'χωρισμένος'],
                        correct: 1,
                    },
                    {
                        type: 'multiple',
                        question: 'Что значит "ελεύθερη"?',
                        options: ['замужем', 'разведена', 'не замужем/свободна', 'вдова'],
                        correct: 2,
                    },
                    {
                        type: 'multiple',
                        question: 'Είσαι παντρεμένος; - Вопрос к...',
                        options: ['женщине', 'мужчине', 'ребёнку', 'группе людей'],
                        correct: 1,
                    },
                    {
                        type: 'input',
                        question: 'Как сказать "разведён" (о мужчине)?',
                        correct: ['χωρισμένος'],
                        hint: 'Оканчивается на -ος',
                    },
                    {
                        type: 'multiple',
                        question: 'Μένω με τη φίλη μου означает...',
                        options: ['Я женат', 'Я живу с моей подругой/девушкой', 'У меня есть дети', 'Я работаю'],
                        correct: 1,
                    },
                ];
            case 'professions':
                return [
                    {
                        type: 'multiple',
                        question: 'Как сказать "врач" (общий род)?',
                        options: ['ο δάσκαλος', 'ο γιατρός', 'ο μάγειρας', 'ο καθηγητής'],
                        correct: 1,
                    },
                    {
                        type: 'multiple',
                        question: 'Η Ειρήνη δουλεύει στο σχολείο. Είναι...',
                        options: ['γιατρός', 'δασκάλα', 'οδηγός', 'ταμίας'],
                        correct: 1,
                    },
                    {
                        type: 'multiple',
                        question: 'Как будет "официантка"?',
                        options: ['σερβιτόρος', 'σερβιτόρα', 'νοσοκόμα', 'πωλήτρια'],
                        correct: 1,
                    },
                    {
                        type: 'multiple',
                        question: 'Ο Κεμάλ ταξιδεύει πολύ. Είναι...',
                        options: ['μάγειρας', 'ταμίας', 'οδηγός', 'υπάλληλος'],
                        correct: 2,
                    },
                    {
                        type: 'input',
                        question: 'Как сказать "безработная" (женщина)?',
                        correct: ['άνεργη'],
                        hint: 'Женская форма от άνεργος',
                    },
                ];
            case 'verb-doulevo':
                return [
                    {
                        type: 'multiple',
                        question: 'Εγώ _____ στην Αθήνα.',
                        options: ['δουλεύεις', 'δουλεύω', 'δουλεύει', 'δουλεύουμε'],
                        correct: 1,
                    },
                    {
                        type: 'multiple',
                        question: 'Αυτοί _____ στο εστιατόριο.',
                        options: ['δουλεύω', 'δουλεύει', 'δουλεύουν', 'δουλεύετε'],
                        correct: 2,
                    },
                    {
                        type: 'multiple',
                        question: 'Εσύ πού _____;',
                        options: ['δουλεύω', 'δουλεύεις', 'δουλεύει', 'δουλεύουμε'],
                        correct: 1,
                    },
                    {
                        type: 'input',
                        question: 'Εμείς _____ στο γραφείο.',
                        correct: ['δουλεύουμε'],
                        hint: 'Окончание -ουμε',
                    },
                    {
                        type: 'input',
                        question: 'Η Μαρία _____ στο νοσοκομείο.',
                        correct: ['δουλεύει'],
                        hint: '3-е лицо ед.ч.',
                    },
                ];
            case 'possessive':
                return [
                    {
                        type: 'multiple',
                        question: 'Как сказать "мой отец"?',
                        options: ['ο πατέρας σου', 'ο πατέρας μου', 'ο πατέρας του', 'ο πατέρας της'],
                        correct: 1,
                    },
                    {
                        type: 'multiple',
                        question: 'Η μητέρα της - это...',
                        options: ['моя мать', 'твоя мать', 'его мать', 'её мать'],
                        correct: 3,
                    },
                    {
                        type: 'multiple',
                        question: 'Τα παιδιά τους - означает...',
                        options: ['наши дети', 'ваши дети', 'их дети', 'мои дети'],
                        correct: 2,
                    },
                    {
                        type: 'input',
                        question: 'Переведите: твоя сестра',
                        correct: ['η αδερφή σου', 'αδερφή σου'],
                        hint: 'σου = твой/твоя',
                    },
                    {
                        type: 'multiple',
                        question: 'Где стоит притяжательное местоимение в греческом?',
                        options: ['Перед существительным', 'После существительного', 'В начале предложения', 'Как угодно'],
                        correct: 1,
                    },
                ];
            default:
                return [];
        }
    };

    const handleAnswer = (answer) => {
        const questions = generateQuestions(lessons[currentLesson].id);
        const question = questions[currentQuestion];

        let correct = false;
        if (question.type === 'multiple') {
            correct = answer === question.correct;
        } else if (question.type === 'input') {
            correct = question.correct.some(c => c.toLowerCase() === answer.toLowerCase().trim());
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
                <h1>Ενότητα 3</h1>
                <h2>Τι δουλειά κάνεις;</h2>
                <p>Кем ты работаешь?</p>
            </div>

            <div className="chapter-topics-overview">
                <div className="topic-item">
                    <span className="topic-icon">👨‍👩‍👧‍👦</span>
                    <span>Η οικογένειά μου</span>
                </div>
                <div className="topic-item">
                    <span className="topic-icon">❓</span>
                    <span>Τον/Τη λένε...</span>
                </div>
                <div className="topic-item">
                    <span className="topic-icon">💍</span>
                    <span>Ποιος/Ποια/Ποιο είναι;</span>
                </div>
                <div className="topic-item">
                    <span className="topic-icon">💼</span>
                    <span>Τι δουλειά κάνεις;</span>
                </div>
            </div>

            <div className="chapter-buttons-main">
                <button onClick={() => setCurrentSection('learn')} className="btn-learn-main">
                    📚 Изучить материал
                </button>
                <button onClick={() => { setCurrentSection('test'); setCurrentLesson(0); resetTest(); }} className="btn-test-main">
                    ✍️ Пройти тест
                </button>
            </div>

            <div className="quick-review">
                <h3>⚡ Быстрый просмотр</h3>
                <div className="review-buttons">
                    <button onClick={() => setCurrentSection('family-review')} className="btn-review">
                        👨‍👩‍👧 Семья
                    </button>
                    <button onClick={() => setCurrentSection('professions-review')} className="btn-review">
                        💼 Профессии
                    </button>
                    <button onClick={() => setCurrentSection('phrases-review')} className="btn-review">
                        💬 Фразы
                    </button>
                    <button onClick={() => setCurrentSection('verb-review')} className="btn-review">
                        📝 Глагол δουλεύω
                    </button>
                </div>
            </div>
        </div>
    );

    const renderLearnSection = () => (
        <div className="learn-container">
            <button onClick={() => setCurrentSection('menu')} className="back-btn">
                ← Назад к меню
            </button>

            <h2>Глава 3: Τι δουλειά κάνεις;</h2>

            <div className="lessons-list">
                {lessons.map((lesson, index) => (
                    <div key={lesson.id} className="lesson-card" onClick={() => {
                        setCurrentSection(lesson.content + '-learn');
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

    const renderFamilyReview = () => (
        <div className="review-container">
            <button onClick={() => setCurrentSection('menu')} className="back-btn">
                ← Назад к меню
            </button>

            <h2>👨‍👩‍👧‍👦 Η οικογένειά μου - Моя семья</h2>

            <div className="vocab-section">
                <h3>Члены семьи</h3>
                <div className="vocab-grid">
                    {familyVocab.map((item, index) => (
                        <div key={index} className="vocab-card">
                            <span className="vocab-greek">{item.greek}</span>
                            <span className="vocab-translation">{item.translation}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="example-dialog">
                <h3>📖 Διάλογος - Диалог</h3>
                <div className="dialog-box">
                    <p><strong>Παναγιώτης:</strong> Καλησπέρα, Λι. Τι είναι αυτό; Φωτογραφία;</p>
                    <p><strong>Λι:</strong> Ναι, από την Κίνα. Η οικογένειά μου.</p>
                    <p><strong>Παναγιώτης:</strong> Ααα! Ποιος είναι αυτός;</p>
                    <p><strong>Λι:</strong> Ο πατέρας μου. Τον λένε Χουάνγκ.</p>
                    <p><strong>Παναγιώτης:</strong> Αυτή ποια είναι; Η μητέρα σου;</p>
                    <p><strong>Λι:</strong> Ναι. Τη λένε Γκονγκ. Και εδώ είναι ο αδερφός μου, ο Τσου.</p>
                    <p><strong>Παναγιώτης:</strong> Είναι παντρεμένος;</p>
                    <p><strong>Λι:</strong> Ναι. Αυτή είναι η γυναίκα του, η Λιέν, και αυτός ο γιος τους, ο Ξιάο.</p>
                </div>
            </div>

            <button onClick={() => { setCurrentSection('test'); setCurrentLesson(0); resetTest(); }} className="start-test-btn">
                Проверить знания →
            </button>
        </div>
    );

    const renderProfessionsReview = () => (
        <div className="review-container">
            <button onClick={() => setCurrentSection('menu')} className="back-btn">
                ← Назад к меню
            </button>

            <h2>💼 Τι δουλειά κάνεις; - Профессии</h2>

            <div className="vocab-section">
                <h3>Профессии с родом (муж./жен.)</h3>
                <div className="profession-grid">
                    {professions.map((item, index) => (
                        <div key={index} className="profession-card">
                            <div className="profession-male">
                                <span className="gender-icon">♂</span>
                                <span>{item.male}</span>
                            </div>
                            <div className="profession-female">
                                <span className="gender-icon">♀</span>
                                <span>{item.female}</span>
                            </div>
                            <div className="profession-translation">{item.translation}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="vocab-section">
                <h3>Профессии общего рода</h3>
                <p className="note">Одинаковая форма для мужчин и женщин (меняется только артикль: ο/η)</p>
                <div className="vocab-grid">
                    {neutralProfessions.map((item, index) => (
                        <div key={index} className="vocab-card neutral">
                            <span className="vocab-greek">{item.greek}</span>
                            <span className="vocab-translation">{item.translation}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="examples-box">
                <h3>💡 Примеры</h3>
                <ul className="examples-list">
                    <li>Η Ειρήνη δουλεύει στο σχολείο. Είναι <strong>δασκάλα</strong>.</li>
                    <li>Ο Κεμάλ ταξιδεύει πολύ. Είναι <strong>οδηγός</strong>.</li>
                    <li>Η Σιμπέλ σπουδάζει. Είναι <strong>φοιτήτρια</strong>.</li>
                    <li>Ο Σισάι μαγειρεύει στην ταβέρνα. Είναι <strong>μάγειρας</strong>.</li>
                    <li>Ο Πέτρος δουλεύει στο γραφείο. Είναι <strong>υπάλληλος</strong>.</li>
                </ul>
            </div>

            <button onClick={() => { setCurrentSection('test'); setCurrentLesson(3); resetTest(); }} className="start-test-btn">
                Проверить знания →
            </button>
        </div>
    );

    const renderPhrasesReview = () => (
        <div className="review-container">
            <button onClick={() => setCurrentSection('menu')} className="back-btn">
                ← Назад к меню
            </button>

            <h2>💬 Полезные фразы главы 3</h2>

            <div className="phrases-section">
                <div className="phrases-grid">
                    {phrasesChapter3.map((phrase, index) => (
                        <div key={index} className="phrase-card">
                            <span className="phrase-greek">{phrase.greek}</span>
                            <span className="phrase-translation">{phrase.translation}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grammar-box">
                <h3>📝 Вопросительные слова</h3>
                <div className="question-words-grid">
                    {questionWords.map((item, index) => (
                        <div key={index} className="question-word-card">
                            <span className="qw-greek">{item.greek}</span>
                            <span className="qw-translation">{item.translation}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="marital-section">
                <h3>💍 Семейное положение</h3>
                <div className="marital-grid">
                    {maritalStatus.map((item, index) => (
                        <div key={index} className="marital-card">
                            <div className="marital-forms">
                                <span className="male-form">♂ {item.male}</span>
                                <span className="female-form">♀ {item.female}</span>
                            </div>
                            <span className="marital-translation">{item.translation}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderVerbReview = () => (
        <div className="review-container">
            <button onClick={() => setCurrentSection('menu')} className="back-btn">
                ← Назад к меню
            </button>

            <h2>📝 Глагол δουλεύω (работать)</h2>

            <div className="verb-section">
                <table className="verb-table">
                    <thead>
                        <tr>
                            <th>Местоимение</th>
                            <th>Форма</th>
                            <th>Перевод</th>
                        </tr>
                    </thead>
                    <tbody>
                        {verbDoulevo.map((row, index) => (
                            <tr key={index}>
                                <td>{row.pronoun}</td>
                                <td className="verb-form">{row.verb}</td>
                                <td>{row.translation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="possessive-section">
                <h3>Притяжательные местоимения</h3>
                <div className="possessive-grid">
                    {possessivePronouns.map((item, index) => (
                        <div key={index} className="possessive-card">
                            <span className="poss-greek">{item.greek}</span>
                            <span className="poss-translation">{item.translation}</span>
                        </div>
                    ))}
                </div>
                <div className="note-box">
                    <p>💡 Притяжательное местоимение ставится <strong>после</strong> существительного:</p>
                    <p>ο πατέρας <strong>μου</strong> (мой отец), η μητέρα <strong>σου</strong> (твоя мать)</p>
                </div>
            </div>

            <button onClick={() => { setCurrentSection('test'); setCurrentLesson(4); resetTest(); }} className="start-test-btn">
                Проверить знания →
            </button>
        </div>
    );

    const renderLessonContent = (lessonId) => {
        switch (lessonId) {
            case 'family-learn':
                return renderFamilyReview();
            case 'who-is-learn':
                return (
                    <div className="review-container">
                        <button onClick={() => setCurrentSection('learn')} className="back-btn">
                            ← Назад к урокам
                        </button>
                        <h2>❓ Ποιος/Ποια/Ποιο είναι; - Кто это?</h2>

                        <div className="grammar-box">
                            <h3>Вопрос "Кто это?"</h3>
                            <div className="grammar-table">
                                <div className="grammar-row">
                                    <span className="grammar-greek">Ποιος είναι αυτός;</span>
                                    <span className="grammar-translation">Кто это? (о мужчине)</span>
                                </div>
                                <div className="grammar-row">
                                    <span className="grammar-greek">Ποια είναι αυτή;</span>
                                    <span className="grammar-translation">Кто это? (о женщине)</span>
                                </div>
                                <div className="grammar-row">
                                    <span className="grammar-greek">Ποιο είναι αυτό το παιδί;</span>
                                    <span className="grammar-translation">Кто этот ребёнок?</span>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-box">
                            <h3>Как его/её зовут?</h3>
                            <div className="grammar-table">
                                <div className="grammar-row">
                                    <span className="grammar-greek">Πώς τον λένε;</span>
                                    <span className="grammar-translation">Как его зовут?</span>
                                </div>
                                <div className="grammar-row">
                                    <span className="grammar-greek">Τον λένε Γιώργο.</span>
                                    <span className="grammar-translation">Его зовут Йоргос.</span>
                                </div>
                                <div className="grammar-row">
                                    <span className="grammar-greek">Πώς τη λένε;</span>
                                    <span className="grammar-translation">Как её зовут?</span>
                                </div>
                                <div className="grammar-row">
                                    <span className="grammar-greek">Τη λένε Ελένη.</span>
                                    <span className="grammar-translation">Её зовут Елена.</span>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => { setCurrentSection('test'); setCurrentLesson(1); resetTest(); }} className="start-test-btn">
                            Проверить знания →
                        </button>
                    </div>
                );
            case 'marital-learn':
                return (
                    <div className="review-container">
                        <button onClick={() => setCurrentSection('learn')} className="back-btn">
                            ← Назад к урокам
                        </button>
                        <h2>💍 Семейное положение</h2>

                        <div className="marital-section-full">
                            <div className="marital-grid-full">
                                {maritalStatus.map((item, index) => (
                                    <div key={index} className="marital-card-full">
                                        <div className="marital-forms-full">
                                            <div className="gender-form">
                                                <span className="gender-label">Мужчина:</span>
                                                <span className="form-text">{item.male}</span>
                                            </div>
                                            <div className="gender-form">
                                                <span className="gender-label">Женщина:</span>
                                                <span className="form-text">{item.female}</span>
                                            </div>
                                        </div>
                                        <span className="marital-translation-full">{item.translation}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="examples-box">
                            <h3>💡 Примеры</h3>
                            <ul className="examples-list">
                                <li><strong>- Είσαι παντρεμένος;</strong> (Ты женат?)</li>
                                <li><strong>- Όχι, δεν είμαι. Είμαι ελεύθερος.</strong> (Нет. Я холост.)</li>
                                <li><strong>- Μένω με τη φίλη μου.</strong> (Я живу с моей девушкой.)</li>
                            </ul>
                        </div>

                        <button onClick={() => { setCurrentSection('test'); setCurrentLesson(2); resetTest(); }} className="start-test-btn">
                            Проверить знания →
                        </button>
                    </div>
                );
            case 'professions-learn':
                return renderProfessionsReview();
            case 'verb-doulevo-learn':
                return renderVerbReview();
            case 'possessive-learn':
                return renderVerbReview();
            default:
                return renderLearnSection();
        }
    };

    const renderTest = () => {
        const questions = generateQuestions(lessons[currentLesson].id);
        const currentLessonData = lessons[currentLesson];

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
                            {percentage >= 80 ? 'Μπράβο! Отлично! Вы хорошо усвоили материал!' :
                                percentage >= 50 ? 'Καλά! Неплохо! Но есть над чем поработать.' :
                                    'Рекомендуем повторить материал и попробовать снова.'}
                        </p>

                        <div className="result-actions">
                            <button onClick={resetTest} className="btn-retry">
                                🔄 Повторить тест
                            </button>
                            {currentLesson < lessons.length - 1 && (
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
                                    className={`option-btn ${selectedAnswer !== null
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
                            {isCorrect ? '✓ Σωστό! Правильно!' : '✗ Λάθος! Неправильно'}
                        </div>
                    )}
                </div>

                <div className="lesson-selector">
                    <p>Выберите урок для теста:</p>
                    <div className="lesson-tabs">
                        {lessons.map((lesson, index) => (
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
            case 'learn':
                return renderLearnSection();
            case 'test':
                return renderTest();
            case 'family-review':
                return renderFamilyReview();
            case 'professions-review':
                return renderProfessionsReview();
            case 'phrases-review':
                return renderPhrasesReview();
            case 'verb-review':
                return renderVerbReview();
            default:
                if (currentSection.endsWith('-learn')) {
                    return renderLessonContent(currentSection);
                }
                return renderMenu();
        }
    };

    return (
        <div className="greek-course">
            <style>{`
        .greek-course {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: white;
          font-family: 'Segoe UI', system-ui, sans-serif;
          padding: 20px;
        }
        
        .menu-container {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .menu-header {
          text-align: center;
          padding: 40px 20px;
          margin-bottom: 30px;
        }
        
        .menu-header h1 {
          font-size: 3.5rem;
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }
        
        .menu-header h2 {
          font-size: 2rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 10px;
        }
        
        .menu-header p {
          color: rgba(255,255,255,0.6);
          font-size: 1.2rem;
        }
        
        .chapter-topics-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .topic-item {
          background: rgba(255,255,255,0.05);
          padding: 15px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .topic-icon {
          font-size: 1.5rem;
        }
        
        .chapter-buttons-main {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 40px;
        }
        
        .btn-learn-main, .btn-test-main {
          padding: 18px 40px;
          border: none;
          border-radius: 15px;
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-learn-main {
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          color: white;
        }
        
        .btn-test-main {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 2px solid #e94560;
        }
        
        .btn-learn-main:hover, .btn-test-main:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(233, 69, 96, 0.3);
        }
        
        .quick-review {
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 30px;
        }
        
        .quick-review h3 {
          text-align: center;
          margin-bottom: 20px;
          color: #e94560;
        }
        
        .review-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }
        
        .btn-review {
          padding: 12px 25px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-review:hover {
          background: rgba(233, 69, 96, 0.2);
          border-color: #e94560;
        }
        
        .back-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          color: white;
          cursor: pointer;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        
        .back-btn:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .learn-container, .review-container, .test-container {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .learn-container h2, .review-container h2 {
          color: #e94560;
          margin-bottom: 25px;
        }
        
        .lessons-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .lesson-card {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          padding: 20px 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .lesson-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: #e94560;
          transform: translateX(5px);
        }
        
        .lesson-number {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #e94560, #ff6b6b);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 700;
        }
        
        .lesson-info {
          flex: 1;
        }
        
        .lesson-info h3 {
          margin-bottom: 5px;
          color: white;
        }
        
        .lesson-info p {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
        }
        
        .lesson-arrow {
          font-size: 1.5rem;
          color: #e94560;
        }
        
        .vocab-section, .phrases-section, .grammar-box, .examples-box {
          margin-bottom: 30px;
        }
        
        .vocab-section h3, .phrases-section h3, .grammar-box h3, .examples-box h3 {
          color: #e94560;
          margin-bottom: 15px;
        }
        
        .vocab-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }
        
        .vocab-card {
          background: rgba(255,255,255,0.05);
          padding: 15px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .vocab-card.neutral {
          border-left: 3px solid #ffc107;
        }
        
        .vocab-greek {
          font-size: 1.1rem;
          color: #e94560;
          font-weight: 600;
        }
        
        .vocab-translation {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
        }
        
        .profession-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 15px;
        }
        
        .profession-card {
          background: rgba(255,255,255,0.05);
          padding: 18px;
          border-radius: 12px;
        }
        
        .profession-male, .profession-female {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        
        .gender-icon {
          font-size: 0.9rem;
        }
        
        .profession-male span:last-child {
          color: #4fc3f7;
        }
        
        .profession-female span:last-child {
          color: #f48fb1;
        }
        
        .profession-translation {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 10px;
          margin-top: 5px;
        }
        
        .phrases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 12px;
        }
        
        .phrase-card {
          background: rgba(255,255,255,0.05);
          padding: 15px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .phrase-greek {
          color: #e94560;
          font-size: 1.05rem;
        }
        
        .phrase-translation {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
        }
        
        .dialog-box {
          background: rgba(255,255,255,0.05);
          padding: 25px;
          border-radius: 15px;
          border-left: 4px solid #e94560;
        }
        
        .dialog-box p {
          margin-bottom: 12px;
          line-height: 1.6;
        }
        
        .grammar-table {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .grammar-row {
          background: rgba(255,255,255,0.05);
          padding: 12px 18px;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .grammar-greek {
          color: #e94560;
          font-weight: 600;
        }
        
        .grammar-translation {
          color: rgba(255,255,255,0.7);
        }
        
        .question-words-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 10px;
        }
        
        .question-word-card {
          background: rgba(255,255,255,0.05);
          padding: 12px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .qw-greek {
          color: #e94560;
          font-weight: 600;
        }
        
        .qw-translation {
          color: rgba(255,255,255,0.6);
          font-size: 0.85rem;
        }
        
        .marital-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
        }
        
        .marital-card {
          background: rgba(255,255,255,0.05);
          padding: 18px;
          border-radius: 12px;
        }
        
        .marital-forms {
          display: flex;
          gap: 15px;
          margin-bottom: 10px;
        }
        
        .male-form {
          color: #4fc3f7;
        }
        
        .female-form {
          color: #f48fb1;
        }
        
        .marital-translation {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
        }
        
        .examples-list {
          list-style: none;
          padding: 0;
        }
        
        .examples-list li {
          background: rgba(255,255,255,0.05);
          padding: 12px 18px;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        
        .note {
          color: rgba(255,255,255,0.6);
          font-style: italic;
          margin-bottom: 15px;
        }
        
        .verb-section {
          margin-bottom: 30px;
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
        }
        
        .verb-form {
          color: #e94560;
          font-weight: 600;
        }
        
        .possessive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .possessive-card {
          background: rgba(255,255,255,0.05);
          padding: 15px;
          border-radius: 10px;
          text-align: center;
        }
        
        .poss-greek {
          display: block;
          color: #e94560;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 5px;
        }
        
        .poss-translation {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
        }
        
        .note-box {
          background: rgba(255, 193, 7, 0.1);
          border-left: 4px solid #ffc107;
          padding: 15px 20px;
          border-radius: 8px;
        }
        
        .note-box p {
          margin-bottom: 5px;
        }
        
        .start-test-btn {
          display: block;
          width: 100%;
          max-width: 300px;
          margin: 30px auto 0;
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
        
        .start-test-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(233, 69, 96, 0.3);
        }
        
        .test-header {
          margin-bottom: 30px;
        }
        
        .test-header h2 {
          color: #e94560;
          margin-bottom: 15px;
        }
        
        .test-progress {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .progress-bar {
          flex: 1;
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
          font-size: 0.9rem;
        }
        
        .question-card {
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 35px;
          margin-bottom: 25px;
        }
        
        .question-text {
          font-size: 1.4rem;
          margin-bottom: 25px;
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
          padding: 18px 22px;
          background: rgba(255,255,255,0.05);
          border: 2px solid transparent;
          border-radius: 12px;
          color: white;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        
        .option-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.1);
          border-color: #e94560;
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
        
        .option-text {
          flex: 1;
        }
        
        .input-answer {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .input-answer input {
          padding: 18px 22px;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: white;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        
        .input-answer input:focus {
          outline: none;
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
          font-size: 1rem;
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
          padding: 12px 20px;
          background: rgba(255, 193, 7, 0.1);
          border: 1px solid #ffc107;
          border-radius: 10px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .hint-btn:hover {
          background: rgba(255, 193, 7, 0.2);
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
          padding: 10px 18px;
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
        
        .example-dialog {
          margin-top: 30px;
        }
        
        .marital-section-full {
          margin-bottom: 30px;
        }
        
        .marital-grid-full {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        
        .marital-card-full {
          background: rgba(255,255,255,0.05);
          padding: 25px;
          border-radius: 15px;
        }
        
        .marital-forms-full {
          margin-bottom: 15px;
        }
        
        .gender-form {
          display: flex;
          gap: 10px;
          margin-bottom: 8px;
        }
        
        .gender-label {
          color: rgba(255,255,255,0.5);
          min-width: 80px;
        }
        
        .form-text {
          color: #e94560;
          font-weight: 600;
        }
        
        .marital-translation-full {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 12px;
          display: block;
        }
        
        @media (max-width: 768px) {
          .menu-header h1 {
            font-size: 2.5rem;
          }
          
          .menu-header h2 {
            font-size: 1.5rem;
          }
          
          .chapter-buttons-main {
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
          
          .vocab-grid, .phrases-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

            {renderContent()}
        </div>
    );
};

export default GreekCourseChapter3;