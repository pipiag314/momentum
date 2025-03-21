import axios from "axios";

export const getAllComments = async (task_id) => {
    try {
        const res = await axios.get(`https://momentum.redberryinternship.ge/api/tasks/${task_id}/comments`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
        });

        return res.data;

    } catch (error) {
        console.log(error);
    }
}