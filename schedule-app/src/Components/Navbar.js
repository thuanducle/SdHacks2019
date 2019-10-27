import React, {useState} from "react"
import { Segment, Menu } from 'semantic-ui-react'

function Navbar(){
	const [activePage, setActivePage] = useState('home')

	let handleItemClick = (e, {name}) => {
		setActivePage(name)
	}
	return (
		<Segment>
        <Menu pointing secondary>
          <Menu.Item
            name = 'home'
            active={activePage === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name = 'missed tasks'
            active={activePage === 'missed tasks'}
            onClick={handleItemClick}
            href="#main"
          />
          <Menu.Item
            name = 'schedule'
            active={activePage === 'schedule'}
            onClick={handleItemClick}
          />
        </Menu>
      </Segment>
		)
}

export default Navbar;