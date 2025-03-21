import axios from "axios";

export const createNewComment = async (task_id, comment, parent_id) => {
  try {
    const res = await axios.post(
      `https://momentum.redberryinternship.ge/api/tasks/${task_id}/comments`,
      {
        text: comment,
        parent_id: parent_id = null,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error)
  }
};
