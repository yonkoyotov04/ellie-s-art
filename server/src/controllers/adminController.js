import { Router } from "express";
import jwt from 'jsonwebtoken';
import adminService from "../services/adminService.js";
import { getErrorMessage } from "../utils/errorUtil.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { generateAuthToken } from "../utils/tokenUtils.js";

const adminController = Router();

adminController.post('/register', isGuest, async (req, res) => {
    let adminData = req.body;

    adminData['firstName'] = adminData.firstName.trim();
    adminData['lastName'] = adminData.lastName.trim();
    adminData['email'] = adminData.email.trim();
    adminData['password'] = adminData.password.trim();
    adminData['rePassword'] = adminData.rePassword.trim();
    adminData['phone'] = adminData.phone.trim();

    try {
        const {admin, refreshToken} = await adminService.register(adminData);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            maxAge: 14 * 24 * 60 * 60 * 1000
        });

        res.status(201).json(admin ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

adminController.post('/login', isGuest, async (req, res) => {
    let { email, password } = req.body;

    email = email.trim();
    password = password.trim();

    try {
        const {admin, refreshToken} = await adminService.login(email, password);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            maxAge: 14 * 24 * 60 * 60 * 1000
        });

        res.status(201).json(admin ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

adminController.get('/logout', async (req, res) => {
    res.clearCookie('refreshToken');
    res.sendStatus(204);
})

adminController.get('/refresh', async (req, res) => {
    const token = req.cookies('refreshToken');

    console.log(`Refresh Token: ${token}`)

    if (!token) {
        return res.sendStatus(401);
    }

    const decodedToken = jwt.verify(token, process.env.REFRESH_JWT_SECRET);
    const newToken = generateAuthToken(decodedToken);

    res.status(201).json({accessToken: newToken});
})

adminController.get('/:adminId', isAuth, async (req, res) => {
    const adminId = req.params.adminId;
    const adminData = await adminService.getadminData(adminId);

    res.status(200).json(adminData ?? {});
});

adminController.put('/adminId', isAuth, async (req, res) => {
    const adminId = req.params.adminId;
    const adminData = await adminService.getadminData(adminId);
    let newadminData = req.body;

    newadminData['firstName'] = newData.firstName.trim();
    newadminData['lastName'] = newData.lastName.trim();
    newadminData['email'] = newData.email.trim();
    newadminData['phone'] = newData.phone.trim();

    try {
        const editedAdmin = await adminService.editProile(adminId, {
            password: adminData.password,
            ...newAdminData
        });

        res.status(201).json(editedAdmin ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

adminController.put('/password/:adminId', isAuth, async (req, res) => {
    const adminId = req.params.adminId;
    let newPasswordData = req.body;

    const currentPassword = newPasswordData.currentPassword.trim();
    const newPassword = newPasswordData.newPassword.trim();
    const repeatNewPassword = newPasswordData.repeatNewPassword.trim();

    try {
        await adminService.changePassword(adminId, currentPassword, newPassword, repeatNewPassword);
        res.status(201).end();
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

adminController.delete('/:adminId', isAuth, async (req, res) => {
    const adminId = req.params.adminId;

    try {
        await adminService.deleteProfile(adminId);
        res.status(200).json();
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

export default adminController;