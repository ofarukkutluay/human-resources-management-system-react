import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Icon, Menu, Table, Button, Header } from "semantic-ui-react";
import { toast } from "react-toastify";

export default function AdminJobAdvertisementActivateList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByActivatedFalseJobAdvertisement()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  function activateJobadvertisement(systemPersonnelId, jobAdvertisementId) {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .activateJobAdvertisement(systemPersonnelId, jobAdvertisementId)
      .then((result) =>
        result.data.success
          ? toast.success(result.data.message)
          : toast.warning(result.data.message)
      );
  }

  return (
    <div>
      <Header as="h1">Aktif Olmayan İş ilanları</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2" colSpan="1">
              Şirket İsmi
            </Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Poziyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>

            <Table.HeaderCell rowSpan="1" colSpan="2">
              Çalışma Şekli
            </Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">İlanın Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Aktif mi?</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Aktif Edelim mi?</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell rowSpan="1">Model</Table.HeaderCell>
            <Table.HeaderCell rowSpan="1">Zamanı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) =>
            jobAdvertisement ? (
              <Table.Row key={jobAdvertisement.id}>
                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                <Table.Cell>{jobAdvertisement.jobPosition.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.wayOfWorking.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.workingTime.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                <Table.Cell>
                  {jobAdvertisement.activated ? "Aktif" : "Değil"}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() =>
                      activateJobadvertisement(15, jobAdvertisement.id)
                    }
                  >
                    Et!
                  </Button>
                </Table.Cell>
              </Table.Row>
            ) : null
          )}
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
