import axios from "axios";

export const getPriorities = async () => {
  try {
    const res = await axios.get(
      "https://momentum.redberryinternship.ge/api/priorities",
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
