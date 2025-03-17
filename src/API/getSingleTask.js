import axios from "axios";

export const getSingleTask = async (id) => {
    try {
        const task = await axios.get(`https://momentum.redberryinternship.ge/api/tasks/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
            },
        });
        return task;
    } catch (error) {
        console.log(error)
    }
}