import Recordatorio from "../models/recordatorio.model.js";

export const getRecordatorios = async (req, res) => {
    const recordatorios = await Recordatorio.find({
        user: req.user.id
    }).populate('user')
    res.json(recordatorios);
};

export const createRecordatorio = async (req, res) => {

    try {
        const { title, description, } = req.body;

        console.log(req.user)

        const newRecordatorio = new Recordatorio({
            title,
            description,
            user: req.user.id
        });
        const savedRecordatorio = await newRecordatorio.save();
        res.json(savedRecordatorio);
    } catch (error) {
        return res.status(500).json({ message: "algo salio mal" })
    }
};

export const getRecordatorio = async (req, res) => {
    const recordatorio = await Recordatorio.findById(req.params.id).populate('user');
    if (!recordatorio) return res.status(404).json({ message: "No se encontro recordatorio" });
    res.json(recordatorio);
};

export const deleteRecordatorio = async (req, res) => {
    const recordatorio = await Recordatorio.findByIdAndDelete(req.params.id);
    if (!recordatorio) return res.status(404).json({ message: 'No se encontro recordatorio' });
    return res.sendStatus(204);
};

export const updateRecordatorio = async (req, res) => {
    const recordatorio = await Recordatorio.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!recordatorio) return res.status(404).json({ message: 'No se encontro recordatorio' });
    res.json(recordatorio);
};