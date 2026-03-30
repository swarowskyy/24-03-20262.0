# 24-03-20262.0
layout
npx -p @angular/cli ng new calculo-imc --style=css --routing=true --ssr=false
cd calculo-im
npx ng serve
ng= angular
para criar novo componente
 npx ng g c + nome do componenter

 site para cores CSS
 https://tailwindcss.com/docs/colors

 No mundo dos games, farmar é repetir tarefas para acumular recursos (moeda, itens ou XP). Mas a gíria evoluiu e agora define um estilo de vida focado em constância e acúmulo.
            <br><br>
            <strong>Os dois tipos de Farmadores:</strong>
            <br>
            <strong>O Farmador de Recursos:</strong> É o focado no "corre". Seja no jogo ou no trabalho, ele repete processos exaustivos com um único objetivo: ficar rico e subir de nível.
            <br><br>
            <strong>O Farmador de Aura:</strong> É a tendência das redes sociais. Aqui, a "moeda" é o status social. Ele age com estilo, mistério e confiança para acumular "pontos de aura" (ser visto como alguém inabalável e descolado).
            <br><br>
            <em>Resumo: Farmar é transformar esforço repetitivo em lucro — seja esse lucro em moedas de ouro ou em pura moral no rolê.</em>


             O mogador é aquele que domina o ambiente através da pura superioridade estética e presença física. Diferente de quem busca atenção por atitudes, ele utiliza o looksmaxxing — o aprimoramento máximo de traços como o  maxilar e a postura — para "anular" visualmente as pessoas ao redor no silêncio.
<br>
 Em resumo, mogar é sobre ser o centro das atenções naturalmente, fazendo com que sua imposição física fale mais alto que qualquer palavra.

 //<main class="flex flex-col min-h-screen bg-amber-100 justify-center items-center">
    
    <header class="mb-10 text-center w-full">
        <h2 class="text-3xl font-extrabold text-violet-500">Tecnologias Front-End</h2>
        <p class="mt-3 text-lg text-violet-400">Conheça abaixo algumas tecnologias Front End</p>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-7xl">
        <article *ngFor="let item of requisicao" 
                 class="group p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div>
                <h3 class="text-xl font-bold text-violet-400 group-hover:text-violet-500 transition-colors">
                    {{item.tecnologia}}
                </h3>
                <p class="mt-2 text-violet-400 leading-relaxed text-sm">
                    {{item.descricao}}
                </p>
            </div>
        </article>
    </div>
</main>//