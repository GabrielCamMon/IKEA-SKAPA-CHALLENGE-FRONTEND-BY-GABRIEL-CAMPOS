import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DemoLoginPage from "../../pages/DemoLoginPage";

// Função auxiliar para renderizar com rota
const renderWithRouter = (initialEntries = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <DemoLoginPage />
    </MemoryRouter>
  );
};

describe("DemoLoginPage", () => {
  it("renders username and pin input fields", () => {
    renderWithRouter();

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Pin")).toBeInTheDocument();
  });

  it("renders correctly in RTL mode", () => {
    renderWithRouter(["/rtl"]);

    expect(screen.getByLabelText("اسم المستخدم")).toBeInTheDocument();
    expect(screen.getByLabelText("الرمز السري")).toBeInTheDocument();

    const container = screen.getByTestId("login-container");
    expect(container).toHaveAttribute("dir", "rtl");

    expect(screen.getByText("عرض حقل الإدخال")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "تسجيل الدخول" })
    ).toBeInTheDocument();
  });

  it("sets error when PIN is not numeric", () => {
    renderWithRouter();

    const pinInput = screen.getByLabelText("Pin");
    fireEvent.change(pinInput, { target: { value: "abc" } });

    expect(screen.getByText("Please enter only numbers")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("shows success message when PIN is numeric and >= 4 characters", () => {
    renderWithRouter();

    const pinInput = screen.getByLabelText("Pin");
    fireEvent.change(pinInput, { target: { value: "1234" } });

    expect(screen.getByText("Valid PIN")).toBeInTheDocument();
  });

  it("does not show error when PIN is empty", () => {
    renderWithRouter();

    const pinInput = screen.getByLabelText("Pin");
    fireEvent.change(pinInput, { target: { value: "" } });

    expect(
      screen.queryByText("Please enter only numbers")
    ).not.toBeInTheDocument();
  });

  it("title changes based on route (LTR vs RTL)", () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={["/"]}>
        <DemoLoginPage />
      </MemoryRouter>
    );
    expect(screen.getByText("InputField Demo")).toBeInTheDocument();

    rerender(
      <MemoryRouter initialEntries={["/rtl"]}>
        <DemoLoginPage />
      </MemoryRouter>
    );

    // Como `rerender` não atualiza o contexto do router, refazemos o render
    renderWithRouter(["/rtl"]);
    expect(screen.getByText("عرض حقل الإدخال")).toBeInTheDocument();
  });
});
