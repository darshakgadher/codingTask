const schema = require("../utils/validateBody");
const {
  getUserById: getUserByIdService,
  getUserByEmail: getUserByEmailService,
  updateUserDetailsById: updateUserDetailsByIdService,
} = require("../services/user");

const updateUser = async (req, resp) => {
  const { id } = req.params;
  const body = req.body;
  console.log("Calling updateUser with body:", body);
  if (id) {
    const userData = await getUserByIdService(id);
    if (userData) {
      if (body?.updatedEmail || body?.updatedPhone) {
        const updatingUser = await getUserByEmailService(body?.email);
        if (updatingUser) {
          if (updatingUser?.userType === "admin") {
            const valid = schema.validate({
              name: body?.updatedName,
              phone: body?.updatedPhone,
              email: body?.updatedEmail,
              dob: body?.updatedDob,
              address: body?.updatedAddress,
              gender: body?.updatedGender,
            });
            if (valid?.error) {
              return resp.status(401).send("Please enter valid details");
            }
            const payload = {
              email: body?.updatedEmail,
              dob: body?.updatedDob,
              name: body?.updatedName,
              address: body?.updatedAddress,
              gender: body?.updatedGender,
              phone_number: body?.updatedPhone,
            };
            console.log(payload);
            await updateUserDetailsByIdService(payload, id);
            return resp.status(200).send("Updated Successfully");
          }
          return resp
            .status(402)
            .send("You don't have access to perform this action");
        }
        return resp.status(401).send("User Not Found");
      } else {
        const updatingUser = await getUserByEmailService(body?.email);
        if (updatingUser) {
          if (updatingUser?.email === userData?.email) {
            const valid = schema.validate({
              name: body?.updatedName,
              dob: body?.updatedDob,
              address: body?.updatedAddress,
              gender: body?.updatedGender,
            });
            if (valid?.error) {
              return resp.status(401).send("Please enter valid details");
            }
            const payload = {
              dob: body?.updatedDob,
              name: body?.updatedName,
              address: body?.updatedAddress,
              gender: body?.updatedGender,
            };
            await updateUserDetailsByIdService(payload, id);
            return resp.status(200).send("Updated Successfully");
          }
          return resp
            .status(401)
            .send("You don't have access to perform this action");
        }
        return resp.status(401).send("User Not Found");
      }
    }
    return resp.status(401).send("User Not Found");
  }
  return resp.status(401).send("Invalid request");
};

module.exports = updateUser;
