const alunos = [
        {
            avatar: 'AP',
            nome: "ANA PAULA ARAÚJO JUNQUILHO",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96811&entry.608306432=DDW-2602&entry.1908647358=Ana%20Paula%20Ara%C3%BAjo%20Junquilho&entry.1827692846=556.064.903-15",
            ativo: false
        },
        {
            avatar: 'DA',
            nome: "DAVID ARTHUR BARROS AQUINO",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96804&entry.608306432=DDW-2602&entry.1908647358=DAVID%20ARTHUR%20BARROS%20AQUINO&entry.1827692846=633.259.323-71",
            ativo: true
        },
        {
            avatar: 'GM',
            nome: "GIOVANNA MARTINS",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96803&entry.608306432=DDW-2602&entry.1908647358=GIOVANNA%20MARTINS&entry.1827692846=078.380.803-80",
            ativo: true
        },
        {
            avatar: 'IS',
            nome: "IARLEY DA SILVA GADELHA",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96967&entry.608306432=DDW-2602&entry.1908647358=IARLEY%20DA%20SILVA%20GADELHA&entry.1827692846=093.285.713-24",
            ativo: true
        },
        {
            avatar: 'JB',
            nome: "JOÃO BRUNO LOPES DA SILVA",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96805&entry.608306432=DDW-2602&entry.1908647358=JO%C3%83O%20BRUNO%20LOPES%20DA%20SILVA&entry.1827692846=789.911.533-72",
            ativo: true
        },
        {
            avatar: 'KM',
            nome: "KALEB MAGALHÃES DE CASTRO ANTERO",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96809&entry.608306432=DDW-2602&entry.1908647358=Kaleb%20Magalh%C3%A3es%20de%20Castro%20Antero&entry.1827692846=069.904.553-30",
            ativo: false
        },
        {
            avatar: 'LR',
            nome: "LEANDRO RODRIGUES DE CARVALHO",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96810&entry.608306432=DDW-2602&entry.1908647358=LEANDRO%20RODRIGUES%20DE%20CARVALHO&entry.1827692846=003.570.103-02",
            ativo: true
        },
        {
            avatar: 'MA',
            nome: "MATHEUS ALMEIDA DA SILVA",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96802&entry.608306432=DDW-2602&entry.1908647358=MATHEUS%20ALMEIDA%20DA%20SILVA&entry.1827692846=625.938.073-93",
            ativo: true
        },
        {
            avatar: 'MB',
            nome: "MAYARA BEZERRA PONTES",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96807&entry.608306432=DDW-2602&entry.1908647358=MAYARA%20BEZERRA%20PONTES&entry.1827692846=096.576.863-50",
            ativo: true
        },
        {
            avatar: 'RM',
            nome: "ROBERTO MUNIZ DA SILVA",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96801&entry.608306432=DDW-2602&entry.1908647358=ROBERTO%20MUNIZ&entry.1827692846=384.933.573-91",
            ativo: true
        },
        {
            avatar: 'TM',
            nome: "THAÍS MACEDO DA SILVA",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96806&entry.608306432=DDW-2602&entry.1908647358=THA%C3%8DS%20MACEDO%20DA%20SILVA&entry.1827692846=096.255.193-78",
            ativo: true
        },
        {
            avatar: 'TA',
            nome: "TIAGO ANTERO BATISTA",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=96808&entry.608306432=DDW-2602&entry.1908647358=Tiago%20Antero%20Batista&entry.1827692846=000.495.473-48",
            ativo: true
        }
    ];

    const cores = [
        'avatar-blue', 'avatar-red', 'avatar-green', 'avatar-yellow',
        'avatar-blue', 'avatar-red', 'avatar-green', 'avatar-yellow',
        'avatar-blue', 'avatar-red', 'avatar-green', 'avatar-yellow'
    ];

    const html = alunos
    .filter(aluno => aluno.ativo)
    .map((aluno, index) => {
        return `
            <li>
                <div class="student">
                    <div class="avatar ${ cores[index] }">${aluno.avatar}</div>
                    <a href="${aluno.url}" target="_blank">${aluno.nome}</a>
                </div>
                <i class="chevron-right" data-lucide="chevron-right" width="20" height="20"></i>
            </li>
        `;
    }).join("");

    document.getElementById('alunos').innerHTML = html;