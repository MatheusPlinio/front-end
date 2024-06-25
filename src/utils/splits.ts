const getFirstName = (fullName: string | undefined): string => {
    if (!fullName) return '';
    return fullName.split(' ')[0];
}

function getLastName(fullName: string | undefined): string {
    if (!fullName) return '';
    const names = fullName.split(' ');
    return names[names.length - 1];
}


export { getFirstName, getLastName }