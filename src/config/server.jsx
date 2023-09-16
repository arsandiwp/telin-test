import { createServer } from "miragejs";
import Balance from "../assets/image/balance.png";
import Income from "../assets/image/income.png";
import Expe from "../assets/image/expenses.png";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transaction-history", () => {
      return {
        history: [
          {
            id: 1,
            date: "16 Sep 2023",
            description: "Cash Withdrawal",
            amount: 20.001,
            type: "pengeluaran",
          },
          {
            id: 2,
            date: "16 Sep 2023",
            description: "Landing Page project",
            amount: 20.129,
            type: "pemasukanan",
          },
          {
            id: 3,
            date: "18 Sep 2023",
            description: "Mobile App project",
            amount: 20.129,
            type: "pemasukanan",
          },
          {
            id: 4,
            date: "19 Sep 2023",
            description: "Desktop App project",
            amount: 20.129,
            type: "pemasukanan",
          },
        ],
      };
    });

    this.get("/all-expenses", () => {
      return {
        expenses: [
          {
            id: 1,
            type: "Balance",
            month: "Septemer 2023",
            amount: 20.129,
            image: Balance,
          },
          {
            id: 2,
            type: "Income",
            month: "Septemer 2023",
            amount: 60.129,
            image: Income,
          },
          {
            id: 3,
            type: "Expenses",
            month: "Septemer 2023",
            amount: 20.001,
            image: Expe,
          },
        ],
      };
    });
  },
});
