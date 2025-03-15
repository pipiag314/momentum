export const getAllEmployees = async () => {
  try {
    const res = await fetch(
      "https://momentum.redberryinternship.ge/api/employees",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
