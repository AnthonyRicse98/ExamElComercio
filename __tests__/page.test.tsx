import { render, screen } from '@testing-library/react'
 
import Page from '@/app/page'

describe('Page', () => {
  it('should render stories related to cusco', () => {
    render(<Page />)

    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('cusco')
  })
})
