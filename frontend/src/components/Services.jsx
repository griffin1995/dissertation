// Import necessary dependencies
import "../styles/Services.scss";
import { FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa"; // Using react-icons for icons
import { motion } from "framer-motion"; // For animations
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap for layout and styling

// The Services component renders the content for the Services page
export function Services() {
  return (
    <div className="container services-page">
      {/* Main heading for the Services page */}
      <motion.h1 
        className="text-center mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      {/* Introductory paragraph providing information about the services */}
      <motion.p 
        className="text-center mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We offer a range of top-quality services to help elevate your online presence. Explore the details below to find out how we can help you grow your business.
      </motion.p>

      <div className="row">
        {/* Service 1: Credibility */}
        <div className="col-md-4 mb-4">
          <motion.div 
            className="service-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <FaLaptopCode size={50} className="service-icon" />
            <h3>Modern Website Design</h3>
            <p>
              Build trust with visually appealing, secure websites that follow the latest web design trends.
            </p>
            <ul className="list-unstyled">
              <li>Custom, responsive designs</li>
              <li>SEO-optimised structures</li>
              <li>Fast load times</li>
              <li>SSL security integration</li>
            </ul>
          </motion.div>
        </div>

        {/* Service 2: Usability */}
        <div className="col-md-4 mb-4">
          <motion.div 
            className="service-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <FaMobileAlt size={50} className="service-icon" />
            <h3>Optimised for All Devices</h3>
            <p>
              Ensure seamless experiences on any device with our mobile-first and accessible designs.
            </p>
            <ul className="list-unstyled">
              <li>Responsive design for all screen sizes</li>
              <li>Mobile-first development</li>
              <li>ADA-compliant accessibility</li>
              <li>Fast performance on mobile devices</li>
            </ul>
          </motion.div>
        </div>

        {/* Service 3: Performance */}
        <div className="col-md-4 mb-4">
          <motion.div 
            className="service-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <FaChartLine size={50} className="service-icon" />
            <h3>Higher Conversion Rates</h3>
            <p>
              Drive engagement and results with performance-driven design and faster load times.
            </p>
            <ul className="list-unstyled">
              <li>Faster load times</li>
              <li>Optimised calls to action</li>
              <li>Performance tracking</li>
              <li>Continuous updates</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Optional Testimonials Section */}
      <motion.div 
        className="testimonials mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-6">
            <blockquote>
              <p>"The website design was beyond my expectations. It’s fast, secure, and beautiful!"</p>
              <footer>- Sarah M., Business Owner</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote>
              <p>"My site works seamlessly on all devices now, and I’ve seen an increase in user engagement!"</p>
              <footer>- John K., E-commerce Manager</footer>
            </blockquote>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
