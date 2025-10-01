export function getAllnotes(req, res) {
    res.status(200).send("You just fetched the notes");
}

export function createNote(req, res) {
    res.status(200).send("You just create a note");
}

export function updateNote(req, res) {
    res.status(200).send("You just updated a note");
}

export function deletNote(req, res) {
    res.status(200).send("You just deleted a note");
}