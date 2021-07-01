import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllJobAdvertisement()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Poziyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2" colSpan="1">Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="1" colSpan="2">Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell rowSpan="1" colSpan="3">Detay</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">İlanın Bitiş Tarihi</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell rowSpan="1">Model</Table.HeaderCell>
            <Table.HeaderCell rowSpan="1">Zamanı</Table.HeaderCell>
            <Table.HeaderCell rowSpan="1">Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell rowSpan="1">Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="1">Açıklama</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.wayOfWorking.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workingTime.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.salaryMin + " - " + jobAdvertisement.salaryMax}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openPositionTotal}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="9">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
