import client from '@sanity/client';

export default client({
    projectId: 'n3cel693',
    dataset: 'production',
    useCdn : true,
    apiVersion : '2022-08-26'
})