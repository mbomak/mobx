export default function transformToTypes(data: any): any {
    if (Array.isArray(data)) {
        return data.map((el: any) => {
            if (typeof el === 'object') {
                return transformToTypes(el);
            }
            return typeof el;
        });
    } else if (typeof data === 'object') {
        return Object.keys(data).reduce((obj, key) => {
            const value: any = data[key];
            const type: string = typeof value;
            if (type === 'object') {
                obj[key] = transformToTypes(value);
                return obj;
            }
            obj[key] = type;
            return obj;
        }, {} as {[index: string]: any});
    }

    return typeof data;
}