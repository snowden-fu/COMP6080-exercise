import { shallow } from 'enzyme'
import LoginForm from './LoginForm'

const noop = () => {}

describe('<LoginForm>', () => {
  it('should render a form with email and password fields', () => {
    const wrapper = shallow(<LoginForm onSubmit={noop} />)

    expect(wrapper.find('form')).toHaveLength(1)

    expect(wrapper.find('input[type="email"]')).toHaveLength(1)
    expect(wrapper.find('input[type="password"]')).toHaveLength(1)

    expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
  })

  it('should render the email and password inputs with the required attribute and aria-invalid="false"', () => {
    const wrapper = shallow(<LoginForm onSubmit={noop} />)

    const emailInput = wrapper.find('input[type="email"]')
    expect(emailInput.prop('required')).toBe(true)
    expect(emailInput.prop('aria-invalid')).toBe('false')

    const passwordInput = wrapper.find('input[type="password"]')
    expect(passwordInput.prop('required')).toBe(true)
    expect(passwordInput.prop('aria-invalid')).toBe('false')
  })

  it('render labels with the correct htmlFor attributes`', () => {
    const wrapper = shallow(<LoginForm onSubmit={noop} />)

    const emailInputId = wrapper.find('input[type="email"]').prop('id')
    const passwordInputId = wrapper.find('input[type="password"]').prop('id')

    expect(emailInputId).not.toBe(passwordInputId)

    expect(wrapper.find(`label[htmlFor="${emailInputId}"]`)).toHaveLength(1)
    expect(wrapper.find(`label[htmlFor="${passwordInputId}"]`)).toHaveLength(1)
  })

  it('should set aria-invalid="true" for the matching input if an error is provided', () => {
    const errors = {
      email: 'INVALID EMAIL ERROR MESSAGE',
      password: 'INVALID PASSWORD ERROR MESSAGE',
    }

    const wrapper = shallow(<LoginForm onSubmit={noop} errors={errors} />)

    const emailInput = wrapper.find('input[type="email"]')
    expect(emailInput.prop('aria-invalid')).toBe('true')

    const passwordInput = wrapper.find('input[type="password"]')
    expect(passwordInput.prop('aria-invalid')).toBe('true')
  })

  it('should render errors and set the aria-describedby attribute correctly when errors are provided', () => {
    const errors = {
      email: 'INVALID EMAIL ERROR MESSAGE',
      password: 'INVALID PASSWORD ERROR MESSAGE',
    }

    const wrapper = shallow(<LoginForm onSubmit={noop} errors={errors} />)

    /**
     * In this test we use `toMatch` instead of `toBe` or `toEqual` since we don't
     * care if there is any extra text rendered in the error elements
     */

    const emailInput = wrapper.find('input[type="email"]')
    const emailDescribedById = emailInput.prop('aria-describedby')
    const emailErrorEl = wrapper.find(`#${emailDescribedById}`).first()
    expect(emailErrorEl.exists()).toBe(true)
    expect(emailErrorEl.text()).toMatch(errors.email)

    const passwordInput = wrapper.find('input[type="password"]')
    const passwordDescribedById = passwordInput.prop('aria-describedby')
    const passwordErrorEl = wrapper.find(`#${passwordDescribedById}`).first()
    expect(passwordErrorEl.exists()).toBe(true)
    expect(passwordErrorEl.text()).toMatch(errors.password)
  })

  it('should call onSubmit with the values of the inputs', () => {
    const inputs = {
      email: 'soorria@email.com',
      password: 'super secure password',
    }

    const expectedValues = { ...inputs }

    const mockOnSubmit = jest.fn()

    const wrapper = shallow(<LoginForm onSubmit={mockOnSubmit} />)

    /**
     * In this test, we need to use the second argument to `.simulate`, as it is
     * used as the `event` argument for event handlers we've added in the component
     */

    const emailInput = wrapper.find('input[type="email"]')
    emailInput.simulate('change', { target: { value: inputs.email } })

    const passwordInput = wrapper.find('input[type="password"]')
    passwordInput.simulate('change', { target: { value: inputs.password } })

    wrapper.simulate('submit', { preventDefault: () => {} })

    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    expect(mockOnSubmit).toHaveBeenCalledWith(expectedValues)
  })
})
