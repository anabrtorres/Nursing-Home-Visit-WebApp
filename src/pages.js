const findNursingHome = require('./database/fakedata.js')

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    nursingHome(req, res) {
        return res.render('nursing-home')
    },

    findNursingHome(req, res) {
        return res.render('find-nursing-home', { findNursingHome })
    },

    createNursingHome(req, res) {
        return res.render('create-nursing-home')
    }

}