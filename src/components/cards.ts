import { Grid, modernCard } from "@lucsoft/webgen";

export const renderCards = () => {
    return Grid({}, modernCard({
        title: '10 Days',
        description: 'Wednesday, 27.10.21',
        subtitle: 'Days until Renew'
    }))
}