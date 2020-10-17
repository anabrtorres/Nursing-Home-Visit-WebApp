const Database = require('./db');

Database.then(async db => {
    // inserir dados na tabela
    await db.run(`
        INSERT INTO nursingHomes (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-20.1413335",
            "-44.8761516",
            "Vila Vicentina",
            "Presta assistência a idosos tanto dependentes quanto independentes, que precisam de assistência e cuidados especializados.",
            "999999999",
            "https://media.npr.org/assets/img/2020/03/04/coronanursing-1_wide-1f2966692dda24ecb0e603b5abc1c3fa7d4734ec.jpg?s=1400",
            "Vista um sorriso no rosto e traga muito amor e paciência.",
            "Horário de visitas das 8h às 18h",
            "1"
        );
    `)


    // consultar dados da tabela
    const  selectedNursingHome = await db.all("SELECT * FROM nursingHomes")
    console.log(selectedNursingHome)

    // consultar um lar de idosos pelo id
    const nursingHome = await db.all('SELECT * FROM nursingHomes WHERE id = "1"')
    console.log(nursingHome)
})