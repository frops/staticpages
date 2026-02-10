import{r as l,j as e}from"./index-DxI7MZ7f.js";const X=()=>{const[h,n]=l.useState("menu"),[m,d]=l.useState(0),[p,y]=l.useState(0),[u,q]=l.useState(0),[V,C]=l.useState([]),[E,z]=l.useState(!1),[o,f]=l.useState(null),[b,j]=l.useState(null),[x,v]=l.useState(""),[_,k]=l.useState(!1),I=[{greek:"ο άντρας",translation:"муж",article:"ο"},{greek:"η γυναίκα",translation:"жена",article:"η"},{greek:"ο πατέρας / ο μπαμπάς",translation:"отец / папа",article:"ο"},{greek:"η μητέρα / η μαμά",translation:"мать / мама",article:"η"},{greek:"οι γονείς",translation:"родители",article:"οι"},{greek:"ο παππούς",translation:"дедушка",article:"ο"},{greek:"η γιαγιά",translation:"бабушка",article:"η"},{greek:"το αγόρι",translation:"мальчик",article:"το"},{greek:"το κορίτσι",translation:"девочка",article:"το"},{greek:"ο γιος",translation:"сын",article:"ο"},{greek:"η κόρη",translation:"дочь",article:"η"},{greek:"το παιδί / τα παιδιά",translation:"ребёнок / дети",article:"το/τα"},{greek:"ο αδερφός",translation:"брат",article:"ο"},{greek:"η αδερφή",translation:"сестра",article:"η"},{greek:"τα αδέρφια",translation:"братья и сёстры",article:"τα"}],S=[{male:"παντρεμένος",female:"παντρεμένη",translation:"женат/замужем"},{male:"ελεύθερος",female:"ελεύθερη",translation:"холост/не замужем"},{male:"χωρισμένος",female:"χωρισμένη",translation:"разведён/разведена"}],Q=[{male:"καθηγητής",female:"καθηγήτρια",translation:"преподаватель"},{male:"κομμωτής",female:"κομμώτρια",translation:"парикмахер"},{male:"φοιτητής",female:"φοιτήτρια",translation:"студент"},{male:"εργάτης",female:"εργάτρια",translation:"рабочий"},{male:"πωλητής",female:"πωλήτρια",translation:"продавец"},{male:"αθλητής",female:"αθλήτρια",translation:"спортсмен"},{male:"σερβιτόρος",female:"σερβιτόρα",translation:"официант"},{male:"νοσοκόμος",female:"νοσοκόμα",translation:"медсестра/медбрат"},{male:"δάσκαλος",female:"δασκάλα",translation:"учитель"},{male:"άνεργος",female:"άνεργη",translation:"безработный"},{male:"μάγειρας",female:"μαγείρισσα",translation:"повар"}],T=[{greek:"δικηγόρος",translation:"адвокат"},{greek:"ηλεκτρολόγος",translation:"электрик"},{greek:"οδηγός",translation:"водитель"},{greek:"μηχανικός",translation:"инженер/механик"},{greek:"γιατρός",translation:"врач"},{greek:"υπάλληλος",translation:"служащий"},{greek:"ηθοποιός",translation:"актёр"},{greek:"ταμίας",translation:"кассир"},{greek:"αρχιτέκτονας",translation:"архитектор"},{greek:"γραμματέας",translation:"секретарь"}],D=[{greek:"Τι δουλειά κάνεις;",translation:"Кем ты работаешь? (неформ.)"},{greek:"Τι δουλειά κάνετε;",translation:"Кем вы работаете? (форм.)"},{greek:"Δουλεύω στην Ελλάδα.",translation:"Я работаю в Греции."},{greek:"Είμαι γιατρός.",translation:"Я врач."},{greek:"Είσαι παντρεμένος;",translation:"Ты женат?"},{greek:"Είσαι παντρεμένη;",translation:"Ты замужем?"},{greek:"Μένω με τη φίλη μου.",translation:"Я живу с моей девушкой."},{greek:"Έχεις παιδιά;",translation:"У тебя есть дети?"},{greek:"Αυτή είναι η οικογένειά μου.",translation:"Это моя семья."},{greek:"Ποιος είναι αυτός;",translation:"Кто это? (о мужчине)"},{greek:"Ποια είναι αυτή;",translation:"Кто это? (о женщине)"},{greek:"Ποιο είναι αυτό το παιδί;",translation:"Кто этот ребёнок?"},{greek:"Πώς τον λένε;",translation:"Как его зовут?"},{greek:"Πώς τη λένε;",translation:"Как её зовут?"},{greek:"Τον λένε Γιώργο.",translation:"Его зовут Йоргос."},{greek:"Τη λένε Μαρία.",translation:"Её зовут Мария."}],H=[{pronoun:"Εγώ",verb:"δουλεύω",translation:"Я работаю"},{pronoun:"Εσύ",verb:"δουλεύεις",translation:"Ты работаешь"},{pronoun:"Αυτός/Αυτή/Αυτό",verb:"δουλεύει",translation:"Он/Она работает"},{pronoun:"Εμείς",verb:"δουλεύουμε",translation:"Мы работаем"},{pronoun:"Εσείς",verb:"δουλεύετε",translation:"Вы работаете"},{pronoun:"Αυτοί/Αυτές/Αυτά",verb:"δουλεύουν(ε)",translation:"Они работают"}],M=[{greek:"μου",translation:"мой/моя/моё"},{greek:"σου",translation:"твой/твоя/твоё"},{greek:"του",translation:"его"},{greek:"της",translation:"её"},{greek:"μας",translation:"наш/наша/наше"},{greek:"σας",translation:"ваш/ваша/ваше"},{greek:"τους",translation:"их"}],W=[{greek:"Ποιος;",translation:"Кто? (муж.)"},{greek:"Ποια;",translation:"Кто? (жен.)"},{greek:"Ποιο;",translation:"Кто?/Какой? (ср.)"},{greek:"Πώς τον/τη λένε;",translation:"Как его/её зовут?"},{greek:"Τι δουλειά;",translation:"Какая работа?"}],g=[{id:"family",title:"Η οικογένειά μου",description:"Моя семья - члены семьи",content:"family"},{id:"who-is",title:"Ποιος/Ποια/Ποιο είναι;",description:"Кто это? Как зовут?",content:"who-is"},{id:"marital",title:"Семейное положение",description:"παντρεμένος, ελεύθερος, χωρισμένος",content:"marital"},{id:"professions",title:"Τι δουλειά κάνεις;",description:"Профессии и работа",content:"professions"},{id:"verb-doulevo",title:"Глагол δουλεύω",description:'Спряжение глагола "работать"',content:"verb-doulevo"},{id:"possessive",title:"Притяжательные местоимения",description:"μου, σου, του, της...",content:"possessive"}],L=r=>{switch(r){case"family":return[{type:"multiple",question:'Как по-гречески "отец"?',options:["ο πατέρας","η μητέρα","ο γιος","ο αδερφός"],correct:0},{type:"multiple",question:'Что значит "η γιαγιά"?',options:["мама","сестра","бабушка","дочь"],correct:2},{type:"multiple",question:'Какой артикль у слова "παιδί"?',options:["ο","η","το","οι"],correct:2},{type:"multiple",question:'Как сказать "братья и сёстры"?',options:["οι αδερφοί","τα αδέρφια","οι γονείς","τα παιδιά"],correct:1},{type:"input",question:"Переведите: муж",correct:["ο άντρας","άντρας"],hint:"Мужской род"}];case"who-is":return[{type:"multiple",question:"Ποιος είναι αυτός; - Спрашиваем о...",options:["женщине","мужчине","ребёнке","предмете"],correct:1},{type:"multiple",question:'Как спросить "Как её зовут?"',options:["Πώς τον λένε;","Πώς τη λένε;","Πώς το λένε;","Πώς σε λένε;"],correct:1},{type:"multiple",question:"Τον λένε Νίκο - значит...",options:["Меня зовут Никос","Тебя зовут Никос","Его зовут Никос","Её зовут Никос"],correct:2},{type:"input",question:'Как сказать "Её зовут Елена"?',correct:["τη λένε ελένη","Τη λένε Ελένη","την λένε Ελένη"],hint:"Τη(ν) λένε + имя"},{type:"multiple",question:"Ποια είναι αυτή; - Ответ...",options:["Ο Γιώργος.","Η Μαρία.","Το παιδί.","Ο πατέρας μου."],correct:1}];case"marital":return[{type:"multiple",question:'Как сказать "женат" (мужчина)?',options:["παντρεμένη","παντρεμένος","ελεύθερος","χωρισμένος"],correct:1},{type:"multiple",question:'Что значит "ελεύθερη"?',options:["замужем","разведена","не замужем/свободна","вдова"],correct:2},{type:"multiple",question:"Είσαι παντρεμένος; - Вопрос к...",options:["женщине","мужчине","ребёнку","группе людей"],correct:1},{type:"input",question:'Как сказать "разведён" (о мужчине)?',correct:["χωρισμένος"],hint:"Оканчивается на -ος"},{type:"multiple",question:"Μένω με τη φίλη μου означает...",options:["Я женат","Я живу с моей подругой/девушкой","У меня есть дети","Я работаю"],correct:1}];case"professions":return[{type:"multiple",question:'Как сказать "врач" (общий род)?',options:["ο δάσκαλος","ο γιατρός","ο μάγειρας","ο καθηγητής"],correct:1},{type:"multiple",question:"Η Ειρήνη δουλεύει στο σχολείο. Είναι...",options:["γιατρός","δασκάλα","οδηγός","ταμίας"],correct:1},{type:"multiple",question:'Как будет "официантка"?',options:["σερβιτόρος","σερβιτόρα","νοσοκόμα","πωλήτρια"],correct:1},{type:"multiple",question:"Ο Κεμάλ ταξιδεύει πολύ. Είναι...",options:["μάγειρας","ταμίας","οδηγός","υπάλληλος"],correct:2},{type:"input",question:'Как сказать "безработная" (женщина)?',correct:["άνεργη"],hint:"Женская форма от άνεργος"}];case"verb-doulevo":return[{type:"multiple",question:"Εγώ _____ στην Αθήνα.",options:["δουλεύεις","δουλεύω","δουλεύει","δουλεύουμε"],correct:1},{type:"multiple",question:"Αυτοί _____ στο εστιατόριο.",options:["δουλεύω","δουλεύει","δουλεύουν","δουλεύετε"],correct:2},{type:"multiple",question:"Εσύ πού _____;",options:["δουλεύω","δουλεύεις","δουλεύει","δουλεύουμε"],correct:1},{type:"input",question:"Εμείς _____ στο γραφείο.",correct:["δουλεύουμε"],hint:"Окончание -ουμε"},{type:"input",question:"Η Μαρία _____ στο νοσοκομείο.",correct:["δουλεύει"],hint:"3-е лицо ед.ч."}];case"possessive":return[{type:"multiple",question:'Как сказать "мой отец"?',options:["ο πατέρας σου","ο πατέρας μου","ο πατέρας του","ο πατέρας της"],correct:1},{type:"multiple",question:"Η μητέρα της - это...",options:["моя мать","твоя мать","его мать","её мать"],correct:3},{type:"multiple",question:"Τα παιδιά τους - означает...",options:["наши дети","ваши дети","их дети","мои дети"],correct:2},{type:"input",question:"Переведите: твоя сестра",correct:["η αδερφή σου","αδερφή σου"],hint:"σου = твой/твоя"},{type:"multiple",question:"Где стоит притяжательное местоимение в греческом?",options:["Перед существительным","После существительного","В начале предложения","Как угодно"],correct:1}];default:return[]}},N=r=>{const s=L(g[m].id),t=s[p];let a=!1;t.type==="multiple"?a=r===t.correct:t.type==="input"&&(a=t.correct.some(i=>i.toLowerCase()===r.toLowerCase().trim())),f(r),j(a),a&&q(u+1),C([...V,{question:p,answer:r,correct:a}]),setTimeout(()=>{p<s.length-1?(y(p+1),f(null),j(null),v(""),k(!1)):z(!0)},1500)},c=()=>{y(0),q(0),C([]),z(!1),f(null),j(null),v(""),k(!1)},R=()=>e.jsxs("div",{className:"menu-container",children:[e.jsxs("div",{className:"menu-header",children:[e.jsx("h1",{children:"Ενότητα 3"}),e.jsx("h2",{children:"Τι δουλειά κάνεις;"}),e.jsx("p",{children:"Кем ты работаешь?"})]}),e.jsxs("div",{className:"chapter-topics-overview",children:[e.jsxs("div",{className:"topic-item",children:[e.jsx("span",{className:"topic-icon",children:"👨‍👩‍👧‍👦"}),e.jsx("span",{children:"Η οικογένειά μου"})]}),e.jsxs("div",{className:"topic-item",children:[e.jsx("span",{className:"topic-icon",children:"❓"}),e.jsx("span",{children:"Τον/Τη λένε..."})]}),e.jsxs("div",{className:"topic-item",children:[e.jsx("span",{className:"topic-icon",children:"💍"}),e.jsx("span",{children:"Ποιος/Ποια/Ποιο είναι;"})]}),e.jsxs("div",{className:"topic-item",children:[e.jsx("span",{className:"topic-icon",children:"💼"}),e.jsx("span",{children:"Τι δουλειά κάνεις;"})]})]}),e.jsxs("div",{className:"chapter-buttons-main",children:[e.jsx("button",{onClick:()=>n("learn"),className:"btn-learn-main",children:"📚 Изучить материал"}),e.jsx("button",{onClick:()=>{n("test"),d(0),c()},className:"btn-test-main",children:"✍️ Пройти тест"})]}),e.jsxs("div",{className:"quick-review",children:[e.jsx("h3",{children:"⚡ Быстрый просмотр"}),e.jsxs("div",{className:"review-buttons",children:[e.jsx("button",{onClick:()=>n("family-review"),className:"btn-review",children:"👨‍👩‍👧 Семья"}),e.jsx("button",{onClick:()=>n("professions-review"),className:"btn-review",children:"💼 Профессии"}),e.jsx("button",{onClick:()=>n("phrases-review"),className:"btn-review",children:"💬 Фразы"}),e.jsx("button",{onClick:()=>n("verb-review"),className:"btn-review",children:"📝 Глагол δουλεύω"})]})]})]}),P=()=>e.jsxs("div",{className:"learn-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"Глава 3: Τι δουλειά κάνεις;"}),e.jsx("div",{className:"lessons-list",children:g.map((r,s)=>e.jsxs("div",{className:"lesson-card",onClick:()=>{n(r.content+"-learn")},children:[e.jsx("div",{className:"lesson-number",children:s+1}),e.jsxs("div",{className:"lesson-info",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.description})]}),e.jsx("div",{className:"lesson-arrow",children:"→"})]},r.id))})]}),$=()=>e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"👨‍👩‍👧‍👦 Η οικογένειά μου - Моя семья"}),e.jsxs("div",{className:"vocab-section",children:[e.jsx("h3",{children:"Члены семьи"}),e.jsx("div",{className:"vocab-grid",children:I.map((r,s)=>e.jsxs("div",{className:"vocab-card",children:[e.jsx("span",{className:"vocab-greek",children:r.greek}),e.jsx("span",{className:"vocab-translation",children:r.translation})]},s))})]}),e.jsxs("div",{className:"example-dialog",children:[e.jsx("h3",{children:"📖 Διάλογος - Диалог"}),e.jsxs("div",{className:"dialog-box",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Παναγιώτης:"})," Καλησπέρα, Λι. Τι είναι αυτό; Φωτογραφία;"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Λι:"})," Ναι, από την Κίνα. Η οικογένειά μου."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Παναγιώτης:"})," Ααα! Ποιος είναι αυτός;"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Λι:"})," Ο πατέρας μου. Τον λένε Χουάνγκ."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Παναγιώτης:"})," Αυτή ποια είναι; Η μητέρα σου;"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Λι:"})," Ναι. Τη λένε Γκονγκ. Και εδώ είναι ο αδερφός μου, ο Τσου."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Παναγιώτης:"})," Είναι παντρεμένος;"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Λι:"})," Ναι. Αυτή είναι η γυναίκα του, η Λιέν, και αυτός ο γιος τους, ο Ξιάο."]})]})]}),e.jsx("button",{onClick:()=>{n("test"),d(0),c()},className:"start-test-btn",children:"Проверить знания →"})]}),A=()=>e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"💼 Τι δουλειά κάνεις; - Профессии"}),e.jsxs("div",{className:"vocab-section",children:[e.jsx("h3",{children:"Профессии с родом (муж./жен.)"}),e.jsx("div",{className:"profession-grid",children:Q.map((r,s)=>e.jsxs("div",{className:"profession-card",children:[e.jsxs("div",{className:"profession-male",children:[e.jsx("span",{className:"gender-icon",children:"♂"}),e.jsx("span",{children:r.male})]}),e.jsxs("div",{className:"profession-female",children:[e.jsx("span",{className:"gender-icon",children:"♀"}),e.jsx("span",{children:r.female})]}),e.jsx("div",{className:"profession-translation",children:r.translation})]},s))})]}),e.jsxs("div",{className:"vocab-section",children:[e.jsx("h3",{children:"Профессии общего рода"}),e.jsx("p",{className:"note",children:"Одинаковая форма для мужчин и женщин (меняется только артикль: ο/η)"}),e.jsx("div",{className:"vocab-grid",children:T.map((r,s)=>e.jsxs("div",{className:"vocab-card neutral",children:[e.jsx("span",{className:"vocab-greek",children:r.greek}),e.jsx("span",{className:"vocab-translation",children:r.translation})]},s))})]}),e.jsxs("div",{className:"examples-box",children:[e.jsx("h3",{children:"💡 Примеры"}),e.jsxs("ul",{className:"examples-list",children:[e.jsxs("li",{children:["Η Ειρήνη δουλεύει στο σχολείο. Είναι ",e.jsx("strong",{children:"δασκάλα"}),"."]}),e.jsxs("li",{children:["Ο Κεμάλ ταξιδεύει πολύ. Είναι ",e.jsx("strong",{children:"οδηγός"}),"."]}),e.jsxs("li",{children:["Η Σιμπέλ σπουδάζει. Είναι ",e.jsx("strong",{children:"φοιτήτρια"}),"."]}),e.jsxs("li",{children:["Ο Σισάι μαγειρεύει στην ταβέρνα. Είναι ",e.jsx("strong",{children:"μάγειρας"}),"."]}),e.jsxs("li",{children:["Ο Πέτρος δουλεύει στο γραφείο. Είναι ",e.jsx("strong",{children:"υπάλληλος"}),"."]})]})]}),e.jsx("button",{onClick:()=>{n("test"),d(3),c()},className:"start-test-btn",children:"Проверить знания →"})]}),Y=()=>e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"💬 Полезные фразы главы 3"}),e.jsx("div",{className:"phrases-section",children:e.jsx("div",{className:"phrases-grid",children:D.map((r,s)=>e.jsxs("div",{className:"phrase-card",children:[e.jsx("span",{className:"phrase-greek",children:r.greek}),e.jsx("span",{className:"phrase-translation",children:r.translation})]},s))})}),e.jsxs("div",{className:"grammar-box",children:[e.jsx("h3",{children:"📝 Вопросительные слова"}),e.jsx("div",{className:"question-words-grid",children:W.map((r,s)=>e.jsxs("div",{className:"question-word-card",children:[e.jsx("span",{className:"qw-greek",children:r.greek}),e.jsx("span",{className:"qw-translation",children:r.translation})]},s))})]}),e.jsxs("div",{className:"marital-section",children:[e.jsx("h3",{children:"💍 Семейное положение"}),e.jsx("div",{className:"marital-grid",children:S.map((r,s)=>e.jsxs("div",{className:"marital-card",children:[e.jsxs("div",{className:"marital-forms",children:[e.jsxs("span",{className:"male-form",children:["♂ ",r.male]}),e.jsxs("span",{className:"female-form",children:["♀ ",r.female]})]}),e.jsx("span",{className:"marital-translation",children:r.translation})]},s))})]})]}),w=()=>e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsx("h2",{children:"📝 Глагол δουλεύω (работать)"}),e.jsx("div",{className:"verb-section",children:e.jsxs("table",{className:"verb-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Местоимение"}),e.jsx("th",{children:"Форма"}),e.jsx("th",{children:"Перевод"})]})}),e.jsx("tbody",{children:H.map((r,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.pronoun}),e.jsx("td",{className:"verb-form",children:r.verb}),e.jsx("td",{children:r.translation})]},s))})]})}),e.jsxs("div",{className:"possessive-section",children:[e.jsx("h3",{children:"Притяжательные местоимения"}),e.jsx("div",{className:"possessive-grid",children:M.map((r,s)=>e.jsxs("div",{className:"possessive-card",children:[e.jsx("span",{className:"poss-greek",children:r.greek}),e.jsx("span",{className:"poss-translation",children:r.translation})]},s))}),e.jsxs("div",{className:"note-box",children:[e.jsxs("p",{children:["💡 Притяжательное местоимение ставится ",e.jsx("strong",{children:"после"})," существительного:"]}),e.jsxs("p",{children:["ο πατέρας ",e.jsx("strong",{children:"μου"})," (мой отец), η μητέρα ",e.jsx("strong",{children:"σου"})," (твоя мать)"]})]})]}),e.jsx("button",{onClick:()=>{n("test"),d(4),c()},className:"start-test-btn",children:"Проверить знания →"})]}),F=r=>{switch(r){case"family-learn":return $();case"who-is-learn":return e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("learn"),className:"back-btn",children:"← Назад к урокам"}),e.jsx("h2",{children:"❓ Ποιος/Ποια/Ποιο είναι; - Кто это?"}),e.jsxs("div",{className:"grammar-box",children:[e.jsx("h3",{children:'Вопрос "Кто это?"'}),e.jsxs("div",{className:"grammar-table",children:[e.jsxs("div",{className:"grammar-row",children:[e.jsx("span",{className:"grammar-greek",children:"Ποιος είναι αυτός;"}),e.jsx("span",{className:"grammar-translation",children:"Кто это? (о мужчине)"})]}),e.jsxs("div",{className:"grammar-row",children:[e.jsx("span",{className:"grammar-greek",children:"Ποια είναι αυτή;"}),e.jsx("span",{className:"grammar-translation",children:"Кто это? (о женщине)"})]}),e.jsxs("div",{className:"grammar-row",children:[e.jsx("span",{className:"grammar-greek",children:"Ποιο είναι αυτό το παιδί;"}),e.jsx("span",{className:"grammar-translation",children:"Кто этот ребёнок?"})]})]})]}),e.jsxs("div",{className:"grammar-box",children:[e.jsx("h3",{children:"Как его/её зовут?"}),e.jsxs("div",{className:"grammar-table",children:[e.jsxs("div",{className:"grammar-row",children:[e.jsx("span",{className:"grammar-greek",children:"Πώς τον λένε;"}),e.jsx("span",{className:"grammar-translation",children:"Как его зовут?"})]}),e.jsxs("div",{className:"grammar-row",children:[e.jsx("span",{className:"grammar-greek",children:"Τον λένε Γιώργο."}),e.jsx("span",{className:"grammar-translation",children:"Его зовут Йоргос."})]}),e.jsxs("div",{className:"grammar-row",children:[e.jsx("span",{className:"grammar-greek",children:"Πώς τη λένε;"}),e.jsx("span",{className:"grammar-translation",children:"Как её зовут?"})]}),e.jsxs("div",{className:"grammar-row",children:[e.jsx("span",{className:"grammar-greek",children:"Τη λένε Ελένη."}),e.jsx("span",{className:"grammar-translation",children:"Её зовут Елена."})]})]})]}),e.jsx("button",{onClick:()=>{n("test"),d(1),c()},className:"start-test-btn",children:"Проверить знания →"})]});case"marital-learn":return e.jsxs("div",{className:"review-container",children:[e.jsx("button",{onClick:()=>n("learn"),className:"back-btn",children:"← Назад к урокам"}),e.jsx("h2",{children:"💍 Семейное положение"}),e.jsx("div",{className:"marital-section-full",children:e.jsx("div",{className:"marital-grid-full",children:S.map((s,t)=>e.jsxs("div",{className:"marital-card-full",children:[e.jsxs("div",{className:"marital-forms-full",children:[e.jsxs("div",{className:"gender-form",children:[e.jsx("span",{className:"gender-label",children:"Мужчина:"}),e.jsx("span",{className:"form-text",children:s.male})]}),e.jsxs("div",{className:"gender-form",children:[e.jsx("span",{className:"gender-label",children:"Женщина:"}),e.jsx("span",{className:"form-text",children:s.female})]})]}),e.jsx("span",{className:"marital-translation-full",children:s.translation})]},t))})}),e.jsxs("div",{className:"examples-box",children:[e.jsx("h3",{children:"💡 Примеры"}),e.jsxs("ul",{className:"examples-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"- Είσαι παντρεμένος;"})," (Ты женат?)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"- Όχι, δεν είμαι. Είμαι ελεύθερος."})," (Нет. Я холост.)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"- Μένω με τη φίλη μου."})," (Я живу с моей девушкой.)"]})]})]}),e.jsx("button",{onClick:()=>{n("test"),d(2),c()},className:"start-test-btn",children:"Проверить знания →"})]});case"professions-learn":return A();case"verb-doulevo-learn":return w();case"possessive-learn":return w();default:return P()}},G=()=>{const r=L(g[m].id),s=g[m];if(E){const a=Math.round(u/r.length*100);return e.jsxs("div",{className:"test-result",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsxs("div",{className:"result-card",children:[e.jsx("div",{className:`result-icon ${a>=80?"success":a>=50?"warning":"fail"}`,children:a>=80?"🎉":a>=50?"👍":"📚"}),e.jsx("h2",{children:s.title}),e.jsxs("div",{className:"result-score",children:[e.jsxs("span",{className:"score-value",children:[u,"/",r.length]}),e.jsxs("span",{className:"score-percent",children:[a,"%"]})]}),e.jsx("p",{className:"result-message",children:a>=80?"Μπράβο! Отлично! Вы хорошо усвоили материал!":a>=50?"Καλά! Неплохо! Но есть над чем поработать.":"Рекомендуем повторить материал и попробовать снова."}),e.jsxs("div",{className:"result-actions",children:[e.jsx("button",{onClick:c,className:"btn-retry",children:"🔄 Повторить тест"}),m<g.length-1&&e.jsx("button",{onClick:()=>{d(m+1),c()},className:"btn-next",children:"Следующий урок →"})]})]})]})}const t=r[p];return e.jsxs("div",{className:"test-container",children:[e.jsx("button",{onClick:()=>n("menu"),className:"back-btn",children:"← Назад к меню"}),e.jsxs("div",{className:"test-header",children:[e.jsx("h2",{children:s.title}),e.jsxs("div",{className:"test-progress",children:[e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${(p+1)/r.length*100}%`}})}),e.jsxs("span",{className:"progress-text",children:[p+1," / ",r.length]})]})]}),e.jsxs("div",{className:"question-card",children:[e.jsx("p",{className:"question-text",children:t.question}),t.type==="multiple"?e.jsx("div",{className:"options-list",children:t.options.map((a,i)=>e.jsxs("button",{onClick:()=>!o&&N(i),className:`option-btn ${o!==null?i===t.correct?"correct":i===o?"incorrect":"":""}`,disabled:o!==null,children:[e.jsx("span",{className:"option-letter",children:String.fromCharCode(65+i)}),e.jsx("span",{className:"option-text",children:a})]},i))}):e.jsxs("div",{className:"input-answer",children:[e.jsx("input",{type:"text",value:x,onChange:a=>v(a.target.value),onKeyPress:a=>a.key==="Enter"&&x&&N(x),placeholder:"Введите ответ...",disabled:o!==null,className:o!==null?b?"correct":"incorrect":""}),e.jsx("button",{onClick:()=>x&&N(x),disabled:!x||o!==null,className:"submit-btn",children:"Проверить"}),!_&&o===null&&e.jsx("button",{onClick:()=>k(!0),className:"hint-btn",children:"💡 Подсказка"}),_&&e.jsxs("p",{className:"hint-text",children:["💡 ",t.hint]}),o!==null&&!b&&e.jsxs("p",{className:"correct-answer",children:["Правильный ответ: ",t.correct[0]]})]}),o!==null&&e.jsx("div",{className:`feedback ${b?"correct":"incorrect"}`,children:b?"✓ Σωστό! Правильно!":"✗ Λάθος! Неправильно"})]}),e.jsxs("div",{className:"lesson-selector",children:[e.jsx("p",{children:"Выберите урок для теста:"}),e.jsx("div",{className:"lesson-tabs",children:g.map((a,i)=>e.jsxs("button",{onClick:()=>{d(i),c()},className:`lesson-tab ${m===i?"active":""}`,children:[i+1,". ",a.title]},a.id))})]})]})},K=()=>{switch(h){case"menu":return R();case"learn":return P();case"test":return G();case"family-review":return $();case"professions-review":return A();case"phrases-review":return Y();case"verb-review":return w();default:return h.endsWith("-learn")?F(h):R()}};return e.jsxs("div",{className:"greek-course",children:[e.jsx("style",{children:`
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
      `}),K()]})};export{X as default};
