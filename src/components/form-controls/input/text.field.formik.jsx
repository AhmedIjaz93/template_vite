import React from "react";
import "./text.field.formik";
export const TextFieldFormik = (props) => {
    const {
        name,
        id,
        values,
        handleBlur,
        handleChange,
        errors,
        touched,
        disabled,
        placeholder,
        type = "text",
        label,
        labelClassName,
        warpperClassName,
        className = "form-control",
        errorClassName = "formik_error",
        autoComplete = "on",
    } = props;
    return (
        <div className={warpperClassName}>
            {label && (
                <label htmlFor={name} className={labelClassName}>
                    {label}
                </label>
            )}
            <input
                type={type}
                className={className}
                id={id}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete={autoComplete}
            />

            {errors[name] && touched[name] && (
                <p className={errorClassName}>
                    {errors[name] && touched[name] && errors[name]}
                </p>
            )}
        </div>
    );
};
