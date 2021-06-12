import React from "react";
import { Button, Menu, Dropdown } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
        <Button positive style={{ marginRight: "0.5em" }}>
          Kayıt Ol
        </Button>
        <Dropdown pointing="top right" text="Giriş Yap" >
          <Dropdown.Menu>
            <Dropdown.Item active="false">
              <Button.Group>
                <Button onClick={signIn} >İş Arayan</Button>
                <Button.Or />
                <Button onClick={signIn} primary>İş Veren</Button>
              </Button.Group>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
