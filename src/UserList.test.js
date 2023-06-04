import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

test('render correct number of row', ()=> { 
    //render component
    const users = [
        {name: 'walter', email: 'walter.white@gmail.com'},
        {name: 'jesse', email: 'jesse.pinkmane@gmail.com'},
    ]
    render(<UserList users ={users} />)
    //Find all rows in a table
    const rows = within(screen.getByTestId('users')).getAllByRole('row')
    //Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2)
})