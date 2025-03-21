import axios from "axios";

export const getStatuses = async () => {
  try {
    const res = await axios.get(
      "https://momentum.redberryinternship.ge/api/statuses",
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
