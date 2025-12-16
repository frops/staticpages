import{r as o,j as e}from"./index-DXonFT6_.js";const Z=()=>{const[f,n]=o.useState("menu"),[b,h]=o.useState(0),[p,z]=o.useState(0),[j,C]=o.useState(0),[$,_]=o.useState([]),[E,S]=o.useState(!1),[l,v]=o.useState(null),[g,k]=o.useState(null),[O,U]=o.useState({chapter1:0,chapter2:0}),[u,w]=o.useState(""),[A,N]=o.useState(!1),F=[{upper:"Α",lower:"α",name:"άλφα",sound:"[a]",example:"Αλβανία"},{upper:"Β",lower:"β",name:"βήτα",sound:"[v]",example:"Βερολίνο"},{upper:"Γ",lower:"γ",name:"γάμα",sound:"[γ]",example:"Γαλλία"},{upper:"Δ",lower:"δ",name:"δέλτα",sound:"[δ]",example:"Δανία"},{upper:"Ε",lower:"ε",name:"έψιλον",sound:"[e]",example:"Ελλάδα"},{upper:"Ζ",lower:"ζ",name:"ζήτα",sound:"[z]",example:"Ζαΐρ"},{upper:"Η",lower:"η",name:"ήτα",sound:"[i]",example:"ΗΠΑ"},{upper:"Θ",lower:"θ",name:"θήτα",sound:"[θ]",example:"Θιβέτ"},{upper:"Ι",lower:"ι",name:"γιώτα",sound:"[i]",example:"Ιράν"},{upper:"Κ",lower:"κ",name:"κάπα",sound:"[k]",example:"Καναδάς"},{upper:"Λ",lower:"λ",name:"λάμδα",sound:"[l]",example:"Λίβανος"},{upper:"Μ",lower:"μ",name:"μι",sound:"[m]",example:"Μαρόκο"},{upper:"Ν",lower:"ν",name:"νι",sound:"[n]",example:"Νότια Αφρική"},{upper:"Ξ",lower:"ξ",name:"ξι",sound:"[ks]",example:"Μεξικό"},{upper:"Ο",lower:"ο",name:"όμικρον",sound:"[o]",example:"Ολλανδία"},{upper:"Π",lower:"π",name:"πι",sound:"[p]",example:"Πακιστάν"},{upper:"Ρ",lower:"ρ",name:"ρο",sound:"[r]",example:"Ρωσία"},{upper:"Σ",lower:"σ/ς",name:"σίγμα",sound:"[s]",example:"Σερβία"},{upper:"Τ",lower:"τ",name:"ταυ",sound:"[t]",example:"Τουρκία"},{upper:"Υ",lower:"υ",name:"ύψιλον",sound:"[i]",example:"Υεμένη"},{upper:"Φ",lower:"φ",name:"φι",sound:"[f]",example:"Φιλιππίνες"},{upper:"Χ",lower:"χ",name:"χι",sound:"[h]",example:"Χιλή"},{upper:"Ψ",lower:"ψ",name:"ψι",sound:"[ps]",example:"Ουψάλα"},{upper:"Ω",lower:"ω",name:"ωμέγα",sound:"[o]",example:"Πολωνία"}],K=[{num:0,greek:"μηδέν"},{num:1,greek:"ένα"},{num:2,greek:"δύο"},{num:3,greek:"τρία"},{num:4,greek:"τέσσερα"},{num:5,greek:"πέντε"},{num:6,greek:"έξι"},{num:7,greek:"εφτά"},{num:8,greek:"οχτώ"},{num:9,greek:"εννιά"},{num:10,greek:"δέκα"},{num:11,greek:"έντεκα"},{num:12,greek:"δώδεκα"},{num:20,greek:"είκοσι"},{num:30,greek:"τριάντα"},{num:40,greek:"σαράντα"},{num:50,greek:"πενήντα"},{num:60,greek:"εξήντα"},{num:70,greek:"εβδομήντα"},{num:80,greek:"ογδόντα"},{num:90,greek:"ενενήντα"},{num:100,greek:"εκατό"}],M=[{pronoun:"Εγώ",verb:"είμαι",translation:"Я есть"},{pronoun:"Εσύ",verb:"είσαι",translation:"Ты есть"},{pronoun:"Αυτός/Αυτή/Αυτό",verb:"είναι",translation:"Он/Она/Оно есть"},{pronoun:"Εμείς",verb:"είμαστε",translation:"Мы есть"},{pronoun:"Εσείς",verb:"είσαστε/είστε",translation:"Вы есть"},{pronoun:"Αυτοί/Αυτές/Αυτά",verb:"είναι",translation:"Они есть"}],P=[{pronoun:"Εγώ",verb:"μένω",translation:"Я живу"},{pronoun:"Εσύ",verb:"μένεις",translation:"Ты живёшь"},{pronoun:"Αυτός/Αυτή/Αυτό",verb:"μένει",translation:"Он/Она живёт"},{pronoun:"Εμείς",verb:"μένουμε",translation:"Мы живём"},{pronoun:"Εσείς",verb:"μένετε",translation:"Вы живёте"},{pronoun:"Αυτοί/Αυτές/Αυτά",verb:"μένουν(ε)",translation:"Они живут"}],Q=[{greek:"Γεια σου!",translation:"Привет! (неформ.)"},{greek:"Γεια σας!",translation:"Здравствуйте! (форм.)"},{greek:"Καλημέρα!",translation:"Доброе утро!"},{greek:"Καλησπέρα!",translation:"Добрый вечер!"},{greek:"Πώς σε λένε;",translation:"Как тебя зовут?"},{greek:"Με λένε...",translation:"Меня зовут..."},{greek:"Χαίρω πολύ!",translation:"Очень приятно!"},{greek:"Από πού είσαι;",translation:"Откуда ты?"},{greek:"Είμαι από...",translation:"Я из..."},{greek:"Από 'δω...",translation:"Вот (представляю)..."}],T=[{greek:"Τι κάνεις;",translation:"Как дела? (неформ.)"},{greek:"Τι κάνετε;",translation:"Как дела? (форм.)"},{greek:"Καλά!",translation:"Хорошо!"},{greek:"Μια χαρά!",translation:"Отлично!"},{greek:"Έτσι κι έτσι.",translation:"Так себе."},{greek:"Πού μένεις;",translation:"Где ты живёшь?"},{greek:"Μένω στην...",translation:"Я живу в..."},{greek:"Έχεις τηλέφωνο;",translation:"У тебя есть телефон?"},{greek:"Το τηλέφωνό μου είναι...",translation:"Мой телефон..."},{greek:"Ευχαριστώ!",translation:"Спасибо!"}],V=[{name:"Ελλάδα",article:"η",fromArticle:"την"},{name:"Ιταλία",article:"η",fromArticle:"την"},{name:"Γαλλία",article:"η",fromArticle:"τη"},{name:"Καναδάς",article:"ο",fromArticle:"τον"},{name:"Λίβανος",article:"ο",fromArticle:"τον"},{name:"Μεξικό",article:"το",fromArticle:"το"},{name:"Μαρόκο",article:"το",fromArticle:"το"},{name:"Αλβανία",article:"η",fromArticle:"την"},{name:"Τουρκία",article:"η",fromArticle:"την"},{name:"Κίνα",article:"η",fromArticle:"την"}],H=[{combo:"αι",sound:"[e]",example:"Αιμιλία"},{combo:"ει",sound:"[i]",example:"Ειρήνη"},{combo:"οι",sound:"[i]",example:"οικονομία"},{combo:"ου",sound:"[u]",example:"Ουκρανία"},{combo:"αυ",sound:"[av]/[af]",example:"αύριο/Αυστραλία"},{combo:"ευ",sound:"[ev]/[ef]",example:"Ευρώπη/ευχαριστώ"},{combo:"μπ",sound:"[b]/[mb]",example:"μπάσκετ/ομπρέλα"},{combo:"ντ",sound:"[d]/[nd]",example:"ντίσκο/Αντρέας"},{combo:"γκ/γγ",sound:"[g]/[ng]",example:"γκαράζ/Αγγλία"},{combo:"τσ",sound:"[ts]",example:"πίτσα"},{combo:"τζ",sound:"[dz]",example:"τζατζίκι"}],y={chapter1:[{id:"alphabet",title:"Греческий алфавит",description:"Изучите 24 буквы греческого алфавита",content:"alphabet"},{id:"digraphs",title:"Диграфы и особые сочетания",description:"αι, ει, οι, ου, μπ, ντ, γκ и другие",content:"digraphs"},{id:"greetings",title:"Приветствия",description:"Γεια σου! Καλημέρα!",content:"greetings"},{id:"introductions",title:"Знакомство",description:"Πώς σε λένε; Από πού είσαι;",content:"introductions"},{id:"verb-eimai",title:"Глагол είμαι",description:'Спряжение глагола "быть"',content:"verb-eimai"},{id:"numbers-1-10",title:"Числа 1-10",description:"ένα, δύο, τρία...",content:"numbers-basic"}],chapter2:[{id:"how-are-you",title:"Как дела?",description:"Τι κάνεις; Πώς είσαι;",content:"how-are-you"},{id:"where-live",title:"Где ты живёшь?",description:"Πού μένεις; Μένω στην...",content:"where-live"},{id:"verb-meno",title:"Глаголы типа A",description:"μένω, κάνω, έχω",content:"verb-meno"},{id:"articles",title:"Артикли",description:"ο, η, το → τον, την, το",content:"articles"},{id:"numbers-100",title:"Числа до 100",description:"είκοσι, τριάντα, εκατό...",content:"numbers-100"},{id:"phone",title:"Телефон",description:"Έχεις τηλέφωνο;",content:"phone"}]},L=r=>{switch(r){case"alphabet":return[{type:"multiple",question:"Какая буква читается как [a]?",options:["Α α","Ε ε","Η η","Ι ι"],correct:0},{type:"multiple",question:"Как называется буква Β β?",options:["альфа","бета","гамма","вита"],correct:3},{type:"multiple",question:"Какой звук даёт буква Θ θ?",options:["[t]","[θ] (как th в английском think)","[d]","[s]"],correct:1},{type:"multiple",question:"Сколько букв в греческом алфавите?",options:["22","24","26","28"],correct:1},{type:"input",question:"Напишите маленькую букву для Σ",correct:["σ","ς"],hint:"В конце слова используется ς"}];case"digraphs":return[{type:"multiple",question:"Как читается αι?",options:["[ai]","[e]","[i]","[a]"],correct:1},{type:"multiple",question:"Какой звук даёт μπ в начале слова?",options:["[mp]","[b]","[m]","[p]"],correct:1},{type:"multiple",question:"Как читается ου?",options:["[ou]","[o]","[u]","[oi]"],correct:2},{type:"multiple",question:"Когда αυ читается как [af]?",options:["Всегда","Перед гласными","Перед κ, π, τ, φ, θ, χ, σ, ξ, ψ","Никогда"],correct:2},{type:"input",question:"Как читается слово μπάσκετ? (напишите русскими буквами)",correct:["баскет","баскэт"],hint:"μπ в начале = [b]"}];case"greetings":return[{type:"multiple",question:'Как сказать "Привет" неформально?',options:["Καλημέρα","Γεια σου","Γεια σας","Χαίρετε"],correct:1},{type:"multiple",question:"Что значит Καλησπέρα?",options:["Доброе утро","Добрый день","Добрый вечер","Спокойной ночи"],correct:2},{type:"multiple",question:"Какое приветствие формальное?",options:["Γεια","Γεια σου","Γεια σας","Τι κάνεις"],correct:2},{type:"input",question:'Как сказать "Доброе утро" по-гречески?',correct:["καλημέρα","Καλημέρα"],hint:"καλη + μέρα = хороший + день"},{type:"input",question:"Переведите: Γεια σας!",correct:["здравствуйте","Здравствуйте","привет","Привет"],hint:"Формальное приветствие"}];case"introductions":return[{type:"multiple",question:"Πώς σε λένε; - это вопрос о...",options:["возрасте","имени","месте жительства","профессии"],correct:1},{type:"multiple",question:'Как ответить "Меня зовут Мария"?',options:["Είμαι Μαρία","Με λένε Μαρία","Λέγομαι Μαρία","Все варианты верны"],correct:3},{type:"multiple",question:"Από πού είσαι; - Что значит этот вопрос?",options:["Где ты живёшь?","Откуда ты?","Как тебя зовут?","Сколько тебе лет?"],correct:1},{type:"input",question:"Переведите: Я из России",correct:["είμαι από τη ρωσία","Είμαι από τη Ρωσία","είμαι από την ρωσία","Είμαι από την Ρωσία"],hint:"Είμαι από + страна"},{type:"multiple",question:'Что означает "Χαίρω πολύ"?',options:["До свидания","Спасибо","Очень приятно","Пожалуйста"],correct:2}];case"verb-eimai":return[{type:"multiple",question:'Как сказать "Я есть" (форма глагола είμαι)?',options:["είσαι","είμαι","είναι","είμαστε"],correct:1},{type:"multiple",question:"Αυτός _____ ο Νίκος.",options:["είμαι","είσαι","είναι","είστε"],correct:2},{type:"multiple",question:"Εμείς _____ από την Ελλάδα.",options:["είμαι","είσαστε","είμαστε","είναι"],correct:2},{type:"input",question:"Εσύ _____ η Μαρία;",correct:["είσαι"],hint:"2-е лицо единственного числа"},{type:"input",question:"Αυτοί _____ από την Κίνα.",correct:["είναι"],hint:"3-е лицо множественного числа"}];case"numbers-basic":return[{type:"multiple",question:'Как будет "пять" по-гречески?',options:["τρία","τέσσερα","πέντε","έξι"],correct:2},{type:"multiple",question:'Что означает "εφτά"?',options:["6","7","8","9"],correct:1},{type:"multiple",question:'Как будет "десять"?',options:["εννιά","δέκα","έντεκα","δώδεκα"],correct:1},{type:"input",question:"Напишите число 3 по-гречески",correct:["τρία"],hint:"Начинается с τ"},{type:"input",question:"Напишите число 8 по-гречески",correct:["οχτώ","οκτώ"],hint:"Начинается с ο"}];case"how-are-you":return[{type:"multiple",question:"Τι κάνεις; - Как перевести?",options:["Что делаешь?","Как дела?","Где ты?","Кто ты?"],correct:1},{type:"multiple",question:'Как ответить "Отлично!"?',options:["Καλά","Μια χαρά","Έτσι κι έτσι","Χάλια"],correct:1},{type:"multiple",question:'Что значит "Έτσι κι έτσι"?',options:["Отлично","Хорошо","Так себе","Плохо"],correct:2},{type:"input",question:'Как спросить "Как дела?" формально?',correct:["τι κάνετε","Τι κάνετε","πώς είστε","Πώς είστε"],hint:"Используется форма на -ετε"},{type:"multiple",question:"Πώς είσαι; - синоним какой фразы?",options:["Πώς σε λένε;","Τι κάνεις;","Από πού είσαι;","Πού μένεις;"],correct:1}];case"where-live":return[{type:"multiple",question:"Πού μένεις; - Что значит?",options:["Откуда ты?","Где ты живёшь?","Куда идёшь?","Где работаешь?"],correct:1},{type:"multiple",question:"Μένω _____ Αθήνα.",options:["σε","στην","από","με"],correct:1},{type:"multiple",question:'Какой предлог используется для "в (город)"?',options:["από","σε + артикль","με","για"],correct:1},{type:"input",question:"Переведите: Я живу в Москве",correct:["μένω στη μόσχα","Μένω στη Μόσχα","μένω στην μόσχα","Μένω στην Μόσχα"],hint:"Μένω + στη/στην + город"},{type:"multiple",question:"Πού ακριβώς; - означает...",options:["Где примерно?","Где точно?","Где рядом?","Где далеко?"],correct:1}];case"verb-meno":return[{type:"multiple",question:"Какое окончание у глаголов типа А в 1-м лице ед.ч.?",options:["-εις","-ω","-ει","-ουμε"],correct:1},{type:"multiple",question:"Εσύ μέν___.",options:["-ω","-εις","-ει","-ουμε"],correct:1},{type:"multiple",question:"Αυτοί κάν_____ πολλά.",options:["-ω","-εις","-ουν","-ει"],correct:2},{type:"input",question:"Проспрягайте: Εμείς (μένω)",correct:["μένουμε"],hint:"Окончание -ουμε"},{type:"input",question:"Проспрягайте: Αυτή (έχω)",correct:["έχει"],hint:"Окончание -ει"}];case"articles":return[{type:"multiple",question:"Какой артикль у слова δρόμος (дорога)?",options:["ο","η","το","οι"],correct:0},{type:"multiple",question:"Какой артикль у слова θάλασσα (море)?",options:["ο","η","το","τα"],correct:1},{type:"multiple",question:"Какой артикль у слова σπίτι (дом)?",options:["ο","η","το","οι"],correct:2},{type:"multiple",question:'Как изменится "ο" в винительном падеже с предлогом?',options:["τον","την","το","στον"],correct:3},{type:"input",question:"Μένω _____ Πειραιά. (в Пирее)",correct:["στον"],hint:"σε + τον = στον"}];case"numbers-100":return[{type:"multiple",question:"Как будет 20 по-гречески?",options:["δέκα","είκοσι","τριάντα","δώδεκα"],correct:1},{type:"multiple",question:'Что означает "πενήντα"?',options:["40","50","60","70"],correct:1},{type:"multiple",question:"Как сказать 100?",options:["ενενήντα","εκατόν","εκατό","χίλια"],correct:2},{type:"input",question:"Напишите 45 по-гречески",correct:["σαράντα πέντε"],hint:"40 + 5"},{type:"input",question:"Напишите 73 по-гречески",correct:["εβδομήντα τρία"],hint:"70 + 3"}];case"phone":return[{type:"multiple",question:'Как спросить "У тебя есть телефон?"',options:["Πού είναι το τηλέφωνο;","Έχεις τηλέφωνο;","Τι τηλέφωνο έχεις;","Ποιο τηλέφωνο;"],correct:1},{type:"multiple",question:"Το κινητό μου - это...",options:["Мой домашний телефон","Мой мобильный","Твой телефон","Его телефон"],correct:1},{type:"multiple",question:"Το σταθερό означает...",options:["мобильный","стационарный","рабочий","личный"],correct:1},{type:"input",question:"Переведите: Мой телефон...",correct:["το τηλέφωνό μου","Το τηλέφωνό μου","το τηλεφωνο μου"],hint:"Το τηλέφωνο + μου"},{type:"multiple",question:'Какое притяжательное местоимение для "его"?',options:["μου","σου","του","της"],correct:2}];default:return[]}},q=r=>{const t=L(y[f==="test1"?"chapter1":"chapter2"][b].id),i=t[p];let a=!1;i.type==="multiple"?a=r===i.correct:i.type==="input"&&(a=i.correct.some(d=>d.toLowerCase()===r.toLowerCase())),v(r),k(a),a&&C(j+1),_([...$,{question:p,answer:r,correct:a}]),setTimeout(()=>{p<t.length-1?(z(p+1),v(null),k(null),w(""),N(!1)):S(!0)},1500)},m=()=>{z(0),C(0),_([]),S(!1),v(null),k(null),w(""),N(!1)},R=()=>e.jsxs("div",{className:"menu-container",children:[e.jsxs("div",{className:"menu-header",children:[e.jsx("h1",{children:"Ελληνικά Α'"}),e.jsx("p",{children:"Интерактивный курс греческого языка"}),e.jsx("p",{className:"subtitle",children:"Уровни A1 & A2"})]}),e.jsxs("div",{className:"chapters-grid",children:[e.jsxs("div",{className:"chapter-card chapter1",children:[e.jsx("div",{className:"chapter-icon",children:"1"}),e.jsx("h2",{children:"Ενότητα 1: Γεια σας!"}),e.jsx("p",{children:"Приветствия, знакомство, алфавит"}),e.jsxs("div",{className:"chapter-topics",children:[e.jsx("span",{children:"• Греческий алфавит"}),e.jsx("span",{children:"• Διγράφοι (диграфы)"}),e.jsx("span",{children:"• Γεια σου / Γεια σας"}),e.jsx("span",{children:"• Глагол είμαι"}),e.jsx("span",{children:"• Числа 1-10"})]}),e.jsxs("div",{className:"chapter-buttons",children:[e.jsx("button",{onClick:()=>n("learn1"),className:"btn-learn",children:"📚 Изучить"}),e.jsx("button",{onClick:()=>{n("test1"),h(0),m()},className:"btn-test",children:"✍️ Тест"})]})]}),e.jsxs("div",{className:"chapter-card chapter2",children:[e.jsx("div",{className:"chapter-icon",children:"2"}),e.jsx("h2",{children:"Ενότητα 2: Πού μένεις;"}),e.jsx("p",{children:"Где живёшь, телефон, числа"}),e.jsxs("div",{className:"chapter-topics",children:[e.jsx("span",{children:"• Τι κάνεις;"}),e.jsx("span",{children:"• Πού μένεις;"}),e.jsx("span",{children:"• Глаголы типа A"}),e.jsx("span",{children:"• Артикли ο, η, το"}),e.jsx("span",{children:"• Числа до 100"})]}),e.jsxs("div",{className:"chapter-buttons",children:[e.jsx("button",{onClick:()=>n("learn2"),className:"btn-learn",children:"📚 Изучить"}),e.jsx("button",{onClick:()=>{n("test2"),h(0),m()},className:"btn-test",children:"✍️ Тест"})]})]})]}),e.jsxs("div",{className:"quick-review",children:[e.jsx("h3",{children:"⚡ Быстрое повторение"}),e.jsxs("div",{className:"review-buttons",children:[e.jsx("button",{onClick:()=>n("alphabet-review"),className:"btn-review",children:"🔤 Алфавит"}),e.jsx("button",{onClick:()=>n("numbers-review"),className:"btn-review",children:"🔢 Числа"}),e.jsx("button",{onClick:()=>n("verbs-review"),className:"btn-review",children:"📝 Глаголы"}),e.jsx("button",{onClick:()=>n("phrases-review"),className:"btn-review",children:"💬 Фразы"})]})]})]}),D=r=>{const t=y[r];return e.jsxs("div",{className:"learn-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:r==="chapter1"?"Глава 1: Γεια σας!":"Глава 2: Πού μένεις;"}),e.jsx("div",{className:"lessons-list",children:t.map((i,a)=>e.jsxs("div",{className:"lesson-card",onClick:()=>{n(i.content)},children:[e.jsx("div",{className:"lesson-number",children:a+1}),e.jsxs("div",{className:"lesson-info",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.description})]}),e.jsx("div",{className:"lesson-arrow",children:"→"})]},i.id))})]})},G=()=>e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"🔤 Греческий алфавит"}),e.jsx("p",{className:"review-subtitle",children:"24 буквы от Α до Ω"}),e.jsx("div",{className:"alphabet-grid",children:F.map((r,t)=>e.jsxs("div",{className:"letter-card",children:[e.jsxs("div",{className:"letter-main",children:[e.jsx("span",{className:"letter-upper",children:r.upper}),e.jsx("span",{className:"letter-lower",children:r.lower})]}),e.jsxs("div",{className:"letter-info",children:[e.jsx("span",{className:"letter-name",children:r.name}),e.jsx("span",{className:"letter-sound",children:r.sound})]}),e.jsx("div",{className:"letter-example",children:r.example})]},t))}),e.jsxs("div",{className:"digraphs-section",children:[e.jsx("h3",{children:"Особые сочетания букв"}),e.jsx("div",{className:"digraphs-grid",children:H.map((r,t)=>e.jsxs("div",{className:"digraph-card",children:[e.jsx("span",{className:"digraph-combo",children:r.combo}),e.jsx("span",{className:"digraph-sound",children:r.sound}),e.jsx("span",{className:"digraph-example",children:r.example})]},t))})]}),e.jsx("button",{onClick:()=>{n("test1"),h(0),m()},className:"start-test-btn",children:"Проверить знания →"})]}),I=()=>e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"🔢 Числа 0-100"}),e.jsxs("div",{className:"numbers-section",children:[e.jsx("h3",{children:"Основные числа"}),e.jsx("div",{className:"numbers-grid",children:K.map((r,t)=>e.jsxs("div",{className:"number-card",children:[e.jsx("span",{className:"number-digit",children:r.num}),e.jsx("span",{className:"number-greek",children:r.greek})]},t))})]}),e.jsxs("div",{className:"numbers-tips",children:[e.jsx("h3",{children:"💡 Как составлять числа"}),e.jsxs("div",{className:"tip-examples",children:[e.jsxs("div",{className:"tip-example",children:[e.jsx("span",{className:"tip-number",children:"21"}),e.jsx("span",{className:"tip-greek",children:"είκοσι ένα"}),e.jsx("span",{className:"tip-explain",children:"(20 + 1)"})]}),e.jsxs("div",{className:"tip-example",children:[e.jsx("span",{className:"tip-number",children:"45"}),e.jsx("span",{className:"tip-greek",children:"σαράντα πέντε"}),e.jsx("span",{className:"tip-explain",children:"(40 + 5)"})]}),e.jsxs("div",{className:"tip-example",children:[e.jsx("span",{className:"tip-number",children:"78"}),e.jsx("span",{className:"tip-greek",children:"εβδομήντα οχτώ"}),e.jsx("span",{className:"tip-explain",children:"(70 + 8)"})]})]})]})]}),X=()=>e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"📝 Спряжение глаголов"}),e.jsxs("div",{className:"verb-section",children:[e.jsx("h3",{children:"Глагол είμαι (быть)"}),e.jsxs("table",{className:"verb-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Местоимение"}),e.jsx("th",{children:"Форма"}),e.jsx("th",{children:"Перевод"})]})}),e.jsx("tbody",{children:M.map((r,t)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.pronoun}),e.jsx("td",{className:"verb-form",children:r.verb}),e.jsx("td",{children:r.translation})]},t))})]})]}),e.jsxs("div",{className:"verb-section",children:[e.jsx("h3",{children:"Глаголы типа A: μένω (жить), κάνω (делать), έχω (иметь)"}),e.jsxs("table",{className:"verb-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Местоимение"}),e.jsx("th",{children:"μένω"}),e.jsx("th",{children:"Окончание"})]})}),e.jsx("tbody",{children:P.map((r,t)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.pronoun}),e.jsx("td",{className:"verb-form",children:r.verb}),e.jsxs("td",{className:"ending",children:["-",r.verb.slice(-1)==="ω"?"ω":r.verb.slice(-2)==="ει"?"ει":r.verb.slice(-3)==="εις"?"εις":r.verb.slice(-4)==="ουμε"?"ουμε":r.verb.slice(-3)==="ετε"?"ετε":"ουν(ε)"]})]},t))})]})]})]}),Y=()=>e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"💬 Полезные фразы"}),e.jsxs("div",{className:"phrases-section",children:[e.jsx("h3",{children:"Глава 1: Приветствия и знакомство"}),e.jsx("div",{className:"phrases-list",children:Q.map((r,t)=>e.jsxs("div",{className:"phrase-card",children:[e.jsx("span",{className:"phrase-greek",children:r.greek}),e.jsx("span",{className:"phrase-translation",children:r.translation})]},t))})]}),e.jsxs("div",{className:"phrases-section",children:[e.jsx("h3",{children:"Глава 2: Как дела и где живёшь"}),e.jsx("div",{className:"phrases-list",children:T.map((r,t)=>e.jsxs("div",{className:"phrase-card",children:[e.jsx("span",{className:"phrase-greek",children:r.greek}),e.jsx("span",{className:"phrase-translation",children:r.translation})]},t))})]})]}),B=r=>{const i=y[r==="test1"?"chapter1":"chapter2"],a=i[b],d=L(a.id);if(E){const s=Math.round(j/d.length*100);return e.jsxs("div",{className:"test-result",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsxs("div",{className:"result-card",children:[e.jsx("div",{className:`result-icon ${s>=80?"success":s>=50?"warning":"fail"}`,children:s>=80?"🎉":s>=50?"👍":"📚"}),e.jsx("h2",{children:a.title}),e.jsxs("div",{className:"result-score",children:[e.jsxs("span",{className:"score-value",children:[j,"/",d.length]}),e.jsxs("span",{className:"score-percent",children:[s,"%"]})]}),e.jsx("p",{className:"result-message",children:s>=80?"Отлично! Вы хорошо усвоили материал!":s>=50?"Неплохо! Но есть над чем поработать.":"Рекомендуем повторить материал и попробовать снова."}),e.jsxs("div",{className:"result-actions",children:[e.jsx("button",{onClick:m,className:"btn-retry",children:"🔄 Повторить тест"}),b<i.length-1&&e.jsx("button",{onClick:()=>{h(b+1),m()},className:"btn-next",children:"Следующий урок →"})]})]})]})}const x=d[p];return e.jsxs("div",{className:"test-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsxs("div",{className:"test-header",children:[e.jsx("h2",{children:a.title}),e.jsxs("div",{className:"test-progress",children:[e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${(p+1)/d.length*100}%`}})}),e.jsxs("span",{className:"progress-text",children:[p+1," / ",d.length]})]})]}),e.jsxs("div",{className:"question-card",children:[e.jsx("p",{className:"question-text",children:x.question}),x.type==="multiple"?e.jsx("div",{className:"options-list",children:x.options.map((s,c)=>e.jsxs("button",{onClick:()=>!l&&q(c),className:`option-btn ${l!==null?c===x.correct?"correct":c===l?"incorrect":"":""}`,disabled:l!==null,children:[e.jsx("span",{className:"option-letter",children:String.fromCharCode(65+c)}),e.jsx("span",{className:"option-text",children:s})]},c))}):e.jsxs("div",{className:"input-answer",children:[e.jsx("input",{type:"text",value:u,onChange:s=>w(s.target.value),onKeyPress:s=>s.key==="Enter"&&u&&q(u),placeholder:"Введите ответ...",disabled:l!==null,className:l!==null?g?"correct":"incorrect":""}),e.jsx("button",{onClick:()=>u&&q(u),disabled:!u||l!==null,className:"submit-btn",children:"Проверить"}),!A&&l===null&&e.jsx("button",{onClick:()=>N(!0),className:"hint-btn",children:"💡 Подсказка"}),A&&e.jsxs("p",{className:"hint-text",children:["💡 ",x.hint]}),l!==null&&!g&&e.jsxs("p",{className:"correct-answer",children:["Правильный ответ: ",x.correct[0]]})]}),l!==null&&e.jsx("div",{className:`feedback ${g?"correct":"incorrect"}`,children:g?"✓ Правильно!":"✗ Неправильно"})]}),e.jsxs("div",{className:"lesson-selector",children:[e.jsx("p",{children:"Выберите урок для теста:"}),e.jsx("div",{className:"lesson-tabs",children:i.map((s,c)=>e.jsxs("button",{onClick:()=>{h(c),m()},className:`lesson-tab ${b===c?"active":""}`,children:[c+1,". ",s.title]},s.id))})]})]})},J=()=>{switch(f){case"menu":return R();case"learn1":return D("chapter1");case"learn2":return D("chapter2");case"test1":case"test2":return B(f);case"alphabet-review":case"alphabet":return G();case"numbers-review":case"numbers-basic":case"numbers-100":return I();case"verbs-review":case"verb-eimai":case"verb-meno":return X();case"phrases-review":case"greetings":case"introductions":case"how-are-you":case"where-live":case"phone":return Y();case"digraphs":return G();case"articles":return e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"Артикли ο, η, το"}),e.jsxs("div",{className:"articles-section",children:[e.jsxs("table",{className:"articles-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Род"}),e.jsx("th",{children:"Именительный"}),e.jsx("th",{children:"Винительный"}),e.jsx("th",{children:"с σε"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Мужской"}),e.jsx("td",{children:"ο"}),e.jsx("td",{children:"τον"}),e.jsx("td",{children:"στον"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Женский"}),e.jsx("td",{children:"η"}),e.jsx("td",{children:"την"}),e.jsx("td",{children:"στην"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Средний"}),e.jsx("td",{children:"το"}),e.jsx("td",{children:"το"}),e.jsx("td",{children:"στο"})]})]})]}),e.jsx("h3",{children:"Примеры стран:"}),e.jsx("div",{className:"countries-grid",children:V.map((r,t)=>e.jsxs("div",{className:"country-card",children:[e.jsx("span",{className:"country-article",children:r.article}),e.jsx("span",{className:"country-name",children:r.name}),e.jsxs("span",{className:"country-from",children:["από ",r.fromArticle," ",r.name]})]},t))})]})]});default:return R()}};return e.jsxs("div",{className:"greek-course",children:[e.jsx("style",{children:`
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
      `}),J()]})};export{Z as default};
