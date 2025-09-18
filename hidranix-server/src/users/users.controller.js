import {
  getUsers,
  getUserById,
  createUser,
  updateUserServiceStatus,
  findUserStatusById,
  getUserByClerkId,
} from "./users.service.js";

export async function getAllUsersController(req, res) {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting users" });
  }
}

export async function getUsersController(req, res) {
  try {
    const limit = req.query.limit || 10; // Valor por defecto de 10
    const page = req.query.page || 1;   // Valor por defecto de la primera página
    const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10); // Calcular el offset

    const { count, rows: users } = await getUsers(limit, offset);

    res.json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page, 10),
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting users with pagination" });
  }
}


export async function getUserByIdController(req, res) {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting user" });
  }
}

export async function getUserByClerkIdController(req, res) {
  try {
    const { clerkId } = req.params;
    const user = await getUserByClerkId(clerkId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting user" });
  }
}


export async function createUserController(req, res) {
  try {
    const user = await createUser(req.body);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user" });
  }
}

export async function updateUserServiceStatusController(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  const result = await updateUserServiceStatus(id, status);

  if (result.status === 200) {
    res.json(result.user);
  } else {
    res.status(result.status).json({ error: result.message });
  }
}

export async function getUserStatus(req, res) {
  const { id } = req.params;

  try {
    const user = await findUserStatusById(id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    return res.json({ status: user.servicestatus });
  } catch (error) {
    console.error("Error en getUserStatus:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}