import axios from "axios";

export const createNewEmployee = async (
  name,
  surname,
  avatar,
  department_id
) => {
  try {
    const res = await axios.post(
      "https://momentum.redberryinternship.ge/api/employees",
      {
        name: name,
        surname: surname,
        avatar: avatar,
        department_id: department_id,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.log(error)
  }
};
