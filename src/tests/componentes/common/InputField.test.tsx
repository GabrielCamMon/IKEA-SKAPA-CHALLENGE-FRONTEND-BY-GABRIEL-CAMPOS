import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../../../components/common/InputField";

describe("InputField", () => {
  it("renders with email label ", () => {
    render(
      <InputField label="Email" value="" onChange={() => {}} type="email" />
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("calls onChange when input changes", () => {
    const handleChange = jest.fn();
    render(<InputField label="Name" value="" onChange={handleChange} />);
    const input = screen.getByLabelText("Name");
    fireEvent.change(input, { target: { value: "Gabriel" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("Gabriel");
  });

  it("shows password toggle when type is password and showToggle is true", () => {
    const { getByLabelText } = render(
      <InputField
        label="Password"
        value="123456"
        onChange={() => {}}
        type="password"
        showToggle
      />
    );

    const input = getByLabelText("Password") as HTMLInputElement;
    const toggleButton = screen.getByRole("button", { name: /show password/i });

    expect(input.type).toBe("password");
    expect(toggleButton).toBeInTheDocument();
  });

  it("toggles password visibility on toggle button click", () => {
    render(
      <InputField
        label="Password"
        value="secret"
        onChange={() => {}}
        type="password"
        showToggle
      />
    );

    const toggleButton = screen.getByRole("button", { name: /show password/i });
    const input = screen.getByLabelText("Password") as HTMLInputElement;

    expect(input.type).toBe("password");

    fireEvent.click(toggleButton);

    expect(input.type).toBe("text");

    fireEvent.click(toggleButton);

    expect(input.type).toBe("password");
  });

  it("shows error message when hasError is true", () => {
    render(
      <InputField
        label="Email"
        value="wrong"
        onChange={() => {}}
        hasError
        showValidation
        errorMessage="Invalid email"
      />
    );
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("shows success message when showSuccess is true and no error", () => {
    render(
      <InputField
        label="Username"
        value="gabriel"
        onChange={() => {}}
        showSuccess
        showValidation
        successMessage="Looks good!"
      />
    );
    expect(screen.getByText("Looks good!")).toBeInTheDocument();
  });

  it("shows info message when no error or success", () => {
    render(
      <InputField
        label="Name"
        value="G"
        onChange={() => {}}
        infoMessage="Please enter your full name"
        showValidation
      />
    );
    expect(screen.getByText("Please enter your full name")).toBeInTheDocument();
  });

  it("shows character count when maxLength is set", () => {
    render(
      <InputField
        label="Bio"
        value="Hello"
        onChange={() => {}}
        maxLength={100}
        showValidation
      />
    );
    expect(screen.getByText("5/100")).toBeInTheDocument();
  });

  it("applies disabled and required attributes correctly", () => {
    render(
      <InputField
        label="Username"
        value=""
        onChange={() => {}}
        disabled
        required
      />
    );
    const input = screen.getByLabelText("Username");
    expect(input).toBeDisabled();
    expect(input).toBeRequired();
  });

  it("should respect dir attribute for RTL languages", () => {
    const { container } = render(
      <InputField
        label="اسم"
        value=""
        onChange={() => {}}
        dir="rtl"
        showToggle
        type="password"
      />
    );

    const wrapper = container.querySelector('[dir="rtl"]');
    expect(wrapper).toBeInTheDocument();

    const toggleButton = container.querySelector(".input__toggle-password");
    expect(toggleButton).toHaveStyle("left: 12px");
    expect(toggleButton).toHaveStyle("right: auto");
  });

  it("should have proper accessibility attributes", () => {
    const { getByLabelText } = render(
      <InputField
        label="Username"
        value=""
        onChange={() => {}}
        required
        aria-required="true"
      />
    );

    const input = getByLabelText("Username");
    expect(input).toBeRequired();
    expect(input).toHaveAttribute("aria-required", "true");
  });
});
