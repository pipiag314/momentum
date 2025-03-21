import axios from "axios";


export const changeTaskStatus = async (task_id, status_id) => {
    try {
        const res = await axios.put(`https://momentum.redberryinternship.ge/api/tasks/${task_id}`, {
            status_id: status_id
        }, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
        } )
        return res.data;
    } catch (error) {
        console.log(error);
    }
}