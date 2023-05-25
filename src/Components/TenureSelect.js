import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelect = ({ data, setData }) => {

    const handleChange = (event) => {
      setData({...data, loanTerm: event.target.value});
    };
  
    return (
        
    )
  };
  
  export default TenureSelect;