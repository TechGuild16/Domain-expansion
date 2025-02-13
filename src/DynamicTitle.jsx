import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Domain Expansion";
        break;

      case "/ourportfolio":
        document.title = "Domain Expansion";
        break;

      case "/About":
        document.title = "Domain Expansion";
        break;
      case "/Solutions":
        document.title = "Domain Expansion";
        break;
      case "/Blogs":
        document.title = "Domain Expansion";
        break;
      case "/ContactUs":
        document.title = "Domain Expansion";
        break;
      default:
        document.title = "Domain Expansion";
    }
  }, [location]);

  return null;
};

export default DynamicTitle;
