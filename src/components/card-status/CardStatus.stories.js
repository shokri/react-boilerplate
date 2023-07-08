import Card from "./CardStatus";

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export const Error = {
  args: {
    error: {
      request: {
        status: 500
      }
    }
  }
}

export const Loading = {
  args: {
    isFetching: true
  }
}

export const Elevation = {
  args: {
    elevation: 5
  }
}