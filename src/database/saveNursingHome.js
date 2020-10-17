function saveNursingHome(db, nursingHome) {
  return db.run(`
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
        "${nursingHome.lat}",
        "${nursingHome.lng}",
        "${nursingHome.name}",
        "${nursingHome.about}",
        "${nursingHome.whatsapp}",
        "${nursingHome.images}",
        "${nursingHome.instructions}",
        "${nursingHome.opening_hours}",
        "${nursingHome.open_on_weekends}"    
    );
`);
}

module.exports = saveNursingHome;
