export const TEAM_TRANSLATIONS = {
    'mexico': { es: 'México', alt: ['mexico'] },
    'south africa': { es: 'Sudáfrica', alt: ['sudafrica', 'south africa'] },
    'south korea': { es: 'Corea del Sur', alt: ['corea del sur', 'corea'] },
    'czech republic': { es: 'República Checa', alt: ['republica checa', 'chequia'] },
    'canada': { es: 'Canadá', alt: ['canada'] },
    'switzerland': { es: 'Suiza', alt: ['suiza'] },
    'qatar': { es: 'Catar', alt: ['catar', 'qatar'] },
    'bosnia and herzegovina': { es: 'Bosnia y Herzegovina', alt: ['bosnia y herzegovina', 'bosnia'] },
    'brazil': { es: 'Brasil', alt: ['brasil'] },
    'morocco': { es: 'Marruecos', alt: ['marruecos'] },
    'haiti': { es: 'Haití', alt: ['haiti'] },
    'scotland': { es: 'Escocia', alt: ['escocia'] },
    'usa': { es: 'Estados Unidos', alt: ['estados unidos', 'eeuu', 'ee uu', 'usa'] },
    'paraguay': { es: 'Paraguay', alt: ['paraguay'] },
    'australia': { es: 'Australia', alt: ['australia'] },
    'turkiye': { es: 'Turquía', alt: ['turquia', 'turkiye', 'turkia'] },
    'germany': { es: 'Alemania', alt: ['alemania'] },
    'curacao': { es: 'Curazao', alt: ['curazao', 'curacao'] },
    'ivory coast': { es: 'Costa de Marfil', alt: ['costa de marfil', 'marfil'] },
    'ecuador': { es: 'Ecuador', alt: ['ecuador'] },
    'netherlands': { es: 'Países Bajos', alt: ['paises bajos', 'holanda'] },
    'japan': { es: 'Japón', alt: ['japon'] },
    'tunisia': { es: 'Túnez', alt: ['tunez', 'tunisia'] },
    'sweden': { es: 'Suecia', alt: ['suecia'] },
    'belgium': { es: 'Bélgica', alt: ['belgica'] },
    'egypt': { es: 'Egipto', alt: ['egipto'] },
    'iran': { es: 'Irán', alt: ['iran'] },
    'new zealand': { es: 'Nueva Zelanda', alt: ['nueva zelanda'] },
    'spain': { es: 'España', alt: ['espana'] },
    'cape verde': { es: 'Cabo Verde', alt: ['cabo verde'] },
    'saudi arabia': { es: 'Arabia Saudita', alt: ['arabia saudita', 'arabia saudi'] },
    'uruguay': { es: 'Uruguay', alt: ['uruguay'] },
    'france': { es: 'Francia', alt: ['francia'] },
    'senegal': { es: 'Senegal', alt: ['senegal'] },
    'norway': { es: 'Noruega', alt: ['noruega'] },
    'iraq': { es: 'Irak', alt: ['irak', 'iraq'] },
    'argentina': { es: 'Argentina', alt: ['argentina'] },
    'algeria': { es: 'Argelia', alt: ['argelia'] },
    'austria': { es: 'Austria', alt: ['austria'] },
    'jordan': { es: 'Jordania', alt: ['jordania'] },
    'portugal': { es: 'Portugal', alt: ['portugal'] },
    'colombia': { es: 'Colombia', alt: ['colombia'] },
    'uzbekistan': { es: 'Uzbekistán', alt: ['uzbekistan'] },
    'congo dr': { es: 'RD Congo', alt: ['rd congo', 'congo rd', 'republica democratica del congo', 'congo'] },
    'england': { es: 'Inglaterra', alt: ['inglaterra'] },
    'croatia': { es: 'Croacia', alt: ['croacia'] },
    'ghana': { es: 'Ghana', alt: ['ghana'] },
    'panama': { es: 'Panamá', alt: ['panama'] },
};



function normalize(text) {

    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function findEntry(name) {

    const key = normalize(name);

    return TEAM_TRANSLATIONS[key] || null;
}

export function getSpanishName(name) {

    if (!name) {
        return name;
    }

    const entry = findEntry(name);

    return entry ? entry.es : name;
}

export function matchesSpanishSearch(
    teamName,
    searchText
) {

    const normalizedSearch =
        normalize(searchText);

    if (!normalizedSearch) {
        return false;
    }

    const entry = findEntry(teamName);

    const candidates = [
        normalize(teamName)
    ];

    if (entry) {

        candidates.push(
            normalize(entry.es)
        );

        entry.alt.forEach(
            alt => candidates.push(
                normalize(alt)
            )
        );
    }

    return candidates.some(
        candidate =>
            candidate.includes(
                normalizedSearch
            )
    );
}
