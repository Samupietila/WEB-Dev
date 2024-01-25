const pets = [];

let nextPetId = 1;

function getNewPetId() {
  const newPetId = nextPetId;
  nextPetId++;
  return newPetId;
}

//  HANDLERS

// GET /pets
const getAllPets = (req, res) => {
  console.log(pets);
  res.json(pets);
};

// POST /pets
const createPet = (req, res) => {
  const name = req.body.name;
  const newPet = {
    petId: getNewPetId(),
    name,
  };
  pets.push(newPet);
  res.json(newPet);
};

// GET /pets/:petId
const getPetById = (req, res) => {
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.petId == petId);
  res.json(pet);
};

// PUT /pets/:petId
const updatePet = (req, res) => {
  const name = req.body.name;
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.petId == petId);
  console.log(pet)
  pet.name = name;
  res.json(pet);
};

// DELETE /pets/:petId
const deletePet = (req, res) => {
  const petId = req.params.petId;
  const petIdx = pets.findIndex((pet) => pet.petId == petId);
  pets.splice(petIdx, 1);
  res.json({ message: "success" });
};

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
};