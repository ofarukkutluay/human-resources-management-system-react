import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'
import img from "../images/bay-icon.jpg";

export default function SignedIn({signOut}) {
    return (
        
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src={img}/>
                <Dropdown pointing="top left" text="Kullanıcı">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
