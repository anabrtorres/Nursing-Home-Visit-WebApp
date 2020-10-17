const Database = require('./database/db')
const saveNursingHome = require('./database/saveNursingHome')


module.exports = {

    index(req, res) {
        return res.render('index')
    },

    async nursingHome(req, res) {
        const id = req.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM nursingHomes WHERE id = "${id}"`);
            const nursingHome = results[0]

            nursingHome.images = nursingHome.images.split(',')
            nursingHome.firstImage = nursingHome.images[0]

            nursingHome.openOnWeekends = 0 ? nursingHome.openOnWeekends = false : nursingHome.openOnWeekends = true;
            
            return res.render('nursing-home', { nursingHome });
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    async findNursingHome(req, res) {
        try {
            const db = await Database;
            const findNursingHome = await db.all("SELECT * FROM nursingHomes");
            return res.render('find-nursing-home', { findNursingHome })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
        
    },

    createNursingHome(req, res) {
        return res.render('create-nursing-home')
    }

}