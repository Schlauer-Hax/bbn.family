import { Grid, modernCard } from "@lucsoft/webgen";

export const renderCards = () => {
    let nextdate = new Date();
    nextdate.setHours(0, 0, 0, 0);
    nextdate.setDate(27);
    if (nextdate.getTime() < Date.now()) {
        nextdate.setMonth(nextdate.getMonth() + 1);
    }
    return Grid({}, modernCard({
        title: (Math.round((nextdate.getTime() - Date.now()) / (1000 * 3600 * 24))) + ' Days',
        description: nextdate.toLocaleDateString(),
        subtitle: 'Days until Renew'
    }))
}