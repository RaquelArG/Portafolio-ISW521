const apiURL = ``;

export const obtenerUsuarios = async () => {
try {
    const respuesta = await fetch(apiURL);
    if(!respuesta.ok) throw Error("Error de red");
        return await respuesta.json();
} catch (error) {
    console.error("Error al obtener los usuarios");
    return [];
}

}