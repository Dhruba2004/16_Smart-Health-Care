import Doctor from "../models/DoctorSchema.js.js";
export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDoctor = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateDoctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Doctor deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete the doctor" });
  }
};

export const getDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id);
    res.status(200).json({ success: true, message: "Doctor found",data:doctor});
    data;
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete the doctor" });
  }
};


export const getAllDoctors = async (req, res) => {
try {
      const doctors = await Doctor.findById({});
      res.status(200).json({ success: true, message: "User found",data:doctors});
      data;
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Not found" });
    }
  };
  