const db = require('./database');

const Query = {
    users: () => db.users.list(),
    user: (root, { id }) => db.users.get(id),
    tweets: (root, { userId, last }) => {
        const tweets = db.tweets.list().filter(tweet => tweet.userId == userId);
        return last ? tweets.slice(-last) : tweets;
    }
};

const User = {
    followers: (user) => {
        const followersIds = db.users.get(user.id).followers;
        const followers = [];
        for (id of followersIds) {
            followers.push(db.users.get(id));
        }
        return followers;
    }
}

module.exports = { Query, User };