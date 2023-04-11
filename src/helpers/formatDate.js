import { format } from 'date-fns';

export const formatCreatedDate = (date) => {
    if (date) {
        return format(new Date(date), 'MMMM dd, YYY');
    }
    return null;
};
