import axios from "axios";

export const getAllTasks = async () => {
  try {
    const res = await axios.get(
      `https://momentum.redberryinternship.ge/api/tasks`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
