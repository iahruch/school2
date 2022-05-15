export const get = (req, res) => {
    try {
        res.status(200).json({
            data: [{
                name: 'John Doe',
                email: 'jdoe@example.com',
                phone: '+380662332377',
                password: 'ab12345Cd',
                sex: 'm',
                role: 'newbie',
            }, ],
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = (req, res) => {
    try {
        res.status(201).json({ hash: '' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};