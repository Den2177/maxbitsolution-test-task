const buildFormData = (formData: FormData, obj: any, parentKey = '') => {
    if (Array.isArray(obj)) {
        obj.forEach((element, index) => {
            buildFormData(formData, element, `${parentKey}[${index}]`);
        });
    } else if (typeof obj === 'object' && !(obj instanceof File)) {
        Object.keys(obj).forEach(key => {
            buildFormData(
                formData,
                obj[key],
                parentKey ? `${parentKey}[${key}]` : key,
            );
        });
    } else {
        if (obj == null) {
            return;
        }

        const value =
            typeof obj === 'number' || typeof obj === 'boolean'
                ? obj.toString()
                : obj;
        formData.append(parentKey, value);
    }
};

export const convertObjToFormData = (obj: object) => {
    const formData = new FormData();

    buildFormData(formData, obj);

    return formData;
};