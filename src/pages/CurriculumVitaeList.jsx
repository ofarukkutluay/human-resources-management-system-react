import React, { useEffect, useState } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import CurriculumVitaeService from "../services/curriculumVitaeService";

export default function CurriculumVitaeList() {
  const [curriculumVitaes, setcurriculumVitaes] = useState([]);

  useEffect(() => {
    let curriculumVitaesService = new CurriculumVitaeService();
    curriculumVitaesService
      .getCurriculumVitaes()
      .then((result) => setcurriculumVitaes(result.data.data));
  }, []);

  return (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Arayan</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Ön Yazı</Table.HeaderCell>
            <Table.HeaderCell>Okul</Table.HeaderCell>
            <Table.HeaderCell>Yabancı Dil</Table.HeaderCell>
            <Table.HeaderCell>Yazılım Dili</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {curriculumVitaes.map((curriculumVitae) => (
            <Table.Row key={curriculumVitae.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={curriculumVitae.imageUrl} rounded size="mini" />
                  <Header.Content>
                    {curriculumVitae.jobSeeker.firstName +
                      " " +
                      curriculumVitae.jobSeeker.lastName}
                    <Header.Subheader>
                      {curriculumVitae.jobSeekerExperiences[0].jobPosition.name}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {curriculumVitae.jobSeeker.dateOfBirth}
              </Table.Cell>
              <Table.Cell>{curriculumVitae.foreword}</Table.Cell>
              <Table.Cell>
                <Header>
                  <Header.Content as="h4">
                    {curriculumVitae.jobSeekerSchools[0].school.schoolName}
                  </Header.Content>
                  <Header.Subheader>
                    {curriculumVitae.jobSeekerSchools[0].school.departmentOfSchool}
                  </Header.Subheader>
                </Header>
              </Table.Cell>
              <Table.Cell>{curriculumVitae.jobSeekerForeignLanguages[0].foreignLanguage.name}</Table.Cell>
              <Table.Cell>{curriculumVitae.jobSeekerProgrammingLanguages[0].programmingLanguage.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
