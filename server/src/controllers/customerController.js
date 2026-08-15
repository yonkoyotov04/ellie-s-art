import { Router } from "express";
import jwt from 'jsonwebtoken';
import customerService from "../services/customerService.js";
import { getErrorMessage } from "../utils/errorUtil.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { generateAuthToken } from "../utils/tokenUtils.js";

const customerController = Router();

customerController.post('/register', isGuest, async (req, res) => {
    let customerData = req.body;

    customerData['firstName'] = customerData.firstName.trim();
    customerData['lastName'] = customerData.lastName.trim();
    customerData['email'] = customerData.email.trim();
    customerData['password'] = customerData.password.trim();
    customerData['rePassword'] = customerData.rePassword.trim();
    customerData['phone'] = customerData.phone.trim();

    try {
        const {customer, refreshToken} = await customerService.register(customerData);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            maxAge: 14 * 24 * 60 * 60 * 1000
        });

        res.status(201).json(customer ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

customerController.post('/login', isGuest, async (req, res) => {
    let { email, password } = req.body;

    email = email.trim();
    password = password.trim();

    try {
        const {customer, refreshToken} = await customerService.login(email, password);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            maxAge: 14 * 24 * 60 * 60 * 1000
        });

        res.status(201).json(customer ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

customerController.get('/logout', async (req, res) => {
    res.clearCookie('refreshToken');
    res.sendStatus(204);
})

customerController.get('/refresh', async (req, res) => {
    const token = req.cookies('refreshToken');

    console.log(`Refresh Token: ${token}`)

    if (!token) {
        return res.sendStatus(401);
    }

    const decodedToken = jwt.verify(token, process.env.REFRESH_JWT_SECRET);
    const newToken = generateAuthToken(decodedToken);

    res.status(201).json({accessToken: newToken});
})

customerController.get('/:customerId', isAuth, async (req, res) => {
    const customerId = req.params.customerId;
    const customerData = await customerService.getCustomerData(customerId);

    res.status(200).json(customerData ?? {});
});

customerController.put('/customerId', isAuth, async (req, res) => {
    const customerId = req.params.customerId;
    const customerData = await customerService.getCustomerData(customerId);
    let newCustomerData = req.body;

    newCustomerData['firstName'] = newData.firstName.trim();
    newCustomerData['lastName'] = newData.lastName.trim();
    newCustomerData['email'] = newData.email.trim();
    newCustomerData['phone'] = newData.phone.trim();

    try {
        const editedCustomer = await customerService.editProile(customerId, {
            password: customerData.password,
            ...newCustomerData
        });

        res.status(201).json(editedCustomer ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

customerController.put('/password/:customerId', isAuth, async (req, res) => {
    const customerId = req.params.customerId;
    let newPasswordData = req.body;

    const currentPassword = newPasswordData.currentPassword.trim();
    const newPassword = newPasswordData.newPassword.trim();
    const repeatNewPassword = newPasswordData.repeatNewPassword.trim();

    try {
        await customerService.changePassword(customerId, currentPassword, newPassword, repeatNewPassword);
        res.status(201).end();
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

customerController.delete('/:customerId', isAuth, async (req, res) => {
    const customerId = req.params.customerId;

    try {
        await customerService.deleteProfile(customerId);
        res.status(200).json();
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).json({message: errorMessage});
    }
});

export default customerController;