import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MultiStepForm from "./MultiStepForm";
import ResponsiveDrawer from "./ResponsiveDrawer";


export default function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <MultiStepForm />
     
    </div>
  );
}
