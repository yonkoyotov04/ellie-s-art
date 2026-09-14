import { useNavigate, useParams } from "react-router";
import useFetch from "../../../hooks/useFetch.js";
import { useContext, useState } from "react";
import AdminContext from "../../../contexts/AdminContext.jsx";
import ProductForm from "./ProductForm.jsx";
import useControlledForm from "../../../hooks/useControlledForm.js";

export default function EditProduct() {
    const { productId } = useParams();
    const { fetcher } = useFetch();
    const { admin } = useContext(AdminContext);
    const navigate = useNavigate();

    const data = {
        title: '',
        descriptipn: '',
        price: 0,
        category: '',
        category_id: '',
        image: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    useFetch(`/products/${productId}`, setInitialValues);

    const onSubmit = async (e) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value !== null & value !== undefined) {
                console.log('Entered')
                formData.append(key, value);
            }
        })

        await fetcher(`/products/${productId}`, 'PUT', formData, { accessToken: admin?.accessToken });
        navigate('/admin/products');
    }

    const {values, changeHandler, submitHandler} = useControlledForm(initialValues, onSubmit);

    return(
        <ProductForm passedValues={values} changeHandler={changeHandler} submitHandler={submitHandler}/>
    )
}