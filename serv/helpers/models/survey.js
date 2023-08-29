const SurveyModel = (DataTypes) => {
    return {
        user_ip: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        opt1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        opt2: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
};

module.exports = SurveyModel;