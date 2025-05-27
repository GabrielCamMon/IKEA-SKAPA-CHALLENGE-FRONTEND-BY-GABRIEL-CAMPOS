import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InputField, {
  type InputFieldProps,
} from "../../components/common/InputField";

const meta: Meta<InputFieldProps> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label text for the input field",
      type: { name: "string", required: true },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
      type: { name: "string" },
    },
    value: {
      control: "text",
      description: "The current value of the input",
      type: { name: "string", required: true },
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "tel", "number"],
      description: "HTML input type",
      type: { name: "string" },
    },
    infoMessage: {
      control: "text",
      description:
        "Informational message shown when there’s no error or success",
    },
    errorMessage: {
      control: "text",
      description: "Error message shown when `hasError` is true",
    },
    successMessage: {
      control: "text",
      description: "Success message shown when `showSuccess` is true",
    },
    showToggle: {
      control: "boolean",
      description: "Whether to show password toggle (only for password type)",
    },
    showValidation: {
      control: "boolean",
      description: "Whether to show validation messages below the input",
    },
    hasError: {
      control: "boolean",
      description: "Whether the input is in an error state",
    },
    showSuccess: {
      control: "boolean",
      description: "Whether the input is in a success state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl", "auto"],
      description: "Text direction for RTL support",
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters allowed",
    },
    onChange: {
      action: "changed",
      description: "Callback function when value changes",
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

const Template = (args: InputFieldProps) => {
  const [value, setValue] = useState(args.value || "");

  return <InputField {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: Template,
  args: {
    label: "Username",
    placeholder: "Enter your username",
    value: "",
    type: "text",
    infoMessage: "This will be your public name",
  },
};

export const PasswordWithToggle: Story = {
  render: Template,
  args: {
    label: "Password",
    placeholder: "Enter your password",
    value: "",
    type: "password",
    showToggle: true,
    required: true,
    showValidation: true,
    infoMessage: "Use at least 8 characters",
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    label: "Email",
    value: "not-an-email",
    type: "email",
    showValidation: true,
    hasError: true,
    errorMessage: "Invalid email address",
  },
};

export const WithSuccess: Story = {
  render: Template,
  args: {
    label: "Phone",
    value: "+46123456789",
    type: "tel",
    showValidation: true,
    showSuccess: true,
    successMessage: "Looks good!",
  },
};

export const WithMaxLength: Story = {
  render: Template,
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself",
    type: "text",
    maxLength: 8,
    showValidation: true,
    infoMessage: "Max 8 characters",
  },
};

export const RTL: Story = {
  render: Template,
  args: {
    label: "البريد الإلكتروني",
    placeholder: "أدخل بريدك الإلكتروني",
    value: "",
    dir: "rtl",
    type: "email",
    showValidation: true,
    infoMessage: "يرجى إدخال عنوان بريد إلكتروني صالح",
  },
};
