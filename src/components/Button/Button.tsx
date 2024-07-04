import React from "react";
import "./Button.css";
interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "destructive"
    | "link-color"
    | "link-gray";
  isIcon?: boolean;
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  size?: "medium" | "large" | "extra-large" | "2-extra-large";
  disabled?: boolean;
}

const Button = ({
  variant = "primary",
  isIcon = false,
  children,
  leadingIcon,
  trailingIcon,
  size = "medium",
  disabled,
}: ButtonProps) => {
  return isIcon ? (
    <button className={`icon-btn btn-${size} btn-${variant} `}>
      {children}
    </button>
  ) : (
    <button className={`btn btn-${size} btn-${variant} ${disabled ? "btn-disabled" : ""}`}>
      {leadingIcon && <span className="leading-icon">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className="trailing-icon">{trailingIcon}</span>}
    </button>
  );
};

export default Button;
