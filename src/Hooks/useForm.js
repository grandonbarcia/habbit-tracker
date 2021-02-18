import { useState } from 'react';

const useForm = (form) => {


    let [formData, setFormData] = useState({
        meditate: null,
        coffee: null,
        excercise: null,
        stretch: null,
        journal: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    return { handleChange, formData, setFormData };
}

export default useForm;