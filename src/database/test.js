const Database = require("./db");
const saveNursingHome = require("./saveNursingHome");

Database.then(async (db) => {
  // inserir dados na tabela
  /*await saveNursingHome(db, {
    lat: "-20.1413335",
    lng: "-44.8761516",
    name: "Vila Vicentina",
    about:"Presta assistência a idosos tanto dependentes quanto independentes, que precisam de assistência e cuidados especializados.",
    whatsapp: "999999999",
    images: [
      "https://media.npr.org/assets/img/2020/03/04/coronanursing-1_wide-1f2966692dda24ecb0e603b5abc1c3fa7d4734ec.jpg?s=1400",
      
      "https://ei.marketwatch.com/Multimedia/2019/12/19/Photos/ZQ/MW-HX239_nursin_20191219165234_ZQ.jpg?uuid=dd09742e-22a9-11ea-b4e5-9c8e992d421e",
    ].toString(),
    instructions: "Vista um sorriso no rosto e traga muito amor e paciência.",
    opening_hours: "Horário de visitas das 8h às 18h",
    open_on_weekends: "1"
  })*/

  // consultar dados da tabela
  const selectedNursingHome = await db.all("SELECT * FROM nursingHomes");
  console.log(selectedNursingHome);

  // consultar um lar de idosos pelo id
  const nursingHome = await db.all('SELECT * FROM nursingHomes WHERE id = "2"');
  console.log(nursingHome);

  // deletar dado da tabelas
  //console.log(await db.run("DELETE FROM nursingHomes WHERE id = '8'"))
});
