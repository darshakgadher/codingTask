const schema = require("../utils/validateBody");
const jwt = require("jsonwebtoken");
const {
  getUserById: getUserByIdService,
  getUserByEmail: getUserByEmailService,
  updateUserDetailsById: updateUserDetailsByIdService,
} = require("../services/user");

const getToken = async (req, resp) => {
  const { email } = req.body;
  console.log("Calling getToken with body:", email);
  if (email) {
    const user = await getUserByEmailService(email);
    console.log("process.env.JSON_SECRET: ", process.env.PORT);
    if (user) {
      const token = jwt.sign({ id: user?.id }, process.env.JSON_SECRET, {
        expiresIn: "24h",
      });
      return resp.status(200).send({ token });
    }
    return resp.status(401).send("User Not Found");
  }
  return resp.status(401).send("invalid request");
};

const updateUser = async (req, resp) => {
  const { id } = req.params;
  const updatingId = req?.user?.id.toString();
  const body = req.body;
  const admin = "admin";
  console.log("Calling updateUser with body:", body);
  if (id) {
    const userData = await getUserByIdService(id);
    const updatingUser = await getUserByIdService(updatingId);
    if (userData) {
      if(updatingUser?.userType === admin) {
        if(body?.email){
          const existUser = await getUserByEmailService(body?.email);
          if (existUser) {
            return resp.status(401).send("Email Alreday Exist");
          }
        }
        const valid = schema.validate({
          name: body?.name,
          phone: body?.phone,
          email: body?.email,
          dob: body?.dob,
          address: body?.address,
          gender: body?.gender,
        });
        if (valid?.error) {
          return resp.status(401).send("Please enter valid details");
        }
        const payload = {
          email: body?.email,
          dob: body?.dob,
          name: body?.name,
          address: body?.address,
          gender: body?.gender,
          phone_number: body?.phone,
        };
        await updateUserDetailsByIdService(payload, id);
        return resp.status(200).send("Updated Successfully");

      } else {
        if(body?.email || body?.phone){
          return resp.status(401).send("You don't have access to perform this action");
        }
        if (id === updatingId) {
          const valid = schema.validate({
            name: body?.name,
            dob: body?.dob,
            address: body?.address,
            gender: body?.gender,
          });
          if (valid?.error) {
            return resp.status(401).send("Please enter valid details");
          }
          const payload = {
            dob: body?.dob,
            name: body?.name,
            address: body?.address,
            gender: body?.gender,
          };
          await updateUserDetailsByIdService(payload, id);
          return resp.status(200).send("Updated Successfully");
        }
        return resp
          .status(401)
          .send("You don't have access to perform this action");
      }
    }
    return resp.status(401).send("User Not Found");
  }
  return resp.status(401).send("Invalid request");
};

module.exports = { updateUser, getToken };