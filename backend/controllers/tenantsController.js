const Tenant = require('../models/Tenant');

const getTenants = async (req, res) => {
    // TODO: validation of req.body
    const { flatId } = req.body;
    try {
        const tenants = await Tenant.find({ flatId }, (err) => {
            if (err) console.log(err);
            // TODO: handle if error
            return err;
        });
        return res.status(200).send(tenants);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong!');
    }
};

const createTenant = async (req, res) => {
    // TODO: validation of req.body
    try {
        const { flatId, name, avatar, gender, age } = req.body;

        const tenant = new Tenant({
            flatId,
            name,
            avatar,
            gender,
            age
        });
        const savedtenant = await tenant.save();

        return res.status(201).send(savedtenant);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong!');
    }
};

const updateTenant = async (req, res) => {
    // TODO: validation of req.body
    try {
        const { tenantId, name, avatar, gender, age } = req.body;

        let tenant = await Tenant.findOne({ _id: tenantId }, (err) => {
            if (err) console.log(err);
            // TODO: handle if error
            return err;
        });
        tenant.name = name;
        tenant.avatar = avatar;
        tenant.gender = gender;
        tenant.age = age;

        const savedtenant = await tenant.save();

        return res.status(200).send(savedtenant);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong!');
    }
};

const deleteTenant = async (req, res) => {
    // TODO: validation of req.body
    try {
        const { tenantId } = req.body;

        // TODO: check if tenant exists
        await Tenant.findOneAndDelete({ _id: tenantId }, (err) => {
            if (err) console.log(err);
            // TODO: handle if error
            return err;
        });

        return res.status(200).send('Deleted successfully!');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong!');
    }
};

module.exports = { getTenants, createTenant, updateTenant, deleteTenant };
