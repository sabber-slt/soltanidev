import { screen } from '@testing-library/react';
import { render } from '../testUtils';
import '@testing-library/jest-dom/extend-expect';

import LandScreen from '../../components/base/LandScreen';

const src = {
  title: 'اپلیکیشن',
  content: 'طراحی و ساخت انواع وبسایت ها و اپلیکیشن های موبایل ',
  id: 1,
  slug: 'index',
  img: '',
};
describe('Home', () => {
  it('renders correctly', () => {
    render(<LandScreen src={src} />);

    expect(screen.getByText('اپلیکیشن')).toBeInTheDocument();
  });
});
