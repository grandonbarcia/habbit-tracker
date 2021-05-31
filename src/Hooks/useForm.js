import { useState, useEffect } from 'react';

const useForm = (form) => {


    let [formData, setFormData] = useState({
        meditate: false,
        coffee: false,
        excercise: false,
        stretch: false,
        journal: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData({
            ...formData,
            [name]: name === 'journal' ? value : !formData[name]
        })
    }
    return { handleChange, formData, setFormData };
}

export default useForm;