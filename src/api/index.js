import axios from "axios";

export const getAllCategories = async () => {
  const data = await axios.get(
    "http://expensetracker.rasul8215.repl.co/categories"
  );
  console.log(data);
};
