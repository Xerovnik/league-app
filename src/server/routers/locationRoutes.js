// import express from 'express';
// import locationModel from '../models/LocationModel.js'; // Import the Location model (ensure the path and casing match your file)

// const router = express.Router();

// // @route   POST /api/locations
// // @desc    Create a new location
// // @access  Public
// router.post('/api/locations', async (req, res) => {
//   try {
//     const {
//       description,
//       locationName,
//       cords, // If this is meant to represent coordinates, consider renaming it to "coords"
//       userPost,
//       userId,
//       dateOfEncounter,
//       stars,
//     } = req.body;

//     // Create a new Location document
//     const newLocation = new locationModel({
//       description,
//       locationName,
//       cords,
//       userPost,
//       userId,
//       dateOfEncounter,
//       stars,
//     });

//     // Save the new document to the database
//     const savedLocation = await newLocation.save();

//     // Return the newly created document
//     res.status(201).json(savedLocation);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server Error');
//   }
// });

// // Export the router for use in other files
// export default router;




import express from 'express';
import locationsModel from '../models/locationsModel.js'; // Use a consistent import name to match the file name

const router = express.Router();

// @route   POST /api/locations
// @desc    Create a new location
// @access  Public
router.post('/', async (req, res) => {  // Base path is defined in app.js, so just use '/'
  try {
    const {
      description,
      locationName,
      coords, // Updated for clarity if this represents coordinates
      userPost,
      userId,
      dateOfEncounter,
      stars,
    } = req.body;

    // Create a new Location document using the imported model
    const newLocation = new locationsModel({
      description,
      locationName,
      coords,
      userPost,
      userId,
      dateOfEncounter,
      stars,
    });

    // Save the new document to the database
    const savedLocation = await newLocation.save();

    // Return the newly created document
    res.status(201).json(savedLocation);
  } catch (error) {
    console.error(`Error creating location: ${error.message}`);
    res.status(500).send('Server Error');
  }
});

// Export the router for use in other files
export default router;
