import { screen } from '@testing-library/react'
import { render } from 'libs/test-utils'
import Card from './CardStatus'

describe('<Card />', () => {
  test('render', () => {
    const { baseElement } = render(
      <Card
        className=""
        isFetching={null}
        refetch={null}
        elevation={5}
        error={null}
      />
    )
    expect(baseElement).toBeTruthy()
  })

  test('show error message', () => {
    render(<Card error={{ error: 500 }} />)
    expect(screen.findByText('/Server error/i')).toBeInTheDocument()
  })
})
