import axios from "axios";

export const createNewTask = async (name, description, due_date, status_id, employee_id, priority_id) => {
    try {
        const res = await axios.post(`https://momentum.redberryinternship.ge/api/tasks`,
        {
            name: name,
            description: description,
            due_date: due_date,
            status_id, status_id,
            employee_id: employee_id,
            priority_id: priority_id
        }, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}