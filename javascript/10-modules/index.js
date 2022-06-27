import { sum, multiply } from "./controller.js";
import chalk from "chalk";

const res = multiply(sum(1, 2), sum(4, 5));

console.log(chalk.green(res));
