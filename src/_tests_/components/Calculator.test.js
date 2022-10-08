import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Calculator } from "../../components/calculator/Calculator";

test("loads and displays title", () => {
  render(<Calculator />);
  const titleElement = screen.getByTestId(/calculator/i);
  expect(titleElement).toBeInTheDocument();
});

test("it renders all the numbers in the calculator", () => {
  render(<Calculator />);
  const numbersList = screen.getAllByRole("definition", {
    value: /numbers/i,
  });
  expect(numbersList.length).toBe(10);
});

test("number should be displayed when clicked on", () => {
  render(<Calculator />);
  const numberEl = screen.getByTestId(/2/i);
  const displayEl = screen.getByTestId(/display/i);
  userEvent.click(numberEl);
  expect(displayEl).toHaveTextContent(/2/i);
});

test("two numbers should be added when the + sign is clicked on", () => {
  render(<Calculator />);
  const firstNum = screen.getByTestId(/1/i);
  const secondNum = screen.getByTestId(/2/i);
  const signEl = screen.getByTestId("+");
  const calculateEl = screen.getByTestId(/calculate/i);
  const displayEl = screen.getByTestId(/display/i);
  userEvent.click(firstNum);
  userEvent.click(signEl);
  userEvent.click(secondNum);
  userEvent.click(calculateEl);
  expect(displayEl).toHaveTextContent(/3/i);
});

test("two numbers should be subtracted when the - sign is clicked on", () => {
  render(<Calculator />);
  const firstNum = screen.getByTestId(/8/i);
  const secondNum = screen.getByTestId(/2/i);
  const signEl = screen.getByTestId("-");
  const calculateEl = screen.getByTestId(/calculate/i);
  const displayEl = screen.getByTestId(/display/i);
  userEvent.click(firstNum);
  userEvent.click(signEl);
  userEvent.click(secondNum);
  userEvent.click(calculateEl);
  expect(displayEl).toHaveTextContent(/6/i);
});

test("two numbers should be divided when the / sign is clicked on", () => {
  render(<Calculator />);
  const firstNum = screen.getByTestId(/6/i);
  const secondNum = screen.getByTestId(/2/i);
  const signEl = screen.getByTestId("/");
  const calculateEl = screen.getByTestId(/calculate/i);
  const displayEl = screen.getByTestId(/display/i);
  userEvent.click(firstNum);
  userEvent.click(signEl);
  userEvent.click(secondNum);
  userEvent.click(calculateEl);
  expect(displayEl).toHaveTextContent(/3/i);
});

test("two numbers should be divided when the X sign is clicked on", () => {
  render(<Calculator />);
  const firstNum = screen.getByTestId(/5/i);
  const secondNum = screen.getByTestId(/7/i);
  const signEl = screen.getByTestId("X");
  const calculateEl = screen.getByTestId(/calculate/i);
  const displayEl = screen.getByTestId(/display/i);
  userEvent.click(firstNum);
  userEvent.click(signEl);
  userEvent.click(secondNum);
  userEvent.click(calculateEl);
  expect(displayEl).toHaveTextContent(/35/i);
});

test("0 output when AC is clicked on", () => {
  render(<Calculator />);
  const signEl = screen.getByTestId(/ac/i);
  const displayEl = screen.getByTestId(/display/i);
  userEvent.click(signEl);
  expect(displayEl).toHaveTextContent(/0/i);
});

test("multiple numbers are added together when they are clicked on", () => {
  render(<Calculator />);
  const firstNum = screen.getByTestId(/1/i);
  const secondNum = screen.getByTestId(/2/i);
  const thirdNum = screen.getByTestId(/3/i);
  userEvent.click(firstNum);
  userEvent.click(secondNum);
  userEvent.click(thirdNum);
  const displayEl = screen.getByTestId(/display/i);
  expect(displayEl).toHaveTextContent(/123/i);
});
