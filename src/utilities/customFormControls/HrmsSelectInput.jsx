import { useField } from "formik";
import React, { useState, useEffect } from "react";
import { FormField, Label } from "semantic-ui-react";

export default function HrmsSelectInput({ ...props }) {
  const [field, meta] = useField(props);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(props.state);
  }, [props.state]);

  // console.log(props)
  // console.log(array)
  return (
    <FormField as="select" {...field} error={meta.touched && !!meta.error}>
      <option label={props.label}></option>
      {array.map((array) => {
        return (
          <option id={array.id} key={array.id} value={array.id}>
            {array.name || array.schoolName}
          </option>
        );
      })}
      {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </FormField>
  );
}
