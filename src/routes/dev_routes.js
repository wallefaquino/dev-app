const { Router } = require('express');
const DevService = require('../services/dev_services')

const routes = Router();
const service = new DevService();

routes.post('/devs', async (req, res) => {

    try{
        const devs = await service.saveDev(req.body);

        return res.status(201).json(devs);
    }catch(error){
        res.status(400).json({error: true, error:error});
    }
});

routes.get('/devs', async (req, res) => {
    try{
        const dev = await service.listDevs();

        return res.json(dev);
    }catch(error){
        res.status(400).json({error: true, error:error});
    }
});

routes.get('/devs/:github_username', async (req, res) => {
    try{
        const dev = await service.listDevsByGithubUsername(req.params.github_username);

        return res.json(dev);
    }catch(error){
        res.status(400).json({error: true, error:error});
    }
});

module.exports = routes;