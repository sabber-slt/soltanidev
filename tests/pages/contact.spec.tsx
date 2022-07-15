import { fireEvent } from '@testing-library/react';
import { render } from '../testUtils';
import '@testing-library/jest-dom/extend-expect';

import Contact from '../../pages/contact';

describe.only('Contact', () => {
  test('renders correctly', () => {
    const { getByTestId, findByText } = render(<Contact />);
    fireEvent.input(getByTestId('phone'), { target: { value: '' } });
    getByTestId('submit');
    fireEvent.click(getByTestId('submit'));

    findByText('This field is required');
  });
});
