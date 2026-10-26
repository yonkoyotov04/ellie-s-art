import { useNavigate, useParams } from "react-router";
import useFetch from "../../../hooks/useFetch.js";
import { useContext, useState } from "react";
import AdminContext from "../../../contexts/AdminContext.jsx";
import ProductForm from "./ProductForm.jsx";
import useControlledForm from "../../../hooks/useControlledForm.js";
import useProductImages from "../../../hooks/useProductImages.js";

export default function EditProduct() {
    const { productId } = useParams();
    const { fetcher } = useFetch();
    const { admin } = useContext(AdminContext);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const apiUrl = 'http://localhost:2105/uploads/'

    const data = {
        title: '',
        descriptipn: '',
        price: 0,
        category: '',
        category_id: '',
        image: '',
        images: []
    }

    const [initialValues, setInitialValues] = useState(data);

    useFetch(`/products/${productId}`, setInitialValues);
    const { images, onImagesChange, removeImage, setCover } = useProductImages(
        initialValues.images || [],
        apiUrl
    );

    const onSubmit = async (e) => {
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);

        try {
            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                if (value !== null & value !== undefined & key !== 'images') {
                    formData.append(key, value);
                }
            })

            images.forEach(image => {
                if (image.type === 'existing') {
                    formData.append('existingImages', image.imageURL);
                } else if (image.type === 'new') {
                    formData.append('newImages', image.file);
                }
            })

            await fetcher(`/products/${productId}`, 'PUT', formData, { accessToken: admin?.accessToken });
            navigate('/admin/products');
        } catch (err) {
            throw new Error(err);
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
            images={images}
            onImagesChange={onImagesChange}
            removeImage={removeImage}
            setCover={setCover} />
    )
}