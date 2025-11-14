const asyncHandler = require("express-async-handler");
//@desc Get all Contact
//@route Get /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
});

//@desc Create all Contact
//@route post /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("request body is : ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All field are Mandatory...");
  }
  res.status(200).json({ message: "Create Contacts" });
});

//@desc Get Contact
//@route Get /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contacts for ${req.params.id}` });
});

//@desc Update Contact
//@route Put /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contacts for ${req.params.id}` });
});

//@desc Delete Contact
//@route Delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
