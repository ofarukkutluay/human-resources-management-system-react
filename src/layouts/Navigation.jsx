import React, { useState } from "react";
import { Menu, Icon, Input, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeItem, setActiveItem] = useState("home");
  const history = useHistory();

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu color="violet" inverted size="small" fixed>
        <Container>
          <Menu.Item name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}>
            <Icon
              name="home"
            />
          </Menu.Item>
          <Menu.Item
            name="jobAdvertisement"
            active={activeItem === "jobAdvertisement"}
            onClick={handleItemClick}
          >
            İş İlanları
          </Menu.Item>
          <Menu.Item position="right">
            <Input className="icon" icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
