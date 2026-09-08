import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AdminContext from "../../../contexts/AdminContext.jsx";
import ProductForm from "./ProductForm.jsx";
import useControlledForm from "../../../hooks/useControlledForm.js";
import useFetch from "../../../hooks/useFetch.js";

export default function AddProduct() {
    const { admin } = useContext(AdminContext);
    const {fetcher} = useFetch();
    const navigate = useNavigate();

    const data = {
        title: '',
        descriptipn: '',
        price: 0,
        category: '',
        image: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async (e) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value !== null & value !== undefined) {
                formData.append(key, value);
            }
        })

        await fetcher('/products', 'POST', formData, { accessToken: admin?.accessToken });
        navigate('/admin/products');
    }

    const {values, changeHandler, submitHandler} = useControlledForm(initialValues, onSubmit);

    return (
       <ProductForm passedValues={values} changeHandler={changeHandler} submitHandler={submitHandler}/> 
       
    )
}