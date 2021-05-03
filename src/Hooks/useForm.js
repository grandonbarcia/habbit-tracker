import { useState, useEffect } from 'react';

const useForm = (form) => {


    let [formData, setFormData] = useState({
        meditate: false,
        coffee: false,
        excercise: false,
        stretch: false,
        journal: ''
    })

    useEffect(() => {

        console.log(formData);


    }, [formData])

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'journal' ? value : !formData[name]
        })
    }
    return { handleChange, formData, setFormData };
}

export default useForm;