import React, { useEffect, useState } from "react";
import { Table, Icon, Menu, Button, Header } from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import { toast } from "react-toastify";

export default function AdminEmployerActivateList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByActivatedFalseEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  function activateEmployer(systemPersonnelId, employerId) {
    let employerService = new EmployerService();
    employerService
      .activateEmployer(systemPersonnelId, employerId)
      .then((result) =>
        result.data.success
          ? toast.success(result.data.message)
          : toast.warning(result.data.message)
      );
  }

  return (
    <div>
      <Header as="h1">Aktif Olmayan Firmalar</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Web Site</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Aktif Edelim mi?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) =>
            employer ? (
              <Table.Row key={employer.id}>
                <Table.Cell>{employer.id}</Table.Cell>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.companyWebsite}</Table.Cell>
                <Table.Cell>{employer.email}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                <Table.Cell positive>
                  <Button onClick={() => activateEmployer(15, employer.id)}>
                    Et!
                  </Button>
                </Table.Cell>
              </Table.Row>
            ) : null
          )}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
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
