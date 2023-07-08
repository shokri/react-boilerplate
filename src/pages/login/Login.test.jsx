import Login from "./Login"

describe('<Login />', () => {
  it('render', () => {
    const { baseElement } = render(<Login />)
    expect(baseElement).toBeTruthy()
  })
})