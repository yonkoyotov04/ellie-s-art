import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AdminContext from "../../../contexts/AdminContext.jsx";
import ProductForm from "./ProductForm.jsx";
import useControlledForm from "../../../hooks/useControlledForm.js";
import useFetch from "../../../hooks/useFetch.js";
import useProductImages from "../../../hooks/useProductImages.js";

export default function AddProduct() {
    const { admin } = useContext(AdminContext);
    const { fetcher } = useFetch();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {items, newFiles, onImagesChange, removeImage} = useProductImages();

    const data = {
        title: '',
        descriptipn: '',
        price: 0,
        category: '',
        image: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async (e) => {
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);

        try {
            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                if (key !== 'image' && value !== undefined && value !== null) {
                    formData.append(key, value);
                } 
            })

            newFiles.forEach(file => formData.append('images', file));

            await fetcher('/products', 'POST', formData, { accessToken: admin?.accessToken });
            navigate('/admin/products');
        } catch (err) {
            throw new Error(err)
        } finally {
            setIsSubmitting(false);
        }
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit);

    return (
        <ProductForm 
        passedValues={values} 
        isSubmitting={isSubmitting} 
        changeHandler={changeHandler} 
        submitHandler={submitHandler}
        items={items}
        onImagesChange={onImagesChange}
        removeImage={removeImage} />

    )
}