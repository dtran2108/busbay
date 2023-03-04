export const toURLEncoded = (item: any) => {
    var form_data = new URLSearchParams();

    for ( var key in item ) {
        form_data.append(key, item[key]);
    }
    return form_data
}