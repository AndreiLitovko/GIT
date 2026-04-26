import api from "@/api";

export async function getBlogs(page, category = "") {
  try {
    const params = new URLSearchParams({ page: String(page) });

    if (category) {
      params.set("category", category);
    }

    const response = await api.get(`blog_list?${params.toString()}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getBlog(slug) {
  try {
    const response = await api.get(`blogs/${slug}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function registerUser(data) {
  try {
    const response = await api.post("register_user/", data);
    return response.data;
  } catch (err) {
    console.log(err);
    if (err.status == 400) {
      throw new Error("Username already exists");
    }
    throw new Error(err);
  }
}

export async function signin(data) {
  try {
    const response = await api.post("token/", data);
    return response.data;
  } catch (err) {
    if (err.status === 401) {
      throw new Error("Invalid Credentials");
    }

    throw new Error(err);
  }
}

export async function getUsername() {
  try {
    const response = await api.get("get_username");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function createBlog(data) {
  try {
    const response = await api.post("create_blog/", data);
    return response.data;
  } catch (err) {
    if (err.response?.data) {
      const errors = err.response.data;
      const firstError = Object.values(errors)[0];
      throw new Error(Array.isArray(firstError) ? firstError[0] : firstError);
    }
    throw new Error(err.message);
  }
}

export async function updateBlog(data, id) {
  try {
    const response = await api.put(`update_blog/${id}/`, data);
    return response.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response?.data?.message || "Failed to update blog");
    }

    throw new Error(err.message);
  }
}

export async function deleteBlog(id) {
  try {
    const response = await api.post(`delete_blog/${id}/`);
    return response.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response?.data?.message || "Failed to delete blog");
    }

    throw new Error(err.message);
  }
}

export async function getAuthors() {
  try {
    const response = await api.get("authors/");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getUserInfo(username) {
  try {
    const response = await api.get(`get_userinfo/${username}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateProfile(data) {
  try {
    const response = await api.put(`update_user/`, data);
    return response.data;
  } catch (err) {
    console.log(err)
    if (err.response) {
      throw new Error(
        err?.response?.data.username[0] || "Failed to update profile"
      );
    }

    throw new Error(err.message);
  }
}

export async function getUsersCount() {
  try {
    const response = await api.get("users_count/");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getActiveUsersCount() {
  try {
    const response = await api.get("active_users_count/");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
