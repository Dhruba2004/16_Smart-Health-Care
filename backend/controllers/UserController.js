import User from "../models/UserSchema.js";
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete the user" });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({ success: true, message: "User found",data:user});
    data;
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete the user" });
  }
};


export const getAllUser = async (req, res) => {
try {
      const users = await User.findById({});
      res.status(200).json({ success: true, message: "User found",data:users});
      data;
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Not found" });
    }
  };
  