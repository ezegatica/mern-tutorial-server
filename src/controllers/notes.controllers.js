const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find(); 
    res.json(notes)
} 

notesCtrl.createNote = async (req, res) => {
    const {title, content, date, author} = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    })
    await newNote.save()
    res.json({message: 'Nota creada!'})
}

notesCtrl.getNote = async (req, res) => {
    const id = req.params.id
    const Nota = await Note.findById(id)
    res.json(Nota)
};

notesCtrl.deleteNote = async (req, res) => {
    const id = req.params.id
    await Note.findOneAndDelete(id)
    res.json({message: 'Nota eliminada!'});
}

notesCtrl.updateNote = async (req, res) => {
    const id = req.params.id
    const { title, content, author } = req.body
    await Note.findOneAndUpdate(id, {
        title: title,
        content: content,
        author: author
    })
    res.json({message: 'Nota actualizada!', id: req.params.id});
}


module.exports = notesCtrl; 