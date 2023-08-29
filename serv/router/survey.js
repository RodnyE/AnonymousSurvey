const config = require("../../config.js");
const Survey = require(config.SERV + "/helpers/db.js");

const survey = async (req, res) => {
    if (!req.body) return res.json({ status: false, data: { message: "NO_DATA" } });
    const ip = req.socket.remoteAddress;
    const already = await Survey.findOne({
        where: {
            user_ip: ip
        }
    });
    if (already) return res.json({ status: false, data: { message: "ALREADY_DONE", survey: { name : already.name, opt1: already.opt1, opt2: already.opt2 } } })
    let opt1, opt2;
    try {
        const body = req.body;
        name = body.name;
        opt1 = body.opt1;
        opt2 = body.opt2;
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

    const nsurvey = await Survey.create({
        user_ip: ip,
        name: name,
        opt1: opt1,
        opt2: opt2
    });

    if(nsurvey)  return res.json({
        status: true,
        data: {
            message: "SUCCESS"
        }
    });
    else {
        return res.json({
            status: false,
            data: {
                message: "WRONG_DATA"
            }
        });
    }
}

module.exports = survey;