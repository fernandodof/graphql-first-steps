const db = require('./database');

const Query = {
    users: () => {
        return db.users.list();
    },
    user: (root, { id }) => db.users.get(id)
};

module.exports = { Query };