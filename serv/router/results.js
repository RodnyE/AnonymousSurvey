const config = require("../../config.js");
const Survey = require(config.SERV + "/helpers/db.js");

const results = async (req, res) => {
    if (!req.body) return res.json({ status: false, data: { message: "NO_DATA" } });
    let password;
    try {
        const body = req.body;
        password = body.password;
    } catch (err) {
        return res.json({
            status: false,
            data: {
                message: "DATA_ERROR",
                error: err
            }
        });
    }

    if (password != "monica1234") {
        return res.json({
            status: false,
            data: {
                message: "WRONG_PASSWORD"
            }
        });
    }

    const surveys = await Survey.findAll();
    let opt1 = {}, opt2 = {};
    for (let surv of surveys) {
        if (opt1[surv.opt1]) opt1[surv.opt1] += 1;
        else opt1[surv.opt1] = 1;

        if (opt2[surv.opt2]) opt2[surv.opt2] += 1;
        else opt2[surv.opt2] = 1;
    }

    let sortable1 = [];
    for (let o in opt1) {
        sortable1.push([o, opt1[o]]);
    }

    sortable1.sort((a, b) => {
        return a[1] - b[1];
    });

    let sortable2 = [];
    for (let o in opt2) {
        sortable2.push([o, opt2[o]]);
    }

    sortable2.sort((a, b) => {
        return a[1] - b[1];
    });

    return res.json({
        status: true,
        data: {
            opt1: sortable1,
            opt2: sortable2
        }
    });

}

module.exports = results;