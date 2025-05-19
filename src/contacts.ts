import { Router, RequestHandler } from "express";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

// In-memory contact list
const contacts: Contact[] = [];

// GET /contacts/:id - Get a contact by ID
const getContactById: RequestHandler = (req, res) => {
  const contact = contacts.find((c) => c.id === req.params.id);
  if (!contact) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(contact);
};

// ✅ GET /contacts - Return all contacts
const getAllContacts: RequestHandler = (req, res) =>{
    res.json(contacts)
}

const createContact: RequestHandler = (req, res) =>{
    const {id, name, email, phone} = req.body;
    if(!id || !name || !email || !phone){
        res.status(400).json({message: "Missing required fields"})
        return;
    }

    const existsContanct = contacts.find((contact) => contact.id === id);
    if(existsContanct){
        res.status(400).json({message: "Contact already exists"})
        return;
    }

    const newContact: Contact = {id, name, email, phone};
    contacts.push(newContact);
    res.status(201).json(newContact);
}

const updateContact: RequestHandler = (req, res) => {
    const {name, email, phone} = req.body;
    const contact = contacts.find((contact) => contact.id === req.params.id);
    if(!contact){
        res.status(404).json({message: "Contact not found"})
        return;
    }

    if(name) contact.name = name;
    if(email) contact.email = email;
    if(phone) contact.phone = phone;

    res.json(contact);

}

const deleteContact: RequestHandler = (req, res) => {
    const index = contacts.findIndex((contact) => contact.id === req.params.id);
    if(index === -1){
        res.status(404).json({message: "Contact not found"})
        return;
    }

    contacts.splice(index, 1);
    res.status(204).send();
}

const router = Router();

// Grouping routes
router
  .route("/")
  .get(getAllContacts)
  .post(createContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

export default router;