const Database = require('./database/db')
const saveNursingHome = require('./database/saveNursingHome')
const deleteNursingHome = require('./database/deleteNursingHome')


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
    },

    async saveNursingHome(req, res) {
        const fields = req.body

        // validar preenchimento de campos
        if(Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos!')
        }

        try {
            //salvar lar de idosos
            const db = await Database
            await saveNursingHome(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            //redirecionamento
            return res.redirect('/find-nursing-home')

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }        
    },

    async deleteNursingHome(req, res) {

        let id = req.params.id;

        try {
            //deletar lar de idosos
            const db = await Database
            await deleteNursingHome(db, id)

            //redirecionamento
            return res.redirect('/find-nursing-home')

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }        
    }

}