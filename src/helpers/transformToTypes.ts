export default (data: {[index: string]: any} | null) => {
    if (!data) {
        return {};
    }
    return Object.keys(data).reduce((obj, key) => {
        if (typeof data[key] === 'object' && Array.isArray(data[key])) {
            obj[key] = 'array';
            return obj;
        }
        obj[key] = typeof data[key];
        return obj;
    }, {} as {[index: string]: string});
}