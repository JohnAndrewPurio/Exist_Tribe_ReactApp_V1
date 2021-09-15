export default function objectToFormData(obj) {
    const formData = new FormData()

    for(const key in obj) {
        formData.append(key, obj[key])
    }

    return formData
}