import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterURL = 'https://www.course-api.com/cocktails-newsletter';
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const res = await axios.post(newsletterURL, data);
    const { status, msg } = res.data;
    if (status === 'success') {
      toast.success(msg);
      return redirect('/');
    }
    toast.error(msg);
    return redirect('/');
  }
  catch (error) {
    toast.error(error?.response?.data?.msg || 'Something went wrong');
    return error;
  }

}
const Newsletter = () => {
  const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className="form" method="POST">
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Subscribe to our Newsletter</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" name="name" className="form-input" required/>
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input id="lastName" name="lastName" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" name="email" className="form-input" required/>
      </div>
      <button type="submit" className="btn btn-block" style={{ marginTop: '0.5rem' }} disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>

    </Form>
  );
};
export default Newsletter;
