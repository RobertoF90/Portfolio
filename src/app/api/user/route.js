import connectDB from '../../../utils/database';
import UserModel from '../../../models/UserModel';
// api/user/

export const POST = async (req, { params }) => {
  const data = await req.json();
  const { username, password } = data.credentials;

  // should we encrypt password?
  try {
    await connectDB();

    const user = await UserModel.findOne({
      username: username,
      password: password,
    });

    if (user) {
      // if we want to pass in a message 'success' we probably need to change some stuff around, but should be okay
      return Response.json(user);
    } else {
      // agin, do we want to pass in another message 'error?' could be done, but seems redundant here.
      return Response.json({ message: 'User not found!' });
    }
  } catch (error) {
    console.log(error);
  }
};
