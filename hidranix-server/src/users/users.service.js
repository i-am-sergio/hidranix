import User from './users.model.js';

export async function getAllUsers() {
  return User.findAll();
}

export async function getUsers(limit = 10, offset = 0) {
  return User.findAndCountAll({
    limit: parseInt(limit, 10),
    offset: parseInt(offset, 10),
  });
}


export async function getUserById(userId) {
  return User.findByPk(userId);
}

export async function getUserByClerkId(clerkId) {
  const user = await User.findOne({
    where: { clerkId },
  });
  if (!user) {
    console.log('--- User not found with clerkId:', clerkId);
    return null;
  }
  return user; 
}

export async function createUser(userData) {
  return User.create(userData);
}

export async function updateUserServiceStatus(userId, serviceStatus) {
  const user = await User.findByPk(userId);
  if (!user) {
    return { status: 404, message: 'User not found' };
  }
  user.servicestatus = serviceStatus;
  await user.save();
  return { status: 200, user };
}

export async function findUserStatusById (id) {
  const user = await User.findByPk(id, {
    attributes: ['servicestatus']
  });

  return user;  
}