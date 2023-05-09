import axios from "axios";

export const getAllCategories = async () => {
  const data = await axios.get(
    "https://expense-tracker1-beta.vercel.app/categories"
  );
  console.log(data);
};
