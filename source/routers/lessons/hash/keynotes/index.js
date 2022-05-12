export const addKeynotesLesson = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getKeynotesLesson = (req, res) => {
    try {
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteKeynotesLesson = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};