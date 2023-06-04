import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

function renderComponent() { 
    const users = [
        {name: 'walter', email: 'walter.white@gmail.com'},
        {name: 'jesse', email: 'jesse.pinkmane@gmail.com'},
    ]
    render(<UserList users ={users} />)
    return { 
        users,
    }
}

test('render correct number of row', ()=> { 
    //render component
    renderComponent()
    //Find all rows in a table
    const rows = within(screen.getByTestId('users')).getAllByRole('row')
    //Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2)
})
test('render email and name of each user', ()=> {
    const {users} = renderComponent()
    for (let user of users) { 
        const name = screen.getByRole('cell', {name:user.name})
        const email = screen.getByRole('cell', {name:user.email})
        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }
})