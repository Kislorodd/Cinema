const userService = require('../services/UserService');
const UserConfig = require('../config/ModelsConfig.json');


class UserController {
    async GetAll(req, res) {
        res.send(await userService.GetAll());
    }

    async GetCurrentUser(req, res) {
        res.send(await userService.GetDetailById(req.user.id));
    }

    async UpdateCurrentUser(req, res) {
        let userId = req.user.id;

        let user = {
            login: req.body.login,
            password: req.body.password
        };

        let userInfo = {
            avatar: req.body.avatar,
            firstName: req.body.firstName,
            birthday: req.body.birthday,
            email: req.body.email,
            phone: req.body.phone
        };

        res.send(await userService.EditCurrentUser(userId, user, userInfo));
    }

    async GetById(req, res) {
        res.send(await userService.GetDetailById(req.params.id))
    }

    async EditById(req, res) {
        let userId = req.params.id;

        let user = {
            login: req.body.login,
            password: req.body.password
        };

        let userInfo = {
            avatar: req.body.avatar,
            firstName: req.body.firstName,
            birthday: req.body.birthday,
            email: req.body.email,
            phone: req.body.phone
        };

        res.send(await userService.EditById(userId, user, userInfo));
    }

    async DeleteById(req, res) {
        await userService.DeleteById(req.params.id);
        res.send('Ok');
    }

    async Register(req, res) {
        let user = {
            login: req.body.login,
            password: req.body.password
        };

        let userInfo = {
            avatar: req.body.avatar ?? null,
            firstName: req.body.firstName,
            birthday: req.body.birthday,
            email: req.body.email,
            phone: req.body.phone ?? null
        };

        res.send(await userService.Register(user, userInfo))
    }

    async Login(req, res) {
        let user = {
            login: req.body.login,
            password: req.body.password
        }

        res.send(await userService.Login(user));
    }

    async SetAvatarByCurrentUser(req, res) {
        res.send(await userService.SetAvatarById(req.user.id, req.file));
    }

    async GetAvatarByCurrentUser(req, res) {
        res.sendFile(await userService.GetAvatarById(req.user.id));
    }
}

module.exports = new UserController();
