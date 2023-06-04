import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and a button', () => { 
    // render the component 
    render(<UserForm />)

    // manipulate the component or find element in it 
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')
    // make an assertion
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})

test('it calls onUserAdd when form is submited', () => {
    // render component
    const mock = jest.fn()
    render(<UserForm onUserAdd={mock}/>)
    // find two inputs 
    const [nameInput, emailInput] = screen.getAllByRole('textbox')
    // simulate type a name 
    user.click(nameInput)
    user.keyboard('walter')
    // simulate type an email 
    user.click(emailInput)
    user.keyboard('walter.white@gmail.com')
    // simulate clicking a form 
    const button = screen.getByRole('button')
    user.click(button)
    // assertion that onUserAdd
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name:'walter', email:'walter.white@gmail.com'})
})
