export const getVideoLesson = (req, res) => {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteVideoLesson = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};