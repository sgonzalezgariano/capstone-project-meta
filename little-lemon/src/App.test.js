import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
})

test("User is able to submit the form", () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);


  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
});