import axios from "axios";

export const getDepartments = async () => {
  try {
    const res = await axios.get(
      "https://momentum.redberryinternship.ge/api/departments",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
