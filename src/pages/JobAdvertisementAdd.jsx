import { Formik, Form } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, FormField } from "semantic-ui-react";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobPositionService from "../services/jobPositionService";
import CityService from "../services/cityService";
import ForeignLanguageService from "../services/foreignLanguageService";
import SchoolService from "../services/schoolService";

export default function JobAdvertisementAdd() {
  const [jobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [foreignLanguages, setForeignLanguages] = useState([]);
  const [schools, setSchool] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();
    let foreignLanguageService = new ForeignLanguageService();
    let schoolService = new SchoolService();
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    foreignLanguageService
      .getForeignLanguages()
      .then((result) => setForeignLanguages(result.data.data));
    schoolService.getSchools().then((result) => setSchool(result.data.data));
  }, []);

  const initialValues = {
    activated: false,
    city: {
      id: 0,
    },
    deadline: "",
    employer: {
      id: 0,
    },
    jobDescription: "",
    jobPosition: {
      id: 0,
    },
    openPositionTotal: 0,
    salaryMax: 0,
    salaryMin: 0,
    wayOfWorking: {
      id: 0,
    },
    workingTime: {
      id: 0,
    },
  };

  const schema = Yup.object({
    jobDescription: Yup.string().required("Açıklama zorunlu!"),
    openPositionTotal: Yup.number().required("Açık pozisyon sayısı zorunlu!"),
    deadline: Yup.date().required("İlanın bitiş tarihi zorunludur!"),
  });

  function addJobAdvertisement(value) {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .addJobAdvertisement(value)
      .then((result) => console.log(result));
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          //addJobAdvertisement(values);
        }}
      >
        <Form className="ui form">
          <HrmsTextInput name="jobDescription" placeholder="İş Tanımı" />
          <HrmsTextInput name="openPositionTotal" placeholder="Açık Pozisyon Sayısı" />
          <HrmsTextInput name="deadline" placeholder="Bitiş Tarihi"/>
          <FormField as="select" name="city">
              {cities.map((city) => {
                return (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                );
              })}
          </FormField>
          <FormField as="select" name="jobPosition">
              {jobPositions.map((jobPosition) => {
                return (
                  <option key={jobPosition.id} value={jobPosition.id}>
                    {jobPosition.name}
                  </option>
                );
              })}
          </FormField>
          <FormField as="select" name="foreignLanguage">
              {foreignLanguages.map((foreignLanguage) => {
                return (
                  <option key={foreignLanguage.id} value={foreignLanguage.id}>
                    {foreignLanguage.name}
                  </option>
                );
              })}
          </FormField>
          <FormField as="select" name="school">
              {schools.map((school) => {
                return (
                  <option key={school.id} value={school.id}>
                    {school.name}
                  </option>
                );
              })}
          </FormField>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
