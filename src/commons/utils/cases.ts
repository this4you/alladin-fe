export function toLowerSnakeCase(str = '') {
    return str.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
}

export function toSnakeCase (str = '') {
    const strArr = str.split(' ');
    return strArr.join('_');
}