import React from "react";
import { Menu, Icon, Input, Button } from "semantic-ui-react";

export default function Navigation() {
  return (
    <div>
      <Menu inverted size="large" fixed>
        <Menu.Item>
          <Icon name="home" />
        </Menu.Item>
        <Menu.Item name="features">Features</Menu.Item>
        <Menu.Item name="testimonials">Testimonials</Menu.Item>
        <Menu.Item position="right">
          <Button primary>Sign up</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Log-in</Button>
        </Menu.Item>
        <Menu.Item>
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu>
    </div>
  );
}
