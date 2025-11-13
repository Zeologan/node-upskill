//@desc Get all Contact
//@route Get /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
};

//@desc Create all Contact
//@route post /api/contacts
//@access public

const createContact = (req, res) => {
    console.log("request body is : ", req.body);
  res.status(200).json({ message: "Create Contacts" });
};

//@desc Get Contact
//@route Get /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contacts for ${req.params.id}` });
};

//@desc Update Contact
//@route Put /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contacts for ${req.params.id}` });
};

//@desc Delete Contact
//@route Delete /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
};

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
};
