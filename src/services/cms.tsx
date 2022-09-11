import { createClient } from '@crystallize/js-api-client';

// Create Crystallize GraphQL client
const apiClient = createClient({
    tenantIdentifier: 'stoop-n-scoop'
});

// Fetch catalogue paths from API
const productsQuery = `
    query getCataloguePaths{
        catalogue(language: "en", path: "/all-products") {
            children {
                ... on Product {
                    id
                    name
                    type
                    path
                    defaultVariant {
                        id
                        name
                        sku
                        price
                        images {
                            url
                            altText
                            key
                            variants {
                                key
                                width
                                url
                            }
                        }
                    }
                    components {
                        id
                        name
                        type
                        content {
                            ... on RichTextContent {
                                json
                                html
                                plainText
                            }
                        }
                    }
                }
            }
        }
    }
`

const getProducts = async () => {
    const { catalogue } = await apiClient.catalogueApi(productsQuery);
    console.log('cms', JSON.stringify(catalogue));
    return catalogue;
}

export {
    getProducts
}