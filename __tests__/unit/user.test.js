const { User } = require('../../models');

describe('User', () => {
    it('should build a user', () => {

        const user = User.build({
            name: 'wandy rosa',
            email: 'wandy.rosa@test.com',
        });
        
        expect(user.dataValues).toHaveProperty("id");
        expect(user.dataValues.name).toBe("wandy rosa");
        expect(user.dataValues.email).toBe("wandy.rosa@test.com");
    });
});