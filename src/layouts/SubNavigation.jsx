import React from "react";
import { Link } from "react-router-dom";
import { Menu, Input, Icon, Dropdown } from "semantic-ui-react";

export default function SubNavigation() {
  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>

        <Menu.Item>
          <Link to="/">Ana Sayfa</Link>
          <Menu.Menu>
            <Menu.Item name="job-seeker"><Link to="/jobseekers">İş Arayanlar</Link></Menu.Item>
            <Menu.Item name="job-position"><Link to="/jobpositions">İş Pozisyonları</Link></Menu.Item>
            <Menu.Item name="curriculum-vitaes"><Link to="/curriculumvitaes">CV'ler</Link></Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item name="addJobAdvertisement">
          <Icon name="add" />
          Yeni İlan Ekle
        </Menu.Item>
        <Menu.Item name="messages">Mesajlar</Menu.Item>

        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/jobpositions"><Icon name="edit"/>İş Pozisyonları</Link></Dropdown.Item>
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
}
