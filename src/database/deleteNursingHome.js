function deleteNursingHome(db, id) {
    
  return db.run(
    `DELETE FROM nursingHomes WHERE id=?`,
    id,
    function (err) {
      if (err) {
        return console.error(err.message);
      }

      //redirecionamento
      return res.redirect("/find-nursing-home");
    }
  );
}

module.exports = deleteNursingHome;
