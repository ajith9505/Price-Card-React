import './App.css'
import { FaCheck, FaTimes } from 'react-icons/fa'

function App() {
  return (
    <div className='container-fluid' id='container'>
      <h1>Price Card</h1>
      <div className='row'>

        <div className='col-12 col-xl-4 col-md-12 col-lg-4'>
          <div className='card mb-4 box-shadow m-5'>
            <div className='card-header'>
              <h3 className="font-weight-normal">Free</h3>
            </div>
            <div className="card-body">
              <h1 className='card-title pricing-card-title'>$0
                <small className='text-muted'>/month</small>
              </h1>
              <ol className='list-unstyled mt-3 mb-4'>
                <li><FaCheck className='check' /> Single User</li>
                <li><FaCheck className='check' /> 50GB Storage</li>
                <li><FaCheck className='check' /> Unlimited Public Projects</li>
                <li><FaCheck className='check' /> Community Access</li>
                <li className='nonsub'><FaTimes className='uncheck' /> Unlimited Private Projects</li>
                <li className='nonsub'><FaTimes className='uncheck' /> Dedicated Phone Support</li>
                <li className='nonsub'><FaTimes className='uncheck' /> Free Subdomain</li>
                <li className='nonsub'><FaTimes className='uncheck' /> Monthly Status Reports</li>
              </ol>
              <button className='btn btn-lg btn-primary' type='button'>Subcribe</button>
            </div>
          </div>
        </div>

        <div className='col-12 col-xl-4 col-md-12 col-lg-4'>
        <div className='card mb-4 box-shadow m-5'>
            <div className='card-header'>
              <h3 className="font-weight-normal">Plus</h3>
            </div>
            <div className="card-body">
              <h1 className='card-title pricing-card-title'>$9
                <small className='text-muted'>/month</small>
              </h1>
              <ol className='list-unstyled mt-3 mb-4'>
                <li><FaCheck className='check' /> 5 Users</li>
                <li><FaCheck className='check' /> 50GB Storage</li>
                <li><FaCheck className='check' /> Unlimited Public Projects</li>
                <li><FaCheck className='check' /> Community Access</li>
                <li><FaCheck className='check' /> Unlimited Private Projects</li>
                <li><FaCheck className='check' /> Dedicated Phone Support</li>
                <li><FaCheck className='check' /> Free Subdomain</li>
                <li className='nonsub'><FaTimes className='uncheck' /> Monthly Status Reports</li>
              </ol>
              <button className='btn btn-lg btn-primary' type='button'>Subcribe</button>
            </div>
          </div>
        </div>

        <div className='col-12 col-xl-4 col-md-12 col-lg-4'>
        <div className='card mb-4 box-shadow m-5'>
            <div className='card-header'>
              <h3 className="font-weight-normal">Pro</h3>
            </div>
            <div className="card-body">
              <h1 className='card-title pricing-card-title'>$49
                <small className='text-muted'>/month</small>
              </h1>
              <ol className='list-unstyled mt-3 mb-4'>
                <li><FaCheck className='check' /> Unlimited Users</li>
                <li><FaCheck className='check' /> 50GB Storage</li>
                <li><FaCheck className='check' /> Unlimited Public Projects</li>
                <li><FaCheck className='check' /> Community Access</li>
                <li><FaCheck className='check' /> Unlimited Private Projects</li>
                <li><FaCheck className='check' /> Dedicated Phone Support</li>
                <li><FaCheck className='check' /> Free Subdomain</li>
                <li><FaCheck className='check' /> Monthly Status Reports</li>
              </ol>
              <button className='btn btn-lg btn-primary' type='button'>Subcribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
