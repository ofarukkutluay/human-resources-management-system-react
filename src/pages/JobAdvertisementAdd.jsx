import { Formik, Form } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";
import HrmsSelectInput from "../utilities/customFormControls/HrmsSelectInput";
import HrmsTextArea from "../utilities/customFormControls/HrmsTextArea";
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobPositionService from "../services/jobPositionService";
import CityService from "../services/cityService";
import ForeignLanguageService from "../services/foreignLanguageService";
import WayOfWorkingService from "../services/wayOfWorkingService";
import WorkingTimeService from "../services/workingTimeService";
import { toast } from "react-toastify";

export default function JobAdvertisementAdd() {
  const [jobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [foreignLanguages, setForeignLanguages] = useState([]);
  const [wayOfWorkings, setWayOfWorkings] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();
    let foreignLanguageService = new ForeignLanguageService();
    let wayOfWorkingService = new WayOfWorkingService();
    let workingTimeService = new WorkingTimeService();

    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    foreignLanguageService
      .getForeignLanguages()
      .then((result) => setForeignLanguages(result.data.data));
    wayOfWorkingService
      .getWayOfWorkings()
      .then((result) => setWayOfWorkings(result.data.data));
    workingTimeService
      .getWorkingTimes()
      .then((result) => setWorkingTimes(result.data.data));
  }, []);

  const initialValues = {
    activated: false,
    city: {
      id: 0,
    },
    deadline: "",
    employer: {
      id: 11,
    },
    jobDescription: "",
    jobPosition: {
      id: 0,
    },
    openPositionTotal: "",
    salaryMax: "",
    salaryMin: "",
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
    //deadline: Yup.date().required("İlanın bitiş tarihi zorunludur!"),
  });

  function addJobAdvertisement(value) {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .addJobAdvertisement(value)
      .then((result) => {
        console.log(result);
        toast.success(result.data.message)
      });
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          //addJobAdvertisement(values);
          const values2 = {
            activated: false,
            city: {
              id: values.city.id,
            },
            deadline: values.deadline,
            employer: {
              id: values.employer.id,
            },
            jobDescription: values.jobDescription,
            jobPosition: {
              id: values.jobPosition.id,
            },
            openPositionTotal: values.openPositionTotal,
            salaryMax: values.salaryMax,
            salaryMin: values.salaryMin,
            wayOfWorking: {
              id: values.wayOfWorking.id,
            },
            workingTime: {
              id: values.workingTime.id,
            },
          };
          console.log(values2);
          addJobAdvertisement(values2)
        }}
      >
        <Form className="ui form">
          <HrmsTextInput
            name="openPositionTotal"
            placeholder="Açık Pozisyon Sayısı"
          />
          <HrmsTextInput name="salaryMin" placeholder="Minimum Ücret" />
          <HrmsTextInput name="salaryMax" placeholder="Maksimum Ücret" />
          <HrmsTextInput name="deadline" placeholder="Bitiş Tarihi" />
          <HrmsSelectInput
            name="city.id"
            label="Şehir seçiniz"
            state={cities}
          />
          <HrmsSelectInput
            name="jobPosition.id"
            label="Pozisyon seçiniz "
            state={jobPositions}
          />
          <HrmsSelectInput
            name="foreignLanguage.id"
            label="Dil seçiniz"
            state={foreignLanguages}
          />
          <HrmsSelectInput
            name="wayOfWorking.id"
            label="Çalışma Şekli seçiniz"
            state={wayOfWorkings}
          />
          <HrmsSelectInput
            name="workingTime.id"
            label="Çalışma Zamanı seçiniz"
            state={workingTimes}
          />
          <HrmsTextArea
            name="jobDescription"
            placeholder="İş Tanımı"
            style={{ minHeight: 150 }}
          />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
