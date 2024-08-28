import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51PskC6SElhcpnBlqayBciQysScoMBt5MoDpZxZLtg1MxQf173e4mWw0ZDLUR0Xi4Ya41dpN5vlnmm37u9y4Bt5TK008cDbvbKk'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
  } catch (error) {
    showAlert('error', error);
  }
};
