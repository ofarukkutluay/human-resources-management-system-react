import { useField, Field } from 'formik'
import React from 'react'
import {  FormField,Label } from "semantic-ui-react";

export default function HrmsSelectInput({...props}) {

    const [field,meta] = useField(props);
    return (
        <FormField error={meta.touched && !!meta.error} >
            <Field as="select" name={field.name}>
              {props.map((category) => {
                return (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.categoryName}
                  </option>
                );
              })}
            </Field>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}