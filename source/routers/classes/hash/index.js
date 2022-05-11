export const getClassByHash = (req, res) => {
    try {
        res.status(200).json({ data: {} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateClassByHash = (req, res) => {
    try {
        res.status(200).json({ hash: '' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteClassByHash = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};