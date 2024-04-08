export default function getParameters(url: string) {

    const searchParams = new URLSearchParams(url);
    const utmParams: any = {};

    // Lista de nomes de parâmetros UTM
    const utmNames = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

    // Verifica se cada parâmetro UTM existe na URL e adiciona ao objeto utmParams
    utmNames.forEach((param) => {
        // Verifica se o parâmetro existe na URL
        if (searchParams.has(param)) {
            utmParams[param] = searchParams.get(param);
        } else {
            // Se não existir, atribui um valor vazio ("") ao parâmetro
            utmParams[param] = "";
        }
    });

    return utmParams;


}