const { sequelize } = require('../../models');

module.exports = async () => {
    await Promise.all(Object.keys(sequelize.models).map(key => {
        return sequelize.models[key]
            .destroy({
                truncate: true,
                force: true
            });
    }));
};