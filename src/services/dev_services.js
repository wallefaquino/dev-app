const axios = require('axios');
const Dev = require('../models/dev');

class DevService {

    async listDevs() {
        const devs = await Dev.find();

        return devs;
    };

    async listDevsByGithubUsername(github_username) {
        const dev = await Dev.findOne({'github_username' : github_username});

        return dev;
    };

    async saveDev(dev) {
        const { github_username, techs } = dev;

        const apiResponse = await axios.get(`https://api.github.com./users/${github_username}`);

        const { name = login, avatar_url, bio } = apiResponse.data;

        const techsArray = techs.split(',').map(tech => tech.trim());

        const dev =  await Dev.create({
            github_username: github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray
            });

            return dev;
    };
};

module.exports = DevService;
