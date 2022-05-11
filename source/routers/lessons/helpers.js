export const getLessons = (req, res) => {
    try {
        res.status(200).json({ data: [] });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const createLesson = (req, res) => {
    try {
        res.status(200).json({ hash: '' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};