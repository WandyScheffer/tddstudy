const { User } = require('../models');

module.exports = {
    createUser: async (userData) => {
        try {
            const userCreated = await User.create(userData);
            return userCreated;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    findUser: (userId) => {},
};