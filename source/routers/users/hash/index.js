export const userByHash = (req, res) => {
    try {
        res.status(200).json({ data: {} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const userUpdateByHash = (req, res) => {
    try {
        res.status(200).json({ hash: '' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const userDeleteByHash = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};