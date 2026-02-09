import{r as v,j as e}from"./index-IRr9hpAx.js";const _=()=>(v.useEffect(()=>{const s=[{sentence:"If you ___ red and blue, you ___ purple.",options:["mix / get","will mix / get","mixed / would get"],correct:0,type:"zero",explanation:"Zero Conditional — это общая истина: смешение красного и синего всегда даёт фиолетовый."},{sentence:"If she ___ harder, she ___ the exam next week.",options:["studies / will pass","studied / would pass","studies / passes"],correct:0,type:"first",explanation:"First Conditional — реальная ситуация в будущем. «Next week» указывает на конкретное будущее событие."},{sentence:"If I ___ you, I ___ to the manager.",options:["am / will talk","were / would talk","was / will talk"],correct:1,type:"second",explanation:"Second Conditional — нереальная ситуация. «If I were you» — устойчивая конструкция для советов."},{sentence:"If water ___ 0°C, it ___.",options:["reaches / freezes","will reach / freezes","reached / would freeze"],correct:0,type:"zero",explanation:"Zero Conditional — научный факт. Вода всегда замерзает при 0°C."},{sentence:"If he ___ a car, he ___ to work every day.",options:["has / drives","had / would drive","has / will drive"],correct:1,type:"second",explanation:"Second Conditional — у него нет машины, это нереальная ситуация в настоящем."},{sentence:"If you ___ plants, they ___.",options:["don't water / die","won't water / die","didn't water / would die"],correct:0,type:"zero",explanation:"Zero Conditional — общая истина: без воды растения всегда погибают."},{sentence:"If I ___ the lottery, I ___ a house by the sea.",options:["win / will buy","won / would buy","win / buy"],correct:1,type:"second",explanation:"Second Conditional — выиграть в лотерею крайне маловероятно, это мечта."},{sentence:"If it ___ tomorrow, we ___ the trip.",options:["snows / will cancel","snowed / would cancel","will snow / cancel"],correct:0,type:"first",explanation:"First Conditional — реальная возможность завтра. В if-части Present Simple, в главной — will."},{sentence:"If you ___ this button, the machine ___.",options:["will press / starts","press / starts","pressed / would start"],correct:1,type:"zero",explanation:"Zero Conditional — инструкция: каждый раз, когда нажимаешь кнопку, машина запускается."},{sentence:"If I ___ Japanese, I ___ to Tokyo.",options:["speak / will move","spoke / would move","speak / move"],correct:1,type:"second",explanation:"Second Conditional — «я не говорю по-японски», это нереальная ситуация."},{sentence:"If he ___ me tonight, I ___ him the news.",options:["calls / will tell","called / would tell","calls / tell"],correct:0,type:"first",explanation:"First Conditional — вполне вероятно, что он позвонит сегодня вечером."},{sentence:"If you ___, you ___ hungry. That's how it works.",options:["won't eat / get","don't eat / get","didn't eat / would get"],correct:1,type:"zero",explanation:"Zero Conditional — «That's how it works» напрямую указывает на общую закономерность."},{sentence:"If she ___ taller, she ___ a model.",options:["is / will become","were / would become","was / becomes"],correct:1,type:"second",explanation:"Second Conditional — она не высокая, это нереальная ситуация. «Were» используется для всех лиц."},{sentence:"If the weather ___ nice this weekend, we ___ hiking.",options:["is / will go","were / would go","is / go"],correct:0,type:"first",explanation:"First Conditional — реальный план на выходные, зависящий от погоды."},{sentence:"If I ___ the answer, I ___ you. But I really don't.",options:["know / will tell","knew / would tell","know / tell"],correct:1,type:"second",explanation:"Second Conditional — «But I really don't» прямо говорит, что это нереально. Он не знает ответа."}];let a=0,l=0,d={zero:0,first:0,second:0};const m=document.getElementById("questionsContainer");function x(){m&&(m.innerHTML="",s.forEach((t,o)=>{const r=document.createElement("div");r.className="question-card",r.id=`q${o}`;const n=["A","B","C"],i=t.options.map((c,p)=>`<button class="option-btn" data-q="${o}" data-o="${p}">
            <span class="option-label">${n[p]}</span>${c}
          </button>`).join("");r.innerHTML=`
          <div class="q-header">
            <span class="q-number">Вопрос ${o+1}</span>
            <span class="q-type ${t.type}" id="qtype${o}">${t.type==="zero"?"Zero":t.type==="first"?"First":"Second"}</span>
          </div>
          <div class="q-sentence">${t.sentence}</div>
          <div class="options">${i}</div>
          <div class="explanation" id="expl${o}">${t.explanation}</div>
        `,m.appendChild(r),r.querySelectorAll(".option-btn").forEach(c=>{c.addEventListener("click",()=>{f(o,parseInt(c.getAttribute("data-o")))})}),setTimeout(()=>r.classList.add("visible"),100+o*80)}))}function f(t,o){const r=s[t],n=document.getElementById(`q${t}`);if(!n)return;const i=n.querySelectorAll(".option-btn");if(i[0].classList.contains("disabled"))return;i.forEach(w=>w.classList.add("disabled")),o===r.correct?(i[o].classList.add("selected-correct"),n.classList.add("answered-correct"),a++,d[r.type]++):(i[o].classList.add("selected-wrong"),i[r.correct].classList.add("reveal-correct"),n.classList.add("answered-wrong"));const c=document.getElementById(`qtype${t}`);c&&c.classList.add("show");const p=document.getElementById(`expl${t}`);p&&p.classList.add("show"),l++;const h=document.getElementById("currentQ");h&&(h.textContent=l);const u=document.getElementById("scoreNum");u&&(u.textContent=a);const g=document.getElementById("progressFill");g&&(g.style.width=`${l/15*100}%`),l===15&&setTimeout(b,800)}function b(){const t=document.getElementById("results");t&&(t.classList.add("show"),document.getElementById("finalScore").textContent=a,document.getElementById("statZero").textContent=`${d.zero}/5`,document.getElementById("statFirst").textContent=`${d.first}/4`,document.getElementById("statSecond").textContent=`${d.second}/6`,a>=13?(document.getElementById("resultEmoji").textContent="🏆",document.getElementById("resultTitle").textContent="Великолепно!"):a>=10?(document.getElementById("resultEmoji").textContent="🎉",document.getElementById("resultTitle").textContent="Отлично!"):a>=7?(document.getElementById("resultEmoji").textContent="💪",document.getElementById("resultTitle").textContent="Хорошо!"):(document.getElementById("resultEmoji").textContent="📚",document.getElementById("resultTitle").textContent="Стоит повторить"),t.scrollIntoView({behavior:"smooth",block:"center"}))}return window._conditionalRestart=function(){a=0,l=0,d={zero:0,first:0,second:0};const t=document.getElementById("currentQ");t&&(t.textContent="0");const o=document.getElementById("scoreNum");o&&(o.textContent="0");const r=document.getElementById("progressFill");r&&(r.style.width="0%");const n=document.getElementById("results");n&&n.classList.remove("show"),x(),window.scrollTo({top:0,behavior:"smooth"})},x(),()=>{delete window._conditionalRestart}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        :root {
          --bg: #0f110f;
          --card: #191c19;
          --card-hover: #1e221e;
          --accent-zero: #5eead4;
          --accent-first: #a78bfa;
          --accent-second: #fb923c;
          --text: #e8e8e0;
          --text-dim: #8a8a7e;
          --correct: #34d399;
          --wrong: #f87171;
          --border: #2a2e2a;
          --radius: 16px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        body::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
        }

        .cond-glow {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(180px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
          transition: all 1.5s ease;
        }
        .cond-glow-1 { background: var(--accent-zero); top: -200px; left: -100px; }
        .cond-glow-2 { background: var(--accent-second); bottom: -300px; right: -200px; }

        .cond-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 40px 20px 80px;
          position: relative;
          z-index: 1;
        }

        .cond-header {
          text-align: center;
          margin-bottom: 48px;
          animation: condFadeUp 0.8s ease both;
        }
        .cond-header h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
          background: linear-gradient(135deg, var(--accent-zero), var(--accent-first), var(--accent-second));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cond-header p {
          color: var(--text-dim);
          font-size: 1.05rem;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .theory-section {
          margin-bottom: 48px;
          animation: condFadeUp 0.8s ease 0.15s both;
        }
        .theory-section h2 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: var(--text);
        }
        .theory-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .theory-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          cursor: pointer;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .theory-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px;
          height: 100%;
          transition: all 0.35s ease;
        }
        .theory-card.zero::before { background: var(--accent-zero); }
        .theory-card.first::before { background: var(--accent-first); }
        .theory-card.second::before { background: var(--accent-second); }

        .theory-card:hover { background: var(--card-hover); transform: translateX(4px); }

        .theory-card .label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
        }
        .theory-card.zero .label { color: var(--accent-zero); }
        .theory-card.first .label { color: var(--accent-first); }
        .theory-card.second .label { color: var(--accent-second); }

        .theory-card .structure {
          font-family: 'DM Sans', monospace;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 6px;
        }
        .theory-card .example {
          color: var(--text-dim);
          font-style: italic;
          font-size: 0.92rem;
        }
        .theory-card .desc {
          color: var(--text-dim);
          font-size: 0.85rem;
          margin-top: 6px;
          display: none;
        }
        .theory-card.expanded .desc { display: block; }

        .progress-wrap {
          margin-bottom: 32px;
          animation: condFadeUp 0.8s ease 0.3s both;
        }
        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .progress-header span {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-weight: 500;
        }
        .progress-header .score {
          font-weight: 700;
          color: var(--correct);
        }
        .progress-bar {
          height: 6px;
          background: var(--border);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-zero), var(--accent-first), var(--accent-second));
          border-radius: 3px;
          transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          width: 0%;
        }

        .quiz-section {
          animation: condFadeUp 0.8s ease 0.4s both;
        }
        .quiz-section h2 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.5rem;
          margin-bottom: 24px;
        }

        .question-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          margin-bottom: 16px;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(16px);
        }
        .question-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .question-card.answered-correct {
          border-color: var(--correct);
          box-shadow: 0 0 0 1px var(--correct), 0 0 40px -12px rgba(52, 211, 153, 0.15);
        }
        .question-card.answered-wrong {
          border-color: var(--wrong);
          box-shadow: 0 0 0 1px var(--wrong), 0 0 40px -12px rgba(248, 113, 113, 0.15);
        }

        .q-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .q-number {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-dim);
        }
        .q-type {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .q-type.show { opacity: 1; }
        .q-type.zero { color: var(--accent-zero); border-color: var(--accent-zero); }
        .q-type.first { color: var(--accent-first); border-color: var(--accent-first); }
        .q-type.second { color: var(--accent-second); border-color: var(--accent-second); }

        .q-sentence {
          font-size: 1.1rem;
          font-weight: 500;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .option-btn {
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 18px;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
          position: relative;
          overflow: hidden;
        }
        .option-btn:hover:not(.disabled) {
          background: var(--card-hover);
          border-color: var(--text-dim);
          transform: translateX(4px);
        }
        .option-btn.selected-correct {
          background: rgba(52, 211, 153, 0.1);
          border-color: var(--correct);
          color: var(--correct);
        }
        .option-btn.selected-wrong {
          background: rgba(248, 113, 113, 0.08);
          border-color: var(--wrong);
          color: var(--wrong);
          text-decoration: line-through;
          text-decoration-color: rgba(248, 113, 113, 0.4);
        }
        .option-btn.reveal-correct {
          background: rgba(52, 211, 153, 0.06);
          border-color: var(--correct);
          color: var(--correct);
        }
        .option-btn.disabled { pointer-events: none; }

        .option-label {
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 6px;
          background: var(--border);
          font-size: 0.75rem;
          font-weight: 700;
          margin-right: 12px;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .option-btn.selected-correct .option-label { background: var(--correct); color: var(--bg); }
        .option-btn.selected-wrong .option-label { background: var(--wrong); color: var(--bg); }
        .option-btn.reveal-correct .option-label { background: var(--correct); color: var(--bg); }

        .explanation {
          margin-top: 14px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.03);
          border-radius: 10px;
          font-size: 0.88rem;
          color: var(--text-dim);
          line-height: 1.6;
          display: none;
        }
        .explanation.show { display: block; animation: condFadeUp 0.4s ease; }

        .results {
          display: none;
          text-align: center;
          padding: 60px 20px;
          animation: condFadeUp 0.6s ease;
        }
        .results.show { display: block; }
        .results .emoji { font-size: 4rem; margin-bottom: 20px; }
        .results h2 {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          margin-bottom: 12px;
        }
        .results .score-text {
          font-size: 1.2rem;
          color: var(--text-dim);
          margin-bottom: 32px;
        }
        .results .score-text strong { color: var(--correct); font-weight: 700; }

        .stats-row {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .stat-box {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 24px;
          min-width: 120px;
        }
        .stat-box .num {
          font-family: 'DM Serif Display', serif;
          font-size: 1.8rem;
        }
        .stat-box .lbl {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
        }

        .restart-btn {
          background: linear-gradient(135deg, var(--accent-zero), var(--accent-first));
          color: var(--bg);
          border: none;
          border-radius: 12px;
          padding: 14px 36px;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .restart-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(94, 234, 212, 0.25);
        }

        @keyframes condFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 520px) {
          .cond-container { padding: 24px 14px 60px; }
          .question-card { padding: 20px; }
          .stat-box { min-width: 90px; padding: 12px 16px; }
        }
      `}),e.jsx("div",{className:"cond-glow cond-glow-1"}),e.jsx("div",{className:"cond-glow cond-glow-2"}),e.jsxs("div",{className:"cond-container",children:[e.jsxs("div",{className:"cond-header",children:[e.jsx("h1",{children:"Conditional Sentences"}),e.jsx("p",{children:"Изучи теорию, затем проверь себя в квизе из 15 вопросов. Нажми на карточку — узнай подробнее."})]}),e.jsxs("div",{className:"theory-section",children:[e.jsx("h2",{children:"📖 Теория"}),e.jsxs("div",{className:"theory-grid",children:[e.jsxs("div",{className:"theory-card zero",onClick:s=>s.currentTarget.classList.toggle("expanded"),children:[e.jsx("div",{className:"label",children:"Zero Conditional"}),e.jsx("div",{className:"structure",children:"If + Present Simple → Present Simple"}),e.jsx("div",{className:"example",children:'"If you heat water to 100°C, it boils."'}),e.jsx("div",{className:"desc",children:"Используется для общих истин, научных фактов и закономерностей. Обе части — в Present Simple. Можно заменить if на when без изменения смысла."})]}),e.jsxs("div",{className:"theory-card first",onClick:s=>s.currentTarget.classList.toggle("expanded"),children:[e.jsx("div",{className:"label",children:"First Conditional"}),e.jsx("div",{className:"structure",children:"If + Present Simple → will + V"}),e.jsx("div",{className:"example",children:'"If it rains tomorrow, I will stay home."'}),e.jsx("div",{className:"desc",children:"Реальные и вероятные ситуации в будущем. В if-части — Present Simple, в главной — will + инфинитив. Описывает то, что скорее всего произойдёт."})]}),e.jsxs("div",{className:"theory-card second",onClick:s=>s.currentTarget.classList.toggle("expanded"),children:[e.jsx("div",{className:"label",children:"Second Conditional"}),e.jsx("div",{className:"structure",children:"If + Past Simple → would + V"}),e.jsx("div",{className:"example",children:'"If I had more time, I would learn piano."'}),e.jsx("div",{className:"desc",children:"Нереальные или маловероятные ситуации в настоящем и будущем. Глагол be всегда в форме were (If I were you…). Описывает мечты, советы, фантазии."})]})]})]}),e.jsxs("div",{className:"progress-wrap",children:[e.jsxs("div",{className:"progress-header",children:[e.jsxs("span",{children:["Вопрос ",e.jsx("span",{id:"currentQ",children:"0"})," / 15"]}),e.jsxs("span",{className:"score",children:[e.jsx("span",{id:"scoreNum",children:"0"})," правильных"]})]}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",id:"progressFill"})})]}),e.jsxs("div",{className:"quiz-section",id:"quizSection",children:[e.jsx("h2",{children:"🧠 Квиз"}),e.jsx("div",{id:"questionsContainer"})]}),e.jsxs("div",{className:"results",id:"results",children:[e.jsx("div",{className:"emoji",id:"resultEmoji",children:"🎉"}),e.jsx("h2",{id:"resultTitle",children:"Отлично!"}),e.jsxs("p",{className:"score-text",children:["Ты ответил правильно на ",e.jsx("strong",{id:"finalScore",children:"0"})," из 15 вопросов"]}),e.jsxs("div",{className:"stats-row",children:[e.jsxs("div",{className:"stat-box",children:[e.jsx("div",{className:"num",id:"statZero",style:{color:"var(--accent-zero)"},children:"0"}),e.jsx("div",{className:"lbl",children:"Zero"})]}),e.jsxs("div",{className:"stat-box",children:[e.jsx("div",{className:"num",id:"statFirst",style:{color:"var(--accent-first)"},children:"0"}),e.jsx("div",{className:"lbl",children:"First"})]}),e.jsxs("div",{className:"stat-box",children:[e.jsx("div",{className:"num",id:"statSecond",style:{color:"var(--accent-second)"},children:"0"}),e.jsx("div",{className:"lbl",children:"Second"})]})]}),e.jsx("button",{className:"restart-btn",onClick:()=>window._conditionalRestart&&window._conditionalRestart(),children:"Пройти ещё раз"})]})]})]}));export{_ as default};
