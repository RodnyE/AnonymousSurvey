const config = require("../../config.js");
const { Sequelize, Model, DataTypes, Op } = require("sequelize");
const SurveyModel = require("./models/survey.js");

/**********************
 * Starting Connection *
 **********************/
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: config.SERV + '/db/db.sqlite'
});

(async () => {
    try {
        await sequelize.authenticate();
    } catch (err) {
        throw new Error("" + err)
    }
})();

/*********************
 *   survey Model DB   *
 *********************/
class Survey extends Model {
    getData() {
        const rows = [ "user_ip", "name", "selection1" , "selection2"];
        let ret = {};
        for (let row of rows) {
            if (this[row]) {
                try {
                    ret[row] = JSON.parse(this[row]);
                } catch (err) {
                    ret[row] = this[row];
                }
            }
        }
        return ret;
    }

    async setData(obj) {
        let parsedObj = {};
        for (let o in obj) {
            if (this[o] == undefined) continue;
            parsedObj[o] = (typeof (obj) === "object" ? JSON.stringify(obj[o]) : obj[o]);
        }
        try {
            await this.update(parsedObj);
            return true;
        } catch (err) {
            console.err(err);
            return false;
        }
    }
}
 Survey.init(
 SurveyModel(DataTypes),
    {
        sequelize
    }
);

(async () => {
    await Survey.sync();
})();

module.exports = Survey;